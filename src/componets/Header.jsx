import { Link, useLocation } from 'react-router-dom';

function Header() {
  const currentPage = useLocation().pathname;

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <h1>Rafael Gomez</h1>
        </Link>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className={currentPage === '/' ? 'navbar-item is-active' : 'navbar-item'} >
            About Me
          </Link>

          <Link to="/Portfolio" className={currentPage === '/Portfolio' ? 'navbar-item is-active' : 'navbar-item'}>
            Portfolio
          </Link>

          <Link to="/Contact" className={currentPage === '/Contact' ? 'navbar-item is-active' : 'navbar-item'}>
            Contact
          </Link>

          <Link to="/Resume" className={currentPage === '/Resume' ? 'navbar-item is-active' : 'navbar-item'}>
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );

}

export default Header;