export default function About() {
  return (

<>
  <title>About Us | WebAsha Technologies - Training Institute in Pune</title>
  <meta
    name="description"
    content="Learn about WebAsha Technologies — a Pune-based IT training institute delivering practical, industry-aligned courses in Cloud, DevOps, Security and Networking with strong placement support."
  />
  <meta
    name="keywords"
    content="WebAsha About, WebAsha Technologies, IT Training Pune, DevOps Training, Cloud Training, Cybersecurity Training, Student Placements Pune"
  />
  <meta
    property="og:title"
    content="About Us | WebAsha Technologies - Training Institute in Pune"
  />
  <meta
    property="og:description"
    content="WebAsha Technologies provides hands-on IT training, certification prep and placement support in Pune. See our mission, team, milestones and impact."
  />
  
  <meta
    property="og:image"
    content="https://training.webasha.com/assets/img/about/main-about.webp"
  />
  <meta
    property="og:image:alt"
    content="About WebAsha Technologies - IT Training Institute Pune"
  />
  <meta name="twitter:title" content="About Us | WebAsha Technologies" />
  <meta
    name="twitter:description"
    content="Discover WebAsha's story, mission, training approach and placement success. Join our practical IT courses in Pune."
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n      /* tiny inline helpers to keep page tidy until main CSS loads */\n      .breadcrumb-bar { background: #000; }\n      .breadcrumb-bar .heading-main-1 { margin: 0; padding: 0; }\n    "
    }}
  />
  {/* Banner / Breadcrumb */}
  <div className="breadcrumb-bar text-center">
    <div className="container">
      <div className="row align-items-center py-3">
        <div className="col-12">
          <h1 className="heading-main-1 mb-2 text-white">About Us</h1>
          <nav aria-label="breadcrumb">
            <ol
              className="breadcrumb justify-content-center mb-0"
              style={{ background: "transparent" }}
            >
              <li className="breadcrumb-item">
                <a
                  href="/"
                  className="text-decoration-none text-white"
                  aria-label="Home"
                >
                  <svg
                    viewBox="0 0 20 18"
                    xmlns="http://www.w3.org/2000/svg"
                    width={15}
                    height={12}
                    role="img"
                    aria-hidden="true"
                  >
                    <path
                      d="M8 17.5V11.5H12V17.5H17V9.5H20L10 0.5L0 9.5H3V17.5H8Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="ms-1">Home</span>
                </a>
              </li>
              <li
                className="breadcrumb-item active text-white"
                aria-current="page"
              >
                About Us
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  {/* About intro */}
  <section
    className="section-header lazy-section mt-4 mb-4"
    aria-label="About WebAsha Technologies"
  >
    <div className="container">
      <div className="row align-items-center gy-4">
        <div className="col-lg-6">
          <h2 className="heading-main-1">
            We build real skills that lead to real jobs
          </h2>
          <p className="description mb-3">
            WebAsha Technologies is a Pune-based IT training institute
            specialising in hands-on courses for Cloud, DevOps, Linux, Security
            and Networking. Since our founding, we have focused on practical
            labs, exam-aligned preparation and strong placement support to
            ensure learners are job-ready.
          </p>
          <p className="description mb-0">
            Our instructors are industry practitioners and certified trainers
            who emphasise project-based learning, real-world scenarios and
            continuous mentoring.
          </p>
        </div>
        <div className="col-lg-6">
          <picture>
            <source
              srcSet="assets/img/about/about-hero.webp"
              type="image/webp"
            />
            <img
              src="assets/img/about/about-hero.jpg"
              alt="WebAsha Technologies classroom and lab"
              className="img-fluid rounded shadow-sm"
              loading="lazy"
            />
          </picture>
        </div>
      </div>
    </div>
  </section>
  {/* Mission / Vision / Approach */}
  <section className="lazy-section py-4">
    <div className="container">
      <div className="row gy-4">
        <div className="col-md-4">
          <h3 className="heading-main">Our Mission</h3>
          <p className="description">
            To empower learners with industry-relevant skills and certifications
            through practical, mentor-led training and real-world labs.
          </p>
        </div>
        <div className="col-md-4">
          <h3 className="heading-main">Our Vision</h3>
          <p className="description">
            To be a centre of excellence for applied IT education in India —
            bridging the skills gap between academia and industry.
          </p>
        </div>
        <div className="col-md-4">
          <h3 className="heading-main">Our Approach</h3>
          <p className="description">
            Hands-on labs, small cohorts, performance-based assessments, and a
            placement-driven curriculum validated by hiring partners.
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* Quick stats */}
  <section className="lazy-section py-4 bg-light">
    <div className="container">
      <div className="row text-center gy-3">
        <div className="col-6 col-md-3">
          <h4 className="mb-1">+5,000</h4>
          <p className="mb-0 small">Students Trained</p>
        </div>
        <div className="col-6 col-md-3">
          <h4 className="mb-1">92%</h4>
          <p className="mb-0 small">Pass / Success Rate</p>
        </div>
        <div className="col-6 col-md-3">
          <h4 className="mb-1">+300</h4>
          <p className="mb-0 small">Hiring Partners</p>
        </div>
        <div className="col-6 col-md-3">
          <h4 className="mb-1">10 yrs</h4>
          <p className="mb-0 small">Industry Experience</p>
        </div>
      </div>
    </div>
  </section>
  {/* Team highlight */}
  <section className="lazy-section py-5">
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="heading-main-1 mb-0">Meet the Team</h2>
        <a href="team.php" className="text-decoration-none">
          View full team →
        </a>
      </div>
      <div className="row g-3">
        <div className="col-sm-6 col-md-3 text-center">
          <img
            src="assets/img/team/ceo.webp"
            alt="Founder & CEO"
            className="img-fluid rounded-circle mb-2"
            width={120}
            height={120}
            loading="lazy"
          />
          <h5 className="mb-0">Asha Kulkarni</h5>
          <small className="text-muted d-block">Founder &amp; CEO</small>
        </div>
        <div className="col-sm-6 col-md-3 text-center">
          <img
            src="assets/img/team/lead-trainer.webp"
            alt="Lead Trainer"
            className="img-fluid rounded-circle mb-2"
            width={120}
            height={120}
            loading="lazy"
          />
          <h5 className="mb-0">Rohit Patil</h5>
          <small className="text-muted d-block">
            Head - DevOps &amp; Cloud
          </small>
        </div>
        <div className="col-sm-6 col-md-3 text-center">
          <img
            src="assets/img/team/placement-head.webp"
            alt="Placement Head"
            className="img-fluid rounded-circle mb-2"
            width={120}
            height={120}
            loading="lazy"
          />
          <h5 className="mb-0">Sneha Kulkarni</h5>
          <small className="text-muted d-block">Head - Placements</small>
        </div>
        <div className="col-sm-6 col-md-3 text-center">
          <img
            src="assets/img/team/instructor-security.webp"
            alt="Security Instructor"
            className="img-fluid rounded-circle mb-2"
            width={120}
            height={120}
            loading="lazy"
          />
          <h5 className="mb-0">Vikram Joshi</h5>
          <small className="text-muted d-block">Security Trainer</small>
        </div>
      </div>
    </div>
  </section>
  {/* Timeline / milestones */}
  <section className="lazy-section py-5 bg-light">
    <div className="container">
      <h2 className="heading-main-1">Milestones</h2>
      <div className="row g-3 mt-3">
        <div className="col-md-4">
          <h5>2014</h5>
          <p className="mb-0">
            WebAsha founded — started with Linux &amp; networking courses.
          </p>
        </div>
        <div className="col-md-4">
          <h5>2017</h5>
          <p className="mb-0">
            Expanded to cloud and DevOps training; first corporate partnerships.
          </p>
        </div>
        <div className="col-md-4">
          <h5>2021</h5>
          <p className="mb-0">
            Launched placement cell and remote labs; 1000+ students trained that
            year.
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* Testimonials CTA */}
  <section className="lazy-section py-5">
    <div className="container text-center">
      <h2 className="heading-main-1">What Our Students Say</h2>
      <p className="description mb-4">
        Real feedback from learners who transitioned to careers after training
        with us.
      </p>
      <a href="student-feedback.php" className="btn btn-outline-primary">
        Read Student Feedback
      </a>
    </div>
  </section>
  {/* Call to action */}
  <section className="py-5 course-comparison-section lazy-section visible">
    <div className="container text-center">
      <h2 className="heading-main-1">Join WebAsha — Upskill with Confidence</h2>
      <p className="description mb-3">
        Enroll in practical courses, get certified and start your IT career with
        our placement support.
      </p>
      <button
        type="button"
        className="btn btn-primary btn-width mx-auto d-inline-flex align-items-center"
        data-bs-toggle="modal"
        data-bs-target="#enquiryModal"
        aria-controls="enquiryModal"
        aria-label="Get in touch / Enroll"
      >
        Enroll Now
        <i className="fa fa-arrow-right ms-2" aria-hidden="true" />
      </button>
    </div>
  </section>
  
</>
);
}