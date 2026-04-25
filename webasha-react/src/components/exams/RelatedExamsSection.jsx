import React from 'react';

const RelatedExamsSection = () => {
  const relatedExams = [
    { title: "RHCSA | EX200 - Red Hat Certified System Administrator", update: "Apr 18, 2026", price: "$199", original: "$499" },
    { title: "RHCE | EX294 - Red Hat Certified Engineer", update: "Apr 19, 2026", price: "$199", original: "$499" },
    { title: "DO280 | EX280 - Red Hat OpenShift Administration", update: "Apr 16, 2026", price: "$249", original: "$499" },
    { title: "DO180 | EX180 - Red Hat OpenShift Developer", update: "Apr 18, 2026", price: "$199", original: "$499" },
    { title: "RH294 | EX294 - Red Hat Certified Ansible Automation", update: "Apr 20, 2026", price: "$199", original: "$499" },
    { title: "RH358 | EX358 - Red Hat Satellite Administration", update: "Apr 18, 2026", price: "$299", original: "$499" },
    { title: "RH415 | EX415 - Red Hat Security", update: "Apr 15, 2026", price: "$299", original: "$499" }
  ];

  return (
    <section className="my-5">
      <div className="content-section bg-white border rounded-4 shadow-sm overflow-hidden">
        {/* Red Header Bar */}
        <div className="bg-danger text-white text-center py-4">
          <h2 className="fw-bold mb-1" style={{ fontSize: '1.8rem' }}>Related Other Certification Exam</h2>
          <p className="mb-0 opacity-75">List of Exam Preparation</p>
        </div>

        <div className="p-2 p-md-4">
          {relatedExams.map((exam, idx) => (
            <div key={idx} className="exam-row py-3 px-2 border-bottom d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
              <div className="exam-info flex-grow-1">
                <h5 className="fw-bold text-dark mb-1" style={{ fontSize: '1.05rem' }}>{exam.title}</h5>
                <div className="d-flex flex-wrap gap-2 text-muted small">
                  <span>Bundle Includes: <strong className="text-dark">Latest Study Material & Mock Tests</strong></span>
                  <span className="d-none d-md-inline text-muted opacity-50">|</span>
                  <span>Last Update Date: <strong className="text-dark">{exam.update}</strong></span>
                </div>
              </div>

              <div className="exam-pricing d-flex align-items-center gap-3">
                <div className="text-center">
                  <span className="fw-bold text-dark d-block" style={{ fontSize: '1.1rem' }}>Price: {exam.price}</span>
                  <span className="text-muted text-decoration-line-through small">{exam.original}</span>
                </div>
                
                <div className="exam-actions d-flex gap-2">
                  <button 
                    className="btn btn-danger d-flex align-items-center justify-content-center fw-bold" 
                    data-bs-toggle="modal" 
                    data-bs-target="#enquiryModal"
                    style={{ fontSize: '13px', padding: '8px 15px', minWidth: '120px' }}
                  >
                    <i className="fa-regular fa-envelope me-2"></i> Enquire Now
                  </button>
                  <a 
                    href="https://api.whatsapp.com/send?phone=+19292439565" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-success d-flex align-items-center justify-content-center fw-bold"
                    style={{ backgroundColor: '#25d366', border: 'none', fontSize: '13px', padding: '8px 15px', minWidth: '120px' }}
                  >
                    <i className="fab fa-whatsapp me-2"></i> Whatsapp
                  </a>
                </div>
              </div>
            </div>
          ))}
          
          {/* No View Less button as requested */}
        </div>
      </div>
    </section>
  );
};

export default RelatedExamsSection;
