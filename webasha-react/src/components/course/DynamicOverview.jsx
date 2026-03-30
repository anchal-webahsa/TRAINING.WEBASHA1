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
        <div className="gradient-overlay" />
      </div>
      <button
        className="toggle-button"
        onClick={(e) => {
          const container = e.target.previousElementSibling;
          container.classList.toggle("expanded");
          e.target.innerText = container.classList.contains("expanded") ? "View Less" : "View More";
        }}
      >
        View More
      </button>
    </section>
  );
};

export default DynamicOverview;
