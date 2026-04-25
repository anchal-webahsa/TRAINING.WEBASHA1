import React from 'react';
import ExamCard from './ExamCard';

const ExamList = ({ exams, loading }) => {
  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (exams.length === 0) {
    return (
      <div className="text-center py-5">
        <h3 className="text-muted">No exams available at the moment.</h3>
        <p>Please check back later or contact us for more information.</p>
      </div>
    );
  }

  return (
    <div className="row g-4">
      {exams.map((exam) => (
        <ExamCard key={exam.id} exam={exam} />
      ))}
    </div>
  );
};

export default ExamList;
