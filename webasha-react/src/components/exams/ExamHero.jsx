import React from 'react';

const ExamHero = () => {
  return (
    <section className="bg-dark py-5 text-white jarallax" style={{
      backgroundImage: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container py-5 position-relative z-index-1">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <h1 className="display-4 fw-bold mb-3">Global Certification <span className="text-danger">Exams</span></h1>
            <p className="lead mb-0 text-gray-400">Validate your skills with industry-recognized certifications. We provide comprehensive support for global certification exams.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamHero;
