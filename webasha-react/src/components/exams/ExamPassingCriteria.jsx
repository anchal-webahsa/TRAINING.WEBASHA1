import React from 'react';

const ExamPassingCriteria = ({ cleanTitle, objectivesHtml, whatsappLink }) => {
  if (!objectivesHtml) return null;
  
  return (
    <div className="text-center mb-5">
      <h2 className="fw-bold mb-4" style={{ color: '#0f172a' }}>
        Passing Criteria for <span className="text-danger">{cleanTitle} Exam</span>
      </h2>
      <div 
        className="description text-dark fs-6 text-start" 
        style={{ lineHeight: '1.8' }} 
        dangerouslySetInnerHTML={{ __html: objectivesHtml }} 
      />
      
      {/* Action Buttons for Passing Criteria */}
      <div className="d-flex flex-wrap gap-3 justify-content-center mt-4">
        <a 
          href={whatsappLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-success d-flex align-items-center justify-content-center px-4 py-2 fw-bold"
          style={{ 
            backgroundColor: '#198754', 
            border: 'none', 
            borderRadius: '4px',
            fontSize: '15px',
            minWidth: '180px'
          }}
        >
          <i className="fab fa-whatsapp me-2 fs-5"></i> WhatsApp
        </a>
        <a 
          href="tel:+19292439565" 
          className="btn btn-outline-danger d-flex align-items-center justify-content-center px-4 py-2 fw-bold bg-white"
          style={{ 
            border: '1px solid #dc3545', 
            color: '#dc3545', 
            borderRadius: '4px',
            fontSize: '15px',
            minWidth: '220px'
          }}
        >
          <i className="fa-solid fa-phone-volume me-2"></i> +1 (929) 243-9565
        </a>
      </div>
    </div>
  );
};

export default ExamPassingCriteria;
