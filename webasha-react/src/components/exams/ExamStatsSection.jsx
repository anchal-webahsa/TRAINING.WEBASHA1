import React from 'react';

const ExamStatsSection = ({ examName, examCode, passedCount, averageScore, similarity }) => {
  return (
    <section className="my-5 text-center">
      <h2 className="fw-bold mb-2" style={{ color: '#0f172a' }}>
        This Week's <span className="text-danger">{examName} ({examCode}) Certification Results</span>
      </h2>
      <p className="text-muted mb-4 mx-auto" style={{ maxWidth: '800px', fontSize: '14px' }}>
        At <strong>WebAsha Technologies</strong>, our success stories speak for themselves. Each week, dozens of students achieve their <strong>{examName}</strong> certification through our hands-on training and instructor-led programs. These results highlight the effectiveness of our structured learning approach and real-world exam preparation techniques.
      </p>
      
      <div className="row g-4">
        {[
          { 
            icon: 'fa-users', 
            count: passedCount, 
            label: 'Students Passed This Week', 
            desc: 'Our students consistently achieve top results — proof of our practical training.' 
          },
          { 
            icon: 'fa-face-smile', 
            count: averageScore, 
            label: 'Average Score', 
            desc: `The average performance of our candidates in the ${examName} exam stands at an impressive ${averageScore}.` 
          },
          { 
            icon: 'fa-file-lines', 
            count: similarity, 
            label: 'Question Similarity', 
            desc: `Over ${similarity} of the real exam questions closely match the concepts and scenarios covered in our training.` 
          }
        ].map((stat, idx) => (
          <div className="col-md-4" key={idx}>
            <div className="border rounded-4 shadow-sm p-4 h-100 bg-white text-center">
              <div className="icon-container mb-3 d-flex align-items-center justify-content-center mx-auto" style={{ width: '60px', height: '60px' }}>
                <i className={`fa-solid ${stat.icon} fa-2x text-danger`} />
              </div>
              <h4 className="fw-bold text-danger mb-2">
                {stat.count} {stat.label}
              </h4>
              <p className="text-muted small mb-0">
                {stat.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExamStatsSection;
