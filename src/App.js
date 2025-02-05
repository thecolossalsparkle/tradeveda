import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExportVerification from './pages/ExportVerification';
import ComplianceCheck from './pages/ComplianceCheck';
import DocumentVerification from './pages/DocumentVerification';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/export-verification" element={<ExportVerification />} />
          <Route path="/compliance-check" element={<ComplianceCheck />} />
          <Route path="/document-verification" element={<DocumentVerification />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
