import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../api/config';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course_name: '',
    country: 'India',
    city: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      await axios.post(`${API_BASE_URL}/submit-contact/`, formData);
      setStatus({ type: 'success', message: 'Message sent successfully. We will be in touch!' });
      setFormData({ name: '', email: '', phone: '', course_name: '', country: 'India', city: '' });
    } catch (error) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-bar text-center">
        <div className="container">
          <div className="row align-items-center py-3">
            <div className="col-12">
              <h1 className="heading-main-1 mb-2 text-white">Contact Us</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center mb-0" style={{ background: "transparent" }}>
                  <li className="breadcrumb-item">
                    <a href="/" className="text-decoration-none text-white" aria-label="Home">
                      <svg viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg" width={15} height={12} role="img" aria-hidden="true">
                        <path d="M8 17.5V11.5H12V17.5H17V9.5H20L10 0.5L0 9.5H3V17.5H8Z" fill="currentColor" />
                      </svg>
                      <span className="ms-1">Home</span>
                    </a>
                  </li>
                  <li className="breadcrumb-item active text-white" aria-current="page">Contact</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">

            {/* LEFT — Info Cards */}
            <div className="col-lg-7">
              <div className="row g-3">

                <div className="col-md-6">
                  <div className="card h-100 shadow-sm border-0">
                    <div className="card-body text-center">
                      <div className="mb-2 fs-1 text-danger"><i className="bi bi-house-door-fill" /></div>
                      <h5 className="card-title fw-semibold mb-2">Registered Address</h5>
                      <p className="card-text small text-muted">
                        First Floor, Laxmi Kunj (Beside Maha Nagar CO-Bank),<br />
                        Nagar Road, Chandan Nagar, Kharadi, Pune - 411014
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card h-100 shadow-sm border-0">
                    <div className="card-body text-center">
                      <div className="mb-2 fs-1 text-danger"><i className="bi bi-envelope-fill" /></div>
                      <h5 className="card-title fw-semibold mb-2">Email ID</h5>
                      <p className="card-text small text-muted mb-1">enquiry@webasha.com</p>
                      <p className="card-text small text-muted mb-1">training@webasha.com</p>
                      <p className="card-text small text-muted">info@webasha.com</p>
                    </div>
                  </div>
                </div>

                {[
                  { flag: "in", number: "+91 (801) 091-1256", label: "General Enquiry" },
                  { flag: "in", number: "+91 (848) 584-7920", label: "Admissions" },
                  { flag: "in", number: "+91 (977) 399-8597", label: "Support" },
                  { flag: "us", number: "+1 (929) 243-9565",  label: "International Enquiries" },
                ].map((p, i) => (
                  <div className="col-md-6" key={i}>
                    <div className="card shadow-sm border-0">
                      <div className="card-body d-flex align-items-center">
                        <img src={`https://flagcdn.com/w40/${p.flag}.png`} alt={`${p.flag.toUpperCase()} Flag`} className="me-3 rounded" width={40} />
                        <div>
                          <p className="fw-semibold mb-0">{p.flag.toUpperCase()} : {p.number}</p>
                          <small className="text-muted">{p.label}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>

            {/* RIGHT — Enquiry Form */}
            <div className="col-lg-5">
              <div className="card shadow border-0">
                <div className="card-body p-4">
                  <h4 className="card-title fw-semibold mb-3 text-center text-danger">Contact Form</h4>
                  
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
                        placeholder="Email Address"
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
                        placeholder="Phone Number"
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
                        placeholder="1 Year Diploma in Cyber Security"
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
                    <div className="mb-3 text-start">
                      <label className="fw-bold text-muted small mb-1">City</label>
                      <input
                        type="text"
                        name="city"
                        className="form-control"
                        value={formData.city}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-4 text-start">
                      <div className="border rounded p-2 d-inline-flex align-items-center bg-white" style={{ maxWidth: "300px" }}>
                        <input type="checkbox" id="recaptcha-fake-contact" className="me-3 ms-2" style={{ transform: "scale(1.5)" }} required />
                        <label htmlFor="recaptcha-fake-contact" className="mb-0">I'm not a robot</label>
                        <div className="ms-auto text-center" style={{ fontSize: "10px", lineHeight: "1" }}>
                          <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" width="32" className="mb-1" /><br/>
                          <span className="text-muted">reCAPTCHA</span><br/>
                          <a href="#" className="text-muted text-decoration-none">Privacy</a> - <a href="#" className="text-muted text-decoration-none">Terms</a>
                        </div>
                      </div>
                    </div>
                    <div className="d-grid mt-2">
                      <button type="submit" className="btn btn-danger btn-lg text-white rounded ds-2" disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Submit'}
                      </button>
                    </div>
                  </form>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-header lazy-section mt-4 mb-4" aria-label="Contact WebAsha Technologies">
        <div className="container">
          <h3 className="heading-main-1">Find us</h3>
          <p className="description">We are located in Pune. Use the map for directions or contact us to schedule an on-site visit.</p>
          <div className="shadow-sm rounded">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.256536118395!2d73.92683627515537!3d18.562469667893055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c13b19d251b1%3A0x811aff287e0aff85!2sWebAsha%20Technologies!5e0!3m2!1sen!2sin!4v1687081450745!5m2!1sen!2sin"
              width="100%"
              height={450}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="WebAsha Technologies Location"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 text-center lazy-section">
        <div className="container">
          <h2 className="heading-main-1">Want a callback?</h2>
          <p className="description mb-3">Provide a phone number in the form above and we'll call you back at a convenient time.</p>
          <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#enquiryModal">
            Request Callback
          </button>
        </div>
      </section>
    </>
  );
};

export default Contact;