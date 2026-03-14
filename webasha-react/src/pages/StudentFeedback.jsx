import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchData, MEDIA_BASE_URL } from "../api/config";

const defaultVideos = [
  { img: "assets/img/testimonials/feedback.webp",  videoId: "IT7R756mMK0" },
  { img: "assets/img/testimonials/feedback1.webp", videoId: "dbqDEZsmaUc" },
  { img: "assets/img/testimonials/feedback2.webp", videoId: "zI4G80v19pI" },
  { img: "assets/img/testimonials/feedback3.webp", videoId: "YNmiLWqtN7E" },
  { img: "assets/img/testimonials/feedback4.webp", videoId: "g5L8iaj4nf4" },
  { img: "assets/img/testimonials/feedback5.webp", videoId: "-dL8xYXF0Io" },
];

const StudentFeedback = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const data = await fetchData("video-reviews/");
        const videoData = data
          .map(rev => ({
            img: rev.image ? (rev.image.startsWith('http') || rev.image.startsWith('assets') ? rev.image : `${MEDIA_BASE_URL}${rev.image}`) : "assets/img/testimonials/feedback.webp",
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

  return (
    <>
      <title>Student Feedback | WebAsha Technologies</title>
      
      {/* Breadcrumb Area */}
      <div className="breadcrumb-bar text-center">
        <div className="container">
          <div className="row align-items-center py-3">
            <div className="col-12">
              <h1 className="heading-main-1 mb-2 text-white">Student Feedback</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center mb-0" style={{ background: "transparent" }}>
                  <li className="breadcrumb-item">
                    <Link to="/" className="text-decoration-none text-white" aria-label="Home">
                      <svg viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg" width={15} height={12} role="img" aria-hidden="true">
                        <path d="M8 17.5V11.5H12V17.5H17V9.5H20L10 0.5L0 9.5H3V17.5H8Z" fill="currentColor" />
                      </svg>
                      <span className="ms-1">Home</span>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active text-white" aria-current="page">
                    Student Feedback
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <section className="course-recent-reviews section-header text-center lazy-section bg-white" id="sticky-sidebar2">
        <div className="container">
          <span className="section-badge bg-danger bg-opacity-10 text-danger">Feedback Videos</span>
          <h2 className="heading-main text-dark mt-3">
            Watch Our <span className="red-color">Student Reviews</span>
          </h2>
          <p className="description mb-5">
            Explore official training videos and student testimonials from WebAsha Technologies. Click play to watch real experiences and course insights directly from our YouTube channel.
          </p>

          {!loading && (
            <div className="row g-4">
              {videos.map((v, i) => (
                <div className="col-lg-4 col-md-6" key={i}>
                  <div className="recent-reviews-items m-0 w-100 h-100">
                    <div className="items-video shadow-sm rounded overflow-hidden">
                      <img src={v.img} alt={`review-${i}`} className="w-100 img-fluid" style={{ objectFit: 'cover' }} />
                      <div className="thumbnail-position">
                        <button
                          type="button"
                          className="btn play-video border-0 video-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#videoModal"
                          data-video-id={v.videoId}
                        >
                          <img src="assets/imgs/video-play.png" alt="play" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default StudentFeedback;
