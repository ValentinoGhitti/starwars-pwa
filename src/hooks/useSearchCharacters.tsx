import { useState, useEffect } from 'react';
import { CharacterData } from '../types/types';

const useSearchCharacters = (characters: CharacterData[], searchTerm: string) => {
  const [filteredCharacters, setFilteredCharacters] = useState<CharacterData[]>([]);
  
  useEffect(() => {
    if (searchTerm) {
      const lowercasedTerm = searchTerm.toLowerCase();
      setFilteredCharacters(
        characters.filter(character =>
          character.name.toLowerCase().includes(lowercasedTerm)
        )
      );
    } else {
      setFilteredCharacters(characters);
    }
  }, [characters, searchTerm]);

  return filteredCharacters;
};

export default useSearchCharacters;
