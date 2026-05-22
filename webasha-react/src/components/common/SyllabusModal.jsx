import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../api/config';

const SyllabusModal = ({ defaultCourseName }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course_name: defaultCourseName || '',
    country: 'India',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (defaultCourseName) {
      setFormData(prev => ({ ...prev, course_name: defaultCourseName }));
    }
  }, [defaultCourseName]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      await axios.post(`${API_BASE_URL}/submit-enquiry/`, formData);
      setStatus({ type: 'success', message: 'Request submitted successfully. We will call you back soon!' });
      setFormData({ name: '', email: '', phone: '', course_name: defaultCourseName || '', country: 'India' });
      
      // Optionally trigger download logic here if there is a pdf file available in the backend
      
    } catch (error) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="modal fade"
      id="syllabusModalLabel"
      tabIndex={-1}
      aria-labelledby="syllabusModalTitle"
      aria-hidden="true"
      style={{ backdropFilter: "blur(8px)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content shadow-lg border-0">

          {/* Header */}
          <div className="modal-header bg-danger text-white">
            <h5 className="modal-title fw-bold" id="syllabusModalTitle">
              Download Syllabus
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>

          {/* Body */}
          <div className="modal-body p-4">
            <p className="mb-4 mt-0 text-muted">
              One of our advisors will call you in less than 45 minutes.
            </p>
            
            {status.message && (
              <div className={`alert alert-${status.type === 'success' ? 'success' : 'danger'}`}>
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3 text-start">
                <label className="fw-bold text-muted small mb-1"><span className="text-danger">*</span> Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3 text-start">
                <label className="fw-bold text-muted small mb-1"><span className="text-danger">*</span> Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="abc@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3 text-start">
                <label className="fw-bold text-muted small mb-1"><span className="text-danger">*</span> Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  placeholder="+91 90310 44395"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3 text-start">
                <label className="fw-bold text-muted small mb-1"><span className="text-danger">*</span> Course Name</label>
                <input
                  type="text"
                  name="course_name"
                  className="form-control"
                  placeholder="DevOps Training with Certification"
                  value={formData.course_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3 text-start">
                <label className="fw-bold text-muted small mb-1">Country</label>
                <select
                  name="country"
                  className="form-select"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option value="India">India</option>
                  <option value="USA">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div className="mb-4 text-start">
                <div className="border rounded p-2 d-inline-flex align-items-center bg-white" style={{ maxWidth: "300px" }}>
                  <input type="checkbox" id="recaptcha-syllabus-fake" className="me-3 ms-2" style={{ transform: "scale(1.5)" }} required />
                  <label htmlFor="recaptcha-syllabus-fake" className="mb-0">I'm not a robot</label>
                  <div className="ms-auto text-center" style={{ fontSize: "10px", lineHeight: "1" }}>
                    <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" width="32" className="mb-1" /><br/>
                    <span className="text-muted">reCAPTCHA</span><br/>
                    <a href="#" className="text-muted text-decoration-none">Privacy</a> - <a href="#" className="text-muted text-decoration-none">Terms</a>
                  </div>
                </div>
              </div>
              <div className="d-grid mt-2 text-start">
                <button type="submit" className="btn btn-danger text-white rounded ds-2 px-4 py-2" style={{ width: "fit-content" }} disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>

          {/* Footer */}
          <div className="modal-footer justify-content-center">
            <small className="text-muted">
              Or call us directly:{" "}
              <a
                href="tel:+919876543210"
                className="fw-bold text-danger text-decoration-none"
              >
                +91 98765 43210
              </a>
            </small>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SyllabusModal;
