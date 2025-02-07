import './Home.css';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  const services = [
    {
      title: 'Export Details',
      description: 'Comprehensive verification of export documents and compliance with international trade regulations.',
      icon: '📄',
      link: '/export-verification',
      color: '#E3F2FD' // Light blue background
    },
    {
      title: 'Compliance Check',
      description: 'Ensure your trade practices meet global standards and regulatory requirements.',
      icon: '✓',
      link: '/compliance-check',
      color: '#E8F5E9' // Light green background
    },
    {
      title: 'Document Verification',
      description: 'Thorough verification of all trade-related documents for accuracy and authenticity.',
      icon: '🔍',
      link: '/document-verification',
      color: '#FFF3E0' // Light orange background
    }
  ];

  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to TradeVeda</h1>
        <p>Your Trusted Partner in International Trade Compliance</p>
      </section>
      
      <section className="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              {...service}
              animate={true} // Add animation prop if ServiceCard supports it
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home; 