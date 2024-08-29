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
    <div className="body">




    <div className="loader">
        <div className="droid">
            <div className="radios">
                <div className="radio short"></div>
                <div className="radio long"></div>
            </div>
            <div className="head">
                <div className="band one"></div>
                <div className="band two"></div>
                <div className="eyes">
                    <div className="eye one"></div>
                    <div className="eye two"></div>
                </div>
                <div className="band three"></div>
            </div>
                <div className="body">
                <div className="lines one"></div>
                <div className="lines two"></div>
                <div className="circle one"></div>
                <div className="circle two"></div>
                <div className="circle three"></div>
            </div>
        </div>
        <div className="text"><span>LOADING</span></div>
    </div>







      <div className="content welcome">
          <div className="container">
              <div className="col-sm-9 mb-5">
                  <h1 className="fs-1 text-dark">Star Wars PWA</h1>
                  <span className="text-dark">| Find your favorites characters</span>
              </div> 
              <div className="col-sm-3"></div>              
          </div>
      </div>
      <img src="../src/assets/svg/wave.svg" alt="" />
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
            <CharacterCard key={character.url} character={character} />
          ))
          ) : (
            <div v-if="characters.length == 0" className="d-flex flex-column justify-content-center mt-5 mb-5 ">
              <div className="d-flex justify-content-center"> 
                <img className="gif" src="../src/assets/img/notfound.gif" alt="wrong-name" />
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

      <footer className='footer d-flex justify-content-center align-items-center'>
        <div className="death-star">
          <div className="wrapper">
            <div className="lng"></div>
            <div className="lng"></div>
            <div className="lng"></div>
            <div className="lng"></div>
            <div className="trench"></div>
            <div className="weapon"></div>
          </div>
        </div>

        <div className="content">
          <div className="col" id="contact">
            <p className="pt-2 text-dark">
              <h6 className='text-white'>Be sure to follow me on social media</h6><br />
              <strong className='text-white'> and visit my website to see more projects</strong><br />
              <section className="mt-3">
                <a className="btn btn-outline-dark btn-floating m-1" href="https://www.linkedin.com/in/valentino-ghitti-b6042120a/" role="button"
                  ><i className="bi bi-linkedin text-white"></i></a>
                <a className="btn btn-outline-dark btn-floating m-1" href="https://github.com/ValentinoGhitti" role="button"
                  ><i className="bi bi-github text-white"></i>
                </a>
              </section>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CharacterList;
