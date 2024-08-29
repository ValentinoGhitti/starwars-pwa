import React, { useState } from 'react';
import useFetchCharacters from '../hooks/useFetchCharacters';
import { SWCharacterCard, SWLoader } from './index';

const SWCharacterList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [genderFilter, setGenderFilter] = useState('all');
  const { 
    characters, 
    loading, 
    goToNextPage, 
    goToPreviousPage, 
    currentPage,
  } = useFetchCharacters(1, searchTerm, genderFilter);

  return (
    <>
      {loading ? (
        <SWLoader />
      ) : (
        <div className="container pt-5 bg-light">
          <div className="d-flex justify-content-center mt-5 mb-5">
            <h2>List of Star Wars Characters</h2>
          </div>
          <nav className="navbar bg-light">
            <div className="container-fluid search d-flex justify-content-around">
              <form id="characters" role="search">
                <div className="p-3">
                  <h5 className="text-center">Find character</h5>
                  <input
                    className="form-control me-2"
                    aria-label="Search"
                    type="text"
                    placeholder="Search characters..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className='d-flex justify-content-center'>
                  <div className="btn-group" role="group" aria-label="Basic example">
                    <button 
                      type="button" 
                      className="btn btn-dark" 
                      onClick={() => setGenderFilter('all')}
                    >
                      All
                    </button>
                    <button 
                      type="button" 
                      className="btn btn-dark" 
                      onClick={() => setGenderFilter('male')}
                    >
                      Male
                    </button>
                    <button 
                      type="button" 
                      className="btn btn-dark" 
                      onClick={() => setGenderFilter('female')}
                    >
                      Female
                    </button>
                    <button 
                      type="button" 
                      className="btn btn-dark" 
                      onClick={() => setGenderFilter('n/a')}
                    >
                      N/A
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </nav>
          <div className='d-flex flex-wrap justify-content-center'>
            {characters.length > 0 ? (
              characters.map(character => (
                <SWCharacterCard key={character.url} character={character} />
              ))
            ) : (
              <div className="d-flex flex-column justify-content-center mt-5 mb-5">
                <div className="d-flex justify-content-center"> 
                  <img className="gif" src="../src/assets/img/notfound.gif" alt="Character not found" />
                </div>
                <div className="d-flex justify-content-center"> 
                  <h5>Character not found :/</h5>
                </div>
              </div>
            )}
          </div>
          <div className='d-flex justify-content-center'>
            <nav aria-label="Page navigation">
              <ul className="pagination">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <button 
                    className="page-link bg-dark text-white" 
                    onClick={goToPreviousPage}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                </li>
                <li className="page-item active bg-dark text-white border border-warning-subtle" aria-current="page">
                  <span className="page-link bg-dark text-white">{currentPage}</span>
                </li>
                <li className={`page-item ${characters.length < 10 ? 'disabled' : ''}`}>
                  <button 
                    className="page-link bg-dark text-white" 
                    onClick={goToNextPage}
                    disabled={characters.length < 10}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default SWCharacterList;
