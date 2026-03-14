// src/components/courses/redhat/rh124/SelfAssessment.jsx

const SelfAssessment = () => (
  <div className="container">
    <div className="row align-items-center">

      <div className="col-lg-8 col-sm-12 col-12">
        <div className="content">
          <h3>Self Assessment</h3>
          <p className="desc">
            Learn, Growth &amp; Test your skills with online Assessment Exam
            to achieve your certification goal
          </p>
          <a
            href="#"
            className="btn btn-width btn-white"
            data-bs-toggle="modal"
            data-bs-target="#enquiryModal"
          >
            Request A Call Back
          </a>
        </div>
      </div>

      <div className="col-lg-4 col-sm-12 col-12">
        <div className="bg-thumbnail">
          <img
            src="assets/img/icons/test.webp"
            alt="course-newsletter"
          />
        </div>
      </div>

    </div>
  </div>
);

export default SelfAssessment;