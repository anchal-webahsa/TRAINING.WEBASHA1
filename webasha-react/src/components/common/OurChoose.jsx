import "./OurChoose.css";

const leftItems = [
  { icon: "programming-icon-1.png", title: "Cybersecurity",          href: "cybersecurity-courses" },
  { icon: "programming-icon-2.png", title: "Cloud Computing",        href: "cloud-computing-courses" },
  { icon: "programming-icon-3.png", title: "Data Science",           href: "data-science-courses" },
  { icon: "programming-icon-1.png", title: "DevOps",                 href: "devops-courses" },
  { icon: "programming-icon-2.png", title: "Artificial Intelligence",href: "ai-courses" },
  { icon: "programming-icon-3.png", title: "Linux Administration",   href: "linux-courses" },
  { icon: "programming-icon-1.png", title: "Red Hat (RHCSA)",        href: "rhcsa" },
  { icon: "programming-icon-2.png", title: "AWS Cloud",              href: "aws-courses" },
];

const rightItems = [
  { icon: "programming-icon-1.png", title: "Networking",             href: "networking-courses" },
  { icon: "programming-icon-2.png", title: "Ethical Hacking",        href: "ethical-hacking-courses" },
  { icon: "programming-icon-3.png", title: "Full Stack with Python", href: "full-stack-python" },
  { icon: "programming-icon-1.png", title: "Machine Learning",       href: "machine-learning-courses" },
  { icon: "programming-icon-2.png", title: "Cloud Security",         href: "cloud-security-courses" },
  { icon: "programming-icon-3.png", title: "Data Analytics",         href: "data-analytics-courses" },
  { icon: "programming-icon-1.png", title: "OSCP",                   href: "oscp" },
  { icon: "programming-icon-2.png", title: "Graphic Design",         href: "graphic-design-courses" },
];

const OurChoose = () => {
  // Duplicate items for seamless infinite loop
  const leftDuped  = [...leftItems,  ...leftItems];
  const rightDuped = [...rightItems, ...rightItems];

  return (
    <section className="our-choose" aria-label="Explore Top IT Training Domains at WebAsha Technologies">
      {/* Header */}
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="heading-main text-white mb-3">
              Choose From 25+ In-Demand IT Domains
            </h2>
            <p className="description text-white">
              Explore career-focused courses in{" "}
              <strong>Cloud Computing, Cybersecurity, Data Science, AI, Linux,</strong>{" "}
              and more. Build job-ready skills through structured learning paths
              designed by industry-certified professionals.
            </p>
          </div>
        </div>
      </div>

      {/* Left Scroll Track (scrolls left → ) */}
      <div className="our-choose-track-wrapper">
        <div className="our-choose-track scroll-left">
          {leftDuped.map((item, i) => (
            <div className="our-choose-card" key={i}>
              <div className="our-choose-card-inner">
                <div className="oc-icon">
                  <img
                    src={`assets/imgs/${item.icon}`}
                    width={48}
                    loading="lazy"
                    alt={`${item.title} Icon`}
                  />
                </div>
                <div className="oc-content">
                  <h5>{item.title}</h5>
                  <a href={item.href} className="oc-link">
                    Explore
                    <img
                      src="assets/imgs/arrow-back.png"
                      width={10}
                      alt="arrow"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Scroll Track (scrolls right ← ) */}
      <div className="our-choose-track-wrapper">
        <div className="our-choose-track scroll-right">
          {rightDuped.map((item, i) => (
            <div className="our-choose-card" key={i}>
              <div className="our-choose-card-inner">
                <div className="oc-icon">
                  <img
                    src={`assets/imgs/${item.icon}`}
                    width={48}
                    loading="lazy"
                    alt={`${item.title} Icon`}
                  />
                </div>
                <div className="oc-content">
                  <h5>{item.title}</h5>
                  <a href={item.href} className="oc-link">
                    Explore
                    <img
                      src="assets/imgs/arrow-back.png"
                      width={10}
                      alt="arrow"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="d-flex align-items-center justify-content-center mt-4">
        <a href="courses" className="btn btn-width btn-white">
          Explore All Courses
        </a>
      </div>
    </section>
  );
};

export default OurChoose;