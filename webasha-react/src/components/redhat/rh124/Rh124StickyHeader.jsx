import React from "react";

const Rh124StickyHeader = () => {
  return (
    <section className="sticky-main-header1" id="stickyheader">
      <div className="container">
        <div className="sticky-header-list">
          <ul className="list-unstyled mb-0">
            <li>
              <a
                href="#overview"
                className="btn btn-outline-primary text-decoration-none"
              >
                Overview
              </a>
            </li>
            <li>
              <a
                href="#training-options"
                className="btn btn-outline-primary text-decoration-none"
              >
                Training Options
              </a>
            </li>
            <li>
              <a
                href="#syllabus"
                className="btn btn-outline-primary text-decoration-none"
              >
                Syllabus
              </a>
            </li>
            <li>
              <a
                href="#our-instructor"
                className="btn btn-outline-primary text-decoration-none"
              >
                Our Instructor
              </a>
            </li>
            <li>
              <a
                href="#exam-certification"
                className="btn btn-outline-primary text-decoration-none"
              >
                Exam &amp; Certification
              </a>
            </li>
            <li>
              <a
                href="#placement-reviews"
                className="btn btn-outline-primary text-decoration-none"
              >
                Placement &amp; Reviews
              </a>
            </li>
            <li>
              <a
                href="#faqs"
                className="btn btn-outline-primary text-decoration-none"
              >
                FAQs
              </a>
            </li>
          </ul>
          <div className="button-group">
            <button
              type="button"
              className="btn btn-enroll"
              data-bs-toggle="modal"
              data-bs-target="#enquiryModal"
              aria-label="Enroll in Course"
            >
              Enroll Now
            </button>
            <button
              type="button"
              className="btn btn-outline-primary"
              data-bs-toggle="modal"
              data-bs-target="#syllabusModalLabel"
              aria-label="Download Syllabus"
            >
              View Syllabus
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rh124StickyHeader;
