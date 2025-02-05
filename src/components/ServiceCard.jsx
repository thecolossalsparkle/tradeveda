import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ title, description, icon, link, color }) => {
  return (
    <Link to={link} className="service-card" style={{ backgroundColor: color }}>
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="service-arrow">→</div>
    </Link>
  );
};

export default ServiceCard; 