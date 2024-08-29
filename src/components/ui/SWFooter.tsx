import React from 'react';

const SWFooter: React.FC = () => {
  return (
    <>
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
            <h6 className='text-white'>Be sure to follow me on social media</h6>
            <strong className='text-white'> and visit my website to see more projects</strong>
            <section className="mt-3">
              <a className="btn btn-outline-dark btn-floating m-1" href="https://www.linkedin.com/in/valentino-ghitti-b6042120a/" role="button">
                <i className="bi bi-linkedin text-white"></i>
              </a>
              <a className="btn btn-outline-dark btn-floating m-1" href="https://github.com/ValentinoGhitti" role="button">
                <i className="bi bi-github text-white"></i>
              </a>
            </section>
          </div>
        </div>
      </footer>
    </>
  );
};

export default SWFooter;
