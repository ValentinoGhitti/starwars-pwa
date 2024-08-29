import { useEffect, useState } from 'react';
import { getCharacterData } from '../api/characters/getCharacters';
import { CharacterData, FetchResponse } from '../types/types';
import usePagination from './usePagination';

const useFetchCharacters = (initialPage: number = 1) => {
  const { currentPage, nextPage, previousPage, goToNextPage, goToPreviousPage, setNextPage, setPreviousPage } = usePagination(initialPage);

  const [characters, setCharacters] = useState<CharacterData[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const data: FetchResponse = await getCharacterData(currentPage);
        setCharacters(data.results);
        setNextPage(data.next);
        setPreviousPage(data.previous);
      } catch (err) {
        console.error('error gettin pjs::', err);
      }
    };

    fetchCharacters();
  }, [currentPage, setNextPage, setPreviousPage]);

  return { 
    characters, 
    goToNextPage, 
    goToPreviousPage, 
    nextPage, 
    previousPage
  };
};

export default useFetchCharacters;
