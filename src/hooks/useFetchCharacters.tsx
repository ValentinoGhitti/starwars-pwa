import { useEffect, useState } from 'react';
import { getCharacterData } from '../api/characters/getCharacters';
import { CharacterData, FetchResponse } from '../types/types';
import usePagination from './usePagination';
import useSearchCharacters from './useSearchCharacters';

const useFetchCharacters = (initialPage: number = 1, searchTerm: string = '') => {
  const { currentPage, goToNextPage, goToPreviousPage, setCurrentPage } = usePagination(initialPage);
  const [allCharacters, setAllCharacters] = useState<CharacterData[]>([]);
  const filteredCharacters = useSearchCharacters(allCharacters, searchTerm);

  useEffect(() => {
    const fetchAllCharacters = async () => {
      let charactersList: CharacterData[] = [];
      let page = 1;
      let hasMorePages = true;

      while (hasMorePages) {
        try {
          const data: FetchResponse = await getCharacterData(page);
          charactersList = [...charactersList, ...data.results];
          hasMorePages = data.next !== null;
          page += 1;
        } catch (err) {
          console.error('error gettin pjs:', err);
          break;
        }
      }
      setAllCharacters(charactersList);
    };

    fetchAllCharacters();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      setCurrentPage(1);
    }
  }, [searchTerm]);

  const startIndex = (currentPage - 1) * 10;
  const endIndex = startIndex + 10;
  const characters = filteredCharacters.slice(startIndex, endIndex);

  return { 
    characters, 
    goToNextPage, 
    goToPreviousPage, 
    hasNextPage: endIndex < filteredCharacters.length,
    hasPreviousPage: currentPage > 1
  };
};

export default useFetchCharacters;
