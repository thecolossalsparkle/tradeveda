import './Dashboard.css';
import { FaDollarSign, FaBox, FaChartLine, FaClipboardList, FaArrowUp, FaArrowDown } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Dashboard Overview</h1>
      
      <div className="kpi-container">
        <div className="kpi">
          <FaDollarSign className="kpi-icon" />
          <h2>Total Exports</h2>
          <p>$2.4M</p>
          <span className="kpi-change positive">
            <FaArrowUp /> 12.5% vs last month
          </span>
        </div>
        
        <div className="kpi">
          <FaBox className="kpi-icon" />
          <h2>Active Shipments</h2>
          <p>24</p>
          <span className="kpi-change positive">
            <FaArrowUp /> 3 vs last month
          </span>
        </div>
        
        <div className="kpi">
          <FaChartLine className="kpi-icon" />
          <h2>Market Growth</h2>
          <p>18.2%</p>
          <span className="kpi-change positive">
            <FaArrowUp /> 2.4% vs last month
          </span>
        </div>
        
        <div className="kpi">
          <FaClipboardList className="kpi-icon" />
          <h2>Pending Certifications</h2>
          <p>7</p>
          <span className="kpi-change negative">
            <FaArrowDown /> 2 vs last month
          </span>
        </div>
      </div>

      <div className="recent-activity">
        <h3>Recent Activity</h3>
        {/* Add your recent activity content here */}
      </div>

      <div className="export-markets">
        <h3>Export Markets</h3>
        {/* Add your export markets content here */}
      </div>
    </div>
  );
}

export default Dashboard; 