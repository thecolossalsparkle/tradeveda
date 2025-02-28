import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './SideNav.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon: '📊'
    },
    {
      title: 'Export Details',
      path: '/export-details',
      icon: '📄'
    },
    {
      title: 'Verify Document',
      path: '/verify-document',
      icon: '🔍'
    }
  ];

  return (
    <>
      <button 
        className={`hamburger-menu ${isOpen ? 'active' : ''}`}
        onClick={toggleSidebar}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>

      <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={toggleSidebar}></div>

      <div className={`sidenav ${isOpen ? 'active' : ''}`}>
        <div className="sidenav-container">
          <div className="sidenav-header">
            <NavLink to="/" className="navbar-logo">
              <img src="/logo.png" alt="Tradeवेद" className="logo" />
              <span className="productlogo">Tradeवेद</span>
            </NavLink>
          </div>

          <hr className="nav-divider" />

          <nav className="nav-menu">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  `nav-item ${isActive ? 'active' : ''}`
                }
                onClick={() => setIsOpen(false)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-title">{item.title}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar; 