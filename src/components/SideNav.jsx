import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, FileText, PieChart, Bell, Settings,Check,Search,Grid} from 'lucide-react';
import './SideNav.css';
import logo from '../assets/liquidmind-logo.svg';

const SideNav = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.sidenav') && !event.target.closest('.hamburger-menu')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const menuItems = [
    { 
      title: 'Home', 
      icon: <Home size={24} />,
      path: '/' 
    },
   
    { 
      title: 'Dashboard', 
      icon: <Grid size={24} />, 
      path: '/dashboard' 
    },
    { 
      title: 'Export Details', 
      icon: <FileText size={24} />, 
      path: '/export-verification' 
    },
    { 
      title: 'Verify Document', 
      icon: <Search size={24} />, 
      path: '/document-verification' 
    },
    { 
      title: 'Compliance Check', 
      icon: <Check size={24} />, 
      path: '/compliance-check' 
    }
  ];

  return (
    <>
      <button 
        className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <div></div>
        <div></div>
        <div></div>
      </button>

      <div className={`overlay ${isMenuOpen ? 'active' : ''}`} />

      <div className={`sidenav ${isMenuOpen ? 'active' : ''}`}>
        <div className="sidenav-container">
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="TradeVeda Logo" className="logo" />
          </Link>
          
          <div className="sidenav-header">
            <h2 className="brand">Tradeवेद</h2>
            <p className="brand-subtitle">by Liquidmind</p>
          </div>
          
          <hr className="nav-divider" style={{borderTop: '1px solid black'}} />
          
          <nav className="nav-menu">
            {menuItems.map((item, index) => (
              <Link 
                key={index} 
                to={item.path}
                className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-title">{item.title}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default SideNav;