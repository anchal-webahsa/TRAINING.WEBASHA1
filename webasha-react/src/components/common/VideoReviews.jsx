import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { fetchData, MEDIA_BASE_URL } from "../../api/config";

const defaultVideos = [
  { img: "/assets/img/testimonials/feedback.webp",  videoId: "IT7R756mMK0" },
  { img: "/assets/img/testimonials/feedback1.webp", videoId: "dbqDEZsmaUc" },
  { img: "/assets/img/testimonials/feedback2.webp", videoId: "zI4G80v19pI" },
  { img: "/assets/img/testimonials/feedback3.webp", videoId: "YNmiLWqtN7E" },
  { img: "/assets/img/testimonials/feedback4.webp", videoId: "g5L8iaj4nf4" },
  { img: "/assets/img/testimonials/feedback5.webp", videoId: "-dL8xYXF0Io" },
];

const VideoReviews = ({
  badge     = "Recent Placements Testimonials",
  title     = "Red Hat Certified System Administrator",
  highlight = "Recent Reviews",
}) => {
  const [videos, setVideos] = useState([]);
  const sliderRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const data = await fetchData("video-reviews/");
        const videoData = data
          .map(rev => ({
            img: rev.image ? (rev.image.startsWith('http') || rev.image.startsWith('assets') || rev.image.startsWith('/assets') ? rev.image : `${MEDIA_BASE_URL}${rev.image}`) : "/assets/img/testimonials/feedback.webp",
            videoId: rev.video_id
          }));
        
        if (videoData.length > 0) {
          setVideos(videoData);
        } else {
          setVideos(defaultVideos);
        }
      } catch (error) {
        console.error("Failed to fetch video reviews:", error);
        setVideos(defaultVideos);
      } finally {
        setLoading(false);
      }
    };
    getVideos();
  }, []);

  useEffect(() => {
    if (loading || videos.length === 0) return;

    const timer = setTimeout(() => {
      const $ = window.$;
      if (!$ || !$.fn || !$.fn.slick || !sliderRef.current) return;

      const $el = $(sliderRef.current);
      if ($el.hasClass("slick-initialized")) $el.slick("unslick");

      $el.slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          { breakpoint: 992, settings: { slidesToShow: 3, centerMode: true } },
          { breakpoint: 576, settings: { slidesToShow: 1, centerMode: true } },
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
  }, [loading, videos]);

  if (loading) return null;

  return (
    <section className="course-recent-reviews section-header text-center lazy-section" id="sticky-sidebar2">
      <div className="container">
        <span className="section-badge">{badge}</span>
        <h2 className="heading-main-1 text-white text-center">
          {title} <span className="red-color">{highlight}</span>
        </h2>

        {/* Video Slider */}
        <div className="course-recent-reviews-slider" ref={sliderRef}>
          {videos.map((v, i) => (
            <div className="recent-reviews-items" key={i}>
              <div className="items-video shadow overflow-hidden rounded-4">
                <img src={v.img} alt={`review-${i}`} className="w-100 img-fluid" style={{ objectFit: 'cover', aspectRatio: '16/9' }} />
                <div className="thumbnail-position">
                  <button
                    type="button"
                    className="btn play-video border-0 video-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#videoModal"
                    data-video-id={v.videoId}
                  >
                    <img src="/assets/imgs/video-play.png" alt="play" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <Link
            to="/student-feedback"
            className="btn btn-width btn-outline-danger text-decoration-none mx-auto"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VideoReviews;
