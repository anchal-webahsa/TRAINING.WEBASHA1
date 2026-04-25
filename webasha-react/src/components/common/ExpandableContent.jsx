import React from 'react';

const ExpandableContent = ({ title, children }) => {
  return (
    <section className="contentcard lazy-section">
      <div className="content-container bg-white border rounded-4 p-4 p-md-5 shadow-sm mb-4">
        {title && <h2 className="heading-main text-center mb-4">{title}</h2>}
        {children}
        {/* Removed gradient overlay and toggle button as per user request to always show full content */}
      </div>
    </section>
  );
};

export default ExpandableContent;
