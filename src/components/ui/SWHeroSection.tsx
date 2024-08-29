import React from 'react';

const SWHeroSection: React.FC = () => {
  return (
    <>
      <section className="content welcome">
        <div className="container">
          <div className="col-sm-9 mb-5">
            <h1 className="fs-1 text-dark">Star Wars PWA</h1>
            <span className="text-dark">| Find your favorites characters</span>
          </div> 
          <div className="col-sm-3"></div>              
        </div>
      </section>
      <img src="../src/assets/svg/wave.svg" alt="wave" />
    </>
  );
};

export default SWHeroSection;
