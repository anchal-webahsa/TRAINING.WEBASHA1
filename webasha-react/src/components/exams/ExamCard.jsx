import React from 'react';
import { Link } from 'react-router-dom';

const ExamCard = ({ exam }) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="card h-100 shadow-sm border-0 transition-hover" style={{ borderRadius: '15px', overflow: 'hidden' }}>
        <div className="position-relative">
          {exam.image ? (
            <img src={exam.image} className="card-img-top" alt={exam.title} style={{ height: '200px', objectFit: 'cover' }} />
          ) : (
            <div className="bg-secondary d-flex align-items-center justify-content-center text-white" style={{ height: '200px' }}>
              <span className="display-5 fw-bold">{exam.exam_code}</span>
            </div>
          )}
          <div className="position-absolute top-0 end-0 m-3">
            <span className="badge bg-danger px-3 py-2">{exam.exam_code}</span>
          </div>
        </div>
        <div className="card-body p-4 d-flex flex-column">
          <Link to={`/exam/${exam.exam_code}`} className="text-decoration-none text-dark">
            <h5 className="card-title fw-bold mb-3" style={{ minHeight: '3rem' }}>{exam.title}</h5>
          </Link>
          {exam.price && (
            <div className="mb-3">
              <span className="text-muted small">Fee: </span>
              <span className="fw-bold text-dark">${exam.price}</span>
            </div>
          )}
          <div 
            className="card-text text-muted mb-4 flex-grow-1" 
            dangerouslySetInnerHTML={{ __html: exam.description?.substring(0, 150) + (exam.description?.length > 150 ? "..." : "") }}
          ></div>
          <Link 
            to={`/exam/${exam.exam_code}`} 
            className="btn btn-outline-danger w-100 fw-bold py-2 mt-auto"
            style={{ borderRadius: '10px' }}
          >
            View Full Exam Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExamCard;
