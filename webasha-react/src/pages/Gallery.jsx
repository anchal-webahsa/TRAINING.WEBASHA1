import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/gallery-images/`)
      .then((res) => res.json())
      .then((data) => {
        if (data.results) {
           setImages(data.results);
        } else {
           setImages(data);
        }
      })
      .catch((err) => console.error("Error fetching gallery images:", err));
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const showNext = () => {
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  };

  const showPrev = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, images.length]);

  return (
    <>
      <main>
        {/* Banner Section */}
        <section
          className="banner-course lazy-section"
        >
          <div className="container text-center" style={{ position: "relative", zIndex: 2 }}>
            <h1 style={{ fontWeight: 600, fontSize: "40px", marginBottom: "10px", color: '#fff' }}>
              Gallery
            </h1>
            <p style={{ fontSize: "16px", color: '#fff' }}>
              <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
                <i className="fa-solid fa-house" style={{ marginRight: "5px" }}></i>
                Home
              </Link>
              <span style={{ margin: "0 10px" }}>/</span>
              Gallery
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="gallery-content" style={{ padding: "60px 0" }}>
          <div className="container text-center">
            <span
              style={{
                display: "inline-block",
                padding: "5px 15px",
                borderRadius: "30px",
                border: "1px solid #e73827",
                color: "#e73827",
                fontWeight: 600,
                fontSize: "14px",
                marginBottom: "15px",
              }}
            >
              Our Gallery
            </span>
            <h2 style={{ fontWeight: 700, fontSize: "36px", marginBottom: "15px", color: "#0d233e" }}>
              Explore Moments from <span style={{ color: "#e73827" }}>WebAsha Technologies</span>
            </h2>
            <p style={{ color: "#5d646d", margin: "0 auto 40px", maxWidth: "100%", lineHeight: "1.6" }}>
              Our gallery captures classroom sessions, workshops and student achievements. Click any image to open the popup. Use Prev / Next or Left / Right keys to navigate.
            </p>

            <div className="row g-4">
              {images.slice(0, visibleCount).map((img, index) => (
                <div className="col-lg-3 col-md-4 col-sm-6" key={img.id}>
                  <div
                    className="gallery-item-card"
                    style={{
                      borderRadius: "12px",
                      overflow: "hidden",
                      cursor: "pointer",
                      height: "100%",
                      backgroundColor: "#fff"
                    }}
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={img.image}
                      alt={img.title || "Gallery Image"}
                      style={{
                        width: "100%",
                        height: "220px",
                        objectFit: "cover",
                        transition: "transform 0.3s ease",
                        borderRadius: "8px",           
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
                      onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    />
                  </div>
                </div>
              ))}
              
              {images.length === 0 && (
                  <div className="col-12 py-5 text-muted">No images found. Add some from the admin dashboard!</div>
              )}
            </div>

            {visibleCount < images.length && (
              <div style={{ marginTop: "40px" }}>
                <button
                  onClick={handleLoadMore}
                  style={{
                    backgroundColor: "#e73827",
                    color: "#fff",
                    padding: "12px 30px",
                    border: "none",
                    borderRadius: "5px",
                    fontWeight: 600,
                    fontSize: "16px",
                  }}
                >
                  Load More Images
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Lightbox Modal Overlay */}
        {selectedImageIndex !== null && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0,0,0,0.85)",
              zIndex: 9999,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backdropFilter: "blur(5px)",
            }}
            onClick={closeLightbox}
          >
            <div
              style={{ position: "relative", maxWidth: "90%", maxHeight: "90%" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                style={{
                  position: "absolute",
                  top: "-40px",
                  right: "-40px",
                  background: "transparent",
                  color: "#fff",
                  border: "none",
                  fontSize: "30px",
                  cursor: "pointer",
                }}
              >
                &times;
              </button>

              <img
                src={images[selectedImageIndex].image}
                alt={images[selectedImageIndex].title || "Preview"}
                style={{
                  maxWidth: "100%",
                  maxHeight: "80vh",
                  objectFit: "contain",
                  boxShadow: "0 0 20px rgba(0,0,0,0.5)",
                  borderRadius: "8px",
                }}
              />

              {images[selectedImageIndex].title && (
                <div style={{
                  position: "absolute",
                  bottom: "-40px",
                  left: 0,
                  width: "100%",
                  textAlign: "center",
                  color: "#fff",
                  fontSize: "18px"
                }}>
                  {images[selectedImageIndex].title}
                </div>
              )}

              {/* Prev / Next controls */}
              {images.length > 1 && (
                  <>
                      <button
                        onClick={(e) => { e.stopPropagation(); showPrev(); }}
                        style={{
                          position: "absolute",
                          left: "-60px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          background: "rgba(255,255,255,0.2)",
                          color: "#fff",
                          border: "none",
                          padding: "15px 20px",
                          cursor: "pointer",
                          borderRadius: "50%",
                          fontSize: "24px"
                        }}
                      >
                        &#10094;
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); showNext(); }}
                        style={{
                          position: "absolute",
                          right: "-60px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          background: "rgba(255,255,255,0.2)",
                          color: "#fff",
                          border: "none",
                          padding: "15px 20px",
                          cursor: "pointer",
                          borderRadius: "50%",
                          fontSize: "24px"
                        }}
                      >
                        &#10095;
                      </button>
                  </>
              )}
            </div>
          </div>
        )}
      </main>
    </>
  );
}
