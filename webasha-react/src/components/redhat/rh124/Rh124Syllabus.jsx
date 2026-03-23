import React from "react";

const Rh124Syllabus = () => {
  return (
    <section className="course-top-curriculum lazy-section" id="syllabus">
      <div className="contentcard">
        <h2 className="heading-main text-center mb-2">
          Curriculum <span className="red-color">RH124 v10</span>
        </h2>
        <div className="content-container" id="contentContainer3">
          <div className="accordion-curriculum mb-5">
            <div className="top-curriculum-header">
              <p className="desc">
                Red Hat Certified System Administrator Curriculum
              </p>
              <a
                href="#"
                className="btn btn-white"
                data-bs-toggle="modal"
                data-bs-target="#syllabusModalLabel"
                aria-label="Download Syllabus"
              >
                <svg
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0.625 11.375C0.79076 11.375 0.949732 11.4408 1.06694 11.5581C1.18415 11.6753 1.25 11.8342 1.25 12V15.125C1.25 15.4565 1.3817 15.7745 1.61612 16.0089C1.85054 16.2433 2.16848 16.375 2.5 16.375H17.5C17.8315 16.375 18.1495 16.2433 18.3839 16.0089C18.6183 15.7745 18.75 15.4565 18.75 15.125V12C18.75 11.8342 18.8158 11.6753 18.9331 11.5581C19.0503 11.4408 19.2092 11.375 19.375 11.375C19.5408 11.375 19.6997 11.4408 19.8169 11.5581C19.9342 11.6753 20 11.8342 20 12V15.125C20 15.788 19.7366 15.4239 19.2678 16.8928C18.7989 17.3616 18.163 17.625 17.5 17.625H2.5C1.83696 17.625 1.20107 17.3616 0.732233 16.8928C0.263392 16.4239 0 15.788 0 15.125V12C0 11.8342 0.065848 11.6753 0.183058 11.5581C0.300269 11.4408 0.45924 11.375 0.625 11.375Z" />
                  <path d="M9.55829 13.8175C9.61635 13.8757 9.68532 13.9219 9.76125 13.9534C9.83718 13.9849 9.91858 14.0011 10.0008 14.0011C10.083 14.0011 10.1644 13.9849 10.2403 13.9534C10.3163 13.9219 10.3852 13.8757 10.4433 13.8175L14.1933 10.0675C14.3106 9.95014 14.3766 9.79097 14.3766 9.625C14.3766 9.45903 14.3106 9.29986 14.1933 9.1825C14.0759 9.06514 13.9168 8.99921 13.7508 8.99921C13.5848 8.99921 13.4256 9.06514 13.3083 9.1825L10.6258 11.8663V0.875C10.6258 0.70924 10.5599 0.550268 10.4427 0.433058C10.3255 0.315848 10.1666 0.25 10.0008 0.25C9.83503 0.25 9.67606 0.315848 9.55885 0.433058C9.44164 0.550268 9.37579 0.70924 9.37579 0.875V11.8663L6.69329 9.1825C6.57593 9.06514 6.41676 8.99921 6.25079 8.99921C6.08482 8.99921 5.92565 9.06514 5.80829 9.1825C5.69093 9.29986 5.625 9.45903 5.625 9.625C5.625 9.79097 5.69093 9.95014 5.80829 10.0675L9.55829 13.8175Z" />
                </svg>{" "}
                Download Syllabus{" "}
              </a>
            </div>
            <div
              className="accordion accordion-flush"
              id="curriculumAccordionFlush"
            >
              {/* Module 1 */}
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="heading-curriculum-1"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-curriculum-1"
                    aria-expanded="false"
                    aria-controls="flush-curriculum-1"
                  >
                    <div className="curriculum-number">
                      <span>1.</span> Get Started with Red Hat Enterprise
                      Linux
                    </div>
                  </button>
                </h2>
                <div
                  id="flush-curriculum-1"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading-curriculum-1"
                  data-bs-parent="#curriculumAccordionFlush"
                >
                  <p className="accordion-body description mb-0">
                    Introduction to RHEL, open source, distributions, and
                    basic navigation.
                  </p>
                </div>
              </div>
              {/* Module 2 */}
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="heading-curriculum-2"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-curriculum-2"
                    aria-expanded="false"
                    aria-controls="flush-curriculum-2"
                  >
                    <div className="curriculum-number">
                      <span>2.</span> Access the Command Line
                    </div>
                  </button>
                </h2>
                <div
                  id="flush-curriculum-2"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading-curriculum-2"
                  data-bs-parent="#curriculumAccordionFlush"
                >
                  <p className="accordion-body description mb-0">
                    Using terminals, bash shell, and basic commands.
                  </p>
                </div>
              </div>
              {/* Module 3 */}
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="heading-curriculum-3"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-curriculum-3"
                    aria-expanded="false"
                    aria-controls="flush-curriculum-3"
                  >
                    <div className="curriculum-number">
                      <span>3.</span> Manage Files from the Command Line
                    </div>
                  </button>
                </h2>
                <div
                  id="flush-curriculum-3"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading-curriculum-3"
                  data-bs-parent="#curriculumAccordionFlush"
                >
                  <p className="accordion-body description mb-0">
                    File operations, directories, and navigation.
                  </p>
                </div>
              </div>
              {/* Module 4 */}
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="heading-curriculum-4"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-curriculum-4"
                    aria-expanded="false"
                    aria-controls="flush-curriculum-4"
                  >
                    <div className="curriculum-number">
                      <span>4.</span> Get Help in Red Hat Enterprise Linux
                    </div>
                  </button>
                </h2>
                <div
                  id="flush-curriculum-4"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading-curriculum-4"
                  data-bs-parent="#curriculumAccordionFlush"
                >
                  <p className="accordion-body description mb-0">
                    Man pages, info, and online documentation.
                  </p>
                </div>
              </div>
              {/* Module 5 */}
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="heading-curriculum-5"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-curriculum-5"
                    aria-expanded="false"
                    aria-controls="flush-curriculum-5"
                  >
                    <div className="curriculum-number">
                      <span>5.</span> Create, View, and Edit Text Files
                    </div>
                  </button>
                </h2>
                <div
                  id="flush-curriculum-5"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading-curriculum-5"
                  data-bs-parent="#curriculumAccordionFlush"
                >
                  <p className="accordion-body description mb-0">
                    Using vi, nano, and command redirection.
                  </p>
                </div>
              </div>
              {/* Module 6 */}
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="heading-curriculum-6"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-curriculum-6"
                    aria-expanded="false"
                    aria-controls="flush-curriculum-6"
                  >
                    <div className="curriculum-number">
                      <span>6.</span> Manage Local Users and Groups
                    </div>
                  </button>
                </h2>
                <div
                  id="flush-curriculum-6"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading-curriculum-6"
                  data-bs-parent="#curriculumAccordionFlush"
                >
                  <p className="accordion-body description mb-0">
                    User/group creation and management.
                  </p>
                </div>
              </div>
              {/* Module 7 */}
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="heading-curriculum-7"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-curriculum-7"
                    aria-expanded="false"
                    aria-controls="flush-curriculum-7"
                  >
                    <div className="curriculum-number">
                      <span>7.</span> Control Access to Files
                    </div>
                  </button>
                </h2>
                <div
                  id="flush-curriculum-7"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading-curriculum-7"
                  data-bs-parent="#curriculumAccordionFlush"
                >
                  <p className="accordion-body description mb-0">
                    Permissions, ownership, and ACLs.
                  </p>
                </div>
              </div>
              {/* Module 8 */}
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="heading-curriculum-8"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-curriculum-8"
                    aria-expanded="false"
                    aria-controls="flush-curriculum-8"
                  >
                    <div className="curriculum-number">
                      <span>8.</span> Monitor and Manage Linux Processes
                    </div>
                  </button>
                </h2>
                <div
                  id="flush-curriculum-8"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading-curriculum-8"
                  data-bs-parent="#curriculumAccordionFlush"
                >
                  <p className="accordion-body description mb-0">
                    Process monitoring and control.
                  </p>
                </div>
              </div>
              {/* Module 9 */}
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="heading-curriculum-9"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-curriculum-9"
                    aria-expanded="false"
                    aria-controls="flush-curriculum-9"
                  >
                    <div className="curriculum-number">
                      <span>9.</span> Control Services and Daemons
                    </div>
                  </button>
                </h2>
                <div
                  id="flush-curriculum-9"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading-curriculum-9"
                  data-bs-parent="#curriculumAccordionFlush"
                >
                  <p className="accordion-body description mb-0">
                    Using systemctl for services.
                  </p>
                </div>
              </div>
              {/* Module 10 */}
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="heading-curriculum-10"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-curriculum-10"
                    aria-expanded="false"
                    aria-controls="flush-curriculum-10"
                  >
                    <div className="curriculum-number">
                      <span>10.</span> Configure and Secure SSH
                    </div>
                  </button>
                </h2>
                <div
                  id="flush-curriculum-10"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading-curriculum-10"
                  data-bs-parent="#curriculumAccordionFlush"
                >
                  <p className="accordion-body description mb-0">
                    SSH setup and security.
                  </p>
                </div>
              </div>
              {/* Module 11 */}
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="heading-curriculum-11"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-curriculum-11"
                    aria-expanded="false"
                    aria-controls="flush-curriculum-11"
                  >
                    <div className="curriculum-number">
                      <span>11.</span> Analyze and Store Logs
                    </div>
                  </button>
                </h2>
                <div
                  id="flush-curriculum-11"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading-curriculum-11"
                  data-bs-parent="#curriculumAccordionFlush"
                >
                  <p className="accordion-body description mb-0">
                    Journalctl and log management.
                  </p>
                </div>
              </div>
              {/* Module 12 */}
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="heading-curriculum-12"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-curriculum-12"
                    aria-expanded="false"
                    aria-controls="flush-curriculum-12"
                  >
                    <div className="curriculum-number">
                      <span>12.</span> Manage Networking
                    </div>
                  </button>
                </h2>
                <div
                  id="flush-curriculum-12"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading-curriculum-12"
                  data-bs-parent="#curriculumAccordionFlush"
                >
                  <p className="accordion-body description mb-0">
                    Network configuration with nmcli.
                  </p>
                </div>
              </div>
              {/* Module 13 */}
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="heading-curriculum-13"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-curriculum-13"
                    aria-expanded="false"
                    aria-controls="flush-curriculum-13"
                  >
                    <div className="curriculum-number">
                      <span>13.</span> Archive and Transfer Files
                    </div>
                  </button>
                </h2>
                <div
                  id="flush-curriculum-13"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading-curriculum-13"
                  data-bs-parent="#curriculumAccordionFlush"
                >
                  <p className="accordion-body description mb-0">
                    Tar, gzip, scp usage.
                  </p>
                </div>
              </div>
              {/* Module 14 */}
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="heading-curriculum-14"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-curriculum-14"
                    aria-expanded="false"
                    aria-controls="flush-curriculum-14"
                  >
                    <div className="curriculum-number">
                      <span>14.</span> Install and Update Software
                    </div>
                  </button>
                </h2>
                <div
                  id="flush-curriculum-14"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading-curriculum-14"
                  data-bs-parent="#curriculumAccordionFlush"
                >
                  <p className="accordion-body description mb-0">
                    Using dnf/yum for packages.
                  </p>
                </div>
              </div>
              {/* Module 15 */}
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="heading-curriculum-15"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-curriculum-15"
                    aria-expanded="false"
                    aria-controls="flush-curriculum-15"
                  >
                    <div className="curriculum-number">
                      <span>15.</span> Access Linux File Systems
                    </div>
                  </button>
                </h2>
                <div
                  id="flush-curriculum-15"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading-curriculum-15"
                  data-bs-parent="#curriculumAccordionFlush"
                >
                  <p className="accordion-body description mb-0">
                    Mounting, file systems management.
                  </p>
                </div>
              </div>
              {/* Module 16 */}
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="heading-curriculum-16"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-curriculum-16"
                    aria-expanded="false"
                    aria-controls="flush-curriculum-16"
                  >
                    <div className="curriculum-number">
                      <span>16.</span> Manage Virtual Machines
                    </div>
                  </button>
                </h2>
                <div
                  id="flush-curriculum-16"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading-curriculum-16"
                  data-bs-parent="#curriculumAccordionFlush"
                >
                  <p className="accordion-body description mb-0">
                    Basic KVM virtualization.
                  </p>
                </div>
              </div>
              {/* Module 17 */}
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="heading-curriculum-17"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-curriculum-17"
                    aria-expanded="false"
                    aria-controls="flush-curriculum-17"
                  >
                    <div className="curriculum-number">
                      <span>17.</span> Comprehensive Review
                    </div>
                  </button>
                </h2>
                <div
                  id="flush-curriculum-17"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading-curriculum-17"
                  data-bs-parent="#curriculumAccordionFlush"
                >
                  <p className="accordion-body description mb-0">
                    Lab-based review of all topics.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="gradient-overlay" />
        </div>
        <button
          className="toggle-button"
          onclick="toggleContent('contentContainer3', this)"
        >
          View More
        </button>
      </div>
    </section>
  );
};

export default Rh124Syllabus;
