import React from 'react';
import { Link } from 'react-router-dom';
import { usePageContext } from '../../contexts/PageContext';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
const NavBar = () => {
  
  const { currentPage, setCurrentPage } = usePageContext();

  return (
    <ul className="nav">
      {/* <li className="nav-item">
        <Link
          to="/"
          onClick={() => setCurrentPage('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </Link>
      </li> */}
      <li className="nav-item">
        <Link
          to="/"
          onClick={() => setCurrentPage('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/portfolio"
          onClick={() => setCurrentPage('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          onClick={() => setCurrentPage('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/resume"
          onClick={() => setCurrentPage('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default NavBar;
