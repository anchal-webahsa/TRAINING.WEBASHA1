import React from "react";

const Rh124Banner = ({ bannerData }) => {
  const getParsedVideoId = (data) => {
    if (!data) return "ERtp4zua0-s";
    let url = data.youtube_video_url;
    if (url) {
      // Extract video ID from full URL
      const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);
      if (match && match[1]) {
        return match[1];
      }
    }
    return data.youtube_video_id || "ERtp4zua0-s";
  };

  const videoId = getParsedVideoId(bannerData);

  return (
    <section className="banner-course">
      <div className="container">
        <div className="row align-items-center" style={{ overflow: "hidden" }}>
          {/* Left Column */}
          <div className="col-lg-8 col-sm-12" style={{ minWidth: 0 }}>
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb navigation">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a
                    href="/"
                    className="text-decoration-none"
                    aria-label="Go to homepage"
                  >
                    <svg
                      viewBox="0 0 20 18"
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={18}
                      aria-hidden="true"
                    >
                      <path
                        d="M8 17.5V11.5H12V17.5H17V9.5H20L10 0.5L0 9.5H3V17.5H8Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {bannerData ? bannerData.breadcrumb_active : "RH124 v10 Certification Training"}
                </li>
              </ol>
            </nav>
            {/* Banner Content */}
            <div className="banner-course-content" style={{ maxWidth: "100%", wordWrap: "break-word" }}>
              {/* Course At-a-Glance */}
              <section className="at-a-glance text-light" style={{ maxWidth: "100%" }}>
                <h1 className="heading-main-1 text-white" style={{ wordBreak: 'break-word' }}>
                  {bannerData ? bannerData.heading : "RH124 v10 Certification Training: Essential Linux System Administration Skills"}
                </h1>
                {/* Review Card */}
                <div className="banner-review-card d-flex flex-wrap gap-3" style={{ maxWidth: "100%" }}>
                  <div className="enrolled-group d-flex align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="#FFD700"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      role="img"
                      className="me-2"
                    >
                      <path d="M16 11c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm-8 0c1.7 0 3-1.3 3-3S9.7 5 8 5 5 6.3 5 8s1.3 3 3 3zm0 2c-2.3 0-7 1.2-7 3.5V20h14v-3.5C15 14.2 10.3 13 8 13zm8 0c-.3 0-.7 0-1 .1 1.2.8 2 2.1 2 3.4V20h6v-3.5c0-2.3-4.7-3.5-7-3.5z" />
                    </svg>
                    <span>{bannerData ? bannerData.enrolled_count : "3,850+ Participants Enrolled"}</span>
                  </div>
                  {/* Rating Stars */}
                  <ul className="list-unstyled rating-list d-flex align-items-center m-0">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        role="img"
                        fill="#FFD700"
                      >
                        <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.401 8.178L12 18.897l-7.335 3.856 1.401-8.178L.132 9.21l8.2-1.192z" />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        role="img"
                        fill="#FFD700"
                      >
                        <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.401 8.178L12 18.897l-7.335 3.856 1.401-8.178L.132 9.21l8.2-1.192z" />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        role="img"
                        fill="#FFD700"
                      >
                        <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.401 8.178L12 18.897l-7.335 3.856 1.401-8.178L.132 9.21l8.2-1.192z" />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        role="img"
                        fill="#FFD700"
                      >
                        <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.401 8.178L12 18.897l-7.335 3.856 1.401-8.178L.132 9.21l8.2-1.192z" />
                      </svg>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        role="img"
                      >
                        <defs>
                          <clipPath id="halfStar">
                            <rect x={0} y={0} width={12} height={24} />
                          </clipPath>
                        </defs>
                        <path
                          d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.401 8.178L12 18.897l-7.335 3.856 1.401-8.178L.132 9.21l8.2-1.192z"
                          fill="#FFD700"
                          clipPath="url(#halfStar)"
                        />
                        <path
                          d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.401 8.178L12 18.897l-7.335 3.856 1.401-8.178L.132 9.21l8.2-1.192z"
                          fill="#ddd"
                        />
                      </svg>
                    </li>
                    <li>
                      <p className="mb-0">{bannerData ? bannerData.rating_text : "4.9/5 (48,765+ Reviews)"}</p>
                    </li>
                  </ul>
                  {/* Social Ratings */}
                  <ul className="list-unstyled social-list d-flex m-0">
                    <li className="me-3">
                      <img
                        src="/assets/img/icons/google.svg"
                        alt="Google rating"
                        width={20}
                        height={20}
                        loading="lazy"
                      />{" "}
                      {bannerData ? bannerData.google_rating : "4.9/5"}
                    </li>
                    <li>
                      <img
                        src="/assets/img/icons/facebook.svg"
                        alt="Facebook rating"
                        width={24}
                        height={24}
                        loading="lazy"
                      />{" "}
                      {bannerData ? bannerData.facebook_rating : "4.9/5"}
                    </li>
                  </ul>
                </div>
                {/* Description */}
                {bannerData ? (
                  <div 
                    className="text-light mt-4 description-html text-break"
                    style={{ wordBreak: 'break-all' }}
                    dangerouslySetInnerHTML={{ __html: bannerData.description }}
                  />
                ) : (
                  <p className="text-light mt-4 text-break" style={{ wordBreak: 'break-all' }}>
                    Launch your Linux career with{" "}
                    <strong>RH124 v10 Certification Training</strong> at{" "}
                    <span className="red-color">WebAsha Technologies</span> in Pune.
                    This foundational course builds essential Red Hat Enterprise
                    Linux skills, covering command-line operations, user management,
                    file permissions, system installation, and basic networking.
                    Designed for beginners and IT professionals, our 100-hour
                    program features hands-on labs, expert-led sessions, and
                    real-world simulations aligned with Red Hat’s RHCSA exam
                    objectives (EX200). With guidance from certified instructors,
                    you’ll master Linux administration fundamentals and gain
                    confidence to pursue the RHCSA certification. Join over 3,850
                    students who have advanced their careers with our top-rated
                    training, earning a 4.9/5 from 48,765+ reviews. Flexible weekday
                    or weekend batches, available online or in-classroom, ensure
                    accessibility, while the official Red Hat curriculum and
                    exam-focused practice prepare you for success. Enroll today to
                    acquire in-demand skills for Linux administration, DevOps, and
                    cloud computing roles, and earn a globally recognized credential
                    to stand out in the IT industry.
                  </p>
                )}
                {/* Facts Table */}
                <table className="table table-dark table-bordered facts-table mt-3 mb-0" style={{ tableLayout: 'fixed', wordBreak: 'break-word', width: '100%' }}>
                  <tbody>
                    <tr>
                      <th scope="row" className="fw-semibold text-warning" style={{ width: '120px' }}>
                        Duration:
                      </th>
                      <td className="text-light">
                        {bannerData ? bannerData.detail_duration : "50 Hours (Weekday/Weekend Batches)"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="fw-semibold text-warning">
                        Mode:
                      </th>
                      <td className="text-light">
                        {bannerData ? bannerData.detail_mode : "Online & Classroom Training"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="fw-semibold text-warning">
                        Certification:
                      </th>
                      <td className="text-light">
                        {bannerData ? bannerData.detail_certification : "Red Hat Certified System Administrator (EX200)"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="fw-semibold text-warning">
                        Institute:
                      </th>
                      <td className="text-light">
                        {bannerData ? bannerData.detail_institute : "WebAsha Technologies, Pune"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="fw-semibold text-warning">
                        Includes:
                      </th>
                      <td className="text-light">
                        {bannerData ? bannerData.detail_includes : "Hands-on Labs, Official Red Hat Curriculum, Exam Simulations"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>
              {/* Buttons */}
              <div className="button-group mt-4 mb-4 d-flex flex-wrap gap-3">
                <a
                  href="https://api.whatsapp.com/send?phone=+91-8010911256&text=Hello%20WebAsha%20Team,%20I%20want%20to%20join%20RH124%20v10%20Training"
                  className="btn-whatsapp text-decoration-none"
                  aria-label="Contact WebAsha via WhatsApp"
                >
                  <i className="fab fa-whatsapp me-2" /> WhatsApp
                </a>
                {bannerData && bannerData.pdf_syllabus_link ? (
                  <a
                    href={bannerData.pdf_syllabus_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-phone text-decoration-none"
                    aria-label="Download course syllabus"
                  >
                    <i className="fa fa-download me-2" /> Download Syllabus
                  </a>
                ) : (
                  <a
                    href="#"
                    className="btn-phone text-decoration-none"
                    data-bs-toggle="modal"
                    data-bs-target="#syllabusModalLabel"
                    aria-label="Download course syllabus"
                  >
                    <i className="fa fa-download me-2" /> Download Syllabus
                  </a>
                )}
              </div>
            </div>
          </div>
          {/* Right Column */}
          <div className="col-lg-4 col-sm-12">
            <div className="ec-council">
              <div className="video-thumbnail position-relative">
                {bannerData && bannerData.video_thumbnail ? (
                  <img
                    src={bannerData.video_thumbnail}
                    alt="Course preview thumbnail"
                    width={360}
                    height={220}
                    loading="lazy"
                    decoding="async"
                    className="img-fluid rounded shadow-sm w-100"
                    style={{ height: '220px', objectFit: 'cover' }}
                  />
                ) : (
                  <picture>
                    <source
                      srcSet="/assets/img/course/redhat/rh124.webp"
                      type="image/webp"
                    />
                    <img
                      src="/assets/img/course/redhat/rh124.jpg"
                      alt="Course preview thumbnail fallback"
                      width={360}
                      height={220}
                      loading="lazy"
                      decoding="async"
                      className="img-fluid rounded shadow-sm"
                    />
                  </picture>
                )}
                <button
                  type="button"
                  className="video-btn position-absolute top-50 start-50 translate-middle"
                  data-bs-toggle="modal"
                  data-bs-target="#videoModal"
                  data-video-id={videoId}
                  aria-label="Watch course preview video"
                >
                  <svg
                    className="play-icon"
                    viewBox="0 0 64 64"
                    width={64}
                    height={64}
                    aria-hidden="true"
                    focusable="false"
                  >
                    <circle cx={32} cy={32} r={32} fill="rgba(0,0,0,0.55)" />
                    <path d="M26 20 L45 32 L26 44 z" fill="#fff" />
                  </svg>
                </button>
              </div>
              <div className="pera-group text-center mt-3">
                <p className="desc">
                  Leading Global IT Training and Exam Prep Platform
                </p>
                <p>Have Questions? Connect with Our Experts</p>
              </div>
              <div className="button-group mt-3">
                <a
                  href="#"
                  className="animated-button1 mx-auto d-inline-flex align-items-center"
                  data-bs-toggle="modal"
                  data-bs-target="#enquiryModal"
                  aria-label="Enroll in certification training"
                >
                  <span />
                  <span />
                  <span />
                  <span /> Enroll Now <i className="fa fa-arrow-right ms-2" />
                </a>
              </div>
              {/* ✅ Accreditation */}
              <div className="text-white mt-4 mb-4">
                <h5>Accredited By</h5>
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#enquiryModal"
                  aria-label="Enroll in Course"
                >
                  <picture>
                    <img
                      src="/assets/img/icons/partner/redhat.webp"
                      alt="Authorised Training Partner"
                      height={146}
                      width={180}
                      loading="lazy"
                    />
                  </picture>
                </a>
              </div>
            </div>
          </div>
          {/* ✅ Stats Section */}
          <div className="col-lg-12 col-sm-12">
            <div className="banner-course-card">
              <div className="banner-course-row">
                <div className="item">
                  <img src="/assets/imgs/fi-1.png" alt="Professionals Trained" />
                  <div className="content">
                    <h2>{bannerData ? bannerData.stat_professionals : "1000+"}</h2>
                    <p>Professionals Trained</p>
                  </div>
                </div>
                <div className="item">
                  <img src="/assets/imgs/fi-2.png" alt="Batches per Month" />
                  <div className="content">
                    <h2>{bannerData ? bannerData.stat_batches : "8+"}</h2>
                    <p>Batches Every Month</p>
                  </div>
                </div>
                <div className="item">
                  <img src="/assets/imgs/fi-3.png" alt="Countries" />
                  <div className="content">
                    <h2>{bannerData ? bannerData.stat_countries : "20+"}</h2>
                    <p>Countries Served</p>
                  </div>
                </div>
                <div className="item">
                  <img src="/assets/imgs/fi-4.png" alt="Corporate Clients" />
                  <div className="content">
                    <h2>{bannerData ? bannerData.stat_clients : "1000+"}</h2>
                    <p>Corporate Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rh124Banner;
