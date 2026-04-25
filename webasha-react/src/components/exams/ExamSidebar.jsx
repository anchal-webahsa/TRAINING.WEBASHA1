import React from 'react';

const ExamSidebar = ({ data }) => {
  return (
    <div className="exam-sidebar">
      {/* Product Image Section with Guarantee Seal */}
      <div className="position-relative bg-white border rounded-4 p-4 mb-4 text-center shadow-sm">
        {/* Gold Seal Image */}
        <div className="position-absolute" style={{ top: '10%', left: '5%', zIndex: 2 }}>
          <img src="/assets/img/100-percent-guarantee.png" alt="100% Guarantee" style={{ width: '100px' }} 
               onError={(e) => { e.target.src = "https://training.webasha.com/wp-content/uploads/2023/07/100-guarantee-seal.png"; }} />
        </div>
        
        <img
          src="/assets/img/webasha-study-notes.webp"
          className="img-fluid"
          alt="WebAsha Exam Bundle"
          style={{ maxHeight: '300px', position: 'relative', zIndex: 1 }}
        />
        
        {/* Green Badge */}
        <span className="position-absolute top-0 end-0 mt-4 me-4 badge rounded-pill bg-success px-3 py-2 fw-bold" style={{ fontSize: '11px', zIndex: 3 }}>
          <i className="fa-solid fa-circle-check me-1"></i> 100% Guaranteed
        </span>
      </div>

      {/* Bootcamp Table Section */}
      <div className="bg-white border rounded-4 p-4 shadow-sm mb-4">
        <h4 className="text-center fw-bold mb-4" style={{ color: '#0f172a' }}>
          {data.code} Exam <span className="text-danger">Bootcamp</span>
        </h4>
        
        <div className="table-responsive">
          <table className="table table-sm table-bordered align-middle mb-4" style={{ fontSize: '13px' }}>
            <tbody>
              <tr>
                <th className="bg-light p-2" style={{ width: '40%' }}>Exam Name</th>
                <td className="p-2"><strong>{data.name}</strong></td>
              </tr>
              <tr>
                <th className="bg-light p-2">Exam Code</th>
                <td className="p-2"><strong>{data.code}</strong></td>
              </tr>
              <tr>
                <th className="bg-light p-2">Exam Presentation</th>
                <td className="p-2">100% <strong>Hands-On Performance-Based Lab</strong></td>
              </tr>
              <tr>
                <th className="bg-light p-2">Mock Test</th>
                <td className="p-2">Included with <strong>Real Exam-Like Scenarios</strong></td>
              </tr>
              <tr>
                <th className="bg-light p-2">Bundle Includes</th>
                <td className="p-2"><strong>Latest Study Material</strong>, updated <strong>Mock Tests</strong>, and <strong>Practical Labs</strong> for {data.code}</td>
              </tr>
              <tr>
                <th className="bg-light p-2">Free Updates</th>
                <td className="p-2">90 Days Free Access to Updated Exam Content</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pricing & Buttons */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-success fw-semibold" style={{ fontSize: '13px' }}>Last Update Date: {data.lastUpdate || "APR 16, 2026"}</span>
          <div className="text-end">
            <span className="fw-bold fs-5">Price: <span className="text-success">${data.price}</span></span>
            <span className="text-muted text-decoration-line-through small ms-2">${data.originalPrice}</span>
          </div>
        </div>

        <div className="d-flex gap-2">
          <a href={`https://wa.me/918010911256?text=I'm interested in ${data.code} Exam Bundle`} className="btn btn-success flex-grow-1 py-2 fw-bold d-flex align-items-center justify-content-center" style={{ backgroundColor: '#25d366', border: 'none' }}>
            <i className="fab fa-whatsapp me-2 fs-5"></i> WhatsApp
          </a>
          <button className="btn btn-danger flex-grow-1 py-2 fw-bold d-flex align-items-center justify-content-center" style={{ backgroundColor: '#dc3545', border: 'none' }}>
            <i className="fa-solid fa-circle-info me-2 fs-5"></i> Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamSidebar;
