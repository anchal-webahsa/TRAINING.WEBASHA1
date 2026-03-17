import { useEffect } from "react";

const Career = () => {
  useEffect(() => {
    // Title
    document.title = "Careers | WebAsha Technologies - Work With Us";

    // Helper to add/update meta tags
    const setMeta = (name, content, property = false) => {
      let selector = property
        ? `meta[property="${name}"]`
        : `meta[name="${name}"]`;

      let tag = document.querySelector(selector);

      if (!tag) {
        tag = document.createElement("meta");
        property ? tag.setAttribute("property", name) : tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }

      tag.setAttribute("content", content);
    };

    // Meta tags
    setMeta(
      "description",
      "Explore career opportunities at WebAsha Technologies. Apply for DevOps, Cloud, Security roles."
    );
    setMeta(
      "keywords",
      "WebAsha Careers, DevOps Jobs Pune, Cloud Jobs, Cybersecurity Careers"
    );

    // Open Graph
    setMeta("og:title", "Careers | WebAsha Technologies", true);
    setMeta(
      "og:description",
      "Join WebAsha Technologies and grow your career in Cloud, DevOps & Security.",
      true
    );
    setMeta("og:url", window.location.href, true);
    setMeta(
      "og:image",
      "/assets/img/careers/webasha-careers.webp",
      true
    );
  }, []);

  return (
    <>
      {/* HERO */}
      <header className="bg-dark text-white text-center py-5">
        <div className="container">
          <h1 className="fw-bold">Careers at WebAsha Technologies</h1>
          <p className="lead">
            Build your future in Cloud, DevOps, Security & Training.
          </p>
          <a href="#open-positions" className="btn btn-outline-light me-2">
            View Open Positions
          </a>
          <a href="#apply" className="btn btn-danger">
            Apply Now
          </a>
        </div>
      </header>

      {/* WHY WORK WITH US */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3">
              <h5>Competitive Pay</h5>
              <p className="text-muted small">Market-aligned packages</p>
            </div>
            <div className="col-md-3">
              <h5>Training</h5>
              <p className="text-muted small">Certifications & learning</p>
            </div>
            <div className="col-md-3">
              <h5>Flexible Hours</h5>
              <p className="text-muted small">Hybrid & remote options</p>
            </div>
            <div className="col-md-3">
              <h5>Career Growth</h5>
              <p className="text-muted small">Clear growth path</p>
            </div>
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section id="open-positions" className="py-5 bg-light">
        <div className="container">
          <h2>Open Positions</h2>
          <p className="text-muted">
            Job openings will be displayed here (API integration later).
          </p>
        </div>
      </section>

      {/* APPLY */}
      <section id="apply" className="py-5">
        <div className="container">
          <h3>Apply Now</h3>
          <form className="card p-4 shadow-sm">
            <input className="form-control mb-3" placeholder="Full Name" />
            <input className="form-control mb-3" placeholder="Email" />
            <input className="form-control mb-3" placeholder="Phone" />
            <button className="btn btn-danger">Submit Application</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Career;