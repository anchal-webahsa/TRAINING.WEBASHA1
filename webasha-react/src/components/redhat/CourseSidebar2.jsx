// src/components/courses/redhat/rh124/CourseSidebar2.jsx
import { useState, useEffect } from "react";

const CourseSidebar2 = ({
    whatsappMsg: defaultMsg = "Hello%20WebAsha,%20I%20want%20Discounted%20Exam%20Voucher",
    whatsappNum: defaultNum = "+91-8010911256",
}) => {
    const [offer, setOffer] = useState(null);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/exam-voucher-offer/")
            .then(res => res.json())
            .then(data => {
                if (data && data.length > 0) {
                    // Try to find an active offer, otherwise take the first one or leave null
                    const activeOffer = data.find(item => item.is_active) || data[0];
                    if (activeOffer) {
                        setOffer(activeOffer);
                    }
                }
            })
            .catch(err => console.error("Error fetching voucher offer:", err));
    }, []);

    // Fallbacks
    const title = offer ? offer.title : "Discounted Certification Exam Voucher";
    const image = offer ? offer.image : "assets/imgs/course-subsciption-1.png";
    const num = offer ? offer.whatsapp_number.replace(/[^\w\s-]/gi, '') : defaultNum.replace(/[^\w\s-]/gi, ''); // remove special characters simply for the URL, though api format usually handles it
    const cleanNum = offer ? offer.whatsapp_number : defaultNum;
    const msg = offer ? encodeURIComponent(offer.whatsapp_message) : defaultMsg;
    const enrollLink = offer && offer.enroll_link ? offer.enroll_link : "#";

    return (
        <div className="card">
            <div className="mb-4 button-group">
                <h4 className="text-center mb-0">{title}</h4>
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
                                src={image}
                                alt="course-subsciption-1"
                                loading="lazy"
                            />
                        </div>

                        <div className="button-group" style={{ gap: "12px" }}>
                            {/* WhatsApp */}
                            <a
                                href={`https://api.whatsapp.com/send?phone=${cleanNum}&text=${msg}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-success"
                                aria-label="Chat on WhatsApp"
                            >
                                <i className="fab fa-whatsapp me-2" /> WhatsApp
                            </a>

                            {/* Enroll Now */}
                            <a
                                href={enrollLink}
                                className="btn btn-outline-primary"
                                data-bs-toggle="modal"
                                data-bs-target={enrollLink === "#" ? "#enquiryModal" : undefined}
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
};

export default CourseSidebar2;