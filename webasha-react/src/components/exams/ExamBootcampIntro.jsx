import React from 'react';

const ExamBootcampIntro = ({ cleanTitle, location, displayCode }) => {
  const bootcampPoints = [
    { label: "Internationally Valued Credential", text: `The ${cleanTitle} v10 certification is highly respected by global IT organizations. It strengthens your resume with a credential that verifies your ability to manage enterprise Linux environments effectively and securely, helping you stand out in competitive job markets.` },
    { label: "Performance-Based Assessment", text: `Unlike theoretical exams, ${cleanTitle} is a performance-based certification where you complete practical, scenario-driven tasks in a live environment. This ensures that certified professionals possess genuine, hands-on expertise in Linux system management and troubleshooting.` },
    { label: "Essential for System Administrators", text: `${cleanTitle} v10 serves as a foundational certification for professionals working in Linux administration, DevOps, system engineering, or cloud infrastructure management. It also acts as a prerequisite for advanced Red Hat certifications such as RHCE and RHCA.` },
    { label: "Recommended Prerequisites", text: `While there are no strict prerequisites, Red Hat recommends completing RH124 and RH134 courses. These modules help candidates develop the essential skills needed to confidently tackle the ${cleanTitle} v10 exam tasks.` },
    { label: "Global Validity and Recognition", text: `The ${cleanTitle} certification is valid for three years worldwide and recognized across multinational companies, government sectors, and cloud service providers.` },
    { label: "Hands-On Practical Exam", text: `The ${displayCode} exam evaluates your ability to perform real administrative tasks such as managing users, configuring storage, implementing security policies, and automating system processes using Bash scripting.` },
    { label: "Language and Exam Availability", text: `The ${cleanTitle} v10 exam is conducted in English and is available both online (remote proctor) and offline (in-person) across the UAE. This flexibility allows professionals and students to choose the most convenient testing mode based on their schedules.` }
  ];

  return (
    <div className="mb-5">
      <h2 className="fw-bold mb-4 text-start" style={{ color: '#0f172a' }}>
        {cleanTitle} v10 <span className="text-danger">Certification Bootcamp</span> in {location || "Dubai, UAE"}
      </h2>
      <div className="description text-dark text-start" style={{ lineHeight: '1.4', fontSize: '14.5px' }}>
        <p className="mb-2">
          The <strong>{cleanTitle} v10 Bootcamp in {location || "Dubai, UAE"}</strong> is an intensive, hands-on program designed to build and validate your <strong>Linux system administration skills</strong>. This globally recognized certification from <strong>Red Hat</strong> demonstrates your technical competence in managing, configuring, and troubleshooting <strong>Red Hat Enterprise Linux (RHEL)</strong> systems. The {cleanTitle} v10 exam focuses on real-world tasks that reflect the daily responsibilities of system administrators, making it a crucial milestone for anyone pursuing a career in <strong>Linux, DevOps, or Cloud Computing</strong>.
        </p>
        
        <ul className="list-unstyled mt-2">
          {bootcampPoints.map((item, idx) => (
            <li className="mb-1 d-flex align-items-start" key={idx}>
              <span className="text-danger fw-bold me-2" style={{ fontSize: '0.9rem', marginTop: '1px' }}>»</span>
              <div>
                <strong>{item.label}:</strong> {item.text}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExamBootcampIntro;
