import React from 'react';
import './MobileBottomNav.css';

const MobileBottomNav = () => {
  return (
    <div className="mobile-bottom-nav d-lg-none">
      <a href="#" className="nav-item" data-bs-toggle="modal" data-bs-target="#enquiryModal">
        <i className="fa-solid fa-book-open"></i>
        <span>Enroll</span>
      </a>
      
      <a href="mailto:info@webasha.com" className="nav-item">
        <i className="fa-solid fa-envelope"></i>
        <span>Email</span>
      </a>
      
      <div className="nav-item whatsapp-container">
        <a href="https://wa.me/918485847920" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>
      
      <a href="tel:+918485847920" className="nav-item">
        <i className="fa-solid fa-phone"></i>
        <span>Call</span>
      </a>
      
      <a href="#" className="nav-item" data-bs-toggle="modal" data-bs-target="#enquiryModal">
        <i className="fa-solid fa-download"></i>
        <span>Brochure</span>
      </a>
    </div>
  );
};

export default MobileBottomNav;
