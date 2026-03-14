// src/components/common/WhyWebasha.jsx

const rows = [
  {
    feature: "Expert Trainers",
    webasha: "10+ Years Experienced Industry Professionals",
    others:  "Freshers or Part-time Instructors",
  },
  {
    feature: "Course Curriculum",
    webasha: "Updated & Industry-Relevant (Cybersecurity, Cloud, DevOps, Linux, AI/ML)",
    others:  "Basic or Outdated Content",
  },
  {
    feature: "Hands-on Learning",
    webasha: "Real Projects, Labs & Case Studies",
    others:  "Theory-Focused, Limited Practical",
  },
  {
    feature: "Certifications",
    webasha: "Globally Recognized (EC-Council, OffSec, Red Hat, AWS, Microsoft, etc.)",
    others:  "Generic or Unrecognized Certificates",
  },
  {
    feature: "Placement Support",
    webasha: "100% Assistance + Resume & Interview Coaching",
    others:  "Limited or No Job Support",
  },
  {
    feature: "Flexible Learning",
    webasha: "Classroom & Online Training Options",
    others:  "Rigid Timings, Mostly Classroom-Only",
  },
  {
    feature: "Learning Resources",
    webasha: "Lifetime LMS Access, Study Materials, Recorded Sessions",
    others:  "Minimal or No Additional Resources",
  },
  {
    feature: "Batch Size",
    webasha: "Small Groups with 1:1 Mentorship",
    others:  "Large, Crowded Batches",
  },
];

const WhyWebasha = () => (
  <section className="py-5 course-comparison-section lazy-section">
    <div className="container">

      {/* Section Header */}
      <div className="section-header text-center mb-4">
        <h3 className="heading-main-1 text-center">
          Why Choose <span className="red-color">WebAsha Technologies</span>
        </h3>
        <p className="fs-6 text-muted mx-auto" style={{ maxWidth: "760px" }}>
          At WebAsha Technologies, we deliver career-focused IT training that combines
          expert mentorship, practical learning, and globally recognized certifications
          to give you a competitive edge.
        </p>
      </div>

      {/* Comparison Table */}
      <div className="table-responsive custom-table mb-4">
        <table className="table table-bordered align-middle">
          <thead className="table-light">
            <tr>
              <th scope="col" className="subs-title">Features</th>
              <th scope="col" className="subs-title">WebAsha Technologies</th>
              <th scope="col" className="subs-title">Other Institutes</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                <td><strong>{row.feature}</strong></td>
                <td>{row.webasha}</td>
                <td>{row.others}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Enroll CTA */}
      <div className="text-center mt-4">
        <button
          type="button"
          className="btn btn-primary btn-width mx-auto d-inline-flex align-items-center"
          data-bs-toggle="modal"
          data-bs-target="#enquiryModal"
          aria-label="Enroll Now at WebAsha Technologies"
        >
          Enroll Now
          <i className="fa fa-arrow-right ms-2" aria-hidden="true" />
        </button>
      </div>

    </div>
  </section>
);

export default WhyWebasha;