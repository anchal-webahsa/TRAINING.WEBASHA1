// src/components/common/KeyFeatures.jsx

import { useEffect } from "react";

// ── Feature cards (left grid) ──
const features = [
  { icon: "assets/imgs/training-features-icon-1.png", label: "Post Training Support" },
  { icon: "assets/imgs/training-features-icon-2.png", label: "Real Time Projects : 2" },
  { icon: "assets/imgs/training-features-icon-3.png", label: "Certification & Job Assistance" },
  { icon: "assets/imgs/training-features-icon-4.png", label: "Course Duration : 2 Months" },
  { icon: "assets/imgs/training-features-icon-5.png", label: "Hands-on Training" },
  { icon: "assets/imgs/training-features-icon-6.png", label: "Full Day Lab Access" },
];

// ── Lab images (slider) ──
const labImages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// ── Program highlights ──
const learningPoints = [
  "In-Depth Practical Training with Real-World Scenarios",
  "Choose Between In-Person or Virtual Classes (Flexible Schedules)",
  "Guidance from Seasoned IT Professionals",
  "Complimentary Intro to Emerging Tech Topics",
  "One-on-One Support for Clarifying Concepts",
  "Regular Hands-On Exercises and Live Projects",
  "Access to a Library of 150+ Training Videos for a Year",
];

const careerPoints = [
  "Tailored Job Placement Support with Multiple Interviews",
  "Custom Resume Crafting and Interview Coaching",
  "Workshops on Professional Skills and Teamwork",
  "Affordable Payment Plans with No Extra Fees",
  "Help Preparing for International Certifications",
  "Personal Career Guidance from Experts",
  "Practice Interviews with Industry Leaders",
];

// ── Props allow customising title per course page ──
const KeyFeatures = ({
  badge       = "Training Key Features",
  title       = "RH124 v10 Course",
  highlight   = "Training Key Features",
  description = "Explore the unique benefits of our RH124 v10 courses designed for foundational success in Pune's booming IT sector.",
}) => {

  // Init slick on lab slider
  useEffect(() => {
    const timer = setTimeout(() => {
      const $ = window.$;
      if (!$ || !$.fn || !$.fn.slick) return;

      const $el = $(".certified-candidates-slider");
      if ($el.hasClass("slick-initialized")) $el.slick("unslick");

      $el.slick({
        slidesToShow:   4,
        slidesToScroll: 1,
        arrows:         false,
        dots:           false,
        autoplay:       true,
        autoplaySpeed:  2000,
        responsive: [
          { breakpoint: 992, settings: { slidesToShow: 3 } },
          { breakpoint: 768, settings: { slidesToShow: 2 } },
          { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
      });
    }, 300);

    return () => {
      clearTimeout(timer);
      const $ = window.$;
      if (!$) return;
      const $el = $(".certified-candidates-slider");
      if ($el.hasClass("slick-initialized")) $el.slick("unslick");
    };
  }, []);

  return (
    <>
      {/* ── Section 1: Feature Cards + Cloud Lab ── */}
      <div className="training-features section-header text-center mt-5 lazy-section">
        <div className="container">
          <span className="section-badge">{badge}</span>
          <h2 className="heading-main-1 text-center">
            {title} <span className="red-color">{highlight}</span>
          </h2>
          <p className="description text-center mb-5">{description}</p>

          <div className="row align-items-center">
            {/* Left: Feature cards grid */}
            <div className="col-lg-7 col-sm-12 col-12">
              <ul className="card-list list-unstyled">
                {features.map((f, i) => (
                  <li key={i}>
                    <img
                      src={f.icon}
                      alt={`${f.label} Icon`}
                      width="50"
                      height="50"
                      loading="lazy"
                    />
                    <h5>{f.label}</h5>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Cloud Lab GIF */}
            <div className="col-lg-5 col-sm-12 col-12">
              <h3 className="heading-main-1 text-center">
                Our <span className="red-color">Cloud Lab</span>
              </h3>
              <div className="figure-images">
                <img
                  src="https://i.ibb.co/5X09hRg/lab.gif"
                  alt="Cloud Lab Environment"
                  width="571"
                  height="370"
                  fetchpriority="high"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Section 2: Classroom Lab Slider ── */}
      <div className="training-features py-5 lazy-section">
        <div className="container">
          <h2 className="heading-main-1 text-center mb-4">
            Our Classroom <span className="red-color">Practical Lab</span>
          </h2>

          <div className="certified-candidates-overlay">
            <div className="certified-candidates-slider">
              {labImages.map((num, i) => (
                <div className="item card-image-hover" key={i}>
                  <img
                    src={`assets/img/lab/${num}.webp`}
                    alt={`Lab ${num}`}
                    className="carousel-image"
                    data-index={i}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Section 3: Program Highlights ── */}
      <div className="container py-5 lazy-section">
        <div className="section-header text-center mb-4">
          <h2 className="heading-main-1 text-center">
            Program <span className="red-color">Highlights</span>
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "760px" }}>
            Discover how WebAsha Technologies empowers learners in Pune with
            top-notch IT training and career-ready skills.
          </p>
        </div>

        <div className="row g-4">
          {/* Learning Experience */}
          <div className="col-md-6">
            <h5 className="bold-text mb-3"><b>Learning Experience</b></h5>
            <ul className="list-unstyled">
              {learningPoints.map((point, i) => (
                <li key={i}>
                  <i className="fa-solid fa-angles-right text-danger me-2" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Career Development */}
          <div className="col-md-6">
            <h5 className="bold-text mb-3"><b>Career Development</b></h5>
            <ul className="list-unstyled">
              {careerPoints.map((point, i) => (
                <li key={i}>
                  <i className="fa-solid fa-angles-right text-danger me-2" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Enroll CTA */}
        <div className="text-center mt-4">
          <button
            type="button"
            className="btn btn-outline-primary btn-width mx-auto d-inline-flex align-items-center"
            data-bs-toggle="modal"
            data-bs-target="#enquiryModal"
            aria-label="Enroll Now with WebAsha Technologies"
          >
            Enroll Now
            <i className="fa fa-arrow-right ms-2" aria-hidden="true" />
          </button>
        </div>
      </div>
    </>
  );
};

export default KeyFeatures;