import React from 'react';

const ExamCostSection = ({ cleanTitle, location, careerOpportunitiesHtml }) => {
  if (!careerOpportunitiesHtml) return null;
  
  return (
    <div className="text-center mb-5">
       <h2 className="fw-bold mb-4" style={{ color: '#0f172a' }}>
        <span className="text-danger">{cleanTitle} Certification</span> Cost in {location || "Dubai, UAE"}
      </h2>
      <div 
        className="description text-dark fs-6 text-start" 
        style={{ lineHeight: '1.8' }} 
        dangerouslySetInnerHTML={{ __html: careerOpportunitiesHtml }} 
      />
    </div>
  );
};

export default ExamCostSection;
