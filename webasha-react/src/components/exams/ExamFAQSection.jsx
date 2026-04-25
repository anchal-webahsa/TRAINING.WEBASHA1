import React, { useState } from 'react';

const ExamFAQSection = ({ examName, examCode, faqs = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const defaultFaqs = [
    { question: `What is the cost of ${examCode} certification in Dubai, UAE?`, answer: `The official <strong>Red Hat ${examCode} exam fee is $500 USD</strong> in the UAE. Training costs at institutes like <strong>WebAsha Technologies</strong> range from <strong>$1,500 to $3,500</strong> depending on mode (online/classroom) and duration.` },
    { question: `Is ${examCode} exam available online in the UAE?`, answer: "Yes, Red Hat offers remote proctored exams." },
    { question: `How long is the ${examName} certification valid?`, answer: "The certification is valid for 3 years." },
    { question: `Are there any prerequisites for ${examName} ${examCode}?`, answer: "No formal prerequisites, but RH124/RH134 are recommended." },
    { question: `What is the passing score for ${examName} ${examCode}?`, answer: "210 out of 300." },
    { question: `How long is the ${examName} ${examCode} exam?`, answer: "180 minutes." },
    { question: `Can I retake the ${examName} exam if I fail?`, answer: "Yes, retakes are available through Red Hat's policy." },
    { question: `Does WebAsha provide ${examName} training in Dubai?`, answer: "Yes, we are a leading training provider in Dubai." },
    { question: `What is the average salary after ${examName} in the UAE?`, answer: "$70,000 - $150,000+ depending on experience." },
    { question: `Is ${examName} better than CompTIA Linux+?`, answer: "RHCSA is performance-based and highly valued for RHEL environments." }
  ];

  const displayFaqs = faqs.length > 0 ? faqs : defaultFaqs;

  return (
    <section className="my-5">
      <div className="text-center mb-4">
        <span className="badge rounded-pill bg-danger-subtle text-danger px-3 py-2 mb-3" style={{ fontSize: '12px' }}>FAQs</span>
        <h2 className="fw-bold mb-2" style={{ color: '#0f172a', fontSize: '2rem' }}>
          {examName} ({examCode}) FAQs <span className="text-danger">(Frequently Asked Questions)</span>
        </h2>
        <p className="text-muted small">Answers to the most common questions about the {examName} ({examCode}) certification and WebAsha Technologies training in Dubai, UAE.</p>
      </div>

      <div className="faq-list">
        {displayFaqs.map((faq, idx) => (
          <div key={idx} className="faq-item mb-3">
            <button 
              className={`w-100 text-start p-3 border rounded-3 d-flex align-items-center justify-content-between bg-white shadow-sm`}
              onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
              style={{ 
                border: '1px solid #e2e8f0', 
                transition: 'all 0.2s ease',
                outline: 'none'
              }}
            >
              <span className="fw-bold text-dark" style={{ fontSize: '15px' }}>{faq.question}</span>
              <i className={`fa-solid ${activeIndex === idx ? 'fa-xmark text-danger' : 'fa-plus text-danger'}`}></i>
            </button>
            {activeIndex === idx && (
              <div className="faq-answer p-3 text-muted small border-start border-end border-bottom rounded-bottom-3 bg-light" style={{ marginTop: '-5px', lineHeight: '1.6' }}>
                <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExamFAQSection;
