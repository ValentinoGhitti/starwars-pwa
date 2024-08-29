import { useState, useEffect } from 'react';
import { getCharacterData } from '../api/characters/getCharacters';
import { CharacterData } from '../types/types';

const useFetchCharacters = (initialPage: number = 1) => {
  const [characters, setCharacters] = useState<CharacterData[]>([]);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [previousPage, setPreviousPage] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(initialPage);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const { results, next, previous } = await getCharacterData(currentPage);
        setCharacters(results);
        setNextPage(next);
        setPreviousPage(previous);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCharacters();
  }, [currentPage]);

  const goToNextPage = () => {
    if (nextPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (previousPage) {
      setCurrentPage(currentPage - 1);
    }
  };

  return { characters, goToNextPage, goToPreviousPage };
};

export default useFetchCharacters;
