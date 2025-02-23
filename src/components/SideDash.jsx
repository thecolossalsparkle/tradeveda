import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, FileText, PieChart, Bell, Settings, DollarSign, Package, TrendingUp, FileCheck, Grid } from 'lucide-react';
import './SideDash.css';
import logo from '../assets/liquidmind-logo.svg';
import Dashboard from '../pages/Dashboard';

// Add KPI Component
const KPICard = ({ title, value, icon, change, timeframe }) => {
  const isPositive = !change.includes('-');
  return (
    <div className="kpi-card">
      <div className="kpi-content">
        <div className="kpi-header">
          <h3>{title}</h3>
          <span className="kpi-icon">{icon}</span>
        </div>
        <div className="kpi-value">{value}</div>
        <div className={`kpi-change ${isPositive ? 'positive' : 'negative'}`}>
          {change} {timeframe}
        </div>
      </div>
    </div>
  );
};

// Add new components for Recent Activity and Export Markets
const SectionCard = ({ title, children }) => {
  return (
    <div className="section-card">
      <h2 className="section-title">{title}</h2>
      <div className="section-content">
        {children}
      </div>
    </div>
  );
};

const SideDash = () => {
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
      title: 'Shipments', 
      icon: <Package size={24} />, 
      path: '/shipments' 
    },
    { 
      title: 'Analytics', 
      icon: <FileText size={24} />, 
      path: '/analytics' 
    },
    { 
      title: 'Notifications', 
      icon: <Bell size={24} />, 
      path: '/notifications' 
    },
    { 
      title: 'Settings', 
      icon: <Settings size={24} />, 
      path: '/settings' 
    }
  ];

  const kpiData = [
    {
      title: 'Total Exports',
      value: '$2.4M',
      icon: <DollarSign size={20} />,
      change: '+12.5%',
      timeframe: 'vs last month'
    },
    {
      title: 'Active Shipments',
      value: '24',
      icon: <Package size={20} />,
      change: '+3',
      timeframe: 'vs last month'
    },
    {
      title: 'Market Growth',
      value: '18.2%',
      icon: <TrendingUp size={20} />,
      change: '+2.4%',
      timeframe: 'vs last month'
    },
    {
      title: 'Pending Certifications',
      value: '7',
      icon: <FileCheck size={20} />,
      change: '-2',
      timeframe: 'vs last month'
    }
  ];

  return (
    <div className="dashboard-container">
      <div className={`sidenav ${isMenuOpen ? 'active' : ''}`}>
        <div className="sidenav-container">
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="TradeVeda Logo" className="logo" />
          </Link>
          
          <div className="sidenav-header">
            <h2 className="brand">Tradeवेदा</h2>
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

      <div className="dashboard-content">
        <h1 className="dashboard-title">Dashboard</h1>
        <p className="dashboard-subtitle">Welcome back! Here's your export overview.</p>
        
        <div className="kpi-grid">
          {kpiData.map((kpi, index) => (
            <KPICard key={index} {...kpi} />
          ))}
        </div>

        {/* Add the new sections in a grid layout */}
        <div className="sections-grid">
          <SectionCard title="Recent Activity">
            {/* Placeholder content for Recent Activity */}
            <div className="placeholder-content">
              <p>No recent activities to display</p>
            </div>
          </SectionCard>

          <SectionCard title="Export Markets">
            {/* Placeholder content for Export Markets */}
            <div className="placeholder-content">
              <p>No export market data available</p>
            </div>
          </SectionCard>
        </div>
      </div>
    </div>
  );
};

export default SideDash;