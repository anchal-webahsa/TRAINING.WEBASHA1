import React, { useState, useEffect } from 'react';
import { fetchData, MEDIA_BASE_URL } from '../api/config';

const PlacedStudents = () => {
  const [students, setStudents] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [stats, setStats] = useState([
    { value: "350+", label: "Total Placements"  },
    { value: "8.9 LPA", label: "Average Package" },
    { value: "120+", label: "Hiring Partners"   },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPlacements = async () => {
      try {
        const data = await fetchData('placements/');
        if (data.students && data.students.length > 0) {
          setStudents(data.students);
        }
        
        if (data.companies && data.companies.length > 0) {
          const companiesWithMedia = data.companies.map(c => ({
            ...c,
            src: c.src.startsWith('http') ? c.src : `${MEDIA_BASE_URL.replace('/api', '')}${c.src}`
          }));
          setCompanies(companiesWithMedia);
        }

        if (data.stats && data.stats.length > 0) {
          setStats(data.stats);
        }
      } catch (error) {
        console.error("Failed to fetch placements:", error);
      } finally {
        setLoading(false);
      }
    };
    getPlacements();
  }, []);

  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-bar text-center">
        <div className="container">
          <div className="row align-items-center py-3">
            <div className="col-12">
              <h1 className="heading-main-1 mb-2 text-white">Placed Students</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center mb-0" style={{ background: "transparent" }}>
                  <li className="breadcrumb-item">
                    <a href="/" className="text-decoration-none text-white" aria-label="Home">
                      <svg viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg" width={15} height={12} role="img" aria-hidden="true">
                        <path d="M8 17.5V11.5H12V17.5H17V9.5H20L10 0.5L0 9.5H3V17.5H8Z" fill="currentColor" />
                      </svg>
                      <span className="ms-1">Home</span>
                    </a>
                  </li>
                  <li className="breadcrumb-item active text-white" aria-current="page">
                    Placed Students
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <section className="section-header lazy-section mt-4 mb-5" aria-label="Placed students list">
        <div className="container">

          <span className="section-badge">Placements</span>
          <h2 className="heading-main-1">Recent Placed Students</h2>
          <p className="description mb-4">
            Our placement team works closely with learners to prepare resumes, conduct mock interviews
            and connect with hiring partners. Below is a sample of students placed through WebAsha Technologies.
          </p>

          {/* Stats */}
          <div className="row mb-4">
            {stats.map((s, i) => (
              <div className="col-md-4" key={i}>
                <div className="card p-3 text-center">
                  <div className="card-body">
                    <h3 className="h1 mb-0">{s.value}</h3>
                    <p className="mb-0">{s.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="table-responsive custom-table mb-4">
            {loading ? (
              <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <table className="table table-bordered align-middle">
                <thead className="table-light">
                  <tr>
                    <th scope="col">S.No.</th>
                    <th scope="col">Student Name</th>
                    <th scope="col">Course</th>
                    <th scope="col">Role</th>
                    <th scope="col">Company</th>
                    <th scope="col">Package (LPA)</th>
                    <th scope="col">Month/Year</th>
                  </tr>
                </thead>
                <tbody>
                  {students.length > 0 ? (
                    students.map((s) => (
                      <tr key={s.sno}>
                        <td>{s.sno}</td>
                        <td>{s.name}</td>
                        <td>{s.course}</td>
                        <td>{s.role}</td>
                        <td>{s.company}</td>
                        <td>{s.pkg}</td>
                        <td>{s.date}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" className="text-center py-4">No placement records found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>

          {/* Hiring Partners */}
          {companies.length > 0 && (
            <>
              <h2 className="heading-main mt-4">Our Hiring Partners</h2>
              <div className="row align-items-center g-3 mb-4">
                {companies.map((c, i) => (
                  <div className="col-auto" key={i}>
                    <img
                      src={c.src}
                      alt={c.alt}
                      className="img-fluid"
                      style={{ maxHeight: "48px" }}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </>
          )}

          {/* CTA */}
          <div className="text-center mt-4">
            <h3 className="mb-2">Want to be on this list?</h3>
            <p className="mb-3">
              Enroll in a course, build hands-on projects and let our placement team support your job search.
            </p>
            <button
              type="button"
              className="btn btn-primary btn-width mx-auto d-inline-flex align-items-center"
              data-bs-toggle="modal"
              data-bs-target="#enquiryModal"
              aria-controls="enquiryModal"
              aria-label="Apply for Training at WebAsha Technologies"
            >
              Apply Now
              <i className="fa fa-arrow-right ms-2" aria-hidden="true" />
            </button>
          </div>

        </div>
      </section>
    </>
  );
};

export default PlacedStudents;