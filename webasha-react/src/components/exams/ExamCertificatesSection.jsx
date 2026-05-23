import React, { useState } from 'react';

const ExamCertificatesSection = ({ examName, certificates }) => {
  const [activeCertIndex, setActiveCertIndex] = useState(null);

  const fallbackCertificates = [
    { name: 'Naveen Pillai', exam: 'RHCSA', img: 'https://training.webasha.com/wp-content/uploads/2024/04/Red-Hat-Certified-System-Administrator-RHCSA-Certification-scaled.webp' },
    { name: 'Harshad Kapoor', exam: 'RHCSA', img: 'https://training.webasha.com/wp-content/uploads/2024/04/Red-Hat-Certified-System-Administrator-RHCSA-Certification-scaled.webp' },
    { name: 'Manoj Bansal', exam: 'RHCSA', img: 'https://training.webasha.com/wp-content/uploads/2024/04/Red-Hat-Certified-System-Administrator-RHCSA-Certification-scaled.webp' },
    { name: 'Amitabh Krishnan', exam: 'RHCSA', img: 'https://training.webasha.com/wp-content/uploads/2024/04/Red-Hat-Certified-System-Administrator-RHCSA-Certification-scaled.webp' },
    { name: 'Rahul Gupta', exam: 'RHCSA', img: 'https://training.webasha.com/wp-content/uploads/2024/04/Red-Hat-Certified-System-Administrator-RHCSA-Certification-scaled.webp' },
    { name: 'Priya Sharma', exam: 'RHCSA', img: 'https://training.webasha.com/wp-content/uploads/2024/04/Red-Hat-Certified-System-Administrator-RHCSA-Certification-scaled.webp' },
    { name: 'Suresh Raina', exam: 'RHCSA', img: 'https://training.webasha.com/wp-content/uploads/2024/04/Red-Hat-Certified-System-Administrator-RHCSA-Certification-scaled.webp' },
    { name: 'Deepika Padukone', exam: 'RHCSA', img: 'https://training.webasha.com/wp-content/uploads/2024/04/Red-Hat-Certified-System-Administrator-RHCSA-Certification-scaled.webp' },
  ];

  const MEDIA_BASE_URL = `${import.meta.env.VITE_API_URL}`;
  
  const displayCertificates = certificates && certificates.length > 0 
    ? certificates.map(cert => ({
        ...cert,
        img: cert.image.startsWith('http') ? cert.image : `${MEDIA_BASE_URL}${cert.image}`
      }))
    : fallbackCertificates;

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveCertIndex((prev) => 
      prev === 0 ? displayCertificates.length - 1 : prev - 1
    );
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveCertIndex((prev) => 
      prev === displayCertificates.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="my-5 overflow-hidden">
      <h2 className="fw-bold mb-4 text-center" style={{ color: '#0f172a' }}>
        Our Recent <span className="text-danger">Certified Candidates</span>
      </h2>
      
      <div className="certificate-ticker-wrapper">
        <div className="certificate-ticker-track">
          {/* Duplicate the list to ensure seamless looping */}
          {[...displayCertificates, ...displayCertificates].map((cert, idx) => (
            <div 
              key={idx} 
              className="certificate-ticker-item"
              onClick={() => setActiveCertIndex(idx % displayCertificates.length)}
              style={{ cursor: 'pointer' }}
            >
              <div className="certificate-card">
                <img 
                  src={cert.img} 
                  alt={`${cert.name || 'Candidate'} Certificate`} 
                  className="ticker-img"
                  onError={(e) => { e.target.src = "https://training.webasha.com/wp-content/uploads/2024/04/Red-Hat-Certified-System-Administrator-RHCSA-Certification-scaled.webp"; }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Slider Modal */}
      {activeCertIndex !== null && (
        <div 
          className="certificate-modal-overlay" 
          onClick={() => setActiveCertIndex(null)}
        >
          <div 
            className="certificate-modal-content" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              className="certificate-modal-close" 
              onClick={() => setActiveCertIndex(null)}
              aria-label="Close modal"
            >
              &times;
            </button>
            
            {/* Left Prev Button */}
            <button 
              className="certificate-modal-btn prev-btn" 
              onClick={handlePrev}
            >
              Prev
            </button>

            {/* Certificate Image */}
            <img 
              src={displayCertificates[activeCertIndex].img} 
              alt={`${displayCertificates[activeCertIndex].name || 'Candidate'} Certificate`} 
              className="certificate-modal-img"
              onError={(e) => { e.target.src = "https://training.webasha.com/wp-content/uploads/2024/04/Red-Hat-Certified-System-Administrator-RHCSA-Certification-scaled.webp"; }}
            />

            {/* Right Next Button */}
            <button 
              className="certificate-modal-btn next-btn" 
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .certificate-ticker-wrapper {
          width: 100%;
          overflow: hidden;
          padding: 10px 0;
          position: relative;
        }

        .certificate-ticker-track {
          display: flex;
          width: max-content;
          animation: scroll 65s linear infinite;
        }

        .certificate-ticker-track:hover {
          animation-play-state: paused;
        }

        .certificate-ticker-item {
          flex: 0 0 auto;
          width: 220px;
          margin: 0 10px;
        }

        .certificate-card {
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          overflow: hidden;
          background: #fff;
          transition: transform 0.3s ease;
        }

        .certificate-card:hover {
          transform: translateY(-5px);
          border-color: #3b82f6;
        }

        .ticker-img {
          width: 100%;
          height: 150px;
          object-fit: contain;
          padding: 5px;
          display: block;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Modal / Lightbox Styles */
        .certificate-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 11000;
        }

        .certificate-modal-content {
          position: relative;
          width: 90%;
          max-width: 850px;
          max-height: 85vh;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .certificate-modal-img {
          width: 100%;
          height: auto;
          max-height: 75vh;
          object-fit: contain;
          box-shadow: 0 10px 30px rgba(0,0,0,0.4);
          border-radius: 4px;
          background: white;
          border: 1px solid #e2e8f0;
          display: block;
        }

        .certificate-modal-close {
          position: absolute;
          top: -45px;
          right: 0px;
          background: none;
          border: none;
          color: #333333;
          font-size: 44px;
          font-weight: 300;
          cursor: pointer;
          line-height: 1;
          padding: 5px;
          transition: color 0.2s;
        }

        .certificate-modal-close:hover {
          color: #000000;
        }

        .certificate-modal-btn {
          position: absolute;
          bottom: 20px;
          background: rgba(0, 0, 0, 0.5);
          color: #ffffff;
          border: 1.5px solid #ffffff;
          padding: 7px 18px;
          border-radius: 4px;
          font-weight: 500;
          cursor: pointer;
          font-size: 14px;
          font-family: inherit;
          transition: all 0.2s ease;
          box-shadow: 0 4px 10px rgba(0,0,0,0.25);
        }

        .certificate-modal-btn:hover {
          background: rgba(0, 0, 0, 0.75);
          border-color: #ffffff;
        }

        .prev-btn {
          left: -85px;
        }

        .next-btn {
          right: -85px;
        }

        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .certificate-ticker-item {
            width: 160px;
          }
          .ticker-img {
            height: 110px;
          }
          .certificate-modal-img {
            max-height: 60vh;
          }
          .certificate-modal-btn {
            bottom: 15px;
            padding: 6px 14px;
            font-size: 12px;
          }
          .prev-btn {
            left: 15px;
            z-index: 10;
          }
          .next-btn {
            right: 15px;
            z-index: 10;
          }
          .certificate-modal-close {
            top: 10px;
            right: 15px;
            font-size: 32px;
            color: #333333;
            text-shadow: 0 0 3px #fff;
            z-index: 10;
          }
        }
      ` }} />
    </section>
  );
};

export default ExamCertificatesSection;
