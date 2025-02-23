import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/common.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExportDetails from './pages/ExportDetails';
import ComplianceCheck from './pages/ComplianceCheck';
import DocumentVerification from './pages/DocumentVerification';
import SideNav from './components/SideNav';
import SideDash from './components/SideDash';



function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <SideNav/>
        <Routes>
          <Route path="/" element={<Home />} />
        
          <Route path="/dashboard" element={<SideDash/>}/>
          <Route path="/export-verification" element={<ExportDetails />} />
          <Route path="/compliance-check" element={<ComplianceCheck />} />
          <Route path="/document-verification" element={<DocumentVerification />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
