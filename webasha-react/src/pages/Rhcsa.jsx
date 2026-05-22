import React, { useEffect } from 'react';
import ExamPageHero from '../components/exams/ExamPageHero';
import ExamIntroSection from '../components/exams/ExamIntroSection';
import ExamInfoTable from '../components/exams/ExamInfoTable';
import ExamVoucherSection from '../components/exams/ExamVoucherSection';
import ExamStatsSection from '../components/exams/ExamStatsSection';
import ExamFAQSection from '../components/exams/ExamFAQSection';
import ExamSidebar from '../components/exams/ExamSidebar';
import ExpandableContent from '../components/common/ExpandableContent';

const Rhcsa = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const examData = {
    name: "Red Hat Certified System Administrator (RHCSA)",
    code: "EX200",
    duration: "180 Minutes",
    questions: "Performance-Based Tasks (Hands-on Lab)",
    fee: "$500 USD for International Candidates",
    whatsappLink: "https://api.whatsapp.com/send?phone=19292439565&text=Hello%20WebAsha%20USA%2C%20I%20want%20Discounted%20EX200%20Exam%20Voucher%20for%20USA",
    validity: "3 Years",
    format: "Hands-On Performance-Based Lab",
    passingScore: "210 out of 300",
    eligibility: "No mandatory prerequisites (RH124/RH134 recommended)",
    languages: "English",
    mode: "In-Person / Remote Proctored",
    lastUpdate: "Oct 25, 2024",
    price: "199",
    originalPrice: "499"
  };

  const faqs = [
    { 
      question: "What is the cost of RHCSA certification in Jersey City, USA?", 
      answer: "The official <strong>Red Hat EX200 exam fee is $500 USD</strong> in the USA. Training costs at institutes like <strong>WebAsha Technologies</strong> range from <strong>$1,500 to $3,500</strong>, depending on the training format (online vs. bootcamp)." 
    },
    { 
      question: "Is RHCSA EX200 exam available online in the USA?", 
      answer: "Yes, Red Hat offers <strong>remote proctored exams</strong> for EX200 in the USA. You can take the exam from home with a stable internet connection, an external webcam, and a quiet environment that meets Red Hat's strict security requirements." 
    },
    { 
      question: "How long is the RHCSA certification valid?", 
      answer: "The RHCSA certification is valid for <strong>3 years</strong>. You can maintain its status by passing the latest RHCSA exam again, passing an RHCE exam, or achieving any Red Hat Certificate of Expertise." 
    },
    {
      question: "What happens if I fail the RHCSA exam in the first attempt?",
      answer: "Most exam vouchers allow for a <strong>retake at a discounted price</strong>, but some bundles include a free retake. At WebAsha, we provide intensive support to ensure you pass in the <strong>first attempt</strong>."
    }
  ];

  return (
    <div className="rhcsa-page">
      <ExamPageHero 
        title="Pass EX200 | RHCSA Exam in 1st Attempt in Jersey City [2025] | Mock Tests, Certification Guides, Real Exam Questions" 
        breadcrumb="Pass EX200 | RHCSA Exam"
      />

      <div className="container mt-5">
        <div className="row">
          {/* Main Content */}
          <div className="col-lg-8 col-sm-12">
            <ExamIntroSection 
              examName="RHCSA EX200v10" 
              rating="4.9" 
              reviewCount="49,765" 
            />

            <ExpandableContent title={<><span className="red-color">RHCSA (EX200)</span> Certification in Jersey City, USA</>}>
              <p className="text-muted mb-3">
                The <strong>Red Hat Certified System Administrator (RHCSA – EX200)</strong> certification is one of the most recognized credentials for Linux professionals in Jersey City, USA. In today's competitive IT landscape, where organizations increasingly rely on <strong>open-source and cloud-based solutions</strong>, RHCSA validates your ability to manage, configure, and troubleshoot <strong>Red Hat Enterprise Linux (RHEL)</strong> environments.
              </p>
              <h5 className="bold-text mb-2">What Makes RHCSA a Must-Have Linux Certification</h5>
              <p className="text-muted mb-3">
                The <strong>RHCSA (EX200)</strong> certification is entirely <strong>performance-based</strong>, meaning candidates must perform hands-on administrative tasks in a live lab environment rather than answering theoretical questions. This ensures that every certified professional possesses real-world, practical skills.
              </p>
              <h5 className="bold-text mb-2">Overview of the Red Hat Certification Program</h5>
              <p className="text-muted mb-4">
                The <strong>Red Hat Certification Program</strong> follows a structured and progressive learning path designed to develop your Linux expertise step-by-step. From basic system administration to advanced automation with Ansible, the program prepares you for diverse IT roles.
              </p>
              
              <hr className="my-4" style={{ opacity: 0.15 }} />
              
              <h4 className="bold-text mb-4 text-center">What is <span className="red-color">RHCSA (EX200)</span> Certification?</h4>
              <h5 className="bold-text mb-2">What is RHCSA?</h5>
              <p className="text-muted mb-3">
                The <strong>Red Hat Certified System Administrator (RHCSA – EX200)</strong> certification is a globally recognized credential that validates your expertise in performing essential system administration tasks on <strong>Red Hat Enterprise Linux (RHEL)</strong>. It is the core foundation for anyone looking to build a career in Linux engineering or DevOps.
              </p>
              <h5 className="bold-text mb-2">Evolution and History of the RHCSA Exam</h5>
              <p className="text-muted mb-0">
                Introduced in <strong>2010</strong> by <strong>Red Hat</strong>, the <strong>RHCSA (EX200)</strong> certification was created to replace the older RHCT program. It has since evolved through multiple RHEL versions (RHEL 7, 8, and now 9/10), consistently adapting to the latest enterprise technologies like containers and automation.
              </p>
            </ExpandableContent>

            <ExamInfoTable data={examData} />

            <section className="course-ceh-group lazy-section text-center p-4 border rounded bg-light mb-4 shadow-sm">
              <h4 className="mb-3">Passing Criteria for <span className="red-color">RHCSA (EX200)</span> Exam</h4>
              <p className="text-muted mb-4">
                To successfully earn the <strong>Red Hat Certified System Administrator (RHCSA – EX200)</strong> credential, candidates must achieve a minimum score of <b>210 out of 300</b> in a <b>180-minute performance-based exam</b>.
              </p>
              <div className="button-group d-flex justify-content-center gap-3">
                <a href={examData.whatsappLink} className="btn btn-success" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp me-2" /> WhatsApp</a>
                <a href="tel:+19292439565" className="btn btn-outline-danger"><i className="fa-solid fa-phone me-2" /> +1 (929) 243-9565</a>
              </div>
            </section>

            <ExamVoucherSection examName="RHCSA (EX200)" />

            <ExpandableContent title={<>RHCSA v10 <span className="red-color">Certification Bootcamp</span> in Jersey City, USA</>}>
              <p className="text-muted mb-3">
                The <strong>Red Hat Certified System Administrator (RHCSA v10)</strong> Bootcamp in Jersey City, USA is an intensive, hands-on program designed to build and validate your <strong>Linux system administration skills</strong>.
              </p>
              <ul className="list-unstyled">
                <li className="mb-2"><i className="fa-solid fa-angles-right red-color me-2" /><b>Internationally Valued Credential:</b> verifies your ability to manage enterprise Linux environments effectively.</li>
                <li className="mb-2"><i className="fa-solid fa-angles-right red-color me-2" /><b>Performance-Based Assessment:</b> practical, scenario-driven tasks in a live environment.</li>
                <li className="mb-2"><i className="fa-solid fa-angles-right red-color me-2" /><b>Global Validity:</b> valid for three years worldwide, enhancing your job prospects.</li>
              </ul>
            </ExpandableContent>

            <section className="container my-5 lazy-section">
              <div className="row g-4 align-items-center p-4 border rounded bg-white shadow-sm">
                <div className="col-md-5">
                  <div className="position-relative d-flex justify-content-center align-items-center">
                    <img src="/assets/img/webasha-study-notes.webp" className="img-fluid" alt="WebAsha RHCSA EX200 Training" style={{ maxHeight: 300 }} />
                    <span className="position-absolute top-0 start-0 badge rounded-pill bg-warning text-dark p-2" style={{fontSize: '12px'}}>
                      <i className="fa-solid fa-shield-heart me-1" /> 100% Success Guarantee
                    </span>
                  </div>
                </div>
                <div className="col-md-7">
                  <h3 className="heading-main mb-3 text-start">RHCSA (EX200) <span className="red-color">Exam Bootcamp</span></h3>
                   <div className="table-responsive">
                    <table className="table table-sm table-borderless mb-3">
                      <tbody>
                        <tr><th className="w-40">Exam Name:</th><td><strong>RHCSA</strong></td></tr>
                        <tr><th>Exam Code:</th><td><strong>EX200</strong></td></tr>
                        <tr><th>Mock Test:</th><td>Included with Real Exam Scenarios</td></tr>
                        <tr><th>Bundle:</th><td>Study Material + Practical Labs</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                     <p className="mb-0 fs-4 fw-bold text-success">${examData.price} <span className="text-muted text-decoration-line-through small ms-2">${examData.originalPrice}</span></p>
                  </div>
                  <div className="d-flex gap-2">
                    <a href={examData.whatsappLink} className="btn btn-success flex-grow-1" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp me-2" /> WhatsApp</a>
                    <button className="btn btn-danger flex-grow-1" data-bs-toggle="modal" data-bs-target="#enquiryModal">Enquire Now</button>
                  </div>
                </div>
              </div>
            </section>

            <ExamStatsSection 
              examName="RHCSA (EX200)" 
              passedCount="13+" 
              averageScore="94%" 
              similarity="92%" 
            />

            <ExpandableContent title={<>RHCSA Course Details and <span className="red-color">Exam Overview</span></>}>
               <h5 className="bold-text mb-2">RHCSA Syllabus & Learning Modules</h5>
               <ul className="list-unstyled">
                 <li className="mb-2"><i className="fa-solid fa-angles-right red-color me-2" /><b>Essential Command-Line Tools:</b> Master file manipulation, searching, and advanced shell usage.</li>
                 <li className="mb-2"><i className="fa-solid fa-angles-right red-color me-2" /><b>Shell Scripting Basics:</b> Create simple Bash scripts to automate routine tasks.</li>
                 <li className="mb-2"><i className="fa-solid fa-angles-right red-color me-2" /><b>Local Storage Management:</b> Configuring partitions, LVM, and VDO volume groups.</li>
                 <li className="mb-2"><i className="fa-solid fa-angles-right red-color me-2" /><b>Containers with Podman:</b> Build, manage, and run lightweight containers on RHEL.</li>
               </ul>
            </ExpandableContent>

            <ExamFAQSection examName="RHCSA (EX200)" faqs={faqs} />
          </div>

          {/* Sidebar */}
          <div className="col-lg-4 col-sm-12">
            <div className="sticky-top" style={{top: '100px'}}>
              <ExamSidebar data={examData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rhcsa;