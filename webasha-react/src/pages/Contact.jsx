const Contact = () => {
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
                <div className="card-body">
                  <h4 className="card-title fw-semibold mb-3 text-center text-danger">Enquiry Form</h4>
                  <iframe
                    width="100%"
                    height="550px"
                    src="https://center.webasha.com/forms/wtl/5da88f1759099bb67f64c24d61fb2592"
                    frameBorder={0}
                    sandbox="allow-top-navigation allow-forms allow-scripts allow-same-origin allow-popups"
                    title="Career Counseling Form"
                  />
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