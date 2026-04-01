import React, { useState, useRef, useEffect } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Link } from 'react-router-dom';

export default function Certificate() {
  const [certId, setCertId] = useState('');
  const [certificateData, setCertificateData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const certificateRef = useRef(null);

  // Inject Google Fonts exactly for the certificate design
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat:wght@700&family=Lora:ital@0;1&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!certId) return;
    
    setLoading(true);
    setError('');
    
    // Convert ID to match potential cases
    const formattedId = certId.trim();
    
    fetch(`http://localhost:8000/api/student-certificates/${formattedId}/`)
      .then(res => {
        if (!res.ok) throw new Error("Certificate not found. Please check your Certificate ID.");
        return res.json();
      })
      .then(data => {
        setCertificateData(data);
      })
      .catch(err => {
        setCertificateData(null);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  };

  const handleDownloadPDF = async () => {
    const element = certificateRef.current;
    if (!element) return;
    
    const canvas = await html2canvas(element, { scale: 3, useCORS: true, logging: false });
    const imgData = canvas.toDataURL('image/png');
    
    // A4 Landscape: 297mm x 210mm
    const pdf = new jsPDF('landscape', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(`WebAsha_Certificate_${certificateData.student_name.replace(/\s+/g, '_')}.pdf`);
  };

  const handleDownloadImage = async () => {
    const element = certificateRef.current;
    if (!element) return;
    
    const canvas = await html2canvas(element, { scale: 3, useCORS: true, logging: false });
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = `WebAsha_Certificate_${certificateData.student_name.replace(/\s+/g, '_')}.png`;
    link.click();
  };

  return (
    <>
      {/* Banner / Breadcrumb */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n      /* inline helper for breadcrumb bar */\n      .breadcrumb-bar { background: #000; }\n      .breadcrumb-bar .heading-main-1 { margin: 0; padding: 0; }\n    "
        }}
      />
      <div className="breadcrumb-bar text-center">
        <div className="container">
          <div className="row align-items-center py-3">
            <div className="col-12">
              <h1 className="heading-main-1 mb-2 text-white">Verify & Download Certificate</h1>
              <nav aria-label="breadcrumb">
                <ol
                  className="breadcrumb justify-content-center mb-0"
                  style={{ background: "transparent" }}
                >
                  <li className="breadcrumb-item">
                    <Link
                      to="/"
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
                    </Link>
                  </li>
                  <li
                    className="breadcrumb-item active text-white"
                    aria-current="page"
                  >
                    Certificate
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-sm border-0 mb-5">
              <div className="card-body p-4 text-center">
                <h4 className="mb-4">Enter your Certificate ID</h4>
                <form onSubmit={handleSearch} className="d-flex mx-auto gap-2 justify-content-center" style={{maxWidth: '500px'}}>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="e.g. WACERT-1A2B3C4D5E" 
                    value={certId}
                    onChange={(e) => setCertId(e.target.value)}
                  />
                  <button type="submit" className="btn btn-danger text-nowrap" disabled={loading}>
                    {loading ? "Searching..." : "Retrieve Certificate"}
                  </button>
                </form>
                {error && <div className="alert alert-danger mt-3 mb-0 py-2">{error}</div>}
              </div>
            </div>
          </div>
        </div>

        {certificateData && (
          <div className="row">
            <div className="col-12 text-center mb-4">
              <button onClick={handleDownloadPDF} className="btn btn-danger me-3 px-4">
                <i className="fa-solid fa-file-pdf me-2"></i> Download as PDF
              </button>
              <button onClick={handleDownloadImage} className="btn btn-outline-danger px-4">
                <i className="fa-solid fa-image me-2"></i> Download as PNG
              </button>
            </div>
            
            <div className="col-12 d-flex justify-content-center overflow-auto" style={{ padding: '20px' }}>
              {/* NEW CERTIFICATE TEMPLATE - WITHOUT WATERMARKS */}
              <div 
                ref={certificateRef}
                style={{
                  width: '900px',
                  height: '636px', // Approx European A4 Landscape ratio
                  position: 'relative',
                  backgroundColor: '#fcfaf5', // Cream off-white
                  boxShadow: '0 0 20px rgba(0,0,0,0.1)',
                  overflow: 'hidden',
                  fontFamily: '"Lora", serif',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#2b2b2b',
                  boxSizing: 'border-box'
                }}
              >
                {/* Thin Gold Outer Border */}
                <div style={{
                  position: 'absolute',
                  top: '18px', left: '18px', right: '18px', bottom: '18px',
                  border: '1px solid #d7b65c',
                  zIndex: 0
                }}></div>

                {/* --- Top-Right Gold Seal --- */}
                <div style={{
                  position: 'absolute',
                  top: '50px', right: '50px',
                  zIndex: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}>
                  {/* Ribbon Tails */}
                  <div style={{ position: 'relative', width: '60px', height: '40px', marginTop: '30px' }}>
                    <div style={{ position: 'absolute', top: 0, left: '-15px', width: '30px', height: '50px', backgroundColor: '#16233b', transform: 'rotate(-20deg)', borderBottom: '10px solid transparent' }}></div>
                    <div style={{ position: 'absolute', top: 0, right: '-15px', width: '30px', height: '50px', backgroundColor: '#16233b', transform: 'rotate(20deg)', borderBottom: '10px solid transparent' }}></div>
                  </div>
                  {/* Seal Circle */}
                  <div style={{
                    position: 'absolute',
                    top: '-15px',
                    width: '90px', height: '90px',
                    backgroundColor: '#d7b65c', // Outer Gold
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
                    border: '3px dashed #16233b', // Inner dark dashed border effect
                  }}>
                    <div style={{
                      width: '74px', height: '74px',
                      backgroundColor: '#16233b', // Inner Navy
                      borderRadius: '50%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: '#fff',
                      lineHeight: '1.1'
                    }}>
                      <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>Best</span>
                      <span style={{ fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>Award</span>
                    </div>
                  </div>
                </div>
                {/* --------------------------- */}

                {/* --- Central Certificate Content --- */}
                <div style={{
                  position: 'relative',
                  zIndex: 10,
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '50px 80px',
                  boxSizing: 'border-box'
                }}>
                  
                  {/* WebAsha Mini Logo / Brand indicator (Optional instead of just placing text) */}
                  <img src="/assets/imgs/logo.png" alt="WebAsha Logo" style={{ height: '40px', opacity: '0.9', marginBottom: '20px' }} />

                  {/* CERTIFICATE Title */}
                  <h1 style={{
                    fontFamily: '"Montserrat", sans-serif',
                    fontSize: '48px',
                    fontWeight: '700',
                    color: '#222',
                    letterSpacing: '6px',
                    margin: '0',
                    textTransform: 'uppercase'
                  }}>
                    Certificate
                  </h1>

                  {/* Ribbon Box for "OF ACHIEVEMENT" */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '5px',
                    marginBottom: '40px'
                  }}>
                    <div style={{ flex: 1, height: '1px', width: '60px', backgroundColor: '#d7b65c', marginRight: '10px' }}></div>
                    <div style={{
                      border: '1px solid #222',
                      padding: '4px 20px',
                      fontSize: '14px',
                      fontWeight: '700',
                      letterSpacing: '2px',
                      position: 'relative',
                    }}>
                      OF ACHIEVEMENT
                      {/* Triangle cutouts for Ribbon visual */}
                      <div style={{ position: 'absolute', top: '-1px', bottom: '-1px', left: '-12px', borderRight: '12px solid #fcfaf5', borderTop: '12px solid transparent', borderBottom: '12px solid transparent' }}></div>
                      <div style={{ position: 'absolute', top: '-1px', bottom: '-1px', right: '-12px', borderLeft: '12px solid #fcfaf5', borderTop: '12px solid transparent', borderBottom: '12px solid transparent' }}></div>
                      
                      {/* Outline matching cutouts */}
                      <div style={{ position: 'absolute', top: '0', bottom: '0', left: '-15px', borderRight: '14px solid #222', borderTop: '13px solid transparent', borderBottom: '13px solid transparent', zIndex: -1 }}></div>
                      <div style={{ position: 'absolute', top: '0', bottom: '0', right: '-15px', borderLeft: '14px solid #222', borderTop: '13px solid transparent', borderBottom: '13px solid transparent', zIndex: -1 }}></div>
                    </div>
                    <div style={{ flex: 1, height: '1px', width: '60px', backgroundColor: '#d7b65c', marginLeft: '10px' }}></div>
                  </div>

                  {/* Presented To */}
                  <p style={{
                    fontSize: '14px',
                    color: '#555',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    margin: '0 0 10px 0',
                    fontFamily: '"Montserrat", sans-serif'
                  }}>
                    This certificate is proudly presented to
                  </p>

                  {/* Student Name */}
                  <h2 style={{
                    fontFamily: '"Great Vibes", cursive',
                    fontSize: '64px',
                    color: '#333',
                    margin: '10px 0',
                    fontWeight: 400,
                    lineHeight: '1.2'
                  }}>
                    {certificateData.student_name}
                  </h2>

                  {/* Separator / Name Underline */}
                  <div style={{ width: '60%', height: '1px', backgroundColor: '#999', marginBottom: '25px' }}></div>

                  {/* Description Paragraph */}
                  <p style={{
                    fontSize: '16px',
                    color: '#444',
                    textAlign: 'center',
                    lineHeight: '1.8',
                    maxWidth: '85%',
                    margin: '0',
                    fontWeight: '500'
                  }}>
                    Has officially demonstrated mastery and successfully completed the program curriculum for <strong>{certificateData.course_name}</strong>. {certificateData.total_lectures && <span>This comprehensive course included {certificateData.total_lectures} hours of live sessions. </span>} This certification represents verified skill and dedication evaluated by WebAsha Technologies in recognition of excellent capability and aptitude.
                  </p>

                  {/* Bottom Footer Area (Date & Signature) */}
                  <div style={{
                    position: 'absolute',
                    bottom: '60px',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '0 100px',
                    boxSizing: 'border-box',
                    gap: '150px' // Space between columns
                  }}>
                    {/* Date Column */}
                    <div style={{ textAlign: 'center', width: '200px', zIndex: 10 }}>
                      <div style={{
                        borderBottom: '1px solid #444',
                        paddingBottom: '5px',
                        marginBottom: '8px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: '#222'
                      }}>
                        {new Date(certificateData.issue_date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                      </div>
                      <p style={{ margin: 0, fontSize: '12px', color: '#555', letterSpacing: '1px' }}>DATE</p>
                    </div>

                    {/* Signature Column */}
                    <div style={{ textAlign: 'center', width: '200px', zIndex: 10 }}>
                      <div style={{
                        borderBottom: '1px solid #444',
                        paddingBottom: '5px',
                        marginBottom: '8px',
                        height: '30px', // Space for a physical signature
                        // backgroundImage: 'url("/assets/imgs/signature.png")', // Optional realistic signature overlay
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                      }}></div>
                      <p style={{ margin: 0, fontSize: '12px', color: '#555', letterSpacing: '1px' }}>SIGNATURE</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            
          </div>
        )}
      </div>
    </>
  );
}
