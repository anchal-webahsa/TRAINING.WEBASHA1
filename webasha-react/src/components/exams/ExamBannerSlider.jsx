import React from 'react';

const ExamBannerSlider = ({ examCode }) => {
  return (
    <div className="exam-banner-slider mb-5 pb-4">
      <div className="carousel slide" data-bs-ride="carousel" id="examHeroCarousel">
        <div className="carousel-inner rounded-4 shadow-lg">
          {/* Slide 1 - Generic Info */}
          <div className="carousel-item active">
            <div className="bg-black p-4 p-md-5 d-flex flex-column flex-md-row align-items-center justify-content-between" style={{ minHeight: '400px' }}>
              <div className="banner-left text-center text-md-start">
                <img src="/assets/img/rhcsa-logo-banner.png" alt="RHCSA Logo" className="img-fluid mb-3" style={{ maxWidth: '200px' }} 
                     onError={(e) => { e.target.src = "https://training.webasha.com/wp-content/uploads/2024/02/RHCSA-Logo.png"; }} />
                <h2 className="text-white fw-bold mb-3" style={{fontSize: '2.8rem', lineHeight: '1.2'}}>Pass Your Certification Exam <br /><span className="text-danger">In First Attempt</span></h2>
              </div>
              <div className="banner-right text-center text-md-start">
                <ul className="list-unstyled text-white mb-4 fs-5">
                  <li className="mb-2"><i className="fa-solid fa-circle-check text-warning me-2"></i> 100% Verified Study Materials</li>
                  <li className="mb-2"><i className="fa-solid fa-circle-check text-warning me-2"></i> 1 to 1 Doubt Clearing Sessions</li>
                  <li className="mb-2"><i className="fa-solid fa-circle-check text-warning me-2"></i> 90 Days Free Updates</li>
                </ul>
                <div className="text-center">
                   <p className="text-white mb-2 fw-bold">Unlimited Mock Tests Available</p>
                   <button className="btn btn-outline-light rounded-pill px-4 py-2 fw-bold">Join Our Exam Preparation Batch</button>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 - Discounted Voucher */}
          <div className="carousel-item">
            <div className="bg-black p-4 p-md-5 d-flex flex-column flex-md-row align-items-center justify-content-around" style={{ minHeight: '400px' }}>
              <div className="banner-left text-center">
                <img src="/assets/img/rhcsa-red-logo.png" alt="RHCSA Red" className="img-fluid" style={{ maxWidth: '300px' }}
                     onError={(e) => { e.target.src = "https://training.webasha.com/wp-content/uploads/2024/02/RHCSA-Red-Logo.png"; }} />
              </div>
              <div className="banner-right text-center">
                <h1 className="text-white display-2 fw-bold mb-1">Discounted</h1>
                <h3 className="text-white mb-4 fs-1">{examCode}- Voucher</h3>
                <p className="text-white-50 mb-4 fs-5">Become a Certified with best price</p>
                <div className="mb-3">
                  <button className="btn btn-warning btn-lg rounded-pill px-5 py-3 fw-bold text-dark shadow" style={{fontSize: '1.5rem', backgroundColor: '#ffd43b', border: 'none'}}>BUY NOW!</button>
                </div>
                <img src="/assets/img/payment-icons.png" alt="Payments" className="img-fluid" style={{ maxWidth: '200px', opacity: 0.8 }} 
                     onError={(e) => { e.target.src = "https://training.webasha.com/wp-content/uploads/2023/07/payment-methods.png"; }} />
              </div>
            </div>
          </div>
        </div>
        
        {/* Indicators */}
        <div className="carousel-indicators mb-0" style={{bottom: '-45px'}}>
          <button type="button" data-bs-target="#examHeroCarousel" data-bs-slide-to="0" className="active bg-danger" aria-current="true" style={{width: '12px', height: '12px', borderRadius: '50%', border: 'none', padding: 0}}></button>
          <button type="button" data-bs-target="#examHeroCarousel" data-bs-slide-to="1" className="bg-secondary" style={{width: '12px', height: '12px', borderRadius: '50%', border: 'none', padding: 0}}></button>
        </div>
      </div>
    </div>
  );
};

export default ExamBannerSlider;
