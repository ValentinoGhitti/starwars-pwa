import React from 'react';
import {
  SWFooter,
  SWHeroSection,
  SWCharacterList
} from './components';

const CharacterList: React.FC = () => {

  return (
    <div className="body">
        <>
          <SWHeroSection />
          <SWCharacterList />
          <SWFooter />
        </>
    </div>
  );
};

export default CharacterList;
