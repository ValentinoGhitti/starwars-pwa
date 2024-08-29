import React from 'react';
import CharacterCard from './Components/SWCharacterCard';
import useFetchCharacters from './hooks/useFetchCharacters';

const CharacterList: React.FC = () => {
  const { characters, goToNextPage, goToPreviousPage, nextPage, previousPage } = useFetchCharacters();

  return (
    <div>
      {characters.length > 0 && characters.map(character => (
        <CharacterCard key={character.url} character={character} />
      ))}
      <div>
        <button onClick={goToPreviousPage} disabled={!previousPage}>
          Previous
        </button>
        <button onClick={goToNextPage} disabled={!nextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CharacterList;
