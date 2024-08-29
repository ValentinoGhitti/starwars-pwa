import { useState, useEffect } from 'react';
import { getCharacterData } from '../api/characters/getCharacters';
import { CharacterData } from '../types/types';

const useFetchCharacter = (character: string | number) => {
  const [data, setData] = useState<CharacterData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      setLoading(true);
      setError(null);

      try {
        const characterData = await getCharacterData(character);
        setData(characterData);
      } catch (err) {
        console.log(`error getting the pj's: ${err}`)
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [character]);
  return { data, loading, error };
};

export default useFetchCharacter;
