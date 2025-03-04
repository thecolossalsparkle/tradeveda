import { useState } from 'react';
import './ComplianceCheck.css';
import { FiUploadCloud, FiSend, FiMessageSquare } from 'react-icons/fi';

const ComplianceCheck = () => {
  const [file, setFile] = useState(null);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
    
    // Add system message when file is uploaded
    setMessages(prev => [...prev, {
      type: 'system',
      content: `Document "${uploadedFile.name}" uploaded successfully. How can I help you with this document?`
    }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    // Add user message
    setMessages(prev => [...prev, {
      type: 'user',
      content: userInput
    }]);

    setIsLoading(true);
    
    // TODO: Replace with actual API call
    // Simulate API response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'bot',
        content: "Based on the document analysis, the document is compliant with the tax regulations. Is there anything else you would like to know?"
      }]);
      setIsLoading(false);
    }, 1000);

    setUserInput('');
  };

  return (
    <div className="page-container">
      <div className="compliance-header">
        <h1>Lading Lens</h1>
        <p className="subtitle">Get instant compliance analysis and suggestions for your document</p>
      </div>

      <div className="chat-container">
        <div className="chat-sidebar">
          <div className="sidebar-header">
            <FiMessageSquare className="sidebar-icon" />
            <h2>Document Analysis</h2>
          </div>
          
          <div className="upload-section">
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFileUpload}
              id="invoice-upload"
              style={{ display: 'none' }}
            />
            <label htmlFor="invoice-upload" className="upload-label">
              <FiUploadCloud className="upload-icon" />
              <span className="upload-text">
                {file ? file.name : 'Upload Document'}
              </span>
              <span className="file-types">PDF, JPG, PNG</span>
            </label>
          </div>

          <div className="features-list">
            <h3>What I can help with:</h3>
            <ul>
              <li>✓ Compliance Check</li>
              <li>✓ Missing Information</li>
              <li>✓ Format Validation</li>
              <li>✓ Tax Requirements</li>
            </ul>
          </div>
        </div>

        <div className="chat-main">
          <div className="chat-header">
            <div className="chat-title">
              <h2>{file ? 'Analyzing: ' + file.name : 'Upload a document to start'}</h2>
              <p>Ask any questions about your document</p>
            </div>
          </div>

          <div className="chat-messages">
            {messages.length === 0 && (
              <div className="empty-state">
                <div className="empty-state-content">
                  <FiUploadCloud className="empty-icon" />
                  <h3>No Document Uploaded</h3>
                  <p>Upload a document to start the analysis</p>
                </div>
              </div>
            )}
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.type}`}>
                <div className="message-content">
                  {message.type === 'bot' && (
                    <div className="bot-avatar">AI</div>
                  )}
                  <div className="message-bubble">
                    {message.content}
                    <div className="message-timestamp">
                      {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="message bot">
                <div className="message-content">
                  <div className="bot-avatar">AI</div>
                  <div className="message-bubble">
                    <div className="loading-dots">
                      <span>.</span><span>.</span><span>.</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="chat-input-form">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder={file ? "Ask about your uploaded document..." : "Upload a document to start chatting"}
              disabled={!file}
            />
            <button type="submit" disabled={!file || !userInput.trim()}>
              <FiSend />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ComplianceCheck;