import React from 'react';

const ExamCertificatesSection = ({ examName, certificates }) => {
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

  const MEDIA_BASE_URL = 'http://127.0.0.1:8000';
  
  const displayCertificates = certificates && certificates.length > 0 
    ? certificates.map(cert => ({
        ...cert,
        img: cert.image.startsWith('http') ? cert.image : `${MEDIA_BASE_URL}${cert.image}`
      }))
    : fallbackCertificates;

  return (
    <section className="my-5 overflow-hidden">
      <h2 className="fw-bold mb-4 text-center" style={{ color: '#0f172a' }}>
        Our Recent <span className="text-danger">Certified Candidates</span>
      </h2>
      
      <div className="certificate-ticker-wrapper">
        <div className="certificate-ticker-track">
          {/* Duplicate the list to ensure seamless looping */}
          {[...displayCertificates, ...displayCertificates].map((cert, idx) => (
            <div key={idx} className="certificate-ticker-item">
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
          animation: scroll 40s linear infinite;
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

        /* Mobile adjustments */
        @media (max-width: 768px) {
          .certificate-ticker-item {
            width: 160px;
          }
          .ticker-img {
            height: 110px;
          }
        }
      ` }} />
    </section>
  );
};

export default ExamCertificatesSection;
