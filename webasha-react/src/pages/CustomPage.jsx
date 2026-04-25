import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../api/config';

const CustomPage = () => {
  const { slug } = useParams();
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        setLoading(true);
        console.log(`Fetching custom page with slug: ${slug} from ${API_BASE_URL}/custom-pages/${slug}/`);
        const response = await axios.get(`${API_BASE_URL}/custom-pages/${slug}/`);
        setPageData(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching custom page:", err);
        setError(err.response?.status === 404 ? "Page not found" : "Error loading page content");
        setLoading(false);
      }
    };

    fetchPage();
  }, [slug]);

  if (loading) return <div className="py-5 text-center">Loading...</div>;
  if (error || !pageData) return <div className="py-5 text-center text-danger">{error || "Something went wrong"}</div>;

  return (
    <div className="custom-page-container">
      {/* Banner Section */}
      {(pageData.banner_title || pageData.banner_image) && (
        <section 
          className="page-banner text-center text-white d-flex align-items-center justify-content-center"
          style={{
            minHeight: '400px',
            backgroundColor: '#1e293b',
            backgroundImage: pageData.banner_image 
              ? `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url(${pageData.banner_image})`
              : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '100px 20px'
          }}
        >
          <div className="container">
            <h1 className="display-4 fw-bold mb-3">{pageData.banner_title || pageData.title}</h1>
            {pageData.banner_subtitle && (
              <p className="lead opacity-90 mx-auto" style={{ maxWidth: '700px' }}>
                {pageData.banner_subtitle}
              </p>
            )}
          </div>
        </section>
      )}

      <div className="container py-5">
        <div className="row">
          <div className={pageData.show_sidebar ? "col-lg-8" : "col-12"}>
            {/* Page Header (if no banner) */}
            {!(pageData.banner_title || pageData.banner_image) && (
              <header className="mb-4 pb-3 border-bottom">
                <h1 className="fw-bold">{pageData.title}</h1>
              </header>
            )}

            {/* Main Content */}
            <article 
              className="page-content prose"
              dangerouslySetInnerHTML={{ __html: pageData.content }}
            />

            {/* CTA Section */}
            {pageData.cta_text && pageData.cta_link && (
              <div className="mt-5 p-4 bg-light rounded-4 text-center">
                <Link 
                  to={pageData.cta_link} 
                  className="btn btn-primary btn-lg px-5 py-3 rounded-3 shadow"
                >
                  {pageData.cta_text}
                </Link>
              </div>
            )}
          </div>

          {/* Sidebar */}
          {pageData.show_sidebar && (
            <div className="col-lg-4 mt-5 mt-lg-0">
              <div className="sticky-top" style={{ top: '100px', zIndex: 10 }}>
                <div className="card border-0 shadow-sm rounded-4 p-4">
                  <h3 className="fw-bold h5 mb-4">Quick Information</h3>
                  
                  <div className="d-flex gap-3 mb-4">
                    <div className="bg-primary bg-opacity-10 p-2 rounded-circle text-primary d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                      <i className="fa-solid fa-clock"></i>
                    </div>
                    <div>
                      <p className="mb-0 fw-bold small text-muted">Availability</p>
                      <p className="mb-0">Online Support 24/7</p>
                    </div>
                  </div>

                  <div className="d-flex gap-3 mb-4">
                    <div className="bg-primary bg-opacity-10 p-2 rounded-circle text-primary d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div>
                      <p className="mb-0 fw-bold small text-muted">Phone</p>
                      <p className="mb-0">+91 8485847920</p>
                    </div>
                  </div>

                  <div className="d-flex gap-3 mb-4">
                    <div className="bg-primary bg-opacity-10 p-2 rounded-circle text-primary d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div>
                      <p className="mb-0 fw-bold small text-muted">Email</p>
                      <p className="mb-0 small">training.webasha@gmail.com</p>
                    </div>
                  </div>

                  <hr className="my-4" />
                  
                  <p className="small text-muted mb-4">
                    WebAsha Technologies is a premier IT training provider specializing in Red Hat, Cloud, and Cybersecurity certifications.
                  </p>

                  <Link to="/contact-us" className="btn btn-danger w-100 py-2 fw-bold">
                    Contact Us Now
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .page-content img {
          max-width: 100%;
          height: auto;
          border-radius: 12px;
          margin: 20px 0;
        }
        .page-content h2 { margin-top: 40px; margin-bottom: 20px; font-weight: 700; }
        .page-content p { margin-bottom: 20px; font-size: 1.1rem; color: #4b5563; }
        .page-content ul, .page-content ol { margin-bottom: 20px; }
        .page-content li { margin-bottom: 8px; }
      ` }} />
    </div>
  );
};

export default CustomPage;
