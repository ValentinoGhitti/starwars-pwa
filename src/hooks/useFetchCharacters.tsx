import { useEffect, useState } from 'react';
import { getCharacterData } from '../api/characters/getCharacters';
import { CharacterData, FetchResponse } from '../types/types';
import usePagination from './usePagination';
import useFilterByGender from './useFilterByGender';

const useFetchCharacters = (initialPage: number = 1, searchTerm: string = '', genderFilter: string = 'all') => {
  const { currentPage, goToNextPage, goToPreviousPage } = usePagination(initialPage);
  const [allCharacters, setAllCharacters] = useState<CharacterData[]>([]);
  const [characters, setCharacters] = useState<CharacterData[]>([]);

  const filterCharacters = (charactersList: CharacterData[], search: string) => {
    if (!search.trim()) return charactersList;
    return charactersList.filter(character =>
      character.name.toLowerCase().includes(search.toLowerCase())
    );
  };

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

  const filteredByGender = useFilterByGender(allCharacters, genderFilter);

  useEffect(() => {
    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 10;
    const filtered = filterCharacters(filteredByGender, searchTerm);
    setCharacters(filtered.slice(startIndex, endIndex));
  }, [currentPage, filteredByGender, searchTerm]);

  return { 
    characters, 
    goToNextPage, 
    goToPreviousPage 
  };
};

export default useFetchCharacters;
