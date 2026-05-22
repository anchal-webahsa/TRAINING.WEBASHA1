import { useState, useEffect, useRef } from "react";
import { fetchData, MEDIA_BASE_URL } from "../../api/config";

const defaultReviews = [
  {
    name: "Mohammad Navab Ishrat Mirja",
    text: "WebAsha Technologies is the best institute for RHCSA and RHCE training. The trainers are very knowledgeable and supportive.",
    role: "Red Hat Student",
    img: "/assets/img/profile/1.webp",
    stars: 5
  },
  {
    name: "Akash Shinde",
    text: "I completed my AWS certification from WebAsha. The hands-on labs were excellent and helped me understand the concepts clearly.",
    role: "AWS Professional",
    img: "/assets/img/profile/2.webp",
    stars: 5
  },
  {
    name: "Priya Sharma",
    text: "The Cybersecurity course is very well-structured. I learned a lot about ethical hacking and network security.",
    role: "Cybersecurity Analyst",
    img: "/assets/img/profile/3.webp",
    stars: 5
  }
];

const LINKEDIN_PATH = "M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.345V9h3.41v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.601 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433a1.993 1.993 0 1 1 0-3.987 1.993 1.993 0 0 1 0 3.987zM6.813 20.452H3.861V9h2.952v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z";
const STAR_PATH = "M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.401 8.178L12 18.897l-7.335 3.856 1.401-8.178L.132 9.21l8.2-1.192z";

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#0a66c2" viewBox="0 0 24 24" aria-hidden="true" role="img">
    <path d={LINKEDIN_PATH} />
  </svg>
);

const Stars = ({ count = 5 }) => (
  <ul className="rating-list list-unstyled d-flex">
    {[...Array(count)].map((_, i) => (
      <li key={i}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FFD700" viewBox="0 0 24 24" aria-hidden="true">
          <path d={STAR_PATH} />
        </svg>
      </li>
    ))}
  </ul>
);

const ReviewCard = ({ img, name, role, text, linkedinUrl }) => (
  <div className="success-speaks-reviwe-items">
    <div className="card">
      <img src={img ? (img.startsWith('http') || img.startsWith('assets') || img.startsWith('/assets') ? img : `${MEDIA_BASE_URL}${img}`) : "/assets/img/profile/default.webp"} className="img-top" alt={`${name} review`} loading="lazy" decoding="async" />
      <Stars />
      <div className="card-body">
        <p className="card-text line-clamp-1">{text}</p>
        <div className="card-wraper d-flex align-items-center justify-content-between">
          <div className="card-content">
            <h4>{name}</h4>
            <p>{role}</p>
          </div>
          <div className="card-icon" style={{ position: 'relative', zIndex: 50, pointerEvents: 'auto' }}>
            {linkedinUrl ? (
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" style={{ position: 'relative', zIndex: 100, display: 'inline-block', padding: '5px' }}>
                <LinkedInIcon />
              </a>
            ) : (
              <LinkedInIcon />
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TextReviews = ({
  badge = "Recent Placements Testimonials",
  title = "Red Hat Certified System Administrator",
  highlight = "Reviews",
}) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const data = await fetchData("testimonials/");
        const mappedReviews = data
          .filter(rev => rev.review_type === 'text')
          .map(rev => ({
          name: rev.full_name,
          text: rev.content,
          role: rev.designation || "Cybersecurity Student",
          img: rev.image,
          stars: rev.rating || 5,
          linkedinUrl: rev.linkedin_url
        }));
        
        if (mappedReviews.length > 0) {
          setReviews(mappedReviews);
        } else {
          setReviews(defaultReviews);
        }
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
        setReviews(defaultReviews);
      } finally {
        setLoading(false);
      }
    };
    getReviews();
  }, []);

  useEffect(() => {
    if (loading || reviews.length === 0) return;

    const timer = setTimeout(() => {
      const $ = window.$;
      if (!$ || !$.fn || !$.fn.slick || !sliderRef.current) return;
      const $el = $(sliderRef.current);
      if ($el.hasClass("slick-initialized")) $el.slick("unslick");

      $el.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplay: false,
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
      if (!$ || !sliderRef.current) return;
      const $el = $(sliderRef.current);
      if ($el.hasClass("slick-initialized")) $el.slick("unslick");
    };
  }, [loading, reviews]);

  if (loading) return null;

  return (
    <section className="success-speaks-reviwe course-speaks section-header text-center lazy-section">
      <div className="container">
        <span className="section-badge">{badge}</span>
        <h2 className="heading-main text-center mb-5">
          {title} <span className="red-color">{highlight}</span>
        </h2>

        <div
          className="success-speaks-reviwe-slider slider-arrows-cs"
          ref={sliderRef}
        >
          {reviews.map((review, idx) => (
            <ReviewCard key={idx} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TextReviews;
