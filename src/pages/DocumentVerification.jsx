import { useState } from 'react';
import './DocumentVerification.css';

const DocumentVerification = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [verificationResult, setVerificationResult] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setVerificationResult(null); // Reset results when new file is selected
  };

  const handleVerification = async () => {
    if (!selectedFile) {
      alert('Please select a file first');
      return;
    }

    // Simulating verification process
    // Replace this with actual API call to your backend
    try {
      // Mock verification result
      const mockResult = {
        status: 'success',
        remarks: 'Document verified successfully',
        details: [
          { field: 'Document Type', value: 'Valid' },
          { field: 'Signature', value: 'Verified' },
          { field: 'Issue Date', value: 'Valid' }
        ]
      };
      
      setVerificationResult(mockResult);
    } catch (error) {
      console.error('Verification failed:', error);
      setVerificationResult({
        status: 'error',
        remarks: 'Verification failed. Please try again.'
      });
    }
  };

  return (
    <div className="document-verification">
      <h1>Document Verification</h1>
      
      <div className="upload-section">
        <div className="file-input-container">
          <input
            type="file"
            id="document-upload"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            className="file-input"
          />
          <label htmlFor="document-upload" className="file-label">
            {selectedFile ? selectedFile.name : 'Choose File'}
          </label>
        </div>
        
        <button 
          className="verify-button"
          onClick={handleVerification}
          disabled={!selectedFile}
        >
          Upload and Verify
        </button>
      </div>

      {selectedFile && (
        <div className="selected-file-info">
          <h3>Selected Document</h3>
          <p>File name: {selectedFile.name}</p>
          <p>Size: {(selectedFile.size / 1024).toFixed(2)} KB</p>
        </div>
      )}

      {verificationResult && (
        <div className={`verification-results ${verificationResult.status}`}>
          <h3>Verification Results</h3>
          <p className="remarks">{verificationResult.remarks}</p>
          
          {verificationResult.details && (
            <div className="verification-details">
              {verificationResult.details.map((detail, index) => (
                <div key={index} className="detail-item">
                  <span className="detail-field">{detail.field}:</span>
                  <span className="detail-value">{detail.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DocumentVerification; 