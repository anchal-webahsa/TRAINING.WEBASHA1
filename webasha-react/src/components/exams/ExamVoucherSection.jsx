import React from 'react';

const ExamVoucherSection = ({ examName }) => {

  return (
    <section className="contentcard lazy-section" id="voucher-section" style={{ maxHeight: 'none', overflow: 'visible' }}>
      <div className="content-container mb-5" style={{ maxHeight: 'none', overflow: 'visible' }}>
        <div className="mb-4 text-center">
          <h2 className="heading-main">
            Get <span className="red-color">Discounted </span>{examName}
            Exam Voucher in Dubai, UAE
          </h2>
          <p className="text-muted mt-2 mb-0">
            Official Red Hat voucher at <strong>lowest price</strong> —
            includes scheduling support &amp; optional training bundle.
          </p>
        </div>
        
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active">
            <div className="course-content-inner">
              <h5 className="bold-text mb-2">
                Why Choose WebAsha for Your {examName} Exam Voucher?
              </h5>
              <ul>
                <li><i className="fa-solid fa-angles-right red-color me-2" />Save up to <strong>20–30%</strong> vs. buying directly from Red Hat.</li>
                <li><i className="fa-solid fa-angles-right red-color me-2" />100% <strong>genuine Red Hat voucher</strong> — redeemable on official portal.</li>
                <li><i className="fa-solid fa-angles-right red-color me-2" />Full support: Exam booking, remote proctor setup, and scheduling help.</li>
                <li><i className="fa-solid fa-angles-right red-color me-2" />Bundle with <strong>mock tests, labs, and 1:1 doubt sessions</strong> (optional).</li>
                <li><i className="fa-solid fa-angles-right red-color me-2" />Trusted by 48,000+ students across the UAE.</li>
                <li><i className="fa-solid fa-angles-right red-color me-2" />Corporate & bulk purchase options with Invoice.</li>
              </ul>
              
              <h5 className="bold-text mb-3 mt-4">What You Get with Your Voucher</h5>
              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <div className="p-3 border rounded bg-light h-100">
                    <i className="fa-solid fa-check text-success me-2" />
                    <strong>Official {examName} Exam Voucher</strong>
                    <br />
                    <small className="text-muted">Valid for 1 year | Redeem on Red Hat portal</small>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-3 border rounded bg-light h-100">
                    <i className="fa-solid fa-headset text-success me-2" />
                    <strong>Exam Booking Assistance</strong>
                    <br />
                    <small className="text-muted">We help you schedule online or in-person</small>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-3 border rounded bg-light h-100">
                    <i className="fa-regular fa-calendar-check text-success me-2" />
                    <strong>Optional Add-ons</strong>
                    <br />
                    <small className="text-muted">Mock exams, labs, recorded sessions</small>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-3 border rounded bg-light h-100">
                    <i className="fa-solid fa-file-invoice-dollar text-success me-2" />
                    <strong>Invoice & Support</strong>
                    <br />
                    <small className="text-muted">For individuals & companies</small>
                  </div>
                </div>
              </div>

              {/* How to Buy (3 Steps) */}
              <h5 className="bold-text mb-3 mt-4 text-center text-md-start">How to Get Your Discounted Voucher (3 Easy Steps)</h5>
              <ol className="text-muted mb-4 ps-3">
                <li><strong>Chat on WhatsApp</strong> — Ask for current discount & availability.</li>
                <li><strong>Pay securely</strong> — Get voucher code + invoice instantly.</li>
                <li><strong>Redeem & Schedule</strong> — Use on Red Hat site. We help if needed!</li>
              </ol>

              <div className="text-center mt-2 mb-3">
                 <p className="small fw-bold text-muted mb-0">Limited-time offer: Discount valid till stock lasts.</p>
              </div>

              {/* CTA Buttons */}
              <div className="d-flex flex-wrap gap-2 justify-content-center">
                <a href="https://api.whatsapp.com/send?phone=+19292439565" className="btn btn-success px-4 py-2 fw-bold" target="_blank" rel="noopener noreferrer" style={{backgroundColor: '#25d366', border: 'none'}}>
                  <i className="fab fa-whatsapp me-2" /> Whatsapp
                </a>
                <button className="btn btn-danger px-4 py-2 fw-bold" data-bs-toggle="modal" data-bs-target="#enquiryModal">
                  <i className="fa-solid fa-circle-info me-2" /> Enquire Now
                </button>
              </div>

              {/* Who Should Buy This */}
              <div className="mt-5">
                <h5 className="bold-text mb-2">Who Should Buy This?</h5>
                <p className="text-muted mb-4">
                  Ideal for <strong>students, working professionals, DevOps aspirants, and Linux admins</strong> in Dubai, UAE preparing for <strong>{examName}</strong>. Perfect for self-study candidates or those joining our bootcamp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamVoucherSection;
