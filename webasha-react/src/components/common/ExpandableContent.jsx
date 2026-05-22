import React from 'react';

const ExpandableContent = ({ title, children }) => {
  return (
    <section className="contentcard lazy-section bg-white border rounded-4 p-4 p-md-5 shadow-sm mb-5">
      {title && <h2 className="heading-main text-center mb-4">{title}</h2>}
      {children}
    </section>
  );
};

export default ExpandableContent;
