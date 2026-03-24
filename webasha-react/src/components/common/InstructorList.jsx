import { useState, useEffect } from "react";
import { fetchData, MEDIA_BASE_URL } from "../../api/config";

const defaultInstructors = [
  {
    full_name: "Satyendra Pal",
    designation: "Senior Consultant",
    bio: "With 14+ years of enterprise experience, Satyendra has guided hundreds of professionals in mastering Linux, DevOps, OpenShift, and Cybersecurity certifications.",
    image: "/assets/img/trainer/satyendra-pal.png"
  },
  {
    full_name: "Abhijeet Sir",
    designation: "Cybersecurity & Ethical Hacking Expert",
    bio: "A certified EC-Council Instructor with practical experience in SOC operations and penetration testing, helping students clear CEH, VAPT, WAPT, SOC Analyst and CPENT exams.",
    image: "/assets/img/trainer/chaand.png"
  },
  {
    full_name: "Chaand Sir",
    designation: "Cloud & OpenShift Engineer",
    bio: "Red Hat Certified Instructor who mentors learners to gain cloud-native skills and pass CCNA, Azure, RHCSA, RHCE, DO280 & EX280 certifications.",
    image: "/assets/img/trainer/chaand.png"
  },
  {
    full_name: "Roushan Sharma",
    designation: "Data Science & AI Trainer",
    bio: "A skilled data analyst and AI educator who helps learners master Python, ML models, and real-time data visualization tools.",
    image: "/assets/img/trainer/sharma.png"
  }
];

const InstructorList = () => {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getInstructors = async () => {
      try {
        const data = await fetchData("instructors/");
        if (data && data.length > 0) {
          setInstructors(data);
        } else {
          setInstructors(defaultInstructors);
        }
      } catch (error) {
        console.error("Failed to fetch instructors:", error);
        setInstructors(defaultInstructors);
      } finally {
        setLoading(false);
      }
    };
    getInstructors();
  }, []);

  if (loading) return null;

  return (
    <section className="learn-experts lazy-section" aria-label="Learn from Industry Experts at WebAsha Technologies">
      <div className="container">
        <div className="section-header text-center mb-4">
          <span className="section-badge">Our Experts</span>
          <h2 className="heading-main text-center mb-5">
            <span className="red-color">Learn From Experts</span> with Real Industry Experience
          </h2>
          <div className="row">
            {instructors.map((instructor, i) => (
              <div className="col-lg-3 col-sm-6 col-12" key={instructor.id || i}>
                <div className="learn-experts-items">
                  <div className="thumbnail-cover">
                    <img
                      src={instructor.image ? (instructor.image.startsWith('http') || instructor.image.startsWith('assets') ? instructor.image : `${MEDIA_BASE_URL}${instructor.image}`) : "/assets/img/trainer/default.png"}
                      loading="lazy"
                      alt={`${instructor.full_name} - WebAsha Technologies`}
                    />
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{instructor.full_name}</h5>
                      <p className="card-desc">{instructor.designation}</p>
                      <p className="card-text">{instructor.bio}</p>
                      <div className="wraper-icon d-flex align-items-center justify-content-between">
                        <div className="single-img">
                          <img
                            src="/assets/img/trainer/webasha-icon.webp"
                            className="card-logo"
                            loading="lazy"
                            alt="WebAsha Technologies Logo"
                          />
                        </div>
                        <div className="img-group" style={{ position: 'relative', zIndex: 50, pointerEvents: 'auto' }}>
                          {instructor.google_link ? (
                            <a href={instructor.google_link} target="_blank" rel="noopener noreferrer" style={{ position: 'relative', zIndex: 100, display: 'inline-block', padding: '0 5px' }}>
                              <img src="/assets/imgs/google.png" className="card-logo" loading="lazy" alt="Google" />
                            </a>
                          ) : (
                            <img src="/assets/imgs/google.png" className="card-logo" loading="lazy" alt="Google" />
                          )}
                          {instructor.linkedin_link ? (
                            <a href={instructor.linkedin_link} target="_blank" rel="noopener noreferrer" style={{ position: 'relative', zIndex: 100, display: 'inline-block', padding: '0 5px' }}>
                              <img src="/assets/imgs/linkdin.png" className="card-logo" loading="lazy" alt="LinkedIn" />
                            </a>
                          ) : (
                            <img src="/assets/imgs/linkdin.png" className="card-logo" loading="lazy" alt="LinkedIn" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorList;
