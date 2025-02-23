import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const navItems = [
    {
      title: 'Home',
      path: '/',
      icon: '🏠'
    },
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
    },
    {
      title: 'Compliance Check',
      path: '/compliance-check',
      icon: '✓'
    }
  ];

  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src="/logo.png" alt="Tradeवेद" className="logo" />
      </div>
      <nav>
        <ul className="nav-items">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `nav-item ${isActive ? 'active' : ''}`
              }
            >
              <span className="icon">{item.icon}</span>
              <span>{item.title}</span>
            </NavLink>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar; 