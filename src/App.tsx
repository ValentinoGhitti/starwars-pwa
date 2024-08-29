import React, { useState } from 'react';
import CharacterCard from './Components/SWCharacterCard';
import useFetchCharacters from './hooks/useFetchCharacters';

const CharacterList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [genderFilter, setGenderFilter] = useState('all');
  const { 
    characters, 
    goToNextPage, 
    goToPreviousPage, 
    currentPage 
  } = useFetchCharacters(1, searchTerm, genderFilter);

  return (
    <div>
      <input
        type="text"
        placeholder="Search characters..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        <button onClick={() => setGenderFilter('all')}>All</button>
        <button onClick={() => setGenderFilter('male')}>Male</button>
        <button onClick={() => setGenderFilter('female')}>Female</button>
        <button onClick={() => setGenderFilter('n/a')}>Unknown</button>
      </div>
      {characters.length > 0 ? (
        characters.map(character => (
          <CharacterCard key={character.url} character={character} />
        ))
      ) : (
        <p>acá va un loader</p>
      )}
      <div>
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={goToNextPage} disabled={characters.length < 10}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CharacterList;
