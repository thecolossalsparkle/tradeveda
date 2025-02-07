import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';
import logo from '../assets/tradeveda-logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="TradeVeda Logo" className="logo" />
          <span class="productlogo">TradeVeda</span>
        </Link>
        
        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
        </div>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={toggleMenu}>HOME</Link>
          <Link to="/export-verification" className="nav-link" onClick={toggleMenu}>EXPORT DETAILS</Link>
          <Link to="/compliance-check" className="nav-link" onClick={toggleMenu}>COMPLIANCE CHECK</Link>
          <Link to="/document-verification" className="nav-link" onClick={toggleMenu}>DOCUMENT VERIFICATION</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 