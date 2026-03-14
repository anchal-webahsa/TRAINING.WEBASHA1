// src/components/common/RelatedResources.jsx

const resources = [
  "Red Hat RHCSA Interview Questions",
  "Red Hat RHCE Interview Questions",
  "Red Hat OpenShift Interview Questions",
  "How to Install Red Hat Enterprise Linux (RHEL)",
  "How to Configure Red Hat OpenShift Cluster",
  "How to Prepare for RHCSA EX200 Exam",
  "RHCSA vs RHCE vs RHCA – Key Differences",
];

// Commented out in original PHP — uncomment if needed for cities section:
// const cityResources = [
//   "RHCSA Interview Questions",
//   "RHCE Interview Questions",
//   "OpenShift Interview Questions",
//   "How to Install Red Hat Linux",
//   "How to Install Red Hat OpenShift",
//   "Red Hat Certification Path 2025",
//   "RHCSA vs RHCE vs RHCA – Comparison",
// ];

const RelatedResources = () => (
  <div className="course-kubernetes">
    <div className="course-kubernetes-link">
      {resources.map((text, i) => (
        <a key={i} href="#" className="btn-link text-decoration-none">
          {text}
        </a>
      ))}
    </div>
  </div>
);

export default RelatedResources;