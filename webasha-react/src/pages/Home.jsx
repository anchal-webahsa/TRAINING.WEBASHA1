
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TextReviews from "../components/common/TextReviews";

import BrandsSection from "../components/common/BrandsSection";

import OurChoose from "../components/common/OurChoose";

import RelatedCourses from "../components/redhat/RelatedCourses";
import InstructorList from "../components/common/InstructorList";
import CareerStraight from "../components/redhat/CareerStraight";



export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  return (
    <>
      <title>
        WebAsha Technologies | RHCSA, RHCE, AWS, Python, DevOps &amp; CCNA Training
        in Pune
      </title>
      <meta
        name="description"
        content="WebAsha Technologies is Pune's leading IT training institute for RHCSA, RHCE, AWS, Python, DevOps, CCNA, SEO, and Graphic Design. Offering hands-on courses, certified trainers, and official certification exams for career growth in 2025."
      />
      <meta
        name="keywords"
        content="RHCSA Training Pune, RHCE Certification, AWS Course Pune, Python Training, DevOps Institute Pune, CCNA Classes, Red Hat Exam Center, IT Training Pune, Graphic Design Course"
      />
      <link rel="canonical" href="/" />
      <meta
        property="og:title"
        content="WebAsha Technologies | RHCSA, RHCE, AWS, Python, DevOps & CCNA Training in Pune"
      />
      <meta
        property="og:description"
        content="Discover top IT training at WebAsha Technologies in Pune. Specializing in RHCSA, RHCE, AWS, Python, DevOps, CCNA, SEO, and Graphic Design with hands-on learning and certification support."
      />
      <meta
        property="og:url"
        content="/"
      />
      <meta
        property="og:image"
        content="/assets/img/webasha-training.webp"
      />
      <meta
        property="og:image:alt"
        content="WebAsha Technologies Training and Certification in Pune"
      />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="WebAsha Technologies | RHCSA, RHCE, AWS, Python, DevOps & CCNA Training in Pune"
      />
      <meta
        name="twitter:description"
        content="Premier IT training in Pune for RHCSA, RHCE, AWS, Python, DevOps, CCNA, and more. Enroll for expert-led courses and certifications at WebAsha Technologies."
      />
      <meta
        name="twitter:image"
        content="/assets/img/webasha-training.webp"
      />

      {/* Banner-Start */}
      <section className="banner" aria-label="WebAsha Technologies Hero Banner">
        <div className="container">
          <Slider {...settings} className="banner-slider">
            {/* Slide 1 */}
            <div className="banner-items">
              <div className="row align-items-center">
                <div className="col-lg-6 col-sm-12 col-12">
                  <h1 className="banner-title">
                    <span className="red-color">Upgrade</span> Your Skills
                  </h1>
                  <h2>with Hands-On IT Certification Courses</h2>
                  <h4>Master Linux, Cloud, DevOps &amp; Cybersecurity with Experts</h4>
                  <p className="description">
                    Join <strong>WebAsha Technologies</strong>, Pune's trusted IT
                    training institute, offering globally recognized certifications.
                    Get hands-on experience through real-world labs and live
                    projects designed to make you job-ready.
                  </p>
                  <a href="all-courses" className="btn btn-width btn-primary text-decoration-none">
                    Explore Courses
                  </a>
                  <div className="reviews mt-3">
                    <img src="/assets/imgs/banner-review.png" className="rated-img" loading="lazy" alt="Student reviews of WebAsha Technologies" />
                    <div className="rated-reviews mt-2">
                      <p className="mb-0">Trusted by 15,000+ learners</p>
                      <p className="desc">
                        <img src="/assets/imgs/star-fill.png" className="icon" loading="lazy" alt="star rating" />
                        4.9/5 Overall Rating
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12 col-12">
                  <div className="content mb-3">
                    <h5>Real Projects. Real Skills.</h5>
                    <p>Gain confidence by working on live projects and simulation labs guided by certified trainers.</p>
                    <span className="red-color">4.9 ★</span>
                  </div>
                  <div className="banner-figure">
                    <img src="/assets/img/banner-thumbnail.png" alt="WebAsha Technologies classroom training banner" loading="lazy" />
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="banner-items">
              <div className="row align-items-center">
                <div className="col-lg-6 col-sm-12 col-12">
                  <h1 className="banner-title">
                    <span className="red-color">Learn</span> from the <br /> Certified Instructors
                  </h1>
                  <h4>Advance Your Skills with Practical, Job-Oriented Training</h4>
                  <p className="description">
                    At <strong>WebAsha Technologies</strong>, we help you become a
                    certified professional in Red Hat, EC-Council, OffSec, AWS, and
                    DevOps. Experience an interactive learning environment built for
                    real success.
                  </p>
                  <a href="about-us" className="btn btn-width btn-primary text-decoration-none">
                    Know More
                  </a>
                  <div className="reviews mt-3">
                    <img src="/assets/imgs/banner-review.png" className="rated-img" loading="lazy" alt="Student satisfaction rating" />
                    <div className="rated-reviews mt-2">
                      <p className="mb-0">Recognized by Top IT Companies</p>
                      <p className="desc">
                        <img src="/assets/imgs/star-fill.png" className="icon" loading="lazy" alt="star rating" />
                        4.8/5 Satisfaction Score
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12 col-12">
                  <div className="content mb-3">
                    <h5>Hands-on Training Approach</h5>
                    <p>Experience practical, lab-based learning that helps you apply concepts confidently in real environments.</p>
                    <span className="red-color">4.9 ★</span>
                  </div>
                  <div className="banner-figure">
                    <img src="/assets/imgs/banner-thumbnail-1.png" loading="lazy" alt="WebAsha Technologies student learning banner" />
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/* Banner-End */}

      {/* Company-Start */}
      <section
        className="company lazy-section"
        aria-label="Authorized Training and Certification Partners of WebAsha Technologies"
      >
        <div className="container">
          <div className="company-card text-center">
            <h2 className="mb-4">
              WebAsha Technologies is an{" "}
              <span className="red-color">
                Authorized Training &amp; Certification Exam Center
              </span>{" "}
              for Leading Global IT Vendors
            </h2>
            <p className="description mb-4">
              We take pride in being recognized as an official training and
              certification partner of some of the most trusted names in the
              technology industry. Our authorized partnerships ensure that every
              learner receives vendor-aligned training, authentic course materials,
              and certification exams directly from accredited sources.
            </p>
            <div className="card-wraper d-flex flex-wrap justify-content-center align-items-center gap-2 mb-2">
              <div className="card-logo card p-2">
                <img src="/assets/img/icons/home/1.png" loading="lazy" width={120} height="auto" alt="Red Hat Authorized Training Partner Logo" />
              </div>
              <div className="card-logo card p-2">
                <img src="/assets/img/icons/home/2.png" loading="lazy" width={120} height="auto" alt="EC-Council Accredited Training Center Logo" />
              </div>
              <div className="card-logo card p-2">
                <img src="/assets/img/icons/home/3.png" loading="lazy" width={120} height="auto" alt="OffSec Authorized Learning Partner Logo" />
              </div>
              <div className="card-logo card p-2">
                <img src="/assets/img/icons/home/4.png" loading="lazy" width={120} height="auto" alt="CompTIA Training Partner Logo" />
              </div>
              <div className="card-logo card p-2">
                <img src="/assets/img/icons/home/5.png" loading="lazy" width={120} height="auto" alt="Microsoft Learning Partner Logo" />
              </div>
              <div className="card-logo card p-2">
                <img src="/assets/img/icons/home/6.png" loading="lazy" width={120} height="auto" alt="AWS Academy Training Partner Logo" />
              </div>
              <div className="card-logo card p-2">
                <img src="/assets/img/icons/home/7.png" loading="lazy" width={120} height="auto" alt="Cisco Networking Academy Partner Logo" />
              </div>
              <div className="card-logo card p-2">
                <img src="/assets/img/icons/home/8.png" loading="lazy" width={120} height="auto" alt="Google Cloud Training Partner Logo" />
              </div>
              <div className="card-logo card p-2">
                <img src="/assets/img/icons/home/9.png" loading="lazy" width={120} height="auto" alt="Python Institute Partner Logo" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Company-End */}

      {/* Training-Provider-Start */}
      <section className="training-provider lazy-section" aria-label="About WebAsha Technologies">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-12">
              <div className="figure">
                <img src="/assets/imgs/training-provider.png" width="100%" loading="lazy" alt="WebAsha Technologies Training Institute in Pune" />
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-12">
              <div className="content">
                <h2 className="heading-main-1 mb-3">
                  Welcome to <span className="red-color">WebAsha Technologies</span>
                </h2>
                <h3>
                  A Trusted Name in{" "}
                  <strong>Linux, Cloud, and Cybersecurity Training</strong> Across India
                </h3>
                <p className="description">
                  <strong>WebAsha Technologies</strong> is recognized as one of
                  India's most reliable and industry-driven IT training institutes.
                  Our mission is to empower students and professionals with
                  hands-on, job-oriented training that bridges the gap between
                  academic learning and real-world IT careers.
                </p>
                <p className="description">
                  We specialize in{" "}
                  <em>Linux Administration, Cloud Computing, Ethical Hacking, Cybersecurity, and DevOps</em>.
                  Each course is designed and delivered by certified experts with
                  years of enterprise experience. Through practical, instructor-led
                  sessions, we ensure learners not only gain deep technical
                  knowledge but also the skills required to succeed in globally
                  recognized <strong>vendor certification exams</strong>.
                </p>
                <p className="description">
                  Whether you are a beginner exploring IT or a professional
                  advancing your career, our{" "}
                  <strong>customized learning paths, live virtual classes, corporate training programs</strong>,
                  and <strong>real-time lab access</strong> make your learning journey
                  effective and flexible.
                </p>
                <p className="description">
                  With a team of dedicated instructors and mentors having more than
                  six years of practical experience,{" "}
                  <strong>WebAsha Technologies</strong> is committed to providing
                  world-class training quality that aligns with the latest industry
                  standards and IT certifications.
                </p>
                <a href="about-us" className="btn btn-outline-primary btn-width text-decoration-none">
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Training-Provider-End */}

      {/* Why-Choose-Start */}
      <section className="why-choose lazy-section" aria-label="Why Choose WebAsha Technologies">
        <div className="container">
          <h2 className="heading-main-1 text-center mb-5">
            <span className="red-color">Why Choose</span> WebAsha Technologies?
          </h2>
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="card text-center">
                <img src="/assets/imgs/why-choose-icon-1.png" loading="lazy" className="card-icon mb-3 mx-auto" width={53} alt="Expert Trainers at WebAsha Technologies" />
                <div className="card-body">
                  <h5 className="card-title">Expert Trainers</h5>
                  <p className="card-text">Learn directly from certified professionals with years of industry experience. Our trainers bring real-world insights, making complex concepts easy to understand.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="card text-center">
                <img src="/assets/imgs/why-choose-icon-2.png" loading="lazy" className="card-icon mb-3 mx-auto" width={53} alt="Flexible Schedule" />
                <div className="card-body">
                  <h5 className="card-title">Flexible Schedule</h5>
                  <p className="card-text">We understand your time matters. Choose from weekday or weekend batches that fit your study, work, or personal schedule.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="card text-center">
                <img src="/assets/imgs/why-choose-icon-3.png" loading="lazy" className="card-icon mb-3 mx-auto" width={53} alt="Hands-on Training" />
                <div className="card-body">
                  <h5 className="card-title">Hands-on Training</h5>
                  <p className="card-text">Every course includes practical assignments and real-world lab exercises to build confidence and prepare you for on-the-job challenges.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="card text-center">
                <img src="/assets/imgs/why-choose-icon-4.png" loading="lazy" className="card-icon mb-3 mx-auto" width={53} alt="Full Day Lab Support" />
                <div className="card-body">
                  <h5 className="card-title">Full Day Lab Support</h5>
                  <p className="card-text">Access our labs all day long for additional practice and experimentation. Our technical team is available to assist you whenever you need help.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="card text-center">
                <img src="/assets/imgs/why-choose-icon-5.png" loading="lazy" className="card-icon mb-3 mx-auto" width={53} alt="Affordable Fee Structure" />
                <div className="card-body">
                  <h5 className="card-title">Affordable Fee</h5>
                  <p className="card-text">Quality training doesn't have to be expensive. We offer competitive pricing and flexible payment options for students and professionals alike.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="card text-center">
                <img src="/assets/imgs/why-choose-icon-6.png" loading="lazy" className="card-icon mb-3 mx-auto" width={53} alt="Post Training Support" />
                <div className="card-body">
                  <h5 className="card-title">Post-Training Support</h5>
                  <p className="card-text">Even after course completion, we offer mentorship, career guidance, and doubt-clearing sessions to help you succeed in your professional journey.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="card text-center">
                <img src="/assets/imgs/why-choose-icon-7.png" loading="lazy" className="card-icon mb-3 mx-auto" width={53} alt="Global Certification Preparation" />
                <div className="card-body">
                  <h5 className="card-title">Global Certification</h5>
                  <p className="card-text">Our training programs are aligned with globally recognized certifications, enhancing your credibility and career prospects worldwide.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="card text-center">
                <img src="/assets/imgs/why-choose-icon-8.png" loading="lazy" className="card-icon mb-3 mx-auto" width={53} alt="Interview and Placement Assistance" />
                <div className="card-body">
                  <h5 className="card-title">Interview &amp; Placement</h5>
                  <p className="card-text">Get resume-building assistance, mock interviews, and placement opportunities with our partnered IT companies to kickstart your career.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why-Choose-End */}

      {/* Experts-Counting-Start */}
      <section className="experts-counting lazy-section" aria-label="WebAsha Technologies Global Achievements">
        <div className="container">
          <div className="card py-4">
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="content text-center">
                  <h2><span id="counter1">0</span>+</h2>
                  <p className="desc">Certified <br /> Industry Experts</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="content text-center">
                  <h2><span id="counter2">0</span>+</h2>
                  <p className="desc">Comprehensive <br /> Job-Oriented Courses</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="content text-center">
                  <h2><span id="counter3">0</span>+</h2>
                  <p className="desc">Hands-on Labs &amp; <br /> Learning Facilities</p>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="content text-center">
                  <h2><span id="counter4">0</span>+</h2>
                  <p className="desc">Countries <br /> &amp; Growing Reach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Experts-Counting-End */}

      {/* Our-Choose-Start */}
      <OurChoose />
      {/* Our-Choose-End */}

      {/* Related Courses */}
      <RelatedCourses identifier="related_courses" />

      {/* Related Courses End */}

      {/* Our-Expert-Services-Start */}
      <div className="our-expert-services lazy-section" aria-label="Our Expert Services">
        <div className="container">
          <div className="section-header text-center mb-4">
            <span className="section-badge">Expert Services</span>
            <div className="row align-items-center">
              <div className="col-lg-5 col-sm-12 col-12">
                <div className="content">
                  <h2 className="text-white">Accelerate Your Career with Our Expert Services</h2>
                  <p className="description text-white">
                    Our immersive courses in booming fields like Data Science, AI,
                    and Cloud Computing provide you with the practical knowledge and
                    experience you need to succeed in the ever-evolving job market.
                  </p>
                </div>
              </div>
              <div className="col-lg-7 col-sm-12 col-12">
                <div className="our-expert-wraper">
                  <div className="our-expert-card border-one">
                    <div className="icon"><img src="/assets/imgs/our-expert-icon-1.png" alt="our-expert-icon" /></div>
                    <div className="card-content">
                      <h3 className="red-color">Personalized Career Coaching</h3>
                      <p className="description">Network with 450,000+ Alumni</p>
                    </div>
                  </div>
                  <div className="our-expert-card border-two">
                    <div className="icon"><img src="/assets/imgs/our-expert-icon-2.png" alt="our-expert-icon" /></div>
                    <div className="card-content">
                      <h3 className="red-color">Personalized Career Coaching</h3>
                      <p className="description">1:1 Mentorship by Experts</p>
                    </div>
                  </div>
                </div>
                <div className="our-expert-wraper">
                  <div className="our-expert-card border-two">
                    <div className="icon"><img src="/assets/imgs/our-expert-icon-3.png" alt="our-expert-icon" /></div>
                    <div className="card-content">
                      <h3 className="red-color">Global Alumni Network</h3>
                      <p className="description">1:1 Mentorship by Experts</p>
                    </div>
                  </div>
                  <div className="our-expert-card border-one">
                    <div className="icon"><img src="/assets/imgs/our-expert-icon-4.png" alt="our-expert-icon" /></div>
                    <div className="card-content">
                      <h3 className="red-color">Dedicated Job Support</h3>
                      <p className="description">1:1 Mentorship by Experts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our-Expert-Services-End */}

      {/* Success-Speaks-Start */}
      <div className="success-speaks">
        <div className="container">
          <h2 className="heading-main-1 text-center mb-4">
            <span className="red-color">Success</span> Speaks Volume
          </h2>
          <div className="success-speaks-video">
            <img src="/assets/imgs/success-speaks.png" alt="" />
            <div className="thumbnail-position">
              <button
                type="button"
                className="btn play-video border-0"
                data-bs-toggle="modal"
                data-bs-target="#videoModal"
              >
                <img src="/assets/imgs/video-play.png" alt="video-play" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Success-Speaks-End */}

      {/* Video-Modal */}
      <div
        className="play-video-modal modal fade"
        id="videoModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="videoModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content bg-transparent border-0">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
              <i className="fa-solid fa-xmark" />
            </button>
            <iframe
              id="youtubeVideo"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/463xAeaE9Qo?si=5VYG770Z4Qn13fSb?enablejsapi=1&autoplay=1&mute=0"
              title="YouTube video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* Career-Straight-Start */}
      <CareerStraight />
      {/* Career-Straight-End */}

      {/* Testimonials */}
      <TextReviews />
      {/* Testimonials End */}

      {/* Brands */}
      <BrandsSection />
      {/* Brands End */}

      {/* Learn-Experts-Start */}
      <InstructorList />
      {/* Learn-Experts-End */}

      {/* Learn-Free-Courses-Start */}
      <section className="learn-free-courses lazy-section" aria-label="Learn Free with WebAsha Technologies App">
        <div className="container">
          <div className="section-header text-center mb-4">
            <span className="section-badge">Our LMS</span>
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-12 col-12">
                <h2 className="heading-main-1 mb-2">
                  Learn Free on Our <span className="red-color">LMS App</span>
                </h2>
                <p className="description mb-0">
                  Access free lessons, tutorials, and certification previews anytime. Study on the go with the{" "}
                  <strong>WebAsha Technologies Learning App</strong>.
                </p>
                <div className="learn-free-courses-items text-center mt-4">
                  <img src="/assets/img/qr-lms.webp" loading="lazy" alt="QR code to download WebAsha Technologies learning app" />
                  <div className="btn-img mt-3 d-flex justify-content-center gap-2">
                    <a href="#" aria-label="Download on App Store">
                      <img src="/assets/imgs/app-store.png" loading="lazy" alt="App Store download button" />
                    </a>
                    <a href="#" aria-label="Get it on Google Play">
                      <img src="/assets/imgs/google-play.png" loading="lazy" alt="Google Play download button" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 col-12">
                <div className="bg-thumbnail text-center">
                  <img src="/assets/img/lms-app.png" loading="lazy" width="100%" alt="Mobile view of WebAsha Technologies free learning app" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Learn-Free-Courses-End */}

      {/* Newsletter-Start */}
      <section className="newsletter" aria-label="Book Free Counselling at WebAsha Technologies">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-sm-12 col-12">
              <div className="content">
                <h3>
                  Book Your{" "}
                  <span className="red-color">Free Counselling Session</span> Today
                </h3>
                <p className="desc">
                  Have questions about career paths, certification exams, or course
                  selection? Talk directly with our <strong>expert mentors</strong>{" "}
                  for personalized guidance.
                </p>
                <a
                  href="#"
                  className="btn btn-width btn-white text-decoration-none"
                  data-bs-toggle="modal"
                  data-bs-target="#enquiryModal"
                  aria-label="Request a Call Back"
                >
                  Request a Call Back
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-12">
              <div className="bg-thumbnail text-center">
                <img src="/assets/imgs/newsletter-img.png" loading="lazy" width="100%" alt="Student counselling session illustration - WebAsha Technologies" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Newsletter-End */}

      <a id="button" />
    </>
  );
}
