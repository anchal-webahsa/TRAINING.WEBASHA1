import React from 'react';

const ExamWhyChooseUs = ({ examName, examCode }) => {
  const points = [
    { title: "Expert Mentorship", desc: "Learn from Red Hat Certified Instructors with enterprise experience." },
    { title: "Comprehensive Curriculum", desc: `Covers all ${examCode} v10 objectives.` },
    { title: "Hands-On Practice Labs", desc: "Work on live RHEL servers." },
    { title: "Flexible Learning Modes", desc: "Weekday, weekend, online, or hybrid." },
    { title: "Trusted Red Hat Partner", desc: "Authorized training with proven results." },
    { title: "Proven Alumni Success", desc: "Graduates working at IBM, Google, AWS, and more." }
  ];

  return (
    <section className="my-5">
      <div className="content-section bg-white border rounded-4 p-4 p-md-5 shadow-sm">
        <h2 className="fw-bold mb-4 text-center" style={{ color: '#0f172a' }}>
          Why Choose <span className="text-danger">WebAsha Technologies</span> for {examName} ({examCode})
        </h2>
        
        <p className="text-muted small mb-4">
          Prepare with <strong>WebAsha Technologies</strong> — a trusted <strong>Red Hat training partner</strong>. Our {examCode} program includes hands-on labs, certified trainers, and real exam simulations.
        </p>

        <ul className="list-unstyled">
          {points.map((point, idx) => (
            <li className="mb-2 d-flex align-items-start" key={idx} style={{ fontSize: '14.5px', lineHeight: '1.4' }}>
              <span className="text-danger fw-bold me-2" style={{ fontSize: '0.9rem', marginTop: '1px' }}>»</span>
              <div>
                <strong>{point.title}:</strong> <span className="text-muted">{point.desc}</span>
              </div>
            </li>
          ))}
        </ul>

        <p className="text-muted small mt-4">
          Join WebAsha Technologies and accelerate your career in <strong>Linux, DevOps, and Cloud Computing</strong> with globally recognized Red Hat certification.
        </p>
      </div>
    </section>
  );
};

export default ExamWhyChooseUs;
