import React from 'react';

const ExamCertificationValue = ({ cleanTitle, certificationValueHtml }) => {
  if (!certificationValueHtml) return null;
  
  return (
    <div className="mt-5 pt-3 border-top">
      <h2 className="fw-bold mb-4 text-center" style={{ color: '#0f172a' }}>
        What is <span className="text-danger">{cleanTitle}</span> Certification?
      </h2>
      <div 
        className="description text-dark fs-6" 
        style={{ lineHeight: '1.8' }} 
        dangerouslySetInnerHTML={{ __html: certificationValueHtml }} 
      />
    </div>
  );
};

export default ExamCertificationValue;
