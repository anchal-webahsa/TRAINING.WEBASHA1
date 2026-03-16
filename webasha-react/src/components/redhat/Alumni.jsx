// src/components/common/Alumni.jsx

import { useEffect, useState } from "react";

const ArrowDown = () => (
  <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.16537 14.3337L14.9987 27.167M14.9987 27.167L27.832 14.3337M14.9987 27.167L14.9987 1.50033"
      stroke="#FF0800" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const alumni = [
  {
    img:        "assets/img/profile/career/shivaji.webp",
    name:       "Shivaji",
    exp:        "8+ Years of Experience",
    badge:      "150% Growth",
    desc:       <>The training at <strong>WebAsha Technologies</strong> completely transformed my career. The real-time lab sessions and expert mentorship helped me upskill and move into a better role with a 150% growth.</>,
    beforeRole: "System Engineer",
    beforeCo:   { img: "assets/img/profile/career/company/wipro.webp",  alt: "Wipro" },
    afterRole:  "Site Reliability Engineer (SRE)",
    afterCo:    { img: "assets/img/profile/career/company/tsys.webp",   alt: "TSYS" },
  },
  {
    img:        "assets/img/profile/career/sumit-mote.webp",
    name:       "Sumit Mote",
    exp:        "5+ Years of Experience",
    badge:      "200% Growth",
    desc:       <>Joining <strong>WebAsha Technologies</strong> was the best career decision I've made. The <strong>DevOps and Cloud</strong> training gave me real-world exposure, helping me move from a system admin role to a full-time <strong>SRE</strong> with a 200% growth.</>,
    beforeRole: "System Admin",
    beforeCo:   { img: "assets/img/profile/career/company/wipro.webp",  alt: "Wipro" },
    afterRole:  "Site Reliability Engineer (SRE)",
    afterCo:    { img: "assets/img/profile/career/company/tsys.webp",   alt: "TSYS" },
  },
  {
    img:        "assets/img/profile/career/asim.webp",
    name:       "Asim",
    exp:        "10+ Years of Experience",
    badge:      "150% Growth",
    desc:       <><strong>WebAsha Technologies</strong> helped me strengthen my practical skills and confidence in system administration. The in-depth <strong>Linux and OpenShift training</strong> enhanced my expertise, leading to a promotion and 150% salary growth.</>,
    beforeRole: "System Administrator",
    beforeCo:   { img: "assets/img/profile/career/company/veritas.webp",  alt: "Veritas" },
    afterRole:  "Site Reliability Engineer (SRE)",
    afterCo:    { img: "assets/img/profile/career/company/cohesity.webp", alt: "Cohesity" },
  },
  {
    img:        "assets/img/profile/career/dnyaneshwar-paturde.webp",
    name:       "Dnyaneshwar Paturde",
    exp:        "10+ Years of Experience",
    badge:      "180% Growth",
    desc:       <><strong>WebAsha Technologies</strong> played a major role in my professional growth. The <strong>advanced infrastructure and cloud administration training</strong> refined my technical expertise and leadership skills, helping me advance from a Senior Analyst to a Senior Lead.</>,
    beforeRole: "Senior Analyst - Global IT Infrastructure",
    beforeCo:   { img: "assets/img/profile/career/company/hoerbiger.webp",     alt: "HOERBIGER" },
    afterRole:  "Senior Lead - Infrastructure",
    afterCo:    { img: "assets/img/profile/career/company/first-capital.webp", alt: "First Capital" },
  },
  {
    img:        "assets/img/profile/career/nilesh-pal.webp",
    name:       "Nilesh Pal",
    exp:        "7+ Years of Experience",
    badge:      "200% Hike",
    desc:       <><strong>WebAsha Technologies</strong> helped me take my cloud career to the next level. The <strong>hands-on OpenShift and cloud computing training</strong> gave me the confidence and technical depth to move from a Cloud Engineer to an <strong>Operations Specialist – Cloud SME</strong> at Nokia.</>,
    beforeRole: "Cloud Engineer",
    beforeCo:   { img: "assets/img/profile/career/company/vodafone.webp", alt: "Vodafone Idea" },
    afterRole:  "Cloud SME",
    afterCo:    { img: "assets/img/profile/career/company/nokia.webp",    alt: "Nokia" },
  },
];

const AlumniCard = ({ img, name, exp, badge, desc, beforeRole, beforeCo, afterRole, afterCo }) => (
  <div className="items">
    <div className="card card-hover">

      <div className="card-image">
        <img src={img} alt={`${name} - WebAsha Success Story`} loading="lazy" />
      </div>

      <div className="card-image-caption">
        <h4>{name}</h4>
        <h5>{exp}</h5>
      </div>

      <div className="badge">{badge}</div>

      {typeof desc === 'string' ? (
        <div className="card-description">" <span dangerouslySetInnerHTML={{ __html: desc }}></span> "</div>
      ) : (
        <div className="card-description">"{desc}"</div>
      )}

      <div className="inner-cards">
        {/* Before */}
        <div className="inner-card-before">
          <div className="card-before-left">
            <h5>Before WebAsha</h5>
            <h4>{beforeRole}</h4>
          </div>
          <div className="card-before-right">
            <img src={beforeCo.img} alt={beforeCo.alt} loading="lazy" />
          </div>
        </div>

        {/* Arrow */}
        <div className="arrow-down"><ArrowDown /></div>

        {/* After */}
        <div className="inner-card-before after">
          <div className="card-before-left">
            <h5>After WebAsha</h5>
            <h4>{afterRole}</h4>
          </div>
          <div className="card-before-right">
            <img src={afterCo.img} alt={afterCo.alt} loading="lazy" />
          </div>
        </div>
      </div>

    </div>
  </div>
);

const Alumni = () => {
  const [alumniData, setAlumniData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/alumni-profiles/")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          const apiAlumni = data.map((item) => ({
            img: item.image,
            name: item.name,
            exp: item.experience,
            badge: item.growth_badge,
            desc: item.description,
            beforeRole: item.before_role,
            beforeCo: { img: item.before_company_logo, alt: item.before_company_name },
            afterRole: item.after_role,
            afterCo: { img: item.after_company_logo, alt: item.after_company_name },
          }));
          setAlumniData(apiAlumni);
        } else {
          setAlumniData(alumni); // Fallback to hardcoded array
        }
      })
      .catch((err) => {
        console.error("Error fetching alumni profiles:", err);
        setAlumniData(alumni); // Fallback to hardcoded array
      });
  }, []);

  useEffect(() => {
    if (alumniData.length === 0) return;

    const timer = setTimeout(() => {
      const $ = window.$;
      if (!$ || !$.fn || !$.fn.slick) return;

      const $el = $(".course-discover-profile-slider");
      if ($el.hasClass("slick-initialized")) $el.slick("unslick");

      $el.slick({
        slidesToShow:   4,
        slidesToScroll: 1,
        infinite:       true,
        arrows:         true,
        dots:           false,
        autoplay:       false,
        responsive: [
          { breakpoint: 1200, settings: { slidesToShow: 3 } },
          { breakpoint: 992, settings: { slidesToShow: 2 } },
          { breakpoint: 576, settings: { slidesToShow: 1 } },
        ],
      });
    }, 300);

    return () => {
      clearTimeout(timer);
      const $ = window.$;
      if (!$) return;
      const $el = $(".course-discover-profile-slider");
      if ($el.hasClass("slick-initialized")) $el.slick("unslick");
    };
  }, [alumniData]);

  return (
    <section className="course-discover-profile lazy-section">
      <div className="section-header text-center">
        <span className="section-badge">Recent Career Success Stories</span>
      </div>
      <h2 className="heading-main-1 text-center">
        Explore Alumni with Profiles <span className="red-color">Like Yours</span>
      </h2>
      <p className="desc text-center">
        Learn about their career paths, specialties, and accomplishments.
      </p>

      <div className="container">
        <div className="course-discover-profile-slider slider-arrows-cs">
          {alumniData.map((a, i) => <AlumniCard key={i} {...a} />)}
        </div>

        <div className="text-center mt-4">
          <a href="#" className="btn btn-outline-primary mx-auto btn-width text-decoration-none">
            View All
          </a>
        </div>
      </div>
    </section>
  );
};

export default Alumni;