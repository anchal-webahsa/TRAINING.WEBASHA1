import React, { useEffect } from 'react';

export default function Footer() {
    useEffect(() => {
        const videoModal = document.getElementById('videoModal');
        const videoFrame = document.getElementById('videoFrame');
        
        const handleShow = (event) => {
            const button = event.relatedTarget;
            const videoId = button.getAttribute('data-video-id');
            if (videoId && videoFrame) {
                videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            }
        };

        const handleHide = () => {
            if (videoFrame) {
                videoFrame.src = '';
            }
        };

        if (videoModal) {
            videoModal.addEventListener('show.bs.modal', handleShow);
            videoModal.addEventListener('hide.bs.modal', handleHide);
        }

        return () => {
            if (videoModal) {
                videoModal.removeEventListener('show.bs.modal', handleShow);
                videoModal.removeEventListener('hide.bs.modal', handleHide);
            }
        };
    }, []);

    return (
        <footer className="footer w-100" style={{ width: "100%", maxWidth: "100%" }}>
            {/* Mobile Floating Footer Navigation (WebAsha Technologies) */}
            <section className="footer-fixed mobile-only" aria-hidden="false">
                <div
                    className="mobile-footer bg-white shadow-lg border-top position-fixed bottom-0 w-100 py-2"
                    id="webashaFooter"
                    role="navigation"
                    aria-label="Mobile footer"
                >
                    {/* <ul className="mob-footer-nav d-flex justify-content-around align-items-center mb-0 list-unstyled">
                        <li className="mobile-menu text-center">
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener" 
                                className="text-dark small fw-semibold d-inline-block"
                                data-bs-toggle="modal"
                                data-bs-target="#enquiryModal"
                                aria-label="Enroll Now"
                            >
                                <i className="fa-solid fa-book-open fa-lg mb-1 d-block" aria-hidden="true" />
                                <span className="d-block">Enroll</span>
                            </a>
                        </li>
                        <li className="mobile-menu text-center">
                            <a
                                href="mailto:info@webasha.com"
                                className="text-dark small fw-semibold d-inline-block"
                                aria-label="Email"
                            >
                                <i className="fa-solid fa-envelope fa-lg mb-1 d-block" aria-hidden="true" />
                                <span className="d-block">Email</span>
                            </a>
                        </li>
                        <li className="whatsapp-floating text-center position-relative" aria-hidden="false">
                            <div
                                className="whatsapp-circle position-absolute top-0 start-50 translate-middle"
                                id="whatsappCTA"
                                role="button"
                                tabIndex={0}
                                aria-label="Chat with WebAsha on WhatsApp"
                            >
                                <a
                                    href="https://api.whatsapp.com/send?phone=918010911256&text=Hello%20WebAsha%20Technologies!%20I%20am%20interested%20in%20your%20courses."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Chat on WhatsApp"
                                    aria-label="Open WhatsApp chat"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 32 32"
                                        width={40}
                                        height={40}
                                        aria-hidden="true"
                                        focusable="false"
                                    >
                                        <path
                                            fill="#25D366"
                                            d="M16.04 2.003a13.96 13.96 0 0 0-12.07 21.372l-1.27 4.638 4.79-1.253A13.96 13.96 0 1 0 16.04 2.003z"
                                        />
                                        <path
                                            fill="#fff"
                                            d="M23.69 19.522c-.35-.175-2.1-1.037-2.42-1.157-.325-.125-.562-.175-.8.175-.237.35-.912 1.157-1.12 1.4-.212.237-.412.262-.762.087-.35-.175-1.475-.542-2.812-1.725-1.037-.925-1.737-2.075-1.937-2.425-.2-.35-.021-.537.15-.712.162-.162.35-.412.525-.625.175-.212.237-.35.35-.587.112-.237.05-.437-.025-.612-.075-.175-.8-1.937-1.1-2.65-.287-.7-.575-.6-.8-.6-.212 0-.45-.025-.687-.025s-.625.087-.95.437c-.325.35-1.237 1.212-1.237 2.95 0 1.737 1.262 3.412 1.437 3.65.175.237 2.487 3.787 6.025 5.312 3.537 1.525 3.537 1.012 4.175.95.637-.062 2.1-.862 2.4-1.7.3-.837.3-1.55.212-1.7-.087-.15-.325-.237-.675-.412z"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </li>
                        <li className="mobile-menu text-center">
                            <a
                                href="tel:+918010911256"
                                className="text-dark small fw-semibold d-inline-block"
                                aria-label="Call"
                            >
                                <i className="fa-solid fa-phone fa-lg mb-1 d-block" aria-hidden="true" />
                                <span className="d-block">Call</span>
                            </a>
                        </li>
                        <li className="mobile-menu text-center">
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener"
                                className="text-dark small fw-semibold d-inline-block"
                                data-bs-toggle="modal"
                                data-bs-target="#syllabusModalLabel"
                                aria-label="Brochure"
                            >
                                <i className="fa-solid fa-download fa-lg mb-1 d-block" aria-hidden="true" />
                                <span className="d-block">Brochure</span>
                            </a>
                        </li>
                    </ul> */}
                </div>
            </section>

            {/* Footer-Start */}
            <div className="container-fluid px-4 px-lg-5">
                <div className="row">
                    <div className="col-lg-4 col-sm-12 col-12 mb-5">
                        <div className="wraper">
                            <div className="footer-logo">
                                <a href="home" className="d-inline-block text-decoration-none">
                                    <img src="assets/imgs/footer-logo.png" alt="footer-logo" />
                                </a>
                            </div>
                            <div className="contact-list">
                                <h3 className="footer-heading">Contact With Us</h3>
                                <ul className="social-list list-unstyled">
                                    <li>
                                        <a href="https://www.facebook.com/WebAshaTech/">
                                            <img src="assets/imgs/contact-facebook.png" alt="facebook" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://x.com/ForteWebAsha">
                                            <img src="assets/imgs/contact-twiter.png" alt="twiter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/company/yourcompany">
                                            <img src="assets/imgs/contact-linkedin.png" alt="linkedin" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.pinterest.com/youraccount">
                                            <img src="assets/imgs/contact-pinterest.png" alt="pinterest" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://wa.me/yourphonenumber">
                                            <img src="assets/imgs/contact-whatsapp.png" alt="whatsapp" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/yourchannel">
                                            <img src="assets/imgs/contact-you-tube.png" alt="you-tube" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-sm-12 col-12">
                        <div className="row row-cols-2 row-cols-lg-5 g-4 g-lg-3">
                            <div className="col">
                                <h4 className="footer-title">Company</h4>
                                <ul className="services-list list-unstyled">
                                    <li><a href="https://training.webasha.com/gallery">Gallery</a></li>
                                    <li><a href="/about-us">About Us</a></li>
                                    <li><a href="https://www.webasha.com/blog/">Blog</a></li>
                                    <li><a href="https://training.webasha.com/job-oriented-course">Job Oriented Course</a></li>
                                    <li><a href="/contact-us">Contact Us</a></li>
                                    <li><a href="https://training.webasha.com/privacy-policy">Privacy Policy</a></li>
                                    <li><a href="https://training.webasha.com/terms-conditions">Terms of Conditions</a></li>
                                    <li><a href="https://training.webasha.com/refund-policy">Refund Policy</a></li>
                                </ul>
                            </div>
                            <div className="col">
                                <h4 className="footer-title">Offering</h4>
                                <ul className="services-list list-unstyled">
                                    <li><a href="https://training.webasha.com/live-virtual">Live Virtual</a></li>
                                    <li><a href="https://training.webasha.com/classroom">Classroom</a></li>
                                    <li><a href="https://training.webasha.com/corporate-training">Corporate Training</a></li>
                                    <li><a href="https://training.webasha.com/refer-and-earn">Refer and Earn</a></li>
                                </ul>
                            </div>
                            <div className="col">
                                <h4 className="footer-title">Resources</h4>
                                <ul className="services-list list-unstyled">
                                    <li><a href="https://training.webasha.com/courses-info">Courses info</a></li>
                                    <li><a href="https://training.webasha.com/tutorials">Tutorials</a></li>
                                    <li><a href="https://www.webasha.com/blog/">Blog</a></li>
                                    <li><a href="https://training.webasha.com/interview-tips">Interview</a></li>
                                </ul>
                            </div>
                            <div className="col">
                                <h4 className="footer-title">Company</h4>
                                <ul className="services-list list-unstyled">
                                    <li><a href="https://training.webasha.com/gallery">Gallery</a></li>
                                    <li><a href="/about-us">About Us</a></li>
                                    <li><a href="https://www.webasha.com/blog/">Blog</a></li>
                                    <li><a href="https://training.webasha.com/job-oriented-course">Job Oriented Course</a></li>
                                    <li><a href="/contact-us">Contact Us</a></li>
                                    <li><a href="https://training.webasha.com/privacy-policy">Privacy Policy</a></li>
                                    <li><a href="https://training.webasha.com/terms-conditions">Terms of Conditions</a></li>
                                    <li><a href="https://training.webasha.com/refund-policy">Refund Policy</a></li>
                                </ul>
                            </div>
                            <div className="col">
                                <h4 className="footer-title">Offering</h4>
                                <ul className="services-list list-unstyled">
                                    <li><a href="https://training.webasha.com/live-virtual">Live Virtual</a></li>
                                    <li><a href="https://training.webasha.com/classroom">Classroom</a></li>
                                    <li><a href="https://training.webasha.com/corporate-training">Corporate Training</a></li>
                                    <li><a href="https://training.webasha.com/refer-and-earn">Refer and Earn</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-4 g-4">
                    <div className="col-lg-6 col-sm-6 col-12">
                        <h3 className="footer-heading">Join Our Newsletter</h3>
                        <p className="desc">Get Our Whatsapp Notifications</p>
                        <form className="d-flex" role="search" action="/subscribe" method="POST">
                            <input
                                className="form-control me-2"
                                type="email"
                                placeholder="Enter your email"
                                aria-label="Search"
                                name="email"
                            />
                            <button className="btn btn-primary" type="submit">Subscribe</button>
                        </form>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-12">
                        <div className="contact-list">
                            <h3 className="footer-heading">Secure Payment</h3>
                            <ul className="payment-list list-unstyled">
                                <li><a href="payment-info#visa"><img src="assets/imgs/visa.png" alt="visa" /></a></li>
                                <li><a href="payment-info#mastercard"><img src="assets/imgs/mastercard.png" alt="mastercard" /></a></li>
                                <li><a href="payment-info#paypal"><img src="assets/imgs/paypal.png" alt="paypal" /></a></li>
                                <li><a href="payment-info#stripe"><img src="assets/imgs/stripe.png" alt="stripe" /></a></li>
                                <li><a href="payment-info#unionpay"><img src="assets/imgs/unionpay.png" alt="unionpay" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-12">
                        <div className="categories-list">
                            <h4 className="footer-title">Top Categories</h4>
                            <ul className="list-unstyled">
                                <li><a href="https://training.webasha.com/">Home</a></li>
                                <li><a href="/about-us">About Us</a></li>
                                <li><a href="https://www.webasha.com/blog/">Blog</a></li>
                                <li><a href="https://training.webasha.com/results">Results</a></li>
                                <li><a href="https://training.webasha.com/career">Career</a></li>
                                <li><a href="/contact-us">Contact Us</a></li>
                                <li><a href="https://training.webasha.com/sitemap">Sitemap</a></li>
                                <li><a href="https://training.webasha.com/web-development">Web Development</a></li>
                                <li><a href="https://training.webasha.com/data-science">Data Science</a></li>
                                <li><a href="https://training.webasha.com/mobile-app-development">Mobile App Development</a></li>
                                <li><a href="https://training.webasha.com/cloud-computing">Cloud Computing</a></li>
                                <li><a href="https://training.webasha.com/cybersecurity">Cybersecurity</a></li>
                                <li><a href="https://training.webasha.com/digital-marketing">Digital Marketing</a></li>
                                <li><a href="https://training.webasha.com/project-management">Project Management</a></li>
                                <li><a href="https://training.webasha.com/ui-ux-design">UI/UX Design</a></li>
                                <li><a href="https://training.webasha.com/software-testing">Software Testing</a></li>
                                <li><a href="https://training.webasha.com/devops">DevOps</a></li>
                                <li><a href="https://training.webasha.com/artificial-intelligence">Artificial Intelligence</a></li>
                                <li><a href="https://training.webasha.com/machine-learning">Machine Learning</a></li>
                                <li><a href="https://training.webasha.com/blockchain">Blockchain</a></li>
                                <li><a href="https://training.webasha.com/game-development">Game Development</a></li>
                                <li><a href="https://training.webasha.com/business-intelligence">Business Intelligence</a></li>
                            </ul>
                        </div>
                        <div className="categories-list">
                            <h4 className="footer-title">Top Courses</h4>
                            <ul className="list-unstyled">
                                <li><a href="https://training.webasha.com/full-stack-developer">Full Stack Developer</a></li>
                                <li><a href="https://training.webasha.com/data-analyst">Data Analyst</a></li>
                                <li><a href="https://training.webasha.com/android-development">Android Development</a></li>
                                <li><a href="https://training.webasha.com/aws-certified-solutions-architect">AWS Certified Solutions Architect</a></li>
                                <li><a href="https://training.webasha.com/ethical-hacking">Ethical Hacking</a></li>
                                <li><a href="https://training.webasha.com/seo-specialist">SEO Specialist</a></li>
                                <li><a href="https://training.webasha.com/pmp-certification">PMP Certification</a></li>
                                <li><a href="https://training.webasha.com/ux-designer">UX Designer</a></li>
                                <li><a href="https://training.webasha.com/java-developer">Java Developer</a></li>
                                <li><a href="https://training.webasha.com/python-programmer">Python Programmer</a></li>
                                <li><a href="https://training.webasha.com/react-developer">React Developer</a></li>
                                <li><a href="https://training.webasha.com/cloud-engineer">Cloud Engineer</a></li>
                                <li><a href="https://training.webasha.com/ai-engineer">AI Engineer</a></li>
                                <li><a href="https://training.webasha.com/devops-engineer">DevOps Engineer</a></li>
                                <li><a href="https://training.webasha.com/salesforce-administrator">Salesforce Administrator</a></li>
                                <li><a href="https://training.webasha.com/tableau-specialist">Tableau Specialist</a></li>
                                <li><a href="https://training.webasha.com/power-bi-developer">Power BI Developer</a></li>
                                <li><a href="https://training.webasha.com/cybersecurity-analyst">Cybersecurity Analyst</a></li>
                                <li><a href="https://training.webasha.com/digital-marketing-masterclass">Digital Marketing Masterclass</a></li>
                                <li><a href="https://training.webasha.com/web-design-fundamentals">Web Design Fundamentals</a></li>
                                <li><a href="https://training.webasha.com/software-development-bootcamp">Software Development Bootcamp</a></li>
                                <li><a href="https://training.webasha.com/blockchain-developer">Blockchain Developer</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="country-list">
                            <ul className="list-unstyled">
                                <li className="d-flex align-items-center gap-2">
                                    <img src="assets/imgs/flag-india.png" alt="India flag" width={22} />
                                    <p className="mb-0">
                                        <span>IND:</span>
                                        <a href="tel:+918010911256" className="text-decoration-none text-muted">+91 (8010) 911-256</a>
                                    </p>
                                </li>
                                <li className="d-flex align-items-center gap-2">
                                    <img src="assets/imgs/flag-india.png" alt="India flag" width={22} />
                                    <p className="mb-0">
                                        <span>IND:</span>
                                        <a href="tel:+918488584790" className="text-decoration-none text-muted">+91 (8488) 584-790</a>
                                    </p>
                                </li>
                                <li className="d-flex align-items-center gap-2">
                                    <img src="assets/imgs/flag-india.png" alt="India flag" width={22} />
                                    <p className="mb-0">
                                        <span>IND:</span>
                                        <a href="tel:+918488584627" className="text-decoration-none text-muted">+91 (8488) 584-627</a>
                                    </p>
                                </li>
                                <li className="d-flex align-items-center gap-2">
                                    <img src="assets/imgs/flag-usa.png" alt="USA flag" width={22} />
                                    <p className="mb-0">
                                        <span>USA:</span>
                                        <a href="tel:+19292439565" className="text-decoration-none text-muted">+1 (929) 243-9565</a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-11 mx-auto">
                        <p className="description text-center small mb-0">
                            All product names, logos, and brands are property of their respective owners.
                            WebAsha Technologies Pvt. Ltd. uses these names and images for identification
                            purposes only. Use of these names, logos, and brands does not imply endorsement.
                            This site is affiliated with some of the companies mentioned herein.
                        </p>
                    </div>
                </div>

                <div className="row align-items-center border-custom">
                    <div className="col-lg-6 col-sm-6 col-12">
                        <div className="categories-list mt-0">
                            <ul className="list-unstyled">
                                <li><a href="https://training.webasha.com/">Home</a></li>
                                <li><a href="/about-us">About Us</a></li>
                                <li><a href="https://www.webasha.com/blog/">Blog</a></li>
                                <li><a href="https://training.webasha.com/results">Results</a></li>
                                <li><a href="https://training.webasha.com/career">Career</a></li>
                                <li><a href="/contact-us">Contact Us</a></li>
                                <li><a href="https://training.webasha.com/new-internal-page">New Page</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 col-12">
                        <p className="copyright">
                            Copyright ©2014-24&nbsp;
                            <span className="text-decoration-underline">Forte WebAsha Technologies Pvt. Ltd.</span>
                            &nbsp;All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
            {/* Footer-End */}

            <a id="button" />

            {/* Video Modal */}
            <div
                className="play-video-modal modal fade"
                id="videoModal"
                tabIndex={-1}
                aria-hidden="true"
                style={{ backdropFilter: "blur(8px)" }}
            >
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content bg-black">
                        <div className="modal-header border-0 position-absolute w-100" style={{ top: 0, left: 0, zIndex: 1060, padding: '15px' }}>
                            <button 
                                type="button"
                                className="btn-close" 
                                data-bs-dismiss="modal" 
                                aria-label="Close"
                                style={{
                                    backgroundColor: 'white', 
                                    opacity: 1, 
                                    borderRadius: '50%', 
                                    padding: '10px',
                                    marginRight: 'auto',
                                    marginLeft: 'auto',
                                    position: 'absolute',
                                    right: '20px',
                                    top: '20px',
                                    width: '1em',
                                    height: '1em'
                                }} 
                            />
                        </div>
                        <div className="modal-body p-0">
                            <iframe
                                id="videoFrame"
                                width="100%"
                                height="100%"
                                allow="autoplay; fullscreen"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

