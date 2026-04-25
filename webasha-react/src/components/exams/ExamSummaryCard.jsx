import React from 'react';

const ExamSummaryCard = ({ data }) => {
  return (
    <div className="exam-summary-card mb-5">
      <div className="row align-items-center g-4">
        {/* Left: Product Image */}
        <div className="col-md-5">
          <div className="position-relative">
            <span className="position-absolute top-0 start-0 badge rounded-pill bg-warning text-dark px-3 py-2 fw-bold shadow-sm" style={{ zIndex: 2, transform: 'translate(-10px, -10px)' }}>
              <i className="fa-solid fa-shield-check me-1"></i> 100% Success Guarantee
            </span>
            <img 
              src="/assets/img/webasha-study-notes.webp" 
              alt="WebAsha Exam Bundle" 
              className="img-fluid rounded-4 shadow-sm"
              onError={(e) => { e.target.src = "https://training.webasha.com/wp-content/uploads/2023/07/rhcsa-exam-prep.png"; }}
            />
          </div>
        </div>

        {/* Right: Info Table */}
        <div className="col-md-7">
          <div className="bg-white border rounded-4 shadow-sm overflow-hidden">
            <div className="table-responsive">
              <table className="table table-sm table-bordered align-middle mb-0" style={{ fontSize: '14px' }}>
                <tbody>
                  <tr>
                    <th className="bg-light p-3" style={{ width: '35%' }}>Exam Name</th>
                    <td className="p-3 fw-bold">{data.name}</td>
                  </tr>
                  <tr>
                    <th className="bg-light p-3">Exam Code</th>
                    <td className="p-3 fw-bold">{data.code}</td>
                  </tr>
                  <tr>
                    <th className="bg-light p-3">Exam Presentation</th>
                    <td className="p-3 fw-bold">{data.presentation || "100% Hands-On Performance-Based Lab"}</td>
                  </tr>
                  <tr>
                    <th className="bg-light p-3">Mock Test</th>
                    <td className="p-3 fw-bold">Included with <strong>Real Exam-Like Scenarios</strong></td>
                  </tr>
                  <tr>
                    <th className="bg-light p-3">Bundle Includes</th>
                    <td className="p-3"><strong>Latest Study Material</strong>, updated <strong>Mock Tests</strong>, and <strong>Practical Labs</strong> for {data.code}</td>
                  </tr>
                  <tr>
                    <th className="bg-light p-3">Free Updates</th>
                    <td className="p-3 fw-bold">90 Days Free Access to Updated Exam Content</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* Footer: Date & Price */}
            <div className="p-3 bg-light border-top d-flex justify-content-between align-items-center">
              <div className="text-danger fw-bold small">
                <i className="fa-regular fa-calendar-check me-1"></i> Last Updated: {data.lastUpdate || "APR 17, 2026"}
              </div>
              <div className="text-end">
                <span className="text-muted small me-2">Offer Price:</span>
                <span className="text-success fw-bold fs-4">${data.price}</span>
                <span className="text-muted text-decoration-line-through ms-2 small">${data.originalPrice}</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="p-3 d-flex gap-3">
              <a href={`https://wa.me/918010911256?text=I'm interested in ${data.code} Exam Bundle`} className="btn btn-success flex-grow-1 py-2 fw-bold d-flex align-items-center justify-content-center" style={{ backgroundColor: '#198754', border: 'none' }}>
                <i className="fab fa-whatsapp me-2 fs-5"></i> WhatsApp
              </a>
              <button className="btn btn-danger flex-grow-1 py-2 fw-bold d-flex align-items-center justify-content-center" style={{ backgroundColor: '#dc3545', border: 'none' }}>
                <i className="fa-solid fa-circle-info me-2 fs-5"></i> Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamSummaryCard;
