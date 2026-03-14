import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items = [
  { logo: "career-straight-logo-1.png", phone: "assets/img/feedback.png" },
  { logo: "career-straight-logo-2.png", phone: "assets/img/feedback.png" },
  { logo: "career-straight-logo-3.png", phone: "assets/img/feedback.png" },
  { logo: "career-straight-logo-4.png", phone: "assets/img/feedback.png" },
  { logo: "career-straight-logo-5.png", phone: "assets/img/feedback.png" },
  { logo: "career-straight-logo-1.png", phone: "assets/img/feedback.png" },
  { logo: "career-straight-logo-2.png", phone: "assets/img/feedback.png" },
  { logo: "career-straight-logo-3.png", phone: "assets/img/feedback.png" },
  { logo: "career-straight-logo-4.png", phone: "assets/img/feedback.png" },
  { logo: "career-straight-logo-5.png", phone: "assets/img/feedback.png" },
];

const CareerStraight = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(2);
  const [fading, setFading] = useState(false);   // ← controls .fading class

  // When activeIndex changes → fade out → swap image → fade in
  useEffect(() => {
    setFading(true);                        // 1. add .fading  → opacity: 0
    const timer = setTimeout(() => {
      setFading(false);                     // 2. remove .fading → opacity: 1
    }, 350);                                //    matches transition duration
    return () => clearTimeout(timer);
  }, [activeIndex]);

  const handleChange = (next) => setActiveIndex(next);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    beforeChange: (_, next) => handleChange(next),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4, centerMode: false } },
      { breakpoint: 768,  settings: { slidesToShow: 3, centerMode: false } },
      { breakpoint: 480,  settings: { slidesToShow: 2, centerMode: false } },
    ],
  };

  return (
    <>
      <style>{`
        .career-straight {
          background: #000;
          padding: 60px 0;
          overflow: hidden;
        }
        .career-straight h2 {
          font-size: clamp(20px, 3vw, 30px);
          font-weight: 700;
          color: #fff;
          margin-bottom: 10px;
        }
        .career-straight .desc {
          font-size: 15px;
          color: rgba(255,255,255,0.7);
          margin-bottom: 36px;
        }

        .cs-slider-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 32px;
        }
        .cs-btn {
          flex-shrink: 0;
          width: 32px;
          height: 32px;
          background: transparent;
          border: none;
          color: #fff;
          font-size: 44px;
          line-height: 1;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.6;
          transition: opacity 0.2s;
          user-select: none;
        }
        .cs-btn:hover { opacity: 1; }

        .cs-slider-wrap {
          flex: 1;
          min-width: 0;
          overflow: hidden;
        }
        .cs-slider-wrap .slick-list { overflow: hidden; }
        .cs-slider-wrap .slick-track {
          display: flex !important;
          align-items: center;
        }
        .cs-slider-wrap .slick-slide { outline: none; }
        .cs-slider-wrap .slick-slide > div {
          display: flex;
          justify-content: center;
          padding: 12px 4px;
        }

        .cs-img-wrap {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid rgba(255,255,255,0.1);
          transition: all 0.35s ease;
          cursor: pointer;
          background: #222;
        }
        .cs-img-wrap:hover { border-color: rgba(255,255,255,0.35); }
        .cs-slider-wrap .slick-center .cs-img-wrap {
          width: 128px;
          height: 128px;
          border-color: rgba(255,255,255,0.3);
          box-shadow: 0 0 0 4px rgba(255,255,255,0.08);
        }
        .cs-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .cs-cta {
          display: inline-block;
          border: 1.5px solid #fff;
          color: #111;
          background: #fff;
          padding: 10px 28px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.2s, color 0.2s;
        }
        .cs-cta:hover {
          background: transparent;
          color: #fff;
          text-decoration: none;
        }

        /* ── Phone fade ── */
        .cs-phone-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
        }
        .cs-phone-img {
          max-width: 100%;
          max-height: 460px;
          object-fit: contain;
          opacity: 1;
          transition: opacity 0.60s ease;   /* smooth fade */
        }
        .cs-phone-img.fading {
          opacity: 0;                        /* .fading NOW actually applied via JS */
        }

        @media (max-width: 991px) {
          .cs-phone-wrap { margin-top: 40px; }
        }
      `}</style>

      <div className="career-straight">
        <div className="container">
          <div className="row align-items-center">

            {/* Left */}
            <div className="col-lg-8 col-sm-12 col-12">
              <h2>Screenshorts: Straight From The Heart</h2>
              <p className="desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>

              <div className="cs-slider-row">
                <button
                  className="cs-btn"
                  aria-label="Previous"
                  onClick={() => sliderRef.current.slickPrev()}
                >
                  &#8249;
                </button>

                <div className="cs-slider-wrap">
                  <Slider ref={sliderRef} {...settings}>
                    {items.map((item, i) => (
                      <div key={i} onClick={() => handleChange(i)}>
                        <div className="cs-img-wrap">
                          <img
                            src={`assets/imgs/${item.logo}`}
                            alt={`Student ${i + 1}`}
                            loading="lazy"
                          />
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>

                <button
                  className="cs-btn"
                  aria-label="Next"
                  onClick={() => sliderRef.current.slickNext()}
                >
                  &#8250;
                </button>
              </div>

              <a
                href="#"
                className="cs-cta"
                data-bs-toggle="modal"
                data-bs-target="#enquiryModal"
              >
                Get Free Career Counselling
              </a>
            </div>

            {/* Right — fading class toggled by useEffect */}
            <div className="col-lg-4 col-sm-12 col-12">
              <div className="cs-phone-wrap">
                <img
                  src={items[activeIndex % items.length].phone}
                  alt="Student feedback"
                  className={`cs-phone-img${fading ? " fading" : ""}`}
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default CareerStraight;