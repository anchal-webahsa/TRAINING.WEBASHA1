// src/components/courses/redhat/rh124/CourseSidebar2.jsx

const CourseSidebar2 = ({
    whatsappMsg = "Hello%20WebAsha,%20I%20want%20Discounted%20Exam%20Voucher",
    whatsappNum = "+91-8010911256",
}) => (
    <div className="card">

        <div className="mb-4 button-group">
            <h4 className="text-center mb-0">Discounted Certification Exam Voucher</h4>
        </div>

        <div className="tab-content" id="pills-tabContent">
            <div
                className="tab-pane fade show active"
                id="pills-subsciption1"
                role="tabpanel"
                aria-labelledby="pills-subsciption1-tab"
                tabIndex="0"
            >
                <div className="course-content-inner">

                    <div className="figure-img">
                        <img
                            src="assets/imgs/course-subsciption-1.png"
                            alt="course-subsciption-1"
                            loading="lazy"
                        />
                    </div>

                    <div className="button-group" style={{ gap: "12px" }}>                        {/* WhatsApp */}
                        <a
                            href={`https://api.whatsapp.com/send?phone=${whatsappNum}&text=${whatsappMsg}`}
                            target="_blank"
                            rel="noopener"
                            className="btn btn-success"
                            aria-label="Chat on WhatsApp"
                        >
                            <i className="fab fa-whatsapp me-2" /> WhatsApp
                        </a>

                        {/* Enroll Now */}
                        <a
                            href="#"
                            className="btn btn-outline-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#enquiryModal"
                            aria-label="Enroll in Course"
                        >
                            Enroll Now <i className="fa fa-arrow-right ms-2" />
                        </a>
                    </div>

                </div>
            </div>
        </div>

    </div>
);

export default CourseSidebar2;