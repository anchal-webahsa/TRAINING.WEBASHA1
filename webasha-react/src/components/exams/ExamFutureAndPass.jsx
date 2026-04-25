import React from 'react';

const ExamFutureAndPass = ({ examName, examCode }) => {
  return (
    <>
      {/* Section 13: Future of RHCSA */}
      <section className="my-5">
        <div className="content-section bg-white border rounded-4 p-4 p-md-5 shadow-sm">
          <h2 className="fw-bold mb-4 text-center" style={{ color: '#0f172a' }}>
            Future of <span className="text-danger">{examName} ({examCode}) Certification in UAE</span>
          </h2>

          <div className="mb-4">
            <h5 className="fw-bold mb-2">Impact of Automation, DevOps, and Cloud on {examCode}</h5>
            <p className="text-muted small" style={{ lineHeight: '1.6' }}>
              The future of <strong>{examName} ({examCode})</strong> in the UAE is closely tied to the evolution of <strong>automation, DevOps, and cloud computing</strong>. As IT infrastructures become increasingly automated and containerized, Red Hat has enhanced the {examCode} curriculum to include <strong>Ansible automation, Podman, and hybrid cloud deployment</strong>. This ensures certified professionals remain relevant in cloud-native ecosystems.
            </p>
          </div>

          <div className="mb-4">
            <h5 className="fw-bold mb-2">{examCode} vs. RHCE: Which One Should You Pursue Next?</h5>
            <p className="text-muted small" style={{ lineHeight: '1.6' }}>
              <strong>{examCode}</strong> is the foundation. Next, pursue <strong>RHCE</strong> for advanced automation with Ansible, networking, and system tuning. Ideal for senior admins and DevOps roles.
            </p>
          </div>

          <div className="mt-4">
            <h5 className="fw-bold mb-2">Future Demand for Linux System Administrators in 2026 and Beyond</h5>
            <p className="text-muted small" style={{ lineHeight: '1.6' }}>
              With over 70% of enterprise workloads on Linux and growing cloud adoption, demand for {examCode}-certified professionals in <strong>Dubai, San Francisco, Seattle, and Austin</strong> is surging. Roles in cloud, DevOps, and infrastructure automation are in high demand.
            </p>
            <p className="text-muted small mt-2">
              {examCode} remains a cornerstone for long-term growth in IT infrastructure, cloud platforms, and open-source technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Section 14: How to Pass */}
      <section className="my-5">
        <div className="content-section bg-white border rounded-4 p-4 p-md-5 shadow-sm">
          <h2 className="fw-bold mb-4 text-center" style={{ color: '#0f172a' }}>
            How to Pass <span className="text-danger">{examName} ({examCode}) Exam?</span>
          </h2>

          <div className="mb-4">
            <h5 className="fw-bold mb-2">How to Start {examCode} Exam Preparation</h5>
            <p className="text-muted small" style={{ lineHeight: '1.6' }}>
              Start with <strong>RH124 and RH134</strong> courses. Practice in live labs, use exam simulators, and focus on speed and accuracy.
            </p>
          </div>

          <div className="mt-4">
            <h5 className="fw-bold mb-2">Recommended Training Institute for {examCode} (WebAsha Technologies, UAE)</h5>
            <p className="text-muted small" style={{ lineHeight: '1.6' }}>
              <strong>WebAsha Technologies</strong> offers expert-led, lab-focused {examCode} training in the UAE. With Red Hat-certified trainers, real exam simulations, and career support, we ensure you pass on your first attempt.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExamFutureAndPass;
