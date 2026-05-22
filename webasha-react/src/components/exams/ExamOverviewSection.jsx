import React from 'react';

const ExamOverviewSection = ({ cleanTitle, location, overviewHtml }) => {
  return (
    <div className="mb-4">
      <h2 className="fw-bold mb-4 text-center" style={{ color: '#0f172a' }}>
        <span className="text-danger">{cleanTitle}</span> Certification in {location || "Dubai, UAE"}
      </h2>
      <div 
        className="description text-dark fs-6" 
        style={{ lineHeight: '1.8' }} 
        dangerouslySetInnerHTML={{ __html: overviewHtml }} 
      />
    </div>
  );
};

export default ExamOverviewSection;
