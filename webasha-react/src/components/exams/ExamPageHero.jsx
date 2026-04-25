import React from 'react';
import { Link } from 'react-router-dom';

const ExamPageHero = ({ title }) => {
  return (
    <div className="breadcrumb-bar text-center bg-black py-4 py-md-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h1 className="fw-bold mb-3 text-white" style={{ fontSize: 'clamp(20px, 3vw, 32px)', lineHeight: '1.4' }}>
              {title}
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center mb-0" style={{ background: "transparent" }}>
                <li className="breadcrumb-item">
                  <Link to="/" className="text-decoration-none text-white-50 small d-flex align-items-center">
                    <i className="fa-solid fa-house me-1"></i>
                    <span>Home</span>
                  </Link>
                </li>
                <li className="breadcrumb-item active text-white small" aria-current="page" style={{ opacity: 0.8 }}>
                  {title}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamPageHero;
