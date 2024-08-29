import { useState, useEffect } from 'react';
import { CharacterData } from '../types/types';

const useFilterByGender = (characters: CharacterData[], genderFilter: string) => {
  const [filteredCharacters, setFilteredCharacters] = useState<CharacterData[]>([]);

  useEffect(() => {
    if (genderFilter === 'all') {
      setFilteredCharacters(characters);
    } else {
      setFilteredCharacters(characters.filter(character => character.gender === genderFilter));
    }
  }, [characters, genderFilter]);

  return filteredCharacters;
};

export default useFilterByGender;
