// src/components/common/PlacementRoadmap.jsx

import { useEffect, useRef } from "react";

const steps = [
  {
    num:   "01",
    icon:  "fa fa-book fa-lg text-danger",
    title: "Follow 3A",
    desc:  "Attendance, Assignment & Assessment model ensuring consistency and success.",
  },
  {
    num:   "02",
    icon:  "fa fa-cogs fa-lg text-danger",
    title: "Industry-Specific Skills",
    desc:  "Hands-on expertise in tools & technologies for high-demand IT roles.",
  },
  {
    num:   "03",
    icon:  "fa fa-user fa-lg text-danger",
    title: "Profile Building",
    desc:  "Resume, LinkedIn & portfolio development to showcase your skills.",
  },
  {
    num:   "04",
    icon:  "fa fa-pencil-alt fa-lg text-danger",
    title: "Exam",
    desc:  "Final evaluation exam to test your readiness for real-world challenges.",
  },
  {
    num:   "05",
    icon:  "fa fa-certificate fa-lg text-danger",
    title: "Global Certification",
    desc:  "Earn globally recognized certifications that validate your expertise.",
  },
  {
    num:   "06",
    icon:  "fa fa-graduation-cap fa-lg text-danger",
    title: "Integrated Internship",
    desc:  "Apply knowledge in real projects & internships to build credibility.",
  },
];

const PlacementRoadmap = () => {
  const gridRef = useRef(null);

  // Replaces the inline <script> — same IntersectionObserver logic
  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll(".step-card");
    if (!cards) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    cards.forEach((c) => io.observe(c));

    return () => io.disconnect();
  }, []);

  return (
    <section
      className="course-technologies-placement lazy-section"
      id="placement-reviews"
    >
      <div className="container timeline-wrap">

        {/* Section Badge */}
        <div className="section-header text-center">
          <span className="section-badge">WebAsha Placements Process</span>
        </div>

        {/* Heading */}
        <h2 className="heading-main-1 text-white text-center">
          Turn Your <span className="red-color">Learning</span> Into a Career{" "}
          <span className="red-color">That You're Proud Of</span>
        </h2>

        {/* Decorative SVG Dotted Path */}
        <svg
          className="timeline-track"
          viewBox="0 0 1200 420"
          preserveAspectRatio="none"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30,350 C180,50 420,50 540,350 C660,650 900,650 1170,350"
            fill="none"
          />
          <circle cx="40"   cy="340" r="6" fill="var(--dot)" />
          <circle cx="1160" cy="340" r="6" fill="var(--dot)" />
        </svg>

        {/* Timeline Cards */}
        <div className="timeline-grid" ref={gridRef}>
          {steps.map((step) => (
            <article className="step-card" key={step.num}>
              <div className="step-number">{step.num}</div>
              <div className="step-icon">
                <i className={step.icon} />
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </article>
          ))}
        </div>

        {/* Footer Labels */}
        <div className="timeline-foot">
          <div><span className="dot" /> Start with</div>
          <div>Happy Ending <span className="dot" /></div>
        </div>

      </div>
    </section>
  );
};

export default PlacementRoadmap;