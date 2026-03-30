import React from "react";

const DynamicSection = ({ id, content, title, isCard = false, customClass = "" }) => {
  if (!content) return null;

  if (isCard) {
    return (
      <section className={`contentcard lazy-section ${customClass}`} id={id}>
        <div className="content-container">
          {title && (
            <h2 className="heading-main text-center mb-3">
              <span dangerouslySetInnerHTML={{ __html: title }} />
            </h2>
          )}
          <div 
            className="description-html description text-center"
            dangerouslySetInnerHTML={{ __html: content }} 
          />
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
  }

  // Plain layout
  return (
    <section className={`course-exam-information lazy-section ${customClass}`} id={id}>
      {title && (
        <h2 className="heading-main text-center mb-4">
          <span dangerouslySetInnerHTML={{ __html: title }} />
        </h2>
      )}
      <div 
        className="description-html description text-center"
        dangerouslySetInnerHTML={{ __html: content }} 
      />
    </section>
  );
};

export default DynamicSection;
