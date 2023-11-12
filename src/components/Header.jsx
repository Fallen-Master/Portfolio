import { Link, useLocation } from 'react-router-dom';
import './header.css'

function Header() {
  const currentPage = useLocation().pathname;

  return (
    <nav className="navbar" id='nav-color' role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <h1>Rafael Gomez</h1>
        </Link>
      </div>

      <div className="navbar-menu ">
        <div className="navbar-start">
          <Link to="/AboutMe" className={currentPage === '/AboutME' ? 'navbar-item is-active is-selected ' : 'navbar-item textColor'}  >
            About Me
          </Link>

          <Link to="/Portfolio" className={currentPage === '/Portfolio' ? 'navbar-item is-active' : 'navbar-item textColor'}>
            Portfolio
          </Link>

          <Link to="/Contact" className={currentPage === '/Contact' ? 'navbar-item is-active' : 'navbar-item textColor'}>
            Contact
          </Link>

          <Link to="/Resume" className={currentPage === '/Resume' ? 'navbar-item is-active' : 'navbar-item textColor'}>
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );

}

export default Header;