const EnquiryModal = () => {
  return (
    <div
      className="modal fade"
      id="enquiryModal"
      tabIndex={-1}
      aria-labelledby="enquiryModalLabel"
      aria-hidden="true"
      style={{ backdropFilter: "blur(8px)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content shadow-lg border-0">

          {/* Header */}
          <div className="modal-header bg-danger text-white">
            <h5 className="modal-title" id="enquiryModalLabel">
              📩 Contact Us
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>

          {/* Body */}
          <div className="modal-body p-3">
            <p className="mb-3 mt-0">
              One of our advisors will call you in less than 45 minutes.
            </p>
            <iframe
              width="100%"
              height="550px"
              src="https://center.webasha.com/forms/wtl/5da88f1759099bb67f64c24d61fb2592"
              frameBorder={0}
              sandbox="allow-top-navigation allow-forms allow-scripts allow-same-origin allow-popups"
              title="Career Counseling Form"
            />
          </div>

          {/* Footer */}
          <div className="modal-footer justify-content-center">
            <small className="text-muted">
              Or call us directly:{" "}
              <a
                href="tel:+918485847920"
                className="fw-bold text-danger text-decoration-none"
              >
                +91 8485847920
              </a>
            </small>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EnquiryModal;