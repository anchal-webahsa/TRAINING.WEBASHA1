import React from 'react';
import { MEDIA_BASE_URL } from "../../api/config";

const ExamReviewsSection = ({ examName, examCode, reviews: backendReviews }) => {
  const defaultReviews = [
    {
      title: "Perfect Exam Blueprint",
      text: "Every single objective in the Red Hat EX200 blueprint was covered with timed labs. Knew exactly what to expect — no surprises on exam day!",
      name: "Adnan Shaikh",
      role: "RHCSA | System Administrator",
      img: "https://ui-avatars.com/api/?name=Adnan+Shaikh&background=3b82f6&color=fff",
      stars: 5
    },
    {
      title: "40% Salary Jump!",
      text: "Added RHCSA to my resume — 3 job offers in 2 weeks. Employers love Red Hat certs. Best career investment I ever made!",
      name: "Arpit",
      role: "Linux Systems Engineer",
      img: "https://ui-avatars.com/api/?name=Arpit&background=3b82f6&color=fff",
      stars: 5
    }
  ];

  const displayReviews = backendReviews && backendReviews.length > 0 
    ? backendReviews.map(r => ({
        title: r.title || "Review",
        text: r.text,
        name: r.name,
        role: r.role,
        img: r.image ? (r.image.startsWith('http') ? r.image : `${MEDIA_BASE_URL}${r.image}`) : `https://ui-avatars.com/api/?name=${r.name}&background=3b82f6&color=fff`,
        stars: r.rating || 5
      }))
    : defaultReviews;

  return (
    <section className="my-5 text-center">
      <div className="d-inline-block px-4 py-2 rounded-pill small fw-bold mb-3" style={{ backgroundColor: '#ffdede', color: '#dc3545' }}>
        Recent Placements Testimonials of {examName} ({examCode}) Candidates
      </div>
      <h2 className="fw-bold mb-5" style={{ color: '#0f172a' }}>
        {examName} <span className="text-danger">Reviews</span>
      </h2>

      <div className="row g-4 justify-content-center">
        {displayReviews.map((review, idx) => (
          <div className="col-md-6 col-lg-5" key={idx}>
            <div className="border rounded-4 shadow-sm p-4 h-100 bg-white text-center d-flex flex-column justify-content-between" style={{ minHeight: '260px' }}>
              <div>
                <div className="text-warning mb-2 d-flex justify-content-center gap-1">
                  {[...Array(review.stars)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star" style={{ fontSize: '0.95rem' }}></i>
                  ))}
                </div>
                <h5 className="fw-bold mb-2" style={{ color: '#0f172a', fontSize: '1.2rem' }}>"{review.title}"</h5>
                <p className="text-muted mb-4" style={{ lineHeight: '1.6', fontSize: '1rem' }} dangerouslySetInnerHTML={{ __html: review.text }} />
              </div>
              <div className="d-flex align-items-center justify-content-start">
                <img 
                  src={review.img} 
                  alt={review.name} 
                  className="rounded-circle me-3" 
                  style={{ width: '48px', height: '48px', objectFit: 'cover' }}
                />
                <div className="text-start">
                  <h6 className="fw-bold mb-0" style={{ fontSize: '1.05rem', color: '#0f172a' }}>{review.name}</h6>
                  <small className="text-muted" style={{ fontSize: '0.85rem' }}>{review.role}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExamReviewsSection;
