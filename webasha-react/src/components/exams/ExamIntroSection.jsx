import React from 'react';

const ExamIntroSection = ({ examName, rating, reviewCount }) => {
  return (
    <section className="exam-intro-section py-4" id="overview">
      <div className="text-center">
        <h1 className="fw-bold mb-3" style={{ fontSize: '2.2rem', color: '#0f172a' }}>
          Pass <span className="text-danger">{examName}</span> Certification Exam in First Attempt!
        </h1>
        <h5 className="fw-semibold mb-3 text-dark">
          Join Our Exam Preparation Class (Bootcamp)
        </h5>
        <div className="d-flex align-items-center justify-content-center gap-2" style={{ fontSize: '14px', color: '#64748b' }}>
          <span>Reviews</span>
          <div className="d-flex text-warning">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <span>Overall rating: <strong>{rating}</strong> based on {reviewCount} reviews</span>
        </div>
      </div>
    </section>
  );
};

export default ExamIntroSection;
