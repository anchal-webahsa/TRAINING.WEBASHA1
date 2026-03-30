import React from "react";

const DynamicSyllabus = ({ syllabusModules, courseTitle }) => {
  if (!syllabusModules || syllabusModules.length === 0) return null;

  return (
    <section className="course-top-curriculum lazy-section" id="syllabus">
      <div className="contentcard">
        <h2 className="heading-main text-center mb-2">
          Curriculum <span className="red-color">{courseTitle}</span>
        </h2>
        <div className="content-container" id="contentContainer3">
          <div className="accordion-curriculum mb-5">
            <div className="top-curriculum-header">
              <p className="desc">
                {courseTitle} Curriculum
              </p>
              <a
                href="#"
                className="btn btn-white"
                data-bs-toggle="modal"
                data-bs-target="#syllabusModalLabel"
                aria-label="Download Syllabus"
              >
                <i className="fa fa-download me-2"></i> Download Syllabus
              </a>
            </div>
            <div
              className="accordion accordion-flush"
              id="curriculumAccordionFlush"
            >
              {syllabusModules.map((module, index) => (
                <div className="accordion-item" key={module.id || index}>
                  <h2
                    className="accordion-header"
                    id={`heading-curriculum-${index}`}
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#flush-curriculum-${index}`}
                      aria-expanded="false"
                      aria-controls={`flush-curriculum-${index}`}
                    >
                      <div className="curriculum-number">
                        {module.module_title}
                      </div>
                    </button>
                  </h2>
                  <div
                    id={`flush-curriculum-${index}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`heading-curriculum-${index}`}
                    data-bs-parent="#curriculumAccordionFlush"
                  >
                    <div 
                      className="accordion-body description mb-0 description-html"
                      dangerouslySetInnerHTML={{ __html: module.description }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
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
      </div>
    </section>
  );
};

export default DynamicSyllabus;
