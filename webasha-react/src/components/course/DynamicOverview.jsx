import React from "react";

const DynamicOverview = ({ content, defaultHeading }) => {
  return (
    <section className="contentcard lazy-section">
      <div className="content-container">
        {content ? (
          <div 
            className="description-html"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        ) : (
          <div className="summary-details">
            <h2 className="heading-main text-center">
              {defaultHeading} <span className="red-color">Overview</span>
            </h2>
            <p className="description mb-0">
              Training content is pending update. Please check back later.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default DynamicOverview;
