import React from 'react';

const ExamCourseDetails = ({ examName }) => {
  const syllabus = [
    { title: "Essential Command-Line Tools", desc: "Master file manipulation, searching, text utilities and system monitoring commands." },
    { title: "Shell Scripting Basics", desc: "Create simple Bash scripts to automate repetitive tasks." },
    { title: "Operate & Maintain Running Systems", desc: "Manage processes, systemd services, logging and troubleshooting." },
    { title: "Local Storage Management", desc: "Partitioning, LVM, volume groups and logical volumes." },
    { title: "File System Configuration", desc: "Mounting, fstab, permissions and data integrity." },
    { title: "System Deployment & Package Management", desc: "Install RHEL, manage RPM/YUM/DNF packages." },
    { title: "Basic Networking", desc: "Configure interfaces, routing, DNS, and troubleshooting." },
    { title: "User & Group Administration", desc: "Create users, groups, sudo, and access control." },
    { title: "Security Fundamentals", desc: "SELinux, firewalld, and system hardening." },
    { title: "Containers with Podman", desc: "Build, run and manage containers for cloud-native apps." }
  ];

  return (
    <section className="my-5">
      <div className="content-section bg-white border rounded-4 p-4 p-md-5 shadow-sm mb-4">
        <h2 className="fw-bold mb-4 text-center" style={{ color: '#0f172a' }}>
          <span className="text-danger">RHCSA Course Details</span> and Exam Overview
        </h2>
        
        <div className="mb-5">
          <h4 className="fw-bold mb-3" style={{ color: '#0f172a' }}>
            RHCSA Syllabus & Learning Modules
          </h4>
          
          <ul className="list-unstyled">
            {syllabus.map((item, idx) => (
              <li className="mb-2 d-flex align-items-start" key={idx} style={{ fontSize: '14.5px', lineHeight: '1.4' }}>
                <span className="text-danger fw-bold me-2" style={{ fontSize: '0.9rem', marginTop: '1px' }}>»</span>
                <div>
                  <strong>{item.title}:</strong> {item.desc}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h5 className="fw-bold mb-2">Duration, Delivery Modes & Exam Format</h5>
          <p className="text-muted small" style={{ lineHeight: '1.6' }}>
            Intensive bootcamps run for <strong>5 days</strong>, while part-time cohorts span <strong>4–6 weeks</strong>. Delivery options include <strong>classroom, live online, or hybrid</strong> with recorded labs. The RHCSA exam (EX200) is a <strong>180-minute, hands-on lab</strong> — no multiple-choice questions.
          </p>
        </div>

        <div className="mb-4">
          <h5 className="fw-bold mb-2">Eligibility & Recommended Prerequisites</h5>
          <p className="text-muted small" style={{ lineHeight: '1.6' }}>
            No formal prerequisites, but Red Hat recommends <strong>RH124 and RH134</strong> or equivalent experience. Ideal for junior admins, DevOps newcomers, and cloud engineers.
          </p>
        </div>

        <p className="fw-bold text-dark mt-4 mb-0" style={{ fontSize: '14.5px' }}>
          This course is focused on practical competence — by the end, you’ll be ready to perform core admin tasks and troubleshoot confidently.
        </p>
      </div>
    </section>
  );
};

export default ExamCourseDetails;
