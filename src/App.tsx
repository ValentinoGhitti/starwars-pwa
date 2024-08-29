import React, { useEffect, useState } from 'react';
import CharacterCard from './Components/SWCharacterCard';
import { getCharacterData } from './api/characters/getCharacters';
import { CharacterData } from '../src/types/types';

const CharacterList: React.FC = () => {
  const [characters, setCharacters] = useState<CharacterData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllCharacters = async () => {
      setLoading(true);
      setError(null);

      try {
        const charactersArray: CharacterData[] = [];
        for (let i = 1; i <= 10; i++) {
          const characterData = await getCharacterData(i);
          charactersArray.push(characterData);
        }
        setCharacters(charactersArray);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchAllCharacters();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="character-list">
      {characters.map((character) => (
        <CharacterCard key={character.url} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;
