import React from 'react';

const ExamBenefitsSection = ({ examName, examCode }) => {
  const salaryData = [
    { title: "Linux System Administrator", responsibilities: "Install, configure, and maintain RHEL servers; patching, user management, backups, and monitoring.", salary: "Fresher: $70K–$85K Experienced: $110K–$150K" },
    { title: "DevOps Engineer", responsibilities: "Automate CI/CD pipelines, infrastructure as code, configuration management.", salary: "$100K–$160K" },
    { title: "Cloud Engineer", responsibilities: "Deploy and manage workloads on public/private cloud platforms, optimize RHEL instances.", salary: "$110K–$170K" },
    { title: "Site Reliability Engineer (SRE)", responsibilities: "Ensure availability and performance of services, incident response, capacity planning.", salary: "$130K–$190K" },
    { title: "System Engineer / Infrastructure Engineer", responsibilities: "Design, implement and support enterprise infrastructure, storage, networking, and security.", salary: "$90K–$150K" }
  ];

  return (
    <section className="my-5">
      <div className="content-section bg-white border rounded-4 p-4 p-md-5 shadow-sm">
        <h2 className="fw-bold mb-4 text-center" style={{ color: '#0f172a' }}>
          Benefits of <span className="text-danger">{examName} ({examCode}) Certification</span> for IT Professionals
        </h2>

        <div className="mb-4">
          <h5 className="fw-bold mb-2">Career Growth & Job Opportunities After {examCode}</h5>
          <p className="text-muted small" style={{ lineHeight: '1.6' }}>
            Earning the <strong>{examCode}</strong> credential significantly improves your employability across roles such as <strong>Linux System Administrator, DevOps Engineer, Cloud Engineer</strong>, and <strong>Site Reliability Engineer (SRE)</strong>. Employers in enterprises and IT services firms — including large MNCs and fast-growing startups — value {examCode} because it proves hands-on competence in managing production-grade Red Hat Enterprise Linux environments. Certified professionals often see faster career progression, better job stability, and expanded opportunities to work on cloud, automation, and infrastructure projects.
          </p>
        </div>

        <div className="mb-4">
          <h5 className="fw-bold mb-2">Average Salary in UAE for {examCode}-Certified Engineers</h5>
          <p className="text-muted small mb-3">Salaries vary by experience, city, and role. Typical ranges in the UAE are:</p>
          <ul className="list-unstyled text-muted small ps-2">
            <li className="mb-1"><strong>Freshers / Entry level:</strong> $70,000–$90,000.</li>
            <li className="mb-1"><strong>Mid-level / Experienced:</strong> $100,000–$140,000.</li>
            <li className="mb-1"><strong>Senior / Specialized roles:</strong> $150,000–$200,000+ depending on automation, cloud, and DevOps skills.</li>
          </ul>
        </div>

        <div className="table-responsive mt-4 mb-5">
          <table className="table table-bordered align-middle shadow-sm" style={{ fontSize: '13px' }}>
            <thead style={{ backgroundColor: '#dc3545', color: 'white' }}>
              <tr>
                <th className="p-3" style={{ width: '25%' }}>Job Title</th>
                <th className="p-3" style={{ width: '50%' }}>Primary Responsibilities</th>
                <th className="p-3" style={{ width: '25%' }}>Average Salary (USD)</th>
              </tr>
            </thead>
            <tbody>
              {salaryData.map((row, idx) => (
                <tr key={idx}>
                  <td className="p-3 fw-bold">{row.title}</td>
                  <td className="p-3 text-muted">{row.responsibilities}</td>
                  <td className="p-3 fw-bold text-dark">{row.salary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4">
          <h5 className="fw-bold mb-2">Why Employers Prefer {examCode} Over Other Linux Certifications</h5>
          <p className="text-muted small" style={{ lineHeight: '1.6' }}>
            The {examCode}'s <strong>performance-based exam</strong> tests real administration tasks in a live RHEL environment rather than relying on multiple-choice questions. This practical validation gives employers confidence that a candidate can perform day-one operational duties. Additionally, Red Hat's market leadership and enterprise adoption make {examCode} a trusted benchmark for hiring.
          </p>
          <p className="text-muted small mt-2">
            In short, {examCode} not only boosts your resume but also equips you with demonstrable skills that directly translate into workplace productivity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExamBenefitsSection;
