// src/components/courses/redhat/rh124/CourseSidebar1.jsx

const CourseSidebar1 = ({
  formSrc   = "https://center.webasha.com/forms/wtl/5da88f1759099bb67f64c24d61fb2592",
  formTitle = "Next Cohort starts in 2 days",
}) => (
  <div className="col-lg-4 col-12 sticky-sidebar1" id="sticky-sidebar1">
    <div className="sticky-sidebar-container">

      {/* Form Card */}
      <div className="form-card">
        <h3 className="form-title text-center">{formTitle}</h3>
        <iframe
          width="100%"
          height="550px"
          src={formSrc}
          frameBorder="0"
          sandbox="allow-top-navigation allow-forms allow-scripts allow-same-origin allow-popups"
          title="Career Counseling Form"
        />
      </div>

      {/* Get a Quote */}
      <div className="get-quote">
        <div className="card">
          <h5 className="card-title mb-0">Want to skill up your team?</h5>
          <p className="card-text mb-0">for corporate and in-house training</p>
          <a
            href="#"
            className="btn btn-outline-primary btn-width"
            data-bs-toggle="modal"
            data-bs-target="#enquiryModal"
          >
            Get a Quote
          </a>
        </div>
      </div>

    </div>
  </div>
);

export default CourseSidebar1;