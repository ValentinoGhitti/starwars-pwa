import React from 'react';
import useFetchCharacters from './hooks/useFetchCharacters';
import {
  SWLoader,
  SWFooter,
  SWHeroSection,
  SWCharacterList
} from './components';

const CharacterList: React.FC = () => {
  const { loading } = useFetchCharacters();

  return (
    <div className="body">
      {loading ? <SWLoader />  : (
        <>
          <SWHeroSection />
          <SWCharacterList />
          <SWFooter />
        </>
      )}
    </div>
  );
};

export default CharacterList;
