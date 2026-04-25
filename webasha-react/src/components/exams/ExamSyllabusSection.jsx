import React from 'react';

const ExamSyllabusSection = ({ examName, syllabusHtml }) => {
  if (!syllabusHtml) return null;

  return (
    <section className="contentcard lazy-section mb-5">
      <div className="bg-white border rounded-4 p-4 p-md-5 shadow-sm">
        <h2 className="heading-main text-center mb-4">
          {examName} Course Details and <span className="red-color">Exam Overview</span>
        </h2>
        <div 
          className="description text-dark fs-6" 
          style={{ lineHeight: '1.8' }} 
          dangerouslySetInnerHTML={{ __html: syllabusHtml }} 
        />
      </div>
    </section>
  );
};

export default ExamSyllabusSection;
