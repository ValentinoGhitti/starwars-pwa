import React from 'react';
import CharacterCard from './Components/SWCharacterCard';
import useFetchCharacters from './hooks/useFetchCharacters';

const CharacterList: React.FC = () => {
  const { characters, goToNextPage, goToPreviousPage } = useFetchCharacters();

  return (
    <div>
      {characters.map((character) => (
        <CharacterCard key={character.url} character={character} />
      ))}
      <div>
        <button onClick={goToPreviousPage} disabled={!goToPreviousPage}>
          Previous
        </button>
        <button onClick={goToNextPage} disabled={!goToNextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CharacterList;
