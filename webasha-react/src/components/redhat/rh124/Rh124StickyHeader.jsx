import React, { useState, useEffect } from "react";

const Rh124StickyHeader = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headerElm = document.querySelector('header.header');
      const bannerElm = document.querySelector('.banner-course');
      
      const headerHeight = headerElm ? headerElm.offsetHeight : 0;
      const bannerHeight = bannerElm ? bannerElm.offsetHeight : 0;
      
      // Use fallback height if elements are not fully sized yet
      const offset = (headerHeight + bannerHeight) || 600;
      setIsSticky(window.scrollY >= offset);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check once on mount

    // Check again after short delay to catch late layout shifts / image loads
    const timer = setTimeout(handleScroll, 500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerOffset = 100; // Offset for the sticky header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className={`sticky-main-header1 ${isSticky ? 'sticky' : ''}`} id="stickyheader">
      <div className="container">
        <div className="sticky-header-list">
          <ul className="list-unstyled mb-0">
            <li>
              <a
                href="#overview"
                className="btn btn-outline-primary text-decoration-none"
                onClick={(e) => handleNavClick(e, '#overview')}
              >
                Overview
              </a>
            </li>
            <li>
              <a
                href="#training-options"
                className="btn btn-outline-primary text-decoration-none"
                onClick={(e) => handleNavClick(e, '#training-options')}
              >
                Training Options
              </a>
            </li>
            <li>
              <a
                href="#syllabus"
                className="btn btn-outline-primary text-decoration-none"
                onClick={(e) => handleNavClick(e, '#syllabus')}
              >
                Syllabus
              </a>
            </li>
            <li>
              <a
                href="#our-instructor"
                className="btn btn-outline-primary text-decoration-none"
                onClick={(e) => handleNavClick(e, '#our-instructor')}
              >
                Our Instructor
              </a>
            </li>
            <li>
              <a
                href="#exam-certification"
                className="btn btn-outline-primary text-decoration-none"
                onClick={(e) => handleNavClick(e, '#exam-certification')}
              >
                Exam &amp; Certification
              </a>
            </li>
            <li>
              <a
                href="#placement-reviews"
                className="btn btn-outline-primary text-decoration-none"
                onClick={(e) => handleNavClick(e, '#placement-reviews')}
              >
                Placement &amp; Reviews
              </a>
            </li>
            <li>
              <a
                href="#faqs"
                className="btn btn-outline-primary text-decoration-none"
                onClick={(e) => handleNavClick(e, '#faqs')}
              >
                FAQs
              </a>
            </li>
          </ul>
          <div className="button-group d-flex gap-2">
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
