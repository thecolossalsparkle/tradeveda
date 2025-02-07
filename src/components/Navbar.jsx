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
          <span>TradeVeda</span>
        </Link>
        
        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
        </div>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
          <Link to="/export-verification" className="nav-link" onClick={toggleMenu}>Export Details</Link>
          <Link to="/compliance-check" className="nav-link" onClick={toggleMenu}>Compliance Check</Link>
          <Link to="/document-verification" className="nav-link" onClick={toggleMenu}>Document Verification</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 