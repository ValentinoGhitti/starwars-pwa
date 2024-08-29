import React, { useState } from 'react';
import CharacterCard from './Components/SWCharacterCard';
import useFetchCharacters from './hooks/useFetchCharacters';

const CharacterList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { characters, goToNextPage, goToPreviousPage, hasNextPage, hasPreviousPage } = useFetchCharacters(1, searchTerm);

  return (
    <div>
      <input
        type="text"
        placeholder="Search characters..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {characters.length > 0 ? (
        characters.map(character => (
          <CharacterCard key={character.url} character={character} />
        ))
      ) : (
        <p>acá va un loader</p>
      )}
      <div>
        <button onClick={goToPreviousPage} disabled={!hasPreviousPage}>
          Previous
        </button>
        <button onClick={goToNextPage} disabled={!hasNextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CharacterList;
