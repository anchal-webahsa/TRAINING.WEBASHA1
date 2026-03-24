import { Link } from "react-router-dom";

export default function Header() {

  const showContent = () => {
    const el = document.getElementById("myDIV");
    if (el) el.classList.add("active");
  };

  const hideContent = () => {
    const el = document.getElementById("myDIV");
    if (el) el.classList.remove("active");
  };

  return (
    <header className="header">
      <>
        {/* Defining the desktop header section */}
        <header className="header">
          {/* Creating a responsive navigation bar using Bootstrap */}
          <nav className="navbar navbar-expand-lg">
            {/* Wrapping navbar content in a container for centering */}
            <div className="container">
              {/* Displaying the logo as the navbar brand */}
              <a className="navbar-brand" href="/">
                <img src="/assets/imgs/logo.png" width={198} height={49} alt="logo" />
              </a>
              {/* Grouping course dropdown and search bar for flexible layout */}
              <div className="d-flex course-dropdown order-sm-0 order-1">
                {/* Setting up the courses dropdown menu */}
                <div className="dropdown">
                  {/* Triggering the dropdown with a button */}
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Courses
                  </button>
                  {/* Defining the dropdown menu content */}
                  <div className="dropdown-menu">
                    {/* Containing dropdown content within a centered container */}
                    <div className="container">
                      {/* Wrapping course dropdown content for styling */}
                      <div className="course-dropdown-wraper">
                        {/* Creating a scrollable container for course category tabs */}
                        <div className="course-tabs-container">
                          {/* Listing navigation pills for course categories */}
                          <ul
                            className="nav nav-pills mb-3"
                            id="pills-tab"
                            role="tablist"
                          >
                            {/* Labeling the Goals section */}
                            <li>
                              <h4>Goals</h4>
                            </li>
                            {/* Defining the "Get a Job" tab button */}
                            <li className="nav-item" role="presentation">
                              <button
                                className="active"
                                id="pills-01m-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-01m"
                                type="button"
                                role="tab"
                                aria-controls="pills-01m"
                                aria-selected="true"
                              >
                                <i className="fa-solid fa-certificate" />
                                Get a Job
                              </button>
                            </li>
                            {/* Labeling the Domains section */}
                            <li>
                              <h4>Domains</h4>
                            </li>
                            {/* Defining the Red Hat tab button */}
                            <li className="nav-item" role="presentation">
                              <button
                                className=""
                                id="pills-02m-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-02m"
                                type="button"
                                role="tab"
                                aria-controls="pills-02m"
                                aria-selected="false"
                              >
                                <i className="fa-solid fa-briefcase" />
                                Red Hat
                              </button>
                            </li>
                            {/* Defining the EC-Council tab button */}
                            <li className="nav-item" role="presentation">
                              <button
                                className=""
                                id="pills-03m-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-03m"
                                type="button"
                                role="tab"
                                aria-controls="pills-03m"
                                aria-selected="false"
                              >
                                <i className="fa-solid fa-clock" />
                                Cybersecurity &amp; Ethical Hacking - EC-Council
                              </button>
                            </li>
                            {/* Defining the OffSec tab button */}
                            <li className="nav-item" role="presentation">
                              <button
                                className=""
                                id="pills-cyber-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-cyber"
                                type="button"
                                role="tab"
                                aria-controls="pills-cyber"
                                aria-selected="false"
                              >
                                <i className="fa-solid fa-shield-alt" />
                                Cybersecurity &amp; Ethical Hacking - OffSec
                              </button>
                            </li>
                            {/* Defining the Networking & Infrastructure tab button */}
                            <li className="nav-item" role="presentation">
                              <button
                                className=""
                                id="pills-linux-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-linux"
                                type="button"
                                role="tab"
                                aria-controls="pills-linux"
                                aria-selected="false"
                              >
                                <i className="fa-solid fa-server" />
                                Networking &amp; Infrastructure (Cisco, VMware,
                                Veritas)
                              </button>
                            </li>
                            {/* Defining the Cloud tab button */}
                            <li className="nav-item" role="presentation">
                              <button
                                className=""
                                id="pills-cloud-devops-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-cloud-devops"
                                type="button"
                                role="tab"
                                aria-controls="pills-cloud-devops"
                                aria-selected="false"
                              >
                                <i className="fa-solid fa-cloud" />
                                Cloud (AWS, Azure, GCP)
                              </button>
                            </li>
                            {/* Defining the DevOps tab button */}
                            <li className="nav-item" role="presentation">
                              <button
                                className=""
                                id="pills-network-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-network"
                                type="button"
                                role="tab"
                                aria-controls="pills-network"
                                aria-selected="false"
                              >
                                <i className="fa-solid fa-network-wired" />
                                DevOps (Docker, Kubernetes)
                              </button>
                            </li>
                            {/* Defining the Programming & Databases tab button */}
                            <li className="nav-item" role="presentation">
                              <button
                                className=""
                                id="pills-prog-db-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-prog-db"
                                type="button"
                                role="tab"
                                aria-controls="pills-prog-db"
                                aria-selected="false"
                              >
                                <i className="fa-solid fa-database" />
                                Programming &amp; Databases (Python, Oracle, SQL, Big
                                Data)
                              </button>
                            </li>
                            {/* Defining the AI, ML & Data Science tab button */}
                            <li className="nav-item" role="presentation">
                              <button
                                className=""
                                id="pills-ai-ml-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-ai-ml"
                                type="button"
                                role="tab"
                                aria-controls="pills-ai-ml"
                                aria-selected="false"
                              >
                                <i className="fa-solid fa-brain" />
                                AI, ML &amp; Data Science
                              </button>
                            </li>
                            {/* Defining the Web & Digital Skills tab button */}
                            <li className="nav-item" role="presentation">
                              <button
                                className=""
                                id="pills-web-digital-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-web-digital"
                                type="button"
                                role="tab"
                                aria-controls="pills-web-digital"
                                aria-selected="false"
                              >
                                <i className="fa-solid fa-globe" />
                                Web &amp; Digital Skills (Full Stack, Web Tech,
                                Digital Marketing, Graphic Design)
                              </button>
                            </li>
                            {/* Defining the Corporate & Career Training tab button */}
                            <li className="nav-item" role="presentation">
                              <button
                                className=""
                                id="pills-corp-career-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-corp-career"
                                type="button"
                                role="tab"
                                aria-controls="pills-corp-career"
                                aria-selected="false"
                              >
                                <i className="fa-solid fa-users" />
                                Corporate &amp; Career Training (Soft Skills,
                                Internships, Job-Oriented Programs)
                              </button>
                            </li>
                          </ul>
                          {/* Providing a button to browse all domains */}
                          <button className="btn btn-all-domains">
                            <span>Browse All Domains</span>
                            <i className="fa-solid fa-arrow-up" />
                          </button>
                        </div>
                        {/* Containing the content for course tabs */}
                        <div className="course-tabs-content">
                          {/* Wrapping tab content for styling */}
                          <div className="course-tabs-card">
                            {/* Enabling scrolling for tab content */}
                            <div className="course-tabs-scrollbar">
                              {/* Defining the tab content area */}
                              <div className="tab-content" id="pills-tabContent">
                                {/* Displaying content for the "Get a Job" tab */}
                                <div
                                  className="tab-pane fade show active"
                                  id="pills-01m"
                                  role="tabpanel"
                                  aria-labelledby="pills-01m-tab"
                                  tabIndex={0}
                                >
                                  {/* Wrapping job-oriented programs content */}
                                  <div className="course-tabs-wraper">
                                    {/* Creating a scrollable row for job programs */}
                                    <div className="course-tabs-row">
                                      {/* Presenting the overview card for job-oriented programs */}
                                      <div className="column w-100">
                                        <div className="nav-card">
                                          <div className="icon-img">
                                            <img
                                              src="/assets/img/icons/job.webp"
                                              alt="Job Oriented Course"
                                            />
                                          </div>
                                          <div className="info-width">
                                            <div className="info">
                                              <h4>
                                                Our Job Oriented Programs in 6 Domains
                                              </h4>
                                              <p>
                                                Hands-on programs designed to prepare
                                                you for in-demand IT jobs with
                                                practical skills and certifications.
                                                Open to anyone with interest in tech
                                                field (except where noted).
                                              </p>
                                            </div>
                                            <a
                                              href="/job-oriented-programs"
                                              className="btn-view text-decoration-none"
                                            >
                                              View All Programs
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                      {/* Listing Cloud Admin program */}
                                      <div className="column">
                                        <h5>Cloud Admin</h5>
                                        <hr />
                                        <a
                                          href="/#"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/cloud.webp"
                                              alt="cloud"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              Cloud Admin
                                              <span className="dots" />
                                              <span>6 Months</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Job-Oriented Program in Cloud
                                              Administration
                                            </h6>
                                            <div className="seller">Best Seller</div>
                                          </div>
                                        </a>
                                        <button className="btn btn-view d-block mx-auto">
                                          View Details
                                        </button>
                                      </div>
                                      {/* Listing DevOps Engineer program */}
                                      <div className="column">
                                        <h5>DevOps Engineer</h5>
                                        <hr />
                                        <a
                                          href="/#"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/devops.webp"
                                              alt="devops"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              DevOps Engineer
                                              <span className="dots" />
                                              <span>8 Months</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Job-Oriented Program in DevOps Engineer
                                            </h6>
                                            <div className="seller trending">
                                              Trending
                                            </div>
                                          </div>
                                        </a>
                                        <button className="btn btn-view d-block mx-auto">
                                          View Details
                                        </button>
                                      </div>
                                      {/* Listing Cyber Security program */}
                                      <div className="column">
                                        <h5>Cyber Security</h5>
                                        <hr />
                                        <a
                                          href="/#"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/cybersecurity.webp"
                                              alt="cybersecurity"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              Cyber Security
                                              <span className="dots" />
                                              <span>8 Months</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Job-Oriented Program in Cyber Security
                                            </h6>
                                            <div className="seller">Best Seller</div>
                                          </div>
                                        </a>
                                        <button className="btn btn-view d-block mx-auto">
                                          View Details
                                        </button>
                                      </div>
                                      {/* Listing Cyber Security with Advance Pen Tester program */}
                                      <div className="column">
                                        <h5>
                                          Cyber Security with Advance Pen Tester
                                        </h5>
                                        <hr />
                                        <a
                                          href="/#"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/cybersecurity.webp"
                                              alt="cybersecurity"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              Cyber Security
                                              <span className="dots" />
                                              <span>12 Months</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Job-Oriented Program in Cyber Security
                                              with Advanced Penetration Testing
                                            </h6>
                                            <div className="seller new">New</div>
                                          </div>
                                        </a>
                                        <button className="btn btn-view d-block mx-auto">
                                          View Details
                                        </button>
                                      </div>
                                      {/* Listing Data Science with AI/ML program */}
                                      <div className="column">
                                        <h5>Data Science with AI/ML</h5>
                                        <hr />
                                        <a
                                          href="/#"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/data-science.webp"
                                              alt="data science"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              Data Science
                                              <span className="dots" />
                                              <span>6 Months</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Job-Oriented Program in Data Science
                                              with AI/ML
                                            </h6>
                                            <div className="seller trending">
                                              Trending
                                            </div>
                                          </div>
                                        </a>
                                        <button className="btn btn-view d-block mx-auto">
                                          View Details
                                        </button>
                                      </div>
                                      {/* Listing Full Stack with Python program */}
                                      <div className="column">
                                        <h5>Full Stack with Python</h5>
                                        <hr />
                                        <a
                                          href="/#"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/full-stack.webp"
                                              alt="full stack"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              Full Stack
                                              <span className="dots" />
                                              <span>6 Months</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Job-Oriented Program in Full Stack with
                                              Python (Computer Background Required)
                                            </h6>
                                            <div className="seller">Best Seller</div>
                                          </div>
                                        </a>
                                        <button className="btn btn-view d-block mx-auto">
                                          View Details
                                        </button>
                                      </div>
                                    </div>
                                    {/* Displaying authorized training partners */}
                                    <div className="course-learn-more-bar">
                                      <div className="course-learn-more-row">
                                        <div className="course-learn-more-column">
                                          <h5 className="course-learn-more-title">
                                            Authorized Training &amp; Certification
                                            Exam Center
                                          </h5>
                                          {/* Listing Red Hat partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/redhat.webp"
                                                alt="Red Hat"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Red Hat</p>
                                            </div>
                                          </div>
                                          {/* Listing EC-Council partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/ec.webp"
                                                alt="EC-Council"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>EC-Council</p>
                                            </div>
                                          </div>
                                          {/* Listing OffSec partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/offsec.webp"
                                                alt="OffSec"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>OffSec</p>
                                            </div>
                                          </div>
                                          {/* Listing AWS Cloud partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/aws.webp"
                                                alt="aws"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>AWS Cloud</p>
                                            </div>
                                          </div>
                                          {/* Listing Microsoft Azure partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/azure.webp"
                                                alt="Azure"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Microsoft Azure</p>
                                            </div>
                                          </div>
                                          {/* Listing Google Cloud partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/google.webp"
                                                alt="Google Cloud"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Google Cloud</p>
                                            </div>
                                          </div>
                                          {/* Listing Cisco partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/cisco.webp"
                                                alt="cisco"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Cisco</p>
                                            </div>
                                          </div>
                                          {/* Listing VMware partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/vmware.webp"
                                                alt="vmware"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>VMware</p>
                                            </div>
                                          </div>
                                          {/* Listing Oracle partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/oracle.webp"
                                                alt="Oracle"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Oracle</p>
                                            </div>
                                          </div>
                                          {/* Listing The Linux Foundation partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/linux.webp"
                                                alt="The Linux Foundation"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>The Linux Foundation</p>
                                            </div>
                                          </div>
                                          {/* Listing CompTIA partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/comptia.webp"
                                                alt="Comptia"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Comptia</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Displaying content for the Red Hat tab */}
                                <div
                                  className="tab-pane fade"
                                  id="pills-02m"
                                  role="tabpanel"
                                  aria-labelledby="pills-02m-tab"
                                  tabIndex={0}
                                >
                                  {/* Wrapping Red Hat courses content */}
                                  <div className="course-tabs-wraper">
                                    {/* Creating a scrollable row for Red Hat tracks */}
                                    <div className="course-tabs-row">
                                      {/* Presenting the overview card for Red Hat certifications */}
                                      <div className="column w-100">
                                        <div className="nav-card">
                                          <div className="icon-img">
                                            <img
                                              src="/assets/img/icons/redhat.webp"
                                              alt="red hat"
                                            />
                                          </div>
                                          <div className="info-width">
                                            <div className="info">
                                              <h4>
                                                Red Hat Training &amp; Certifications
                                              </h4>
                                              <p>
                                                Performance-based certifications and
                                                training for Linux, cloud, automation,
                                                security, and development.
                                              </p>
                                            </div>
                                            <a
                                              href="/red-hat"
                                              className="btn-view text-decoration-none"
                                            >
                                              View All Red Hat Courses
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                      {/* Listing Core System Administration track */}
                                      <div className="column">
                                        <h5>Core System Administration Track</h5>
                                        <hr />
                                        <a
                                          href="/rhcsa1"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/redhat.webp"
                                              alt="red hat"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              RHCSA I<span className="dots" />
                                              <span>RH124v10</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Red Hat Certified System Administrator
                                              (RHCSA) I
                                            </h6>
                                            <div className="seller">Best Seller</div>
                                          </div>
                                        </a>
                                        <a
                                          href="/rhcsa2"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/redhat.webp"
                                              alt="red hat"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              RHCSA II
                                              <span className="dots" />
                                              <span>RH134v10</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Red Hat Certified System Administrator
                                              (RHCSA) II
                                            </h6>
                                            <div className="seller">Best Seller</div>
                                          </div>
                                        </a>
                                        <a
                                          href="/redhat-linux-rhcsa-online-training-institute-certification-exam-center"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/redhat.webp"
                                              alt="red hat"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              RHCSA RH199
                                              <span className="dots" />
                                              <span>EX200v10</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Red Hat Certified System Administrator
                                              (RHCSA)
                                            </h6>
                                            <div className="seller">Best Seller</div>
                                          </div>
                                        </a>
                                        <a
                                          href="/rhce"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/redhat.webp"
                                              alt="red hat"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              RHCE RH294
                                              <span className="dots" />
                                              <span>EX294</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Red Hat Certified Engineer (RHCE)
                                            </h6>
                                            <div className="seller trending">
                                              Trending
                                            </div>
                                          </div>
                                        </a>
                                        <a
                                          href="/linux-automation-training-rh294"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/redhat.webp"
                                              alt="red hat"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              Red Hat
                                              <span className="dots" />
                                              <span>RH294</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Red Hat Certified Specialist in Ansible
                                              Automation
                                            </h6>
                                            <div className="seller new">New</div>
                                          </div>
                                        </a>
                                        <a
                                          href="/red-hat-satellite-administration-online-training-institute-certification-exam-center"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/redhat.webp"
                                              alt="red hat"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              RH403
                                              <span className="dots" />
                                              <span>EX403</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Red Hat Satellite 6 Administration
                                            </h6>
                                          </div>
                                        </a>
                                        <a
                                          href="/rh436"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/redhat.webp"
                                              alt="red hat"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              RH436
                                              <span className="dots" />
                                              <span>EX436</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Red Hat Certified Specialist in High
                                              Availability Clustering
                                            </h6>
                                          </div>
                                        </a>
                                      </div>
                                      {/* Listing OpenShift track */}
                                      <div className="column">
                                        <h5>OpenShift Track</h5>
                                        <hr />
                                        <a
                                          href="/containers-kubernetes-red-hat-openshift-online-training-institute-certification-exam-center"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/redhat.webp"
                                              alt="red hat"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              DO188
                                              <span className="dots" />
                                              <span>EX188</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Introduction to Containers with Podman
                                            </h6>
                                            <div className="seller">Best Seller</div>
                                          </div>
                                        </a>
                                        <a
                                          href="/openshift"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/redhat.webp"
                                              alt="red hat"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              DO280
                                              <span className="dots" />
                                              <span>EX280</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Red Hat OpenShift Administration II
                                              (Configuring a production cluster)
                                            </h6>
                                            <div className="seller">Best Seller</div>
                                          </div>
                                        </a>
                                        <a
                                          href="/red-hat-openshift-virtualization"
                                          className="course-link text-decoration-none"
                                          aria-label="DO316 Managing VMs with OpenShift Virtualization"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/redhat.webp"
                                              alt="red hat"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              AI267
                                              <span className="dots" />
                                              <span>EX267</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Developing and Deploying AI/ML
                                              Applications on Red Hat OpenShift AI
                                            </h6>
                                          </div>
                                        </a>
                                        <a
                                          href="/red-hat-openshift-virtualization"
                                          className="course-link text-decoration-none"
                                          aria-label="DO316 Managing VMs with OpenShift Virtualization"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/redhat.webp"
                                              alt="red hat"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              DO316
                                              <span className="dots" />
                                              <span>EX316</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Managing Virtual Machines with Red Hat
                                              OpenShift Virtualization
                                            </h6>
                                          </div>
                                        </a>
                                        <a
                                          href="/red-hat-openshift-advanced"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/redhat.webp"
                                              alt="red hat"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              DO380
                                              <span className="dots" />
                                              <span>EX380</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Red Hat OpenShift Administration III /
                                              Automation &amp; Integration (advanced
                                              admin/automation topics)
                                            </h6>
                                          </div>
                                        </a>
                                        <a
                                          href="/red-hat-openshift-advanced"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/redhat.webp"
                                              alt="red hat"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              DO430
                                              <span className="dots" />
                                              <span>EX430</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Securing Kubernetes Clusters with Red
                                              Hat Advanced Cluster Security
                                            </h6>
                                          </div>
                                        </a>
                                        <a
                                          href="/red-hat-openshift-advanced"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/redhat.webp"
                                              alt="red hat"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              DO480
                                              <span className="dots" />
                                              <span>EX480</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Multicluster Management with Red Hat
                                              OpenShift — multi-cluster operations
                                              &amp; platform management
                                            </h6>
                                          </div>
                                        </a>
                                      </div>
                                      {/* Listing Developer track */}
                                      <div className="column">
                                        <h5>Developer Track</h5>
                                        <hr />
                                        <a
                                          href="/red-hat-rhcjd"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/redhat.webp"
                                              alt="red hat"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              Red Hat
                                              <span className="dots" />
                                              <span>DO101 + AD183</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Red Hat Certified Enterprise Application
                                              Developer (RHCJD)
                                            </h6>
                                            <div className="seller">Best Seller</div>
                                          </div>
                                        </a>
                                        <a
                                          href="/red-hat-rhcemd"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/redhat.webp"
                                              alt="red hat"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              Red Hat
                                              <span className="dots" />
                                              <span>DO283 + AD248</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Red Hat Certified Enterprise
                                              Microservices Developer (RHCEMD)
                                            </h6>
                                          </div>
                                        </a>
                                        <a
                                          href="/containers-kubernetes-red-hat-openshift-online-training-institute-certification-exam-center"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/redhat.webp"
                                              alt="red hat"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              Red Hat
                                              <span className="dots" />
                                              <span>DO180</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Red Hat Certified Specialist in
                                              Containers and Kubernetes
                                            </h6>
                                          </div>
                                        </a>
                                      </div>
                                      {/* Listing Cloud and Virtualization track */}
                                      <div className="column">
                                        <h5>Cloud and Virtualization Track</h5>
                                        <hr />
                                        <a
                                          href="/redhat-openstack-cl110-online-training-institute-certification-exam-center"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/redhat.webp"
                                              alt="red hat"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              CL110
                                              <span className="dots" />
                                              <span>PE110</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Red Hat Certified System Administrator
                                              in Red Hat OpenStack
                                            </h6>
                                            <div className="seller">Best Seller</div>
                                          </div>
                                        </a>
                                        <a
                                          href="/open-stack"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/redhat.webp"
                                              alt="red hat"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              CL210
                                              <span className="dots" />
                                              <span>EX210</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Red Hat Certified Engineer in Red Hat
                                              OpenStack
                                            </h6>
                                          </div>
                                        </a>
                                      </div>
                                      {/* Listing Security track */}
                                      <div className="column">
                                        <h5>Security Track</h5>
                                        <hr />
                                        <a
                                          href="/red-hat-security-linux"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/redhat.webp"
                                              alt="red hat"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              RH415
                                              <span className="dots" />
                                              <span>EX415</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Red Hat Certified Specialist in
                                              Security: Linux
                                            </h6>
                                            <div className="seller new">New</div>
                                          </div>
                                        </a>
                                        <a
                                          href="/red-hat-identity-management"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/redhat.webp"
                                              alt="red hat"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              RH362
                                              <span className="dots" />
                                              <span>EX362</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Red Hat Certified Specialist in Identity
                                              Management
                                            </h6>
                                            <div className="seller">Best Seller</div>
                                          </div>
                                        </a>
                                        <a
                                          href="/rh442"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/redhat.webp"
                                              alt="red hat"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              RH442
                                              <span className="dots" />
                                              <span>EX442</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Red Hat Certified Specialist in
                                              Performance Tuning
                                            </h6>
                                          </div>
                                        </a>
                                      </div>
                                      {/* Listing Architect Level (RHCA) track */}
                                      <div className="column">
                                        <h5>Architect Level (RHCA)</h5>
                                        <hr />
                                        <a
                                          href="/#"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/redhat.webp"
                                              alt="red hat"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              Red Hat
                                              <span className="dots" />
                                              <span>Advanced</span>
                                            </h6>
                                            <h6 className="desc2">
                                              RHCA - Infrastructure Track
                                            </h6>
                                          </div>
                                        </a>
                                        <a
                                          href="/#"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/redhat.webp"
                                              alt="red hat"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              Red Hat
                                              <span className="dots" />
                                              <span>Advanced</span>
                                            </h6>
                                            <h6 className="desc2">
                                              RHCA - Enterprise Applications Track
                                            </h6>
                                          </div>
                                        </a>
                                        <a
                                          href="/#"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/redhat.webp"
                                              alt="red hat"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              Red Hat
                                              <span className="dots" />
                                              <span>Advanced</span>
                                            </h6>
                                            <h6 className="desc2">
                                              RHCA - DevOps Track
                                            </h6>
                                          </div>
                                        </a>
                                      </div>
                                    </div>
                                    {/* Displaying authorized training partners for Red Hat */}
                                    <div className="course-learn-more-bar">
                                      <div className="course-learn-more-row">
                                        <div className="course-learn-more-column">
                                          <h5 className="course-learn-more-title">
                                            Authorized Training &amp; Certification
                                            Exam Center
                                          </h5>
                                          {/* Listing Red Hat partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/redhat.webp"
                                                alt="Red Hat"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Red Hat</p>
                                            </div>
                                          </div>
                                          {/* Listing EC-Council partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/ec.webp"
                                                alt="EC-Council"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>EC-Council</p>
                                            </div>
                                          </div>
                                          {/* Listing OffSec partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/offsec.webp"
                                                alt="OffSec"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>OffSec</p>
                                            </div>
                                          </div>
                                          {/* Listing AWS Cloud partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/aws.webp"
                                                alt="aws"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>AWS Cloud</p>
                                            </div>
                                          </div>
                                          {/* Listing Microsoft Azure partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/azure.webp"
                                                alt="Azure"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Microsoft Azure</p>
                                            </div>
                                          </div>
                                          {/* Listing Google Cloud partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/google.webp"
                                                alt="Google Cloud"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Google Cloud</p>
                                            </div>
                                          </div>
                                          {/* Listing Cisco partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/cisco.webp"
                                                alt="cisco"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Cisco</p>
                                            </div>
                                          </div>
                                          {/* Listing VMware partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/vmware.webp"
                                                alt="vmware"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>VMware</p>
                                            </div>
                                          </div>
                                          {/* Listing Oracle partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/oracle.webp"
                                                alt="Oracle"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Oracle</p>
                                            </div>
                                          </div>
                                          {/* Listing The Linux Foundation partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/linux.webp"
                                                alt="The Linux Foundation"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>The Linux Foundation</p>
                                            </div>
                                          </div>
                                          {/* Listing CompTIA partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/comptia.webp"
                                                alt="Comptia"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Comptia</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Displaying content for the EC-Council tab */}
                                <div
                                  className="tab-pane fade"
                                  id="pills-03m"
                                  role="tabpanel"
                                  aria-labelledby="pills-03m-tab"
                                  tabIndex={0}
                                >
                                  {/* Wrapping EC-Council courses content */}
                                  <div className="course-tabs-wraper">
                                    {/* Creating a scrollable row for EC-Council tracks */}
                                    <div className="course-tabs-row">
                                      {/* Presenting the overview card for EC-Council certifications */}
                                      <div className="column w-100">
                                        <div className="nav-card">
                                          <div className="icon-img">
                                            <img
                                              src="/assets/img/icons/ec.webp"
                                              alt="EC-Council"
                                            />
                                          </div>
                                          <div className="info-width">
                                            <div className="info">
                                              <h4>
                                                EC-Council Training &amp;
                                                Certifications
                                              </h4>
                                              <p>
                                                Globally recognized cybersecurity
                                                certifications focusing on ethical
                                                hacking, forensics, network defense,
                                                and more.
                                              </p>
                                            </div>
                                            <a
                                              href="/ec-council"
                                              className="btn-view text-decoration-none"
                                            >
                                              View All EC-Council Courses
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                      {/* Listing Ethical Hacking track */}
                                      <div className="column">
                                        <h5>Ethical Hacking Track</h5>
                                        <hr />
                                        <a
                                          href="/ethical-hacking-ceh-cyber-security-training-institute-certification-exam-center"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/ec.webp"
                                              alt="EC-Council"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              CEH v13 AI
                                              <span className="dots" />
                                              <span>with AI</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Certified Ethical Hacker (CEH)
                                            </h6>
                                            <div className="seller">Best Seller</div>
                                          </div>
                                        </a>
                                        <a
                                          href="/certified-ethical-hacker-ceh-practical-online-training-institute-certification-exam-center"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/ec.webp"
                                              alt="EC-Council"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              CEH v13 Practical
                                              <span className="dots" />
                                              <span>with AI</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Certified Ethical Hacker (CEH)
                                            </h6>
                                          </div>
                                        </a>
                                        <a
                                          href="/ceh-master-training"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/ec.webp"
                                              alt="EC-Council"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              CEH v13 Master
                                              <span className="dots" />
                                              <span>with AI</span>
                                            </h6>
                                            <h6 className="desc2">
                                              CEH v13 + Practical
                                            </h6>
                                            <div className="seller trending">
                                              Trending
                                            </div>
                                          </div>
                                        </a>
                                        <a
                                          href="/ec-council-certified-security-analyst-ecsa-online-training-institute-certification-exam-center"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/ec.webp"
                                              alt="EC-Council"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              ECSA v10
                                              <span className="dots" />
                                              <span>ECSA v10</span>
                                            </h6>
                                            <h6 className="desc2">
                                              EC-Council Certified Security Analyst
                                              (ECSA)
                                            </h6>
                                          </div>
                                        </a>
                                        <a
                                          href="/cpent-training"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/ec.webp"
                                              alt="EC-Council"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              CPENT
                                              <span className="dots" />
                                              <span>v2</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Certified Penetration Testing
                                              Professional (CPENT)
                                            </h6>
                                            <div className="seller trending">
                                              Trending
                                            </div>
                                          </div>
                                        </a>
                                        <a
                                          href="/licensed-penetration-tester-lpt-master-training-institute-certification-exam-center"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/ec.webp"
                                              alt="EC-Council"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              LPT
                                              <span className="dots" />
                                              <span>v2</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Licensed Penetration Tester (LPT)
                                            </h6>
                                          </div>
                                        </a>
                                      </div>
                                      {/* Listing Forensics and Monitoring Work tracks */}
                                      <div className="column">
                                        <h5>Forensics Track</h5>
                                        <hr />
                                        <a
                                          href="/computer-hacking-forensic-investigator-chfi-online-training-institute-certification-exam-center"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/ec.webp"
                                              alt="EC-Council"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              CHFI v11
                                              <span className="dots" />
                                              <span>with AI</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Computer Hacking Forensic Investigator
                                              (CHFI)
                                            </h6>
                                            <div className="seller">Best Seller</div>
                                          </div>
                                        </a>
                                        <a
                                          href="/ecih-training"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/ec.webp"
                                              alt="EC-Council"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              ECIH
                                              <span className="dots" />
                                              <span>v3</span>
                                            </h6>
                                            <h6 className="desc2">
                                              EC-Council Certified Incident Handler
                                              (ECIH)
                                            </h6>
                                          </div>
                                        </a>
                                        <h5>Monitoring Work</h5>
                                        <hr />
                                        <a
                                          href="/soc-analyst-training"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/ec.webp"
                                              alt="EC-Council"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              SOC Analyst v2
                                              <span className="dots" />
                                              <span>with AI</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Certified SOC Analyst (CSA)
                                            </h6>
                                            <div className="seller">Best Seller</div>
                                          </div>
                                        </a>
                                        <a
                                          href="/certified-threat-intelligence-analyst-ctia-online-training-institute-certification-exam-center"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/ec.webp"
                                              alt="EC-Council"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              CTIA
                                              <span className="dots" />
                                              <span>with AI</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Certified Threat Intelligence Analyst
                                              (CTIA)
                                            </h6>
                                          </div>
                                        </a>
                                      </div>
                                      {/* Listing Network Defense track */}
                                      <div className="column">
                                        <h5>Network Defense Track</h5>
                                        <hr />
                                        <a
                                          href="/certified-network-defender-cnd-online-training-institute-certification-exam-center"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/ec.webp"
                                              alt="EC-Council"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              CND
                                              <span className="dots" />
                                              <span>v2</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Certified Network Defender (CND)
                                            </h6>
                                          </div>
                                        </a>
                                      </div>
                                      {/* Listing Executive & Management track */}
                                      <div className="column">
                                        <h5>Executive &amp; Management Track</h5>
                                        <hr />
                                        <a
                                          href="/cciso-training"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/ec.webp"
                                              alt="EC-Council"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              CCISO
                                              <span className="dots" />
                                              <span>v3</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Certified Chief Information Security
                                              Officer (CCISO)
                                            </h6>
                                            <div className="seller new">New</div>
                                          </div>
                                        </a>
                                      </div>
                                      {/* Listing Other Specialists track */}
                                      <div className="column">
                                        <h5>Other Specialists</h5>
                                        <hr />
                                        <a
                                          href="/vapt-training"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/ec.webp"
                                              alt="EC-Council"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              VAPT
                                              <span className="dots" />
                                              <span>with AI</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Vulnerability Assessment and Penetration
                                              Testing (VAPT)
                                            </h6>
                                          </div>
                                        </a>
                                        <a
                                          href="/wapt-training"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/ec.webp"
                                              alt="EC-Council"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              WAPT
                                              <span className="dots" />
                                              <span>with AI</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Web Application and Penetration Testing
                                              (WAPT)
                                            </h6>
                                            <div className="seller new">New</div>
                                          </div>
                                        </a>
                                        <a
                                          href="/cct-training"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/ec.webp"
                                              alt="EC-Council"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              CCT
                                              <span className="dots" />
                                              <span>Foundation</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Certified Cybersecurity Technician (CCT)
                                            </h6>
                                          </div>
                                        </a>
                                        <a
                                          href="/edrp-training"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/ec.webp"
                                              alt="EC-Council"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              EDRP v3
                                              <span className="dots" />
                                              <span>with AI</span>
                                            </h6>
                                            <h6 className="desc2">
                                              EC-Council Disaster Recovery
                                              Professional (EDRP)
                                            </h6>
                                          </div>
                                        </a>
                                      </div>
                                    </div>
                                    {/* Displaying authorized training partners for EC-Council */}
                                    <div className="course-learn-more-bar">
                                      <div className="course-learn-more-row">
                                        <div className="course-learn-more-column">
                                          <h5 className="course-learn-more-title">
                                            Authorized Training &amp; Certification
                                            Exam Center
                                          </h5>
                                          {/* Listing Red Hat partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/redhat.webp"
                                                alt="Red Hat"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Red Hat</p>
                                            </div>
                                          </div>
                                          {/* Listing EC-Council partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/ec.webp"
                                                alt="EC-Council"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>EC-Council</p>
                                            </div>
                                          </div>
                                          {/* Listing OffSec partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/offsec.webp"
                                                alt="OffSec"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>OffSec</p>
                                            </div>
                                          </div>
                                          {/* Listing AWS Cloud partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/aws.webp"
                                                alt="aws"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>AWS Cloud</p>
                                            </div>
                                          </div>
                                          {/* Listing Microsoft Azure partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/azure.webp"
                                                alt="Azure"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Microsoft Azure</p>
                                            </div>
                                          </div>
                                          {/* Listing Google Cloud partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/google.webp"
                                                alt="Google Cloud"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Google Cloud</p>
                                            </div>
                                          </div>
                                          {/* Listing Cisco partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/cisco.webp"
                                                alt="cisco"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Cisco</p>
                                            </div>
                                          </div>
                                          {/* Listing VMware partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/vmware.webp"
                                                alt="vmware"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>VMware</p>
                                            </div>
                                          </div>
                                          {/* Listing Oracle partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/oracle.webp"
                                                alt="Oracle"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Oracle</p>
                                            </div>
                                          </div>
                                          {/* Listing The Linux Foundation partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/linux.webp"
                                                alt="The Linux Foundation"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>The Linux Foundation</p>
                                            </div>
                                          </div>
                                          {/* Listing CompTIA partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/comptia.webp"
                                                alt="Comptia"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Comptia</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Displaying content for the OffSec tab */}
                                <div
                                  className="tab-pane fade"
                                  id="pills-cyber"
                                  role="tabpanel"
                                  aria-labelledby="pills-cyber-tab"
                                  tabIndex={0}
                                >
                                  {/* Wrapping OffSec courses content */}
                                  <div className="course-tabs-wraper">
                                    {/* Creating a scrollable row for OffSec tracks */}
                                    <div className="course-tabs-row">
                                      {/* Presenting the overview card for OffSec certifications */}
                                      <div className="column w-100">
                                        <div className="nav-card">
                                          <div className="icon-img">
                                            <img
                                              src="/assets/img/icons/offsec.webp"
                                              alt="OffSec"
                                            />
                                          </div>
                                          <div className="info-width">
                                            <div className="info">
                                              <h4>
                                                OffSec Training &amp; Certifications
                                              </h4>
                                              <p>
                                                Hands-on, performance-based
                                                certifications in offensive security,
                                                penetration testing, and exploit
                                                development.
                                              </p>
                                            </div>
                                            <a
                                              href="/offsec"
                                              className="btn-view text-decoration-none"
                                            >
                                              View All OffSec Courses
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                      {/* Listing Penetration Testing track */}
                                      <div className="column">
                                        <h5>Penetration Testing Track</h5>
                                        <hr />
                                        <a
                                          href="/offsec-oscp"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/offsec.webp"
                                              alt="Offsec"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              OffSec
                                              <span className="dots" />
                                              <span>PWK</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Offensive Security Certified
                                              Professional (OSCP)
                                            </h6>
                                            <div className="seller">Best Seller</div>
                                          </div>
                                        </a>
                                        <a
                                          href="/offsec-osep"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/offsec.webp"
                                              alt="Offsec"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              OffSec
                                              <span className="dots" />
                                              <span>Evasion Techniques</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Offensive Security Experienced
                                              Penetration Tester (OSEP)
                                            </h6>
                                            <div className="seller trending">
                                              Trending
                                            </div>
                                          </div>
                                        </a>
                                        <button className="btn btn-view d-block mx-auto">
                                          View all Penetration Testing Courses
                                        </button>
                                      </div>
                                      {/* Listing Exploit Development track */}
                                      <div className="column">
                                        <h5>Exploit Development Track</h5>
                                        <hr />
                                        <a
                                          href="/offsec-osed"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/offsec.webp"
                                              alt="Offsec"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              OffSec
                                              <span className="dots" />
                                              <span>Windows User-Mode</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Offensive Security Exploit Developer
                                              (OSED)
                                            </h6>
                                            <div className="seller">Best Seller</div>
                                          </div>
                                        </a>
                                        <button className="btn btn-view d-block mx-auto">
                                          View all Exploit Development Courses
                                        </button>
                                      </div>
                                      {/* Listing Web Attacks track */}
                                      <div className="column">
                                        <h5>Web Attacks Track</h5>
                                        <hr />
                                        <a
                                          href="/offsec-oswe"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/offsec.webp"
                                              alt="Offsec"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              OffSec
                                              <span className="dots" />
                                              <span>AWAE</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Offensive Security Web Expert (OSWE)
                                            </h6>
                                            <div className="seller">Best Seller</div>
                                          </div>
                                        </a>
                                        <button className="btn btn-view d-block mx-auto">
                                          View all Web Attacks Courses
                                        </button>
                                      </div>
                                      {/* Listing Defensive track */}
                                      <div className="column">
                                        <h5>Defensive Track</h5>
                                        <hr />
                                        <a
                                          href="/offsec-osda"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/offsec.webp"
                                              alt="Offsec"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              OffSec
                                              <span className="dots" />
                                              <span>SOC-200</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Offensive Security Defensive Analyst
                                              (OSDA)
                                            </h6>
                                            <div className="seller new">New</div>
                                          </div>
                                        </a>
                                        <button className="btn btn-view d-block mx-auto">
                                          View all Defensive Courses
                                        </button>
                                      </div>
                                      {/* Listing Specialized Tracks */}
                                      <div className="column">
                                        <h5>Specialized Tracks</h5>
                                        <hr />
                                        <a
                                          href="/offsec-osmr"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/offsec.webp"
                                              alt="Offsec"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              OffSec
                                              <span className="dots" />
                                              <span>MacOS Control Bypass</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Offensive Security MacOS Researcher
                                              (OSMR)
                                            </h6>
                                            <div className="seller new">New</div>
                                          </div>
                                        </a>
                                        <button className="btn btn-view d-block mx-auto">
                                          View all Specialized Courses
                                        </button>
                                      </div>
                                    </div>
                                    {/* Displaying authorized training partners for OffSec */}
                                    <div className="course-learn-more-bar">
                                      <div className="course-learn-more-row">
                                        <div className="course-learn-more-column">
                                          <h5 className="course-learn-more-title">
                                            Authorized Training &amp; Certification
                                            Exam Center
                                          </h5>
                                          {/* Listing Red Hat partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/redhat.webp"
                                                alt="Red Hat"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Red Hat</p>
                                            </div>
                                          </div>
                                          {/* Listing EC-Council partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/ec.webp"
                                                alt="EC-Council"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>EC-Council</p>
                                            </div>
                                          </div>
                                          {/* Listing OffSec partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/offsec.webp"
                                                alt="OffSec"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>OffSec</p>
                                            </div>
                                          </div>
                                          {/* Listing AWS Cloud partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/aws.webp"
                                                alt="aws"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>AWS Cloud</p>
                                            </div>
                                          </div>
                                          {/* Listing Microsoft Azure partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/azure.webp"
                                                alt="Azure"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Microsoft Azure</p>
                                            </div>
                                          </div>
                                          {/* Listing Google Cloud partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/google.webp"
                                                alt="Google Cloud"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Google Cloud</p>
                                            </div>
                                          </div>
                                          {/* Listing Cisco partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/cisco.webp"
                                                alt="cisco"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Cisco</p>
                                            </div>
                                          </div>
                                          {/* Listing VMware partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/vmware.webp"
                                                alt="vmware"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>VMware</p>
                                            </div>
                                          </div>
                                          {/* Listing Oracle partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/oracle.webp"
                                                alt="Oracle"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Oracle</p>
                                            </div>
                                          </div>
                                          {/* Listing The Linux Foundation partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/linux.webp"
                                                alt="The Linux Foundation"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>The Linux Foundation</p>
                                            </div>
                                          </div>
                                          {/* Listing CompTIA partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/comptia.webp"
                                                alt="Comptia"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Comptia</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Displaying content for the Cisco tab */}
                                <div
                                  className="tab-pane fade"
                                  id="pills-linux"
                                  role="tabpanel"
                                  aria-labelledby="pills-linux-tab"
                                  tabIndex={0}
                                >
                                  {/* Wrapping Cisco courses content */}
                                  <div className="course-tabs-wraper">
                                    {/* Creating a scrollable row for Cisco tracks */}
                                    <div className="course-tabs-row">
                                      {/* Presenting the overview card for Cisco certifications */}
                                      <div className="column w-100">
                                        <div className="nav-card">
                                          <div className="icon-img">
                                            <img
                                              src="/assets/img/icons/cisco.webp"
                                              alt="CISCO"
                                            />
                                          </div>
                                          <div className="info-width">
                                            <div className="info">
                                              <h4>
                                                Cisco Training &amp; Certifications
                                              </h4>
                                              <p>
                                                Industry-leading certifications in
                                                networking, security, collaboration,
                                                data center, and software development.
                                              </p>
                                            </div>
                                            <a
                                              href="/cisco"
                                              className="btn-view text-decoration-none"
                                            >
                                              View All Cisco Courses
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                      {/* Listing Enterprise Networking track */}
                                      <div className="column">
                                        <h5>Enterprise Networking Track</h5>
                                        <hr />
                                        <a
                                          href="/ccna"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/cisco.webp"
                                              alt="cisco"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              CCNA
                                              <span className="dots" />
                                              <span>200-301</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Cisco Certified Network Associate (CCNA)
                                            </h6>
                                            <div className="seller">Best Seller</div>
                                          </div>
                                        </a>
                                        <a
                                          href="/ccnp"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/cisco.webp"
                                              alt="cisco"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              CCNP
                                              <span className="dots" />
                                              <span>350-401 ENCOR</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Cisco Certified Network Professional
                                              Enterprise (CCNP Enterprise)
                                            </h6>
                                            <div className="seller trending">
                                              Trending
                                            </div>
                                          </div>
                                        </a>
                                      </div>
                                      {/* Listing Security track */}
                                      <div className="column">
                                        <h5>Security Track</h5>
                                        <hr />
                                        <a
                                          href="/ccnp-security"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/cisco.webp"
                                              alt="cisco"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              CCNP Security
                                              <span className="dots" />
                                              <span>350-701 SCOR</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Cisco Certified Network Professional
                                              Security (CCNP Security)
                                            </h6>
                                            <div className="seller">Best Seller</div>
                                          </div>
                                        </a>
                                      </div>
                                      {/* Listing Collaboration track */}
                                      <div className="column">
                                        <h5>Collaboration Track</h5>
                                        <hr />
                                        <a
                                          href="/ccnp-collaboration"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/cisco.webp"
                                              alt="cisco"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              CCNP Collaboration
                                              <span className="dots" />
                                              <span>350-801 CLCOR</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Cisco Certified Network Professional
                                              Collaboration (CCNP Collaboration)
                                            </h6>
                                          </div>
                                        </a>
                                      </div>
                                      {/* Listing Data Center track */}
                                      <div className="column">
                                        <h5>Data Center Track</h5>
                                        <hr />
                                        <a
                                          href="/ccnp-data-center"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/cisco.webp"
                                              alt="cisco"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              CCNP Data Center
                                              <span className="dots" />
                                              <span>350-601 DCCOR</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Cisco Certified Network Professional
                                              Data Center (CCNP Data Center)
                                            </h6>
                                          </div>
                                        </a>
                                      </div>
                                      {/* Listing DevNet track */}
                                      <div className="column">
                                        <h5>DevNet Track</h5>
                                        <hr />
                                        <a
                                          href="/devnet-associate"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/cisco.webp"
                                              alt="cisco"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              DevNet
                                              <span className="dots" />
                                              <span>200-901 DEVASC</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Cisco Certified DevNet Associate
                                            </h6>
                                          </div>
                                        </a>
                                      </div>
                                    </div>
                                    {/* Displaying authorized training partners for Cisco */}
                                    <div className="course-learn-more-bar">
                                      <div className="course-learn-more-row">
                                        <div className="course-learn-more-column">
                                          <h5 className="course-learn-more-title">
                                            Authorized Training &amp; Certification
                                            Exam Center
                                          </h5>
                                          {/* Listing Red Hat partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/redhat.webp"
                                                alt="Red Hat"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Red Hat</p>
                                            </div>
                                          </div>
                                          {/* Listing EC-Council partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/ec.webp"
                                                alt="EC-Council"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>EC-Council</p>
                                            </div>
                                          </div>
                                          {/* Listing OffSec partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/offsec.webp"
                                                alt="OffSec"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>OffSec</p>
                                            </div>
                                          </div>
                                          {/* Listing AWS Cloud partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/aws.webp"
                                                alt="aws"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>AWS Cloud</p>
                                            </div>
                                          </div>
                                          {/* Listing Microsoft Azure partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/azure.webp"
                                                alt="Azure"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Microsoft Azure</p>
                                            </div>
                                          </div>
                                          {/* Listing Google Cloud partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/google.webp"
                                                alt="Google Cloud"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Google Cloud</p>
                                            </div>
                                          </div>
                                          {/* Listing Cisco partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/cisco.webp"
                                                alt="cisco"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Cisco</p>
                                            </div>
                                          </div>
                                          {/* Listing VMware partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/vmware.webp"
                                                alt="vmware"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>VMware</p>
                                            </div>
                                          </div>
                                          {/* Listing Oracle partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/oracle.webp"
                                                alt="Oracle"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Oracle</p>
                                            </div>
                                          </div>
                                          {/* Listing The Linux Foundation partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/linux.webp"
                                                alt="The Linux Foundation"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>The Linux Foundation</p>
                                            </div>
                                          </div>
                                          {/* Listing CompTIA partner */}
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/comptia.webp"
                                                alt="Comptia"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Comptia</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* Displaying content for the Cloud tab */}
                                <div
                                  className="tab-pane fade"
                                  id="pills-cloud-devops"
                                  role="tabpanel"
                                  aria-labelledby="pills-cloud-devops-tab"
                                  tabIndex={0}
                                >
                                  {/* Wrapping Cloud courses content */}
                                  <div className="course-tabs-wraper">
                                    {/* Creating a scrollable row for Cloud tracks */}
                                    <div className="course-tabs-row">
                                      {/* Presenting the overview card for Cloud certifications */}
                                      <div className="column w-100">
                                        <div className="nav-card">
                                          <div className="icon-img">
                                            <img
                                              src="/assets/img/icons/cloud.webp"
                                              alt="Cloud"
                                            />
                                          </div>
                                          <div className="info-width">
                                            <div className="info">
                                              <h4>
                                                Cloud Training &amp; Certifications
                                              </h4>
                                              <p>
                                                Industry-leading certifications in
                                                cloud computing, architecture,
                                                security, development, and operations
                                                across major providers.
                                              </p>
                                            </div>
                                            <a
                                              href="/cloud"
                                              className="btn-view text-decoration-none"
                                            >
                                              View All Cloud Courses
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                      {/* Listing AWS track */}
                                      <div className="column">
                                        <h5>AWS Track</h5>
                                        <hr />
                                        <a
                                          href="/AWS-training-in-pune"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/aws.webp"
                                              alt="aws"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              AWS
                                              <span className="dots" />
                                              <span>Duration Varies</span>
                                            </h6>
                                            <h6 className="desc2">
                                              AWS Training in Pune
                                            </h6>
                                            <div className="seller">Best Seller</div>
                                          </div>
                                        </a>
                                        <a
                                          href="/aws-certified-cloud-practitioner-online-training-institute-certification-exam-center"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/aws.webp"
                                              alt="aws"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              AWS
                                              <span className="dots" />
                                              <span>CLF-C02</span>
                                            </h6>
                                            <h6 className="desc2">
                                              AWS Certified Cloud Practitioner
                                            </h6>
                                            <div className="seller trending">
                                              Trending
                                            </div>
                                          </div>
                                        </a>
                                        <a
                                          href="/aws-solutions-architect-professional-online-training-institute-certification-exam-center"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/aws.webp"
                                              alt="aws"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              AWS
                                              <span className="dots" />
                                              <span>Duration Varies</span>
                                            </h6>
                                            <h6 className="desc2">
                                              AWS Solutions Architect Professional
                                            </h6>
                                            <div className="seller">Best Seller</div>
                                          </div>
                                        </a>
                                        <a
                                          href="/aws-certified-sysops-administrator-associate-online-training-institute-certification-exam-center"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/aws.webp"
                                              alt="aws"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              AWS
                                              <span className="dots" />
                                              <span>Duration Varies</span>
                                            </h6>
                                            <h6 className="desc2">
                                              AWS SysOps Administrator (Associate)
                                            </h6>
                                            <div className="seller trending">
                                              Trending
                                            </div>
                                          </div>
                                        </a>
                                        <a
                                          href="/aws-certified-security-specialty-online-training-institute-certification-exam-center"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/aws.webp"
                                              alt="aws"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              AWS
                                              <span className="dots" />
                                              <span>Duration Varies</span>
                                            </h6>
                                            <h6 className="desc2">
                                              AWS Security Specialty
                                            </h6>
                                            <div className="seller new">New</div>
                                          </div>
                                        </a>
                                        <button className="btn btn-view d-block mx-auto">
                                          View all AWS Courses
                                        </button>
                                      </div>
                                      <div className="column">
                                        <h5>Azure Track</h5>
                                        <hr />
                                        <a
                                          href="/microsoft-azure-fundamentals-online-training-institute-certification-exam-center"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/azure.webp"
                                              alt="azure"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              AZ-900
                                              <span className="dots" />
                                              <span>Duration Varies</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Microsoft Azure Fundamentals
                                            </h6>
                                            <div className="seller">Best Seller</div>
                                          </div>
                                        </a>
                                        <a
                                          href="/microsoft-azure-administrator-online-training-institute-certification-exam-center"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/azure.webp"
                                              alt="azure"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              AZ-104
                                              <span className="dots" />
                                              <span>Duration Varies</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Microsoft Azure Administrator
                                            </h6>
                                            <div className="seller trending">
                                              Trending
                                            </div>
                                          </div>
                                        </a>
                                        <a
                                          href="/microsoft-azure-architect-design-online-training-institute-certification-exam-center"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/azure.webp"
                                              alt="azure"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              AZ-400
                                              <span className="dots" />
                                              <span>Duration Varies</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Microsoft Azure DevOps
                                            </h6>
                                            <div className="seller">Best Seller</div>
                                          </div>
                                        </a>
                                        <a
                                          href="/microsoft-azure-architect-technologies-online-training-institute-certification-exam-center"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/azure.webp"
                                              alt="azure"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              AZ-305
                                              <span className="dots" />
                                              <span>Duration Varies</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Microsoft Azure Architect - Design{" "}
                                            </h6>
                                            <div className="seller trending">
                                              Trending
                                            </div>
                                          </div>
                                        </a>
                                        <a
                                          href="/microsoft-azure-security-technologies-online-training-institute-certification-exam-center"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/azure.webp"
                                              alt="azure"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              AZ-500
                                              <span className="dots" />
                                              <span>Duration Varies</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Microsoft Azure Security Technologies
                                            </h6>
                                            <div className="seller new">New</div>
                                          </div>
                                        </a>
                                        <button className="btn btn-view d-block mx-auto">
                                          View all Azure Courses
                                        </button>
                                      </div>
                                      <div className="column">
                                        <h5>Google Cloud Track</h5>
                                        <hr />
                                        <a
                                          href="/google-professional-cloud-architect-online-training-institute-certification-exam-center"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/google.webp"
                                              alt="google cloud"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              GCP
                                              <span className="dots" />
                                              <span>Professional</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Google Professional Cloud Architect
                                            </h6>
                                            <div className="seller">Best Seller</div>
                                          </div>
                                        </a>
                                        <a
                                          href="/google-professional-cloud-developer-architect-online-training-institute-certification-exam-center"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/google.webp"
                                              alt="google cloud"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              GCP
                                              <span className="dots" />
                                              <span>Professional</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Google Professional Cloud Developer
                                            </h6>
                                            <div className="seller trending">
                                              Trending
                                            </div>
                                          </div>
                                        </a>
                                        <a
                                          href="/google-professional-cloud-network-engineer-online-training-institute-certification-exam-center"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/google.webp"
                                              alt="google cloud"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              GCP
                                              <span className="dots" />
                                              <span>Professional</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Google Professional Cloud Network
                                              Engineer
                                            </h6>
                                            <div className="seller">Best Seller</div>
                                          </div>
                                        </a>
                                        <a
                                          href="/google-professional-cloud-security-engineer-online-training-institute-certification-exam-center"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/google.webp"
                                              alt="google cloud"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              GCP
                                              <span className="dots" />
                                              <span>Professional</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Google Professional Cloud Security
                                              Engineer
                                            </h6>
                                            <div className="seller trending">
                                              Trending
                                            </div>
                                          </div>
                                        </a>
                                        <a
                                          href="/google-professional-cloud-data-engineer-online-training-institute-certification-exam-center"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/google.webp"
                                              alt="google cloud"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              GCP
                                              <span className="dots" />
                                              <span>Professional</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Google Professional Cloud Data Engineer
                                            </h6>
                                            <div className="seller new">New</div>
                                          </div>
                                        </a>
                                        <button className="btn btn-view d-block mx-auto">
                                          View all Google Cloud Courses
                                        </button>
                                      </div>
                                    </div>
                                    <div className="course-learn-more-bar">
                                      <div className="course-learn-more-row">
                                        <div className="course-learn-more-column">
                                          <h5 className="course-learn-more-title">
                                            Authorized Training &amp; Certification
                                            Exam Center
                                          </h5>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/redhat.webp"
                                                alt="Red Hat"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Red Hat</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/ec.webp"
                                                alt="EC-Council"
                                              />
                                            </div>
                                            <div className="info">
                                              <p> EC-Council</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/offsec.webp"
                                                alt="OffSec"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>OffSec</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/aws.webp"
                                                alt="aws"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>AWS Cloud</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/azure.webp"
                                                alt="Azure"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Microsoft Azure</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/google.webp"
                                                alt="Google Cloud"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Google Cloud</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/cisco.webp"
                                                alt="cisco"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Cisco</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/vmware.webp"
                                                alt="vmware"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>VMware</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/oracle.webp"
                                                alt="Oracle"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Oracle</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/linux.webp"
                                                alt="The Linux Foundation"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>The Linux Foundation</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/comptia.webp"
                                                alt="Comptia"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Comptia</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="pills-network"
                                  role="tabpanel"
                                  aria-labelledby="pills-network-tab"
                                  tabIndex={0}
                                >
                                  <div className="course-tabs-wraper">
                                    <div className="course-tabs-row">
                                      <div className="column w-100">
                                        <div className="nav-card">
                                          <div className="icon-img">
                                            <img
                                              src="/assets/img/icons/devops.webp"
                                              alt="DevOps"
                                            />
                                          </div>
                                          <div className="info-width">
                                            <div className="info">
                                              <h4>
                                                DevOps Training &amp; Certifications
                                              </h4>
                                              <p>
                                                Industry-leading certifications in
                                                DevOps practices, including CI/CD,
                                                containerization, orchestration,
                                                configuration management, and
                                                infrastructure as code.
                                              </p>
                                            </div>
                                            <a
                                              href="/devops"
                                              className="btn-view text-decoration-none"
                                            >
                                              View All DevOps Courses
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="column">
                                        <h5>Jenkins Track</h5>
                                        <hr />
                                        <a
                                          href="/jenkins-fundamentals"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/jenkins.webp"
                                              alt="jenkins"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              Jenkins
                                              <span className="dots" />
                                              <span>Beginner</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Jenkins CI/CD Fundamentals
                                            </h6>
                                            <div className="seller">Best Seller</div>
                                          </div>
                                        </a>
                                        <a
                                          href="/jenkins-advanced"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/jenkins.webp"
                                              alt="jenkins"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              Jenkins
                                              <span className="dots" />
                                              <span>Advanced</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Advanced Jenkins Pipeline Development
                                            </h6>
                                            <div className="seller trending">
                                              Trending
                                            </div>
                                          </div>
                                        </a>
                                        <button className="btn btn-view d-block mx-auto">
                                          View all Jenkins Courses
                                        </button>
                                      </div>
                                      <div className="column">
                                        <h5>Docker Track</h5>
                                        <hr />
                                        <a
                                          href="/docker-essentials"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/docker.webp"
                                              alt="docker"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              Docker
                                              <span className="dots" />
                                              <span>Essentials</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Docker Containerization Essentials
                                            </h6>
                                            <div className="seller">Best Seller</div>
                                          </div>
                                        </a>
                                        <a
                                          href="/docker-certified-associate"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/docker.webp"
                                              alt="docker"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              Docker
                                              <span className="dots" />
                                              <span>DCA</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Docker Certified Associate (DCA)
                                            </h6>
                                            <div className="seller trending">
                                              Trending
                                            </div>
                                          </div>
                                        </a>
                                        <button className="btn btn-view d-block mx-auto">
                                          View all Docker Courses
                                        </button>
                                      </div>
                                      <div className="column">
                                        <h5>Kubernetes Track</h5>
                                        <hr />
                                        <a
                                          href="/certified-kubernetes-administrator-cka-online-training-institute-certification-exam-center"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/kubernetes.webp"
                                              alt="kubernetes"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              Kubernetes
                                              <span className="dots" />
                                              <span>CKA</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Certified Kubernetes Administrator (CKA)
                                            </h6>
                                            <div className="seller">Best Seller</div>
                                          </div>
                                        </a>
                                        <a
                                          href="/certified-kubernetes-administrator-cka-online-training-institute-certification-exam-center"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/kubernetes.webp"
                                              alt="kubernetes"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              Kubernetes Application Developer
                                              <span className="dots" />
                                              <span>CKAD</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Certified Kubernetes Application
                                              Developer (CKAD)
                                            </h6>
                                            <div className="seller">Best Seller</div>
                                          </div>
                                        </a>
                                        <a
                                          href="/certified-kubernetes-security-specialist-cks-online-training-institute-certification-exam-center"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/kubernetes.webp"
                                              alt="kubernetes"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              Kubernetes
                                              <span className="dots" />
                                              <span>CKS</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Certified Kubernetes Security Specialist
                                              (CKS)
                                            </h6>
                                            <div className="seller trending">
                                              Trending
                                            </div>
                                          </div>
                                        </a>
                                        <button className="btn btn-view d-block mx-auto">
                                          View all Kubernetes Courses
                                        </button>
                                      </div>
                                      <div className="column">
                                        <h5>Ansible Track</h5>
                                        <hr />
                                        <a
                                          href="/ansible-essentials"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/ansible.webp"
                                              alt="ansible"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              Ansible
                                              <span className="dots" />
                                              <span>Essentials</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Ansible Configuration Management
                                              Essentials
                                            </h6>
                                            <div className="seller">Best Seller</div>
                                          </div>
                                        </a>
                                        <a
                                          href="/ansible-advanced"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/ansible.webp"
                                              alt="ansible"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              Ansible
                                              <span className="dots" />
                                              <span>Advanced</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Advanced Ansible Automation
                                            </h6>
                                            <div className="seller trending">
                                              Trending
                                            </div>
                                          </div>
                                        </a>
                                        <button className="btn btn-view d-block mx-auto">
                                          View all Ansible Courses
                                        </button>
                                      </div>
                                      <div className="column">
                                        <h5>Terraform Track</h5>
                                        <hr />
                                        <a
                                          href="/terraform-associate"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/terraform.webp"
                                              alt="terraform"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              Terraform
                                              <span className="dots" />
                                              <span>Associate</span>
                                            </h6>
                                            <h6 className="desc2">
                                              HashiCorp Certified: Terraform Associate
                                            </h6>
                                            <div className="seller">Best Seller</div>
                                          </div>
                                        </a>
                                        <a
                                          href="/terraform-advanced"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/terraform.webp"
                                              alt="terraform"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              Terraform
                                              <span className="dots" />
                                              <span>Advanced</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Advanced Terraform for Infrastructure as
                                              Code
                                            </h6>
                                            <div className="seller trending">
                                              Trending
                                            </div>
                                          </div>
                                        </a>
                                        <button className="btn btn-view d-block mx-auto">
                                          View all Terraform Courses
                                        </button>
                                      </div>
                                    </div>
                                    <div className="course-learn-more-bar">
                                      <div className="course-learn-more-row">
                                        <div className="course-learn-more-column">
                                          <h5 className="course-learn-more-title">
                                            Authorized Training &amp; Certification
                                            Exam Center
                                          </h5>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/redhat.webp"
                                                alt="Red Hat"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Red Hat</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/ec.webp"
                                                alt="EC-Council"
                                              />
                                            </div>
                                            <div className="info">
                                              <p> EC-Council</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/offsec.webp"
                                                alt="OffSec"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>OffSec</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/aws.webp"
                                                alt="aws"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>AWS Cloud</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/azure.webp"
                                                alt="Azure"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Microsoft Azure</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/google.webp"
                                                alt="Google Cloud"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Google Cloud</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/cisco.webp"
                                                alt="cisco"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Cisco</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/vmware.webp"
                                                alt="vmware"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>VMware</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/oracle.webp"
                                                alt="Oracle"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Oracle</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/linux.webp"
                                                alt="The Linux Foundation"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>The Linux Foundation</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/comptia.webp"
                                                alt="Comptia"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Comptia</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="pills-prog-db"
                                  role="tabpanel"
                                  aria-labelledby="pills-prog-db-tab"
                                  tabIndex={0}
                                >
                                  <div className="course-tabs-wraper">
                                    <div className="course-tabs-row">
                                      <div className="column w-100">
                                        <div className="nav-card">
                                          <div className="icon-img">
                                            <img
                                              src="/assets/img/icons/programming.webp"
                                              alt="Programming"
                                            />
                                          </div>
                                          <div className="info-width">
                                            <div className="info">
                                              <h4>
                                                Programming &amp; Databases Training
                                                &amp; Certifications
                                              </h4>
                                              <p>
                                                Industry-leading certifications in
                                                programming languages like Python,
                                                database systems such as Oracle and
                                                SQL, and big data technologies.
                                              </p>
                                            </div>
                                            <a
                                              href="/programming-databases"
                                              className="btn-view text-decoration-none"
                                            >
                                              View All Programming &amp; Databases
                                              Courses
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="column">
                                        <h5>Python Track</h5>
                                        <hr />
                                        <a
                                          href="/python-fundamentals"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/python.webp"
                                              alt="python"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              Python
                                              <span className="dots" />
                                              <span>Beginner</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Python Programming Fundamentals
                                            </h6>
                                            <div className="seller">Best Seller</div>
                                          </div>
                                        </a>
                                        <a
                                          href="/python-advanced"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/python.webp"
                                              alt="python"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              Python
                                              <span className="dots" />
                                              <span>Advanced</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Advanced Python for Data Science
                                            </h6>
                                            <div className="seller trending">
                                              Trending
                                            </div>
                                          </div>
                                        </a>
                                        <button className="btn btn-view d-block mx-auto">
                                          View all Python Courses
                                        </button>
                                      </div>
                                      <div className="column">
                                        <h5>Oracle Track</h5>
                                        <hr />
                                        <a
                                          href="/oracle-database-admin"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/oracle.webp"
                                              alt="oracle"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              Oracle
                                              <span className="dots" />
                                              <span>1Z0-082</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Oracle Database Administration I
                                            </h6>
                                            <div className="seller">Best Seller</div>
                                          </div>
                                        </a>
                                        <a
                                          href="/oracle-pl-sql"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/oracle.webp"
                                              alt="oracle"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              Oracle
                                              <span className="dots" />
                                              <span>1Z0-144</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Oracle Database SQL &amp; PL/SQL
                                            </h6>
                                            <div className="seller trending">
                                              Trending
                                            </div>
                                          </div>
                                        </a>
                                        <button className="btn btn-view d-block mx-auto">
                                          View all Oracle Courses
                                        </button>
                                      </div>
                                      <div className="column">
                                        <h5>SQL Track</h5>
                                        <hr />
                                        <a
                                          href="/sql-fundamentals"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/sql.webp"
                                              alt="sql"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              SQL
                                              <span className="dots" />
                                              <span>Beginner</span>
                                            </h6>
                                            <h6 className="desc2">
                                              SQL Fundamentals for Beginners
                                            </h6>
                                            <div className="seller">Best Seller</div>
                                          </div>
                                        </a>
                                        <a
                                          href="/advanced-sql"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/sql.webp"
                                              alt="sql"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              SQL
                                              <span className="dots" />
                                              <span>Advanced</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Advanced SQL Query Optimization
                                            </h6>
                                            <div className="seller trending">
                                              Trending
                                            </div>
                                          </div>
                                        </a>
                                        <button className="btn btn-view d-block mx-auto">
                                          View all SQL Courses
                                        </button>
                                      </div>
                                      <div className="column">
                                        <h5>Big Data Track</h5>
                                        <hr />
                                        <a
                                          href="/hadoop-fundamentals"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/big-data.webp"
                                              alt="big data"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              Big Data
                                              <span className="dots" />
                                              <span>Hadoop</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Hadoop Fundamentals &amp; Administration
                                            </h6>
                                            <div className="seller">Best Seller</div>
                                          </div>
                                        </a>
                                        <a
                                          href="/spark-developer"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/big-data.webp"
                                              alt="big data"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              Big Data
                                              <span className="dots" />
                                              <span>Spark</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Apache Spark Developer Certification
                                            </h6>
                                            <div className="seller trending">
                                              Trending
                                            </div>
                                          </div>
                                        </a>
                                        <button className="btn btn-view d-block mx-auto">
                                          View all Big Data Courses
                                        </button>
                                      </div>
                                    </div>
                                    <div className="course-learn-more-bar">
                                      <div className="course-learn-more-row">
                                        <div className="course-learn-more-column">
                                          <h5 className="course-learn-more-title">
                                            Authorized Training &amp; Certification
                                            Exam Center
                                          </h5>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/redhat.webp"
                                                alt="Red Hat"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Red Hat</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/ec.webp"
                                                alt="EC-Council"
                                              />
                                            </div>
                                            <div className="info">
                                              <p> EC-Council</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/offsec.webp"
                                                alt="OffSec"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>OffSec</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/aws.webp"
                                                alt="aws"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>AWS Cloud</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/azure.webp"
                                                alt="Azure"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Microsoft Azure</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/google.webp"
                                                alt="Google Cloud"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Google Cloud</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/cisco.webp"
                                                alt="cisco"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Cisco</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/vmware.webp"
                                                alt="vmware"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>VMware</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/oracle.webp"
                                                alt="Oracle"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Oracle</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/linux.webp"
                                                alt="The Linux Foundation"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>The Linux Foundation</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/comptia.webp"
                                                alt="Comptia"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Comptia</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="pills-ai-ml"
                                  role="tabpanel"
                                  aria-labelledby="pills-ai-ml-tab"
                                  tabIndex={0}
                                >
                                  <div className="course-tabs-wraper">
                                    <div className="course-tabs-row">
                                      <div className="column w-100">
                                        <div className="nav-card">
                                          <div className="icon-img">
                                            <img
                                              src="/assets/img/icons/ai-ml.webp"
                                              alt="AI ML"
                                            />
                                          </div>
                                          <div className="info-width">
                                            <div className="info">
                                              <h4>
                                                AI, ML &amp; Data Analytics Training
                                                &amp; Certifications
                                              </h4>
                                              <p>
                                                Industry-leading certifications in
                                                artificial intelligence, machine
                                                learning, data analytics, and data
                                                science across major providers.
                                              </p>
                                            </div>
                                            <a
                                              href="/ai-ml-data"
                                              className="btn-view text-decoration-none"
                                            >
                                              View All AI, ML &amp; Data Courses
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="column">
                                        <h5>AI Track</h5>
                                        <hr />
                                        <a
                                          href="/ai-fundamentals"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/ai.webp"
                                              alt="ai"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              Google
                                              <span className="dots" />
                                              <span>Essentials</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Google AI Essentials
                                            </h6>
                                            <div className="seller">Best Seller</div>
                                          </div>
                                        </a>
                                        <a
                                          href="/azure-ai-fundamentals"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/ai.webp"
                                              alt="ai"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              Azure
                                              <span className="dots" />
                                              <span>AI-900</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Microsoft Certified: Azure AI
                                              Fundamentals
                                            </h6>
                                            <div className="seller trending">
                                              Trending
                                            </div>
                                          </div>
                                        </a>
                                        <button className="btn btn-view d-block mx-auto">
                                          View all AI Courses
                                        </button>
                                      </div>
                                      <div className="column">
                                        <h5>Machine Learning Track</h5>
                                        <hr />
                                        <a
                                          href="/aws-ml-specialty"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/ml.webp"
                                              alt="ml"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              AWS
                                              <span className="dots" />
                                              <span>MLS-C01</span>
                                            </h6>
                                            <h6 className="desc2">
                                              AWS Certified Machine Learning -
                                              Specialty
                                            </h6>
                                            <div className="seller">Best Seller</div>
                                          </div>
                                        </a>
                                        <a
                                          href="/gcp-ml-engineer"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/ml.webp"
                                              alt="ml"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              GCP
                                              <span className="dots" />
                                              <span>Professional</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Google Professional Machine Learning
                                              Engineer
                                            </h6>
                                            <div className="seller trending">
                                              Trending
                                            </div>
                                          </div>
                                        </a>
                                        <button className="btn btn-view d-block mx-auto">
                                          View all Machine Learning Courses
                                        </button>
                                      </div>
                                      <div className="column">
                                        <h5>Data Analytics Track</h5>
                                        <hr />
                                        <a
                                          href="/google-data-analytics"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/data-analytics.webp"
                                              alt="data analytics"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              Google
                                              <span className="dots" />
                                              <span>Certificate</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Google Data Analytics Certificate
                                            </h6>
                                            <div className="seller">Best Seller</div>
                                          </div>
                                        </a>
                                        <a
                                          href="/power-bi-data-analyst"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/data-analytics.webp"
                                              alt="data analytics"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              Microsoft
                                              <span className="dots" />
                                              <span>PL-300</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Microsoft Certified: Power BI Data
                                              Analyst Associate
                                            </h6>
                                            <div className="seller trending">
                                              Trending
                                            </div>
                                          </div>
                                        </a>
                                        <button className="btn btn-view d-block mx-auto">
                                          View all Data Analytics Courses
                                        </button>
                                      </div>
                                      <div className="column">
                                        <h5>Data Science Track</h5>
                                        <hr />
                                        <a
                                          href="/ibm-data-science"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/data-science.webp"
                                              alt="data science"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              IBM
                                              <span className="dots" />
                                              <span>Professional</span>
                                            </h6>
                                            <h6 className="desc2">
                                              IBM Data Science Professional
                                              Certificate
                                            </h6>
                                            <div className="seller">Best Seller</div>
                                          </div>
                                        </a>
                                        <a
                                          href="/azure-data-scientist"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/data-science.webp"
                                              alt="data science"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              Azure
                                              <span className="dots" />
                                              <span>DP-100</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Microsoft Certified: Azure Data
                                              Scientist Associate
                                            </h6>
                                            <div className="seller trending">
                                              Trending
                                            </div>
                                          </div>
                                        </a>
                                        <button className="btn btn-view d-block mx-auto">
                                          View all Data Science Courses
                                        </button>
                                      </div>
                                    </div>
                                    <div className="course-learn-more-bar">
                                      <div className="course-learn-more-row">
                                        <div className="course-learn-more-column">
                                          <h5 className="course-learn-more-title">
                                            Authorized Training &amp; Certification
                                            Exam Center
                                          </h5>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/redhat.webp"
                                                alt="Red Hat"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Red Hat</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/ec.webp"
                                                alt="EC-Council"
                                              />
                                            </div>
                                            <div className="info">
                                              <p> EC-Council</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/offsec.webp"
                                                alt="OffSec"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>OffSec</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/aws.webp"
                                                alt="aws"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>AWS Cloud</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/azure.webp"
                                                alt="Azure"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Microsoft Azure</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/google.webp"
                                                alt="Google Cloud"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Google Cloud</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/cisco.webp"
                                                alt="cisco"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Cisco</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/vmware.webp"
                                                alt="vmware"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>VMware</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/oracle.webp"
                                                alt="Oracle"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Oracle</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/linux.webp"
                                                alt="The Linux Foundation"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>The Linux Foundation</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/comptia.webp"
                                                alt="Comptia"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Comptia</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="pills-web-digital"
                                  role="tabpanel"
                                  aria-labelledby="pills-web-digital-tab"
                                  tabIndex={0}
                                >
                                  <div className="course-tabs-wraper">
                                    <div className="course-tabs-row">
                                      <div className="column w-100">
                                        <div className="nav-card">
                                          <div className="icon-img">
                                            <img
                                              src="/assets/img/icons/web-digital.webp"
                                              alt="Web Digital"
                                            />
                                          </div>
                                          <div className="info-width">
                                            <div className="info">
                                              <h4>
                                                Web &amp; Digital Skills Training
                                                &amp; Certifications
                                              </h4>
                                              <p>
                                                Industry-leading certifications in
                                                full stack development, web
                                                technologies, digital marketing,
                                                graphic design, and UI/UX.
                                              </p>
                                            </div>
                                            <a
                                              href="/web-digital"
                                              className="btn-view text-decoration-none"
                                            >
                                              View All Web &amp; Digital Courses
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="column">
                                        <h5>Full Stack Track</h5>
                                        <hr />
                                        <a
                                          href="/full-stack-developer"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/full-stack.webp"
                                              alt="full stack"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              MERN
                                              <span className="dots" />
                                              <span>Bootcamp</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Full Stack Web Development with MERN
                                            </h6>
                                            <div className="seller">Best Seller</div>
                                          </div>
                                        </a>
                                        <a
                                          href="/mean-stack"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/full-stack.webp"
                                              alt="full stack"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              MEAN
                                              <span className="dots" />
                                              <span>Bootcamp</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Full Stack Web Development with MEAN
                                            </h6>
                                            <div className="seller trending">
                                              Trending
                                            </div>
                                          </div>
                                        </a>
                                        <button className="btn btn-view d-block mx-auto">
                                          View all Full Stack Courses
                                        </button>
                                      </div>
                                      <div className="column">
                                        <h5>Web Tech Track</h5>
                                        <hr />
                                        <a
                                          href="/html-css-js"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/web-tech.webp"
                                              alt="web tech"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              Frontend
                                              <span className="dots" />
                                              <span>Essentials</span>
                                            </h6>
                                            <h6 className="desc2">
                                              HTML, CSS &amp; JavaScript Fundamentals
                                            </h6>
                                            <div className="seller">Best Seller</div>
                                          </div>
                                        </a>
                                        <a
                                          href="/react-js"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/web-tech.webp"
                                              alt="web tech"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              React
                                              <span className="dots" />
                                              <span>Advanced</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Advanced React.js Development
                                            </h6>
                                            <div className="seller trending">
                                              Trending
                                            </div>
                                          </div>
                                        </a>
                                        <button className="btn btn-view d-block mx-auto">
                                          View all Web Tech Courses
                                        </button>
                                      </div>
                                      <div className="column">
                                        <h5>Digital Marketing Track</h5>
                                        <hr />
                                        <a
                                          href="/seo-specialist"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/digital-marketing.webp"
                                              alt="digital marketing"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              Google
                                              <span className="dots" />
                                              <span>Certificate</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Google Digital Marketing &amp;
                                              E-commerce Certificate
                                            </h6>
                                            <div className="seller">Best Seller</div>
                                          </div>
                                        </a>
                                        <a
                                          href="/social-media-marketing"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/digital-marketing.webp"
                                              alt="digital marketing"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              Meta
                                              <span className="dots" />
                                              <span>Certificate</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Meta Social Media Marketing Professional
                                              Certificate
                                            </h6>
                                            <div className="seller trending">
                                              Trending
                                            </div>
                                          </div>
                                        </a>
                                        <button className="btn btn-view d-block mx-auto">
                                          View all Digital Marketing Courses
                                        </button>
                                      </div>
                                      <div className="column">
                                        <h5>Graphic Design Track</h5>
                                        <hr />
                                        <a
                                          href="/adobe-illustrator"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/graphic-design.webp"
                                              alt="graphic design"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              Adobe
                                              <span className="dots" />
                                              <span>Certified</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Adobe Certified Professional in Graphic
                                              Design &amp; Illustration using Adobe
                                              Illustrator
                                            </h6>
                                            <div className="seller">Best Seller</div>
                                          </div>
                                        </a>
                                        <a
                                          href="/ui-ux-design"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/graphic-design.webp"
                                              alt="graphic design"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              Google
                                              <span className="dots" />
                                              <span>Certificate</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Google UX Design Professional
                                              Certificate
                                            </h6>
                                            <div className="seller trending">
                                              Trending
                                            </div>
                                          </div>
                                        </a>
                                        <button className="btn btn-view d-block mx-auto">
                                          View all Graphic Design Courses
                                        </button>
                                      </div>
                                    </div>
                                    <div className="course-learn-more-bar">
                                      <div className="course-learn-more-row">
                                        <div className="course-learn-more-column">
                                          <h5 className="course-learn-more-title">
                                            Authorized Training &amp; Certification
                                            Exam Center
                                          </h5>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/redhat.webp"
                                                alt="Red Hat"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Red Hat</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/ec.webp"
                                                alt="EC-Council"
                                              />
                                            </div>
                                            <div className="info">
                                              <p> EC-Council</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/offsec.webp"
                                                alt="OffSec"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>OffSec</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/aws.webp"
                                                alt="aws"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>AWS Cloud</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/azure.webp"
                                                alt="Azure"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Microsoft Azure</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/google.webp"
                                                alt="Google Cloud"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Google Cloud</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/cisco.webp"
                                                alt="cisco"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Cisco</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/vmware.webp"
                                                alt="vmware"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>VMware</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/oracle.webp"
                                                alt="Oracle"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Oracle</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/linux.webp"
                                                alt="The Linux Foundation"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>The Linux Foundation</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/comptia.webp"
                                                alt="Comptia"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Comptia</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="pills-corp-career"
                                  role="tabpanel"
                                  aria-labelledby="pills-corp-career-tab"
                                  tabIndex={0}
                                >
                                  <div className="course-tabs-wraper">
                                    <div className="course-tabs-row">
                                      <div className="column w-100">
                                        <div className="nav-card">
                                          <div className="icon-img">
                                            <img
                                              src="/assets/img/icons/corporate-career.webp"
                                              alt="Corporate Career"
                                            />
                                          </div>
                                          <div className="info-width">
                                            <div className="info">
                                              <h4>
                                                Corporate &amp; Career Training
                                                Programs
                                              </h4>
                                              <p>
                                                Comprehensive programs for soft skills
                                                development, internships, job-oriented
                                                training, and career advancement in
                                                professional environments.
                                              </p>
                                            </div>
                                            <a
                                              href="/corporate-career"
                                              className="btn-view text-decoration-none"
                                            >
                                              View All Corporate &amp; Career Programs
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="column">
                                        <h5>Soft Skills Track</h5>
                                        <hr />
                                        <a
                                          href="/communication-skills"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/soft-skills.webp"
                                              alt="soft skills"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              Soft Skills
                                              <span className="dots" />
                                              <span>Essentials</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Effective Communication &amp;
                                              Presentation Skills
                                            </h6>
                                            <div className="seller">Best Seller</div>
                                          </div>
                                        </a>
                                        <a
                                          href="/leadership-training"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/soft-skills.webp"
                                              alt="soft skills"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              Soft Skills
                                              <span className="dots" />
                                              <span>Advanced</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Leadership &amp; Team Management
                                            </h6>
                                            <div className="seller trending">
                                              Trending
                                            </div>
                                          </div>
                                        </a>
                                        <button className="btn btn-view d-block mx-auto">
                                          View all Soft Skills Programs
                                        </button>
                                      </div>
                                      <div className="column">
                                        <h5>Internships Track</h5>
                                        <hr />
                                        <a
                                          href="/summer-internship"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/internship.webp"
                                              alt="internship"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              Internship
                                              <span className="dots" />
                                              <span>Summer</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Summer Internship Program
                                            </h6>
                                            <div className="seller">Best Seller</div>
                                          </div>
                                        </a>
                                        <a
                                          href="/6-months-internship"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/internship.webp"
                                              alt="internship"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              Internship
                                              <span className="dots" />
                                              <span>6 Months</span>
                                            </h6>
                                            <h6 className="desc2">
                                              6 Months Industrial Internship
                                            </h6>
                                            <div className="seller trending">
                                              Trending
                                            </div>
                                          </div>
                                        </a>
                                        <button className="btn btn-view d-block mx-auto">
                                          View all Internships Programs
                                        </button>
                                      </div>
                                      <div className="column">
                                        <h5>Job-Oriented Programs Track</h5>
                                        <hr />
                                        <a
                                          href="/job-guarantee-program"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/job-oriented.webp"
                                              alt="job oriented"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              Job-Oriented
                                              <span className="dots" />
                                              <span>Guarantee</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Job Guarantee Bootcamp
                                            </h6>
                                            <div className="seller">Best Seller</div>
                                          </div>
                                        </a>
                                        <a
                                          href="/career-development"
                                          className="course-link text-decoration-none"
                                        >
                                          <div className="image-icon">
                                            <img
                                              src="/assets/img/icons/job-oriented.webp"
                                              alt="job oriented"
                                            />
                                          </div>
                                          <div className="info">
                                            <h6 className="desc1 flex-desc">
                                              Job-Oriented
                                              <span className="dots" />
                                              <span>Career</span>
                                            </h6>
                                            <h6 className="desc2">
                                              Career Development &amp; Placement
                                              Training
                                            </h6>
                                            <div className="seller trending">
                                              Trending
                                            </div>
                                          </div>
                                        </a>
                                        <button className="btn btn-view d-block mx-auto">
                                          View all Job-Oriented Programs
                                        </button>
                                      </div>
                                    </div>
                                    <div className="course-learn-more-bar">
                                      <div className="course-learn-more-row">
                                        <div className="course-learn-more-column">
                                          <h5 className="course-learn-more-title">
                                            Authorized Training &amp; Certification
                                            Exam Center
                                          </h5>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/redhat.webp"
                                                alt="Red Hat"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Red Hat</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/ec.webp"
                                                alt="EC-Council"
                                              />
                                            </div>
                                            <div className="info">
                                              <p> EC-Council</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/offsec.webp"
                                                alt="OffSec"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>OffSec</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/aws.webp"
                                                alt="aws"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>AWS Cloud</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/azure.webp"
                                                alt="Azure"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Microsoft Azure</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/google.webp"
                                                alt="Google Cloud"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Google Cloud</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/cisco.webp"
                                                alt="cisco"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Cisco</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/vmware.webp"
                                                alt="vmware"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>VMware</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/oracle.webp"
                                                alt="Oracle"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Oracle</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/linux.webp"
                                                alt="The Linux Foundation"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>The Linux Foundation</p>
                                            </div>
                                          </div>
                                          <div className="flex-wraper">
                                            <div className="icon-img">
                                              <img
                                                src="/assets/img/icons/comptia.webp"
                                                alt="Comptia"
                                              />
                                            </div>
                                            <div className="info">
                                              <p>Comptia</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Search Bar: Input for searching courses */}
                <div className="search">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Course title or keyword"
                    aria-label="Search"
                  />
                  <button className="btn btn-search">
                    <img src="/assets/imgs/search.png" alt="search" />
                  </button>
                </div>
              </div>
              {/* Navbar Toggler: Button for mobile menu toggle */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              {/* Navbar Collapse: Collapsible part of navbar for links */}
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {/* Navbar Nav: List of navigation items */}
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  {/* Dropdown: Top Certifications */}
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdownTopCert"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Top Certifications
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownTopCert"
                    >
                      {/* Redhat Certification Track */}
                      <li className="dropdown-submenu">
                        <a className="dropdown-item dropdown-toggle" href="#">
                          Red Hat
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="/rhcsa">
                              RHCSA | EX200
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/rhce">
                              RHCE | EX294
                            </a>
                          </li>
                        </ul>
                      </li>
                      {/* Redhat Certification Track */}
                      <li className="dropdown-submenu">
                        <a className="dropdown-item dropdown-toggle" href="#">
                          OffSec
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="/oscp">
                              OSCP
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/osep">
                              OSEP
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  {/* Dropdown: Placement */}
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="placement"
                      id="navbarDropdownPlacement"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Placement
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownPlacement"
                    >
                      <li>
                        <a className="dropdown-item" href="placed-students">
                          Recently Placed Students
                        </a>
                      </li>
                      <li className="dropdown-submenu">
                        <a className="dropdown-item dropdown-toggle" href="#">
                          For Students
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a
                              className="dropdown-item"
                              href="/student-feedback"
                            >
                              Student Feedback
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="/interview-question"
                            >
                              Interview Questions
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-submenu">
                        <a className="dropdown-item dropdown-toggle" href="#">
                          Product Building
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Product Coaching
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Design Thinking Workshops
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Project to Product (Culture Shift)
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Product Development Training
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  {/* Dropdown: Resources */}
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdownResources"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Resources
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownResources"
                    >
                      <li>
                        <a
                          className="dropdown-item"
                          href="/about-us"
                        >
                          About us
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="https://www.webasha.com/blog/"
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/career"
                        >
                          Career
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/result"
                        >
                          Result
                        </a>
                      </li>
                      <li className="dropdown-submenu">
                        <a
                          className="dropdown-item dropdown-toggle"
                          href="/internship"
                        >
                          Internship
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a
                              className="dropdown-item"
                              href="/summer-training-in-pune"
                            >
                              Summer Training
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="/winter-training"
                            >
                              Winter Training
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="/6-weeks-internship"
                            >
                              6 Weeks Internship
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="/6-months-internship"
                            >
                              6 Months Internship
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/media"
                        >
                          Media
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/gallery"
                        >
                          Gallery
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/training-video"
                        >
                          Training Video
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* Nav Item: Contact link */}
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="/contact-us"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
                {/* Enroll Button: Call to action button */}
                <div className="d-flex">
                  <button
                    className="btn btn-primary btn-signup"
                    data-bs-toggle="modal"
                    data-bs-target="#enquiryModal"
                    aria-controls="enquiryModal"
                    aria-label="Enroll Now in Our Course"
                  >
                    Enroll Now{" "}
                    <i className="fa fa-arrow-right ms-2" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </header>
        {/* Header-End: Marks the end of the header section */}
        {/* Mobile-Header-Start */}
        <div className="mobile-header header">
          <div className="navbar">
            <div className="container">
              <div className="d-flex align-items-center gap-2">
                <button id="toggle-btn-1" className="open-btn">
                  <i className="fa-solid fa-bars" />
                </button>
                <a className="navbar-brand" href="/">
                  <img
                    className="object-fit-contain"
                    src="/assets/imgs/logo.png"
                    width={100}
                    alt="logo"
                  />
                </a>
              </div>
              <div className="d-flex course-dropdown">
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle"
                    id="toggle-btn-2"
                    type="button"
                  >
                    Courses
                  </button>
                </div>
                <div className="search">
                  <button
                    className="btn btn-search"
                    data-bs-toggle="modal"
                    data-bs-target="#searchModal"
                  >
                    <img src="/assets/imgs/search.png" alt="search" />
                  </button>
                </div>
              </div>
            </div>
            <div id="menu-1" className="menu">
              <div className="header-menu">
                <a className="navbar-brand" href="/">
                  <img
                    className="object-fit-contain"
                    src="/assets/imgs/logo.png"
                    width={100}
                    alt="logo"
                  />
                </a>
                <span id="close-btn-1" className="close-btn">
                  <i className="fa-solid fa-xmark" />
                </span>
              </div>
              <div className="accordion-wraper">
                <div className="accordion-main-menu">
                  <ul className="accordion list-unstyled mb-0" id="parentAccordion">
                    <li className="accordion-item accordion-drop">
                      <a
                        className="accordion-button collapsed"
                        role="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse1"
                        aria-expanded="true"
                        aria-controls="collapse1"
                      >
                        <i className="fa-solid fa-certificate" /> Top Certifications
                        <span className="badge">New</span>
                      </a>
                      <ul
                        id="collapse1"
                        className="accordion-dropmenu mb-0 list-unstyled accordion-collapse collapse"
                        data-bs-parent="#parentAccordion"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            Learning Solutions
                          </a>
                        </li>
                        <li className="subaccordion">
                          <ul
                            className="accordion list-unstyled mb-0"
                            id="childAccordion"
                          >
                            <li className="accordion-item accordion-subdrop">
                              <a
                                className="accordion-button collapsed"
                                role="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse1.1"
                                aria-expanded="true"
                                aria-controls="collapse1.1"
                              >
                                Red Hat
                              </a>
                              <ul
                                id="collapse1.1"
                                className="accordion-subdropmenu mb-0 list-unstyled accordion-collapse collapse"
                                data-bs-parent="#childAccordion"
                              >
                                <li>
                                  <a className="dropdown-item" href="/rhcsa">
                                    RHCSA | EX200
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="/rhce">
                                    RHCE | EX294
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="accordion-item accordion-subdrop">
                              <a
                                className="accordion-button collapsed"
                                role="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse1.2"
                                aria-expanded="true"
                                aria-controls="collapse1.2"
                              >
                                OffSec
                              </a>
                              <ul
                                id="collapse1.2"
                                className="accordion-subdropmenu mb-0 list-unstyled accordion-collapse collapse"
                                data-bs-parent="#childAccordion"
                              >
                                <li>
                                  <a className="dropdown-item" href="/oscp">
                                    OSCP
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="/osep">
                                    OSEP
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="border-top my-2" />
                    <li className="accordion-item accordion-drop">
                      <a
                        className="accordion-button collapsed"
                        role="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse2"
                        aria-expanded="true"
                        aria-controls="collapse2"
                      >
                        <i className="fa-solid fa-trophy" /> Placement
                        {/* <span class="badge">New</span> */}
                      </a>
                      <ul
                        id="collapse2"
                        className="accordion-dropmenu mb-0 list-unstyled accordion-collapse collapse"
                        data-bs-parent="#parentAccordion"
                      >
                        <li>
                          <a
                            className="dropdown-item"
                            href="/placed-students"
                          >
                            Recently Placed Students
                          </a>
                        </li>
                        <li className="subaccordion">
                          <ul
                            className="accordion list-unstyled mb-0"
                            id="childAccordion"
                          >
                            <li className="accordion-item accordion-subdrop">
                              <a
                                className="accordion-button collapsed"
                                role="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse1.1"
                                aria-expanded="true"
                                aria-controls="collapse1.1"
                              >
                                For Students
                              </a>
                              <ul
                                id="collapse1.1"
                                className="accordion-subdropmenu mb-0 list-unstyled accordion-collapse collapse"
                                data-bs-parent="#childAccordion"
                              >
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="/student-feedback"
                                  >
                                    Student Feedback
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="/interview-question"
                                  >
                                    Interview Questions
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="accordion-item accordion-subdrop">
                              <a
                                className="accordion-button collapsed"
                                role="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse1.2"
                                aria-expanded="true"
                                aria-controls="collapse1.2"
                              >
                                Product Building
                              </a>
                              <ul
                                id="collapse1.2"
                                className="accordion-subdropmenu mb-0 list-unstyled accordion-collapse collapse"
                                data-bs-parent="#childAccordion"
                              >
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Product Coaching
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Design Thinking Workshops
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Project to Product (Culture Shift)
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Product Development Training
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="border-top my-2" />
                    <li className="accordion-item accordion-drop">
                      <a
                        className="accordion-button collapsed"
                        role="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse3"
                        aria-expanded="true"
                        aria-controls="collapse3"
                      >
                        <i className="fa-solid fa-book-open-reader" /> Resources
                        {/* <span class="badge">New</span> */}
                      </a>
                      <ul
                        id="collapse3"
                        className="accordion-dropmenu mb-0 list-unstyled accordion-collapse collapse"
                        data-bs-parent="#parentAccordion"
                      >
                        <li>
                          <a
                            className="dropdown-item"
                            href="/about-us"
                          >
                            About us
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://www.webasha.com/blog/"
                          >
                            Blogs
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="/career"
                          >
                            Career
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="/result"
                          >
                            Result
                          </a>
                        </li>
                        <li className="subaccordion">
                          <ul
                            className="accordion list-unstyled mb-0"
                            id="childAccordion"
                          >
                            <li className="accordion-item accordion-subdrop">
                              <a
                                className="accordion-button collapsed"
                                role="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse1.3"
                                aria-expanded="true"
                                aria-controls="collapse1.3"
                              >
                                Internship
                              </a>
                              <ul
                                id="collapse1.3"
                                className="accordion-subdropmenu mb-0 list-unstyled accordion-collapse collapse"
                                data-bs-parent="#childAccordion"
                              >
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="/summer-training-in-pune"
                                  >
                                    Summer Training
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="/winter-training"
                                  >
                                    Winter Training
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="/6-weeks-internship"
                                  >
                                    6 Weeks Internship
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="/6-months-internship"
                                  >
                                    6 Months Internship
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="/media"
                          >
                            Media
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="/gallery"
                          >
                            Gallery
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="/training-video"
                          >
                            Training Video
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="border-top my-2" />
                    <li className="accordion-item accordion-drop">
                      <a
                        className="accordion-button collapsed"
                        role="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse4"
                        aria-expanded="true"
                        aria-controls="collapse4"
                      >
                        <i className="fa-solid fa-address-card" /> Contact
                      </a>
                      <ul
                        id="collapse4"
                        className="accordion-dropmenu list-unstyled accordion-collapse collapse"
                        data-bs-parent="#parentAccordion"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            FAQs
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Help
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="footer-menu">
                  <div className="p-3">
                    <button
                      className="btn btn-primary btn-signup w-100"
                      data-bs-toggle="modal"
                      data-bs-target="#enquiryModal"
                      aria-controls="enquiryModal"
                      aria-label="Enroll Now in Our Course"
                    >
                      Enroll Now{" "}
                      <i className="fa fa-arrow-right ms-2" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Left Menu #1-End */}
            {/* Right Menu #2: Course Goals and Categories */}
            <div id="menu-2" className="menu menu-2">
              <div className="header-menu">
                <a className="navbar-brand" href="/">
                  <img
                    className="object-fit-contain"
                    src="/assets/imgs/logo.png"
                    width={100}
                    alt="logo"
                  />
                </a>
                <span id="close-btn-2" className="close-btn">
                  <i className="fa-solid fa-xmark" />
                </span>
              </div>
              <div className="course-dropdown">
                <div className="dropdown-menu d-block position-static">
                  <div className="container">
                    <div className="course-dropdown-wraper">
                      <div className="course-tabs-container">
                        <ul
                          className="nav nav-pills mb-3"
                          id="pills-tab"
                          role="tablist"
                        >
                          <li>
                            <h4>Goals</h4>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="active"
                              id="pills-01-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-01"
                              type="button"
                              role="tab"
                              aria-controls="pills-01"
                              aria-selected="true"
                              onClick={showContent}
                            >
                              <i className="fa-solid fa-certificate" /> Get a Job
                            </button>
                          </li>
                          <li>
                            <h4>Domains</h4>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className=""
                              id="pills-02-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-02"
                              type="button"
                              role="tab"
                              aria-controls="pills-02"
                              aria-selected="false"
                              onClick={showContent}
                            >
                              <i className="fa-solid fa-briefcase" /> Red Hat
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className=""
                              id="pills-03-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-03"
                              type="button"
                              role="tab"
                              aria-controls="pills-03"
                              aria-selected="false"
                              onClick={showContent}
                            >
                              <i className="fa-solid fa-clock" /> Cybersecurity &amp;
                              Ethical Hacking - EC-Council
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className=""
                              id="pills-04-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-04"
                              type="button"
                              role="tab"
                              aria-controls="pills-04"
                              aria-selected="false"
                              onClick={showContent}
                            >
                              <i className="fa-solid fa-shield-alt" /> Cybersecurity
                              &amp; Ethical Hacking - OffSec
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className=""
                              id="pills-05-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-05"
                              type="button"
                              role="tab"
                              aria-controls="pills-05"
                              aria-selected="false"
                              onClick={showContent}
                            >
                              <i className="fa-solid fa-server" /> Networking &amp;
                              Infrastructure (Cisco, VMware, Veritas)
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className=""
                              id="pills-06-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-06"
                              type="button"
                              role="tab"
                              aria-controls="pills-06"
                              aria-selected="false"
                              onClick={showContent}
                            >
                              <i className="fa-solid fa-cloud" /> Cloud (AWS, Azure,
                              GCP)
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className=""
                              id="pills-07-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-07"
                              type="button"
                              role="tab"
                              aria-controls="pills-07"
                              aria-selected="false"
                              onClick={showContent}
                            >
                              <i className="fa-solid fa-network-wired" /> DevOps
                              (Docker, Kubernetes)
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className=""
                              id="pills-08-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-08"
                              type="button"
                              role="tab"
                              aria-controls="pills-08"
                              aria-selected="false"
                              onClick={showContent}
                            >
                              <i className="fa-solid fa-database" /> Programming &amp;
                              Databases (Python, Oracle, SQL, Big Data)
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className=""
                              id="pills-09-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-09"
                              type="button"
                              role="tab"
                              aria-controls="pills-09"
                              aria-selected="false"
                              onClick={showContent}
                            >
                              <i className="fa-solid fa-brain" /> AI, ML &amp; Data
                              Science
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className=""
                              id="pills-10-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-10"
                              type="button"
                              role="tab"
                              aria-controls="pills-10"
                              aria-selected="false"
                              onClick={showContent}
                            >
                              <i className="fa-solid fa-globe" /> Web &amp; Digital
                              Skills (Full Stack, Web Tech, Digital Marketing, Graphic
                              Design)
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className=""
                              id="pills-11-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-11"
                              type="button"
                              role="tab"
                              aria-controls="pills-11"
                              aria-selected="false"
                              onClick={showContent}
                            >
                              <i className="fa-solid fa-users" /> Corporate &amp;
                              Career Training (Soft Skills, Internships, Job-Oriented
                              Programs)
                            </button>
                          </li>
                        </ul>
                        <button className="btn btn-all-domains">
                          <span>Browse All Domains</span>{" "}
                          <i className="fa-solid fa-arrow-up" />
                        </button>
                      </div>
                      {/* Tab Content Start */}
                      <div className="course-tabs-content" id="myDIV">
                        <div className="course-tabs-card">
                          <div className="course-tabs-scrollbar">
                            <button
                              className="btn btn-primary back-menu-btn mt-2 ms-2"
                              onClick={hideContent}
                            >
                              <i className="fa-solid fa-arrow-left me-2" /> Back to
                              Menu
                            </button>
                            <div className="tab-content" id="pills-tabContent">
                              {/* Get a Job Tab Content */}
                              <div
                                className="tab-pane fade show active"
                                id="pills-01"
                                role="tabpanel"
                                aria-labelledby="pills-01-tab"
                                tabIndex={0}
                              >
                                <div className="course-tabs-wraper">
                                  <div className="course-tabs-row">
                                    <div className="column w-100">
                                      <div className="nav-card">
                                        <div className="icon-img">
                                          <img
                                            src="/assets/img/icons/job.webp"
                                            alt="Job Oriented Course"
                                          />
                                        </div>
                                        <div className="info-width">
                                          <div className="info">
                                            <h4>
                                              Our Job Oriented Programs in 6 Domains
                                            </h4>
                                            <p>
                                              Hands-on programs designed to prepare
                                              you for in-demand IT jobs with practical
                                              skills and certifications. Open to
                                              anyone with interest in tech field
                                              (except where noted).
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="column">
                                      <h5>Cloud Admin</h5>
                                      <hr />
                                      <a
                                        href="/#"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/cloud.webp"
                                            alt="cloud"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Cloud Admin
                                            <span className="dots" />
                                            <span>6 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Job-Oriented Program in Cloud
                                            Administration
                                          </h6>
                                          <div className="seller">Best Seller</div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="column">
                                      <h5>DevOps Engineer</h5>
                                      <hr />
                                      <a
                                        href="/#"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/devops.webp"
                                            alt="devops"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            DevOps Engineer
                                            <span className="dots" />
                                            <span>8 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Job-Oriented Program in DevOps Engineering
                                          </h6>
                                          <div className="seller trending">
                                            Trending
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="column">
                                      <h5>Cyber Security</h5>
                                      <hr />
                                      <a
                                        href="/#"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/cybersecurity.webp"
                                            alt="cybersecurity"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Cyber Security
                                            <span className="dots" />
                                            <span>8 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Job-Oriented Program in Cyber Security
                                          </h6>
                                          <div className="seller">Best Seller</div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="column">
                                      <h5>Cyber Security with Advance Pen Tester</h5>
                                      <hr />
                                      <a
                                        href="/#"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/cybersecurity.webp"
                                            alt="cybersecurity"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Cyber Security
                                            <span className="dots" />
                                            <span>12 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Job-Oriented Program in Cyber Security
                                            with Advanced Penetration Testing
                                          </h6>
                                          <div className="seller new">New</div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="column">
                                      <h5>Data Science with AI/ML</h5>
                                      <hr />
                                      <a
                                        href="/#"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/data-science.webp"
                                            alt="data science"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Data Science
                                            <span className="dots" />
                                            <span>6 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Job-Oriented Program in Data Science with
                                            AI/ML
                                          </h6>
                                          <div className="seller trending">
                                            Trending
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="column">
                                      <h5>Full Stack with Python</h5>
                                      <hr />
                                      <a
                                        href="/#"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/full-stack.webp"
                                            alt="full stack"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Full Stack
                                            <span className="dots" />
                                            <span>6 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Job-Oriented Program in Full Stack with
                                            Python (Computer Background Required)
                                          </h6>
                                          <div className="seller">Best Seller</div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="course-learn-more-bar">
                                      <div className="course-learn-more-row">
                                        <div className="course-learn-more-column">
                                          <h5 className="course-learn-more-title">
                                            Interview Peparation
                                          </h5>
                                          <ul className="more-domains-list learn-more-gap list-unstyled flex-column">
                                            <li>
                                              <a
                                                href="/#"
                                                className="text-decoration-none more-text"
                                              >
                                                Python Tutorial
                                                <i className="fa-solid fa-arrow-up arrow-right" />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                href="/#"
                                                className="text-decoration-none more-text"
                                              >
                                                What is Cloud Computing? A Beginner's
                                                Guide
                                                <i className="fa-solid fa-arrow-up arrow-right" />
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* end tab of Get Job */}
                              <div
                                className="tab-pane fade"
                                id="pills-02"
                                role="tabpanel"
                                aria-labelledby="pills-02-tab"
                                tabIndex={0}
                              >
                                <div className="course-tabs-wraper">
                                  <div className="course-tabs-row">
                                    <div className="column w-100">
                                      <div className="nav-card">
                                        <div className="icon-img">
                                          <img
                                            src="/assets/img/icons/redhat.webp"
                                            alt="red hat"
                                          />
                                        </div>
                                        <div className="info-width">
                                          <div className="info">
                                            <h4>
                                              Red Hat Training &amp; Certifications
                                            </h4>
                                            <p>
                                              Performance-based certifications and
                                              training for Linux, cloud, automation,
                                              security, and development.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="column">
                                      <h5>Core System Administration Track</h5>
                                      <hr />
                                      <a
                                        href="/rhcsa1"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/redhat.webp"
                                            alt="red hat"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            RHCSA I<span className="dots" />
                                            <span>RH124v10</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Red Hat Certified System Administrator
                                            (RHCSA) I
                                          </h6>
                                          <div className="seller">Best Seller</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/rhcsa2"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/redhat.webp"
                                            alt="red hat"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            RHCSA II
                                            <span className="dots" />
                                            <span>RH134v10</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Red Hat Certified System Administrator
                                            (RHCSA) II
                                          </h6>
                                          <div className="seller">Best Seller</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/redhat-linux-rhcsa-online-training-institute-certification-exam-center"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/redhat.webp"
                                            alt="red hat"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            RHCSA RH199
                                            <span className="dots" />
                                            <span>EX200v10</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Red Hat Certified System Administrator
                                            (RHCSA)
                                          </h6>
                                          <div className="seller">Best Seller</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/rhce"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/redhat.webp"
                                            alt="red hat"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            RHCE RH294
                                            <span className="dots" />
                                            <span>EX294</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Red Hat Certified Engineer (RHCE)
                                          </h6>
                                          <div className="seller trending">
                                            Trending
                                          </div>
                                        </div>
                                      </a>
                                      <a
                                        href="/linux-automation-training-rh294"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/redhat.webp"
                                            alt="red hat"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Ansible Automation
                                            <span className="dots" />
                                            <span>RH294</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Red Hat Certified Specialist in Ansible
                                            Automation
                                          </h6>
                                          <div className="seller new">New</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/red-hat-satellite-administration-online-training-institute-certification-exam-center"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/redhat.webp"
                                            alt="red hat"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Satellite Administration
                                            <span className="dots" />
                                            <span>EX403</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Red Hat Satellite 6 Administration
                                          </h6>
                                          <div className="seller new">New</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/rh436"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/redhat.webp"
                                            alt="red hat"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            High Availability Clustering
                                            <span className="dots" />
                                            <span>EX436</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Red Hat Certified Specialist in High
                                            Availability Clustering
                                          </h6>
                                          <div className="seller new">New</div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="column">
                                      <h5>OpenShift Track</h5>
                                      <hr />
                                      <a
                                        href="/containers-kubernetes-red-hat-openshift-online-training-institute-certification-exam-center"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/redhat.webp"
                                            alt="red hat"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Containers with Podman
                                            <span className="dots" />
                                            <span>EX188</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Introduction to Containers with Podman
                                          </h6>
                                          <div className="seller">Best Seller</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/openshift"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/redhat.webp"
                                            alt="red hat"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            OpenShift Administration II
                                            <span className="dots" />
                                            <span>EX280</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Red Hat OpenShift Administration II
                                            (Configuring a production cluster)
                                          </h6>
                                          <div className="seller">Best Seller</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/red-hat-openshift-virtualization"
                                        className="course-link text-decoration-none"
                                        aria-label="DO316 Managing VMs with OpenShift Virtualization"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/redhat.webp"
                                            alt="red hat"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            OpenShift AI
                                            <span className="dots" />
                                            <span>EX267</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Developing and Deploying AI/ML
                                            Applications on Red Hat OpenShift AI
                                          </h6>
                                          <div className="seller new">New</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/red-hat-openshift-virtualization"
                                        className="course-link text-decoration-none"
                                        aria-label="DO316 Managing VMs with OpenShift Virtualization"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/redhat.webp"
                                            alt="red hat"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            OpenShift Virtualization
                                            <span className="dots" />
                                            <span>EX316</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Managing Virtual Machines with Red Hat
                                            OpenShift Virtualization
                                          </h6>
                                          <div className="seller new">New</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/red-hat-openshift-advanced"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/redhat.webp"
                                            alt="red hat"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            OpenShift Administration III
                                            <span className="dots" />
                                            <span>EX380</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Red Hat OpenShift Administration III /
                                            Automation &amp; Integration (advanced
                                            admin/automation topics)
                                          </h6>
                                          <div className="seller new">New</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/red-hat-openshift-advanced"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/redhat.webp"
                                            alt="red hat"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Securing Kubernetes
                                            <span className="dots" />
                                            <span>EX430</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Securing Kubernetes Clusters with Red Hat
                                            Advanced Cluster Security
                                          </h6>
                                          <div className="seller new">New</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/red-hat-openshift-advanced"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/redhat.webp"
                                            alt="red hat"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Multicluster Management
                                            <span className="dots" />
                                            <span>EX480</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Multicluster Management with Red Hat
                                            OpenShift — multi-cluster operations &amp;
                                            platform management
                                          </h6>
                                          <div className="seller new">New</div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="column">
                                      <h5>Developer Track</h5>
                                      <hr />
                                      <a
                                        href="/red-hat-rhcjd"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/redhat.webp"
                                            alt="red hat"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            RHCJD
                                            <span className="dots" />
                                            <span>DO101 + AD183</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Red Hat Certified Enterprise Application
                                            Developer (RHCJD)
                                          </h6>
                                          <div className="seller">Best Seller</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/red-hat-rhcemd"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/redhat.webp"
                                            alt="red hat"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            RHCEMD
                                            <span className="dots" />
                                            <span>DO283 + AD248</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Red Hat Certified Enterprise Microservices
                                            Developer (RHCEMD)
                                          </h6>
                                          <div className="seller trending">
                                            Trending
                                          </div>
                                        </div>
                                      </a>
                                      <a
                                        href="/containers-kubernetes-red-hat-openshift-online-training-institute-certification-exam-center"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/redhat.webp"
                                            alt="red hat"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Containers and Kubernetes
                                            <span className="dots" />
                                            <span>DO180</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Red Hat Certified Specialist in Containers
                                            and Kubernetes
                                          </h6>
                                          <div className="seller trending">
                                            Trending
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="column">
                                      <h5>Cloud and Virtualization Track</h5>
                                      <hr />
                                      <a
                                        href="/redhat-openstack-cl110-online-training-institute-certification-exam-center"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/redhat.webp"
                                            alt="red hat"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            OpenStack Administrator
                                            <span className="dots" />
                                            <span>PE110</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Red Hat Certified System Administrator in
                                            Red Hat OpenStack
                                          </h6>
                                          <div className="seller">Best Seller</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/open-stack"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/redhat.webp"
                                            alt="red hat"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            OpenStack Engineer
                                            <span className="dots" />
                                            <span>EX210</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Red Hat Certified Engineer in Red Hat
                                            OpenStack
                                          </h6>
                                          <div className="seller trending">
                                            Trending
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="column">
                                      <h5>Security Track</h5>
                                      <hr />
                                      <a
                                        href="/red-hat-security-linux"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/redhat.webp"
                                            alt="red hat"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Security Linux
                                            <span className="dots" />
                                            <span>EX415</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Red Hat Certified Specialist in Security:
                                            Linux
                                          </h6>
                                          <div className="seller new">New</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/red-hat-identity-management"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/redhat.webp"
                                            alt="red hat"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Identity Management
                                            <span className="dots" />
                                            <span>EX362</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Red Hat Certified Specialist in Identity
                                            Management
                                          </h6>
                                          <div className="seller">Best Seller</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/rh442"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/redhat.webp"
                                            alt="red hat"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Performance Tuning
                                            <span className="dots" />
                                            <span>EX442</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Red Hat Certified Specialist in
                                            Performance Tuning
                                          </h6>
                                          <div className="seller new">New</div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="column">
                                      <h5>Architect Level (RHCA)</h5>
                                      <hr />
                                      <a
                                        href="/#"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/redhat.webp"
                                            alt="red hat"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            RHCA Infrastructure
                                            <span className="dots" />
                                            <span>Advanced</span>
                                          </h6>
                                          <h6 className="desc2">
                                            RHCA - Infrastructure Track
                                          </h6>
                                          <div className="seller new">New</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/#"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/redhat.webp"
                                            alt="red hat"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            RHCA Enterprise Apps
                                            <span className="dots" />
                                            <span>Advanced</span>
                                          </h6>
                                          <h6 className="desc2">
                                            RHCA - Enterprise Applications Track
                                          </h6>
                                          <div className="seller new">New</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/#"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/redhat.webp"
                                            alt="red hat"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            RHCA DevOps
                                            <span className="dots" />
                                            <span>Advanced</span>
                                          </h6>
                                          <h6 className="desc2">
                                            RHCA - DevOps Track
                                          </h6>
                                          <div className="seller new">New</div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="course-learn-more-bar">
                                      <div className="course-learn-more-row">
                                        <div className="course-learn-more-column">
                                          <h5 className="course-learn-more-title">
                                            Interview Preparation
                                          </h5>
                                          <ul className="more-domains-list learn-more-gap list-unstyled flex-column">
                                            <li>
                                              <a
                                                href="/#"
                                                className="text-decoration-none more-text"
                                              >
                                                Python Tutorial
                                                <i className="fa-solid fa-arrow-up arrow-right" />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                href="/#"
                                                className="text-decoration-none more-text"
                                              >
                                                What is Cloud Computing? A Beginner's
                                                Guide
                                                <i className="fa-solid fa-arrow-up arrow-right" />
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* end tab of Get Job */}
                              <div
                                className="tab-pane fade"
                                id="pills-03"
                                role="tabpanel"
                                aria-labelledby="pills-03-tab"
                                tabIndex={0}
                              >
                                <div className="course-tabs-wraper">
                                  <div className="course-tabs-row">
                                    <div className="column w-100">
                                      <div className="nav-card">
                                        <div className="icon-img">
                                          <img
                                            src="/assets/img/icons/ec.webp"
                                            alt="EC-Council"
                                          />
                                        </div>
                                        <div className="info-width">
                                          <div className="info">
                                            <h4>
                                              EC-Council Training &amp; Certifications
                                            </h4>
                                            <p>
                                              Globally recognized cybersecurity
                                              certifications focusing on ethical
                                              hacking, forensics, network defense, and
                                              more.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="column">
                                      <h5>Ethical Hacking Track</h5>
                                      <hr />
                                      <a
                                        href="/ethical-hacking-ceh-cyber-security-training-institute-certification-exam-center"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/ec.webp"
                                            alt="EC-Council"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            CEH v13 AI
                                            <span className="dots" />
                                            <span>6 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Certified Ethical Hacker (CEH)
                                          </h6>
                                          <div className="seller">Best Seller</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/certified-ethical-hacker-ceh-practical-online-training-institute-certification-exam-center"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/ec.webp"
                                            alt="EC-Council"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            CEH v13 Practical
                                            <span className="dots" />
                                            <span>4 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Certified Ethical Hacker (CEH) Practical
                                          </h6>
                                          <div className="seller new">New</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/ceh-master-training"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/ec.webp"
                                            alt="EC-Council"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            CEH v13 Master
                                            <span className="dots" />
                                            <span>8 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            CEH v13 + Practical
                                          </h6>
                                          <div className="seller trending">
                                            Trending
                                          </div>
                                        </div>
                                      </a>
                                      <a
                                        href="/ec-council-certified-security-analyst-ecsa-online-training-institute-certification-exam-center"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/ec.webp"
                                            alt="EC-Council"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            ECSA v10
                                            <span className="dots" />
                                            <span>8 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            EC-Council Certified Security Analyst
                                            (ECSA)
                                          </h6>
                                          <div className="seller new">New</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/cpent-training"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/ec.webp"
                                            alt="EC-Council"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            CPENT
                                            <span className="dots" />
                                            <span>8 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Certified Penetration Testing Professional
                                            (CPENT)
                                          </h6>
                                          <div className="seller trending">
                                            Trending
                                          </div>
                                        </div>
                                      </a>
                                      <a
                                        href="/licensed-penetration-tester-lpt-master-training-institute-certification-exam-center"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/ec.webp"
                                            alt="EC-Council"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            LPT
                                            <span className="dots" />
                                            <span>12 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Licensed Penetration Tester (LPT)
                                          </h6>
                                          <div className="seller new">New</div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="column">
                                      <h5>Forensics Track</h5>
                                      <hr />
                                      <a
                                        href="/computer-hacking-forensic-investigator-chfi-online-training-institute-certification-exam-center"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/ec.webp"
                                            alt="EC-Council"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            CHFI v11
                                            <span className="dots" />
                                            <span>6 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Computer Hacking Forensic Investigator
                                            (CHFI)
                                          </h6>
                                          <div className="seller">Best Seller</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/ecih-training"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/ec.webp"
                                            alt="EC-Council"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            ECIH
                                            <span className="dots" />
                                            <span>4 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            EC-Council Certified Incident Handler
                                            (ECIH)
                                          </h6>
                                          <div className="seller trending">
                                            Trending
                                          </div>
                                        </div>
                                      </a>
                                      <h5>Monitoring Work</h5>
                                      <hr />
                                      <a
                                        href="/soc-analyst-training"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/ec.webp"
                                            alt="EC-Council"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            SOC Analyst v2
                                            <span className="dots" />
                                            <span>6 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Certified SOC Analyst (CSA)
                                          </h6>
                                          <div className="seller">Best Seller</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/certified-threat-intelligence-analyst-ctia-online-training-institute-certification-exam-center"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/ec.webp"
                                            alt="EC-Council"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            CTIA
                                            <span className="dots" />
                                            <span>6 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Certified Threat Intelligence Analyst
                                            (CTIA)
                                          </h6>
                                          <div className="seller trending">
                                            Trending
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="column">
                                      <h5>Network Defense Track</h5>
                                      <hr />
                                      <a
                                        href="/certified-network-defender-cnd-online-training-institute-certification-exam-center"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/ec.webp"
                                            alt="EC-Council"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            CND
                                            <span className="dots" />
                                            <span>6 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Certified Network Defender (CND)
                                          </h6>
                                          <div className="seller new">New</div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="column">
                                      <h5>Executive &amp; Management Track</h5>
                                      <hr />
                                      <a
                                        href="/cciso-training"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/ec.webp"
                                            alt="EC-Council"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            CCISO
                                            <span className="dots" />
                                            <span>8 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Certified Chief Information Security
                                            Officer (CCISO)
                                          </h6>
                                          <div className="seller new">New</div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="column">
                                      <h5>Other Specialists</h5>
                                      <hr />
                                      <a
                                        href="/vapt-training"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/ec.webp"
                                            alt="EC-Council"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            VAPT
                                            <span className="dots" />
                                            <span>6 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Vulnerability Assessment and Penetration
                                            Testing (VAPT)
                                          </h6>
                                          <div className="seller new">New</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/wapt-training"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/ec.webp"
                                            alt="EC-Council"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            WAPT
                                            <span className="dots" />
                                            <span>6 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Web Application and Penetration Testing
                                            (WAPT)
                                          </h6>
                                          <div className="seller new">New</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/cct-training"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/ec.webp"
                                            alt="EC-Council"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            CCT
                                            <span className="dots" />
                                            <span>6 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Certified Cybersecurity Technician (CCT)
                                          </h6>
                                          <div className="seller new">New</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/edrp-training"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/ec.webp"
                                            alt="EC-Council"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            EDRP v3
                                            <span className="dots" />
                                            <span>6 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            EC-Council Disaster Recovery Professional
                                            (EDRP)
                                          </h6>
                                          <div className="seller new">New</div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="course-learn-more-bar">
                                      <div className="course-learn-more-row">
                                        <div className="course-learn-more-column">
                                          <h5 className="course-learn-more-title">
                                            Interview Preparation
                                          </h5>
                                          <ul className="more-domains-list learn-more-gap list-unstyled flex-column">
                                            <li>
                                              <a
                                                href="/#"
                                                className="text-decoration-none more-text"
                                              >
                                                Python Tutorial
                                                <i className="fa-solid fa-arrow-up arrow-right" />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                href="/#"
                                                className="text-decoration-none more-text"
                                              >
                                                What is Cloud Computing? A Beginner's
                                                Guide
                                                <i className="fa-solid fa-arrow-up arrow-right" />
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* end tab of Get Job */}
                              <div
                                className="tab-pane fade"
                                id="pills-04"
                                role="tabpanel"
                                aria-labelledby="pills-04-tab"
                                tabIndex={0}
                              >
                                <div className="course-tabs-wraper">
                                  <div className="course-tabs-row">
                                    <div className="column w-100">
                                      <div className="nav-card">
                                        <div className="icon-img">
                                          <img
                                            src="/assets/img/icons/offsec.webp"
                                            alt="OffSec"
                                          />
                                        </div>
                                        <div className="info-width">
                                          <div className="info">
                                            <h4>
                                              OffSec Training &amp; Certifications
                                            </h4>
                                            <p>
                                              Hands-on, performance-based
                                              certifications in offensive security,
                                              penetration testing, and exploit
                                              development.
                                            </p>
                                          </div>
                                          <a
                                            href="/offsec"
                                            className="btn-view text-decoration-none"
                                          >
                                            View All OffSec Courses
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="column">
                                      <h5>Penetration Testing Track</h5>
                                      <hr />
                                      <a
                                        href="/offsec-oscp"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/offsec.webp"
                                            alt="Offsec"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            OffSec
                                            <span className="dots" />
                                            <span>PWK</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Offensive Security Certified Professional
                                            (OSCP)
                                          </h6>
                                          <div className="seller">Best Seller</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/offsec-osep"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/offsec.webp"
                                            alt="Offsec"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            OffSec
                                            <span className="dots" />
                                            <span>Evasion Techniques</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Offensive Security Experienced Penetration
                                            Tester (OSEP)
                                          </h6>
                                          <div className="seller trending">
                                            Trending
                                          </div>
                                        </div>
                                      </a>
                                      <button className="btn btn-view d-block mx-auto">
                                        View all Penetration Testing Courses
                                      </button>
                                    </div>
                                    <div className="column">
                                      <h5>Exploit Development Track</h5>
                                      <hr />
                                      <a
                                        href="/offsec-osed"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/offsec.webp"
                                            alt="Offsec"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            OffSec
                                            <span className="dots" />
                                            <span>Windows User-Mode</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Offensive Security Exploit Developer
                                            (OSED)
                                          </h6>
                                          <div className="seller">Best Seller</div>
                                        </div>
                                      </a>
                                      <button className="btn btn-view d-block mx-auto">
                                        View all Exploit Development Courses
                                      </button>
                                    </div>
                                    <div className="column">
                                      <h5>Web Attacks Track</h5>
                                      <hr />
                                      <a
                                        href="/offsec-oswe"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/offsec.webp"
                                            alt="Offsec"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            OffSec
                                            <span className="dots" />
                                            <span>AWAE</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Offensive Security Web Expert (OSWE)
                                          </h6>
                                          <div className="seller">Best Seller</div>
                                        </div>
                                      </a>
                                      <button className="btn btn-view d-block mx-auto">
                                        View all Web Attacks Courses
                                      </button>
                                    </div>
                                    <div className="column">
                                      <h5>Defensive Track</h5>
                                      <hr />
                                      <a
                                        href="/offsec-osda"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/offsec.webp"
                                            alt="Offsec"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            OffSec
                                            <span className="dots" />
                                            <span>SOC-200</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Offensive Security Defensive Analyst
                                            (OSDA)
                                          </h6>
                                          <div className="seller new">New</div>
                                        </div>
                                      </a>
                                      <button className="btn btn-view d-block mx-auto">
                                        View all Defensive Courses
                                      </button>
                                    </div>
                                    <div className="column">
                                      <h5>Specialized Tracks</h5>
                                      <hr />
                                      <a
                                        href="/offsec-osmr"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/offsec.webp"
                                            alt="Offsec"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            OffSec
                                            <span className="dots" />
                                            <span>MacOS Control Bypass</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Offensive Security MacOS Researcher (OSMR)
                                          </h6>
                                          <div className="seller new">New</div>
                                        </div>
                                      </a>
                                      <button className="btn btn-view d-block mx-auto">
                                        View all Specialized Courses
                                      </button>
                                    </div>
                                    <div className="course-learn-more-bar">
                                      <div className="course-learn-more-row">
                                        <div className="course-learn-more-column">
                                          <h5 className="course-learn-more-title">
                                            Interview Peparation
                                          </h5>
                                          <ul className="more-domains-list learn-more-gap list-unstyled flex-column">
                                            <li>
                                              <a
                                                href="/#"
                                                className="text-decoration-none more-text"
                                              >
                                                Offsec Tutorial
                                                <i className="fa-solid fa-arrow-up arrow-right" />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                href="/#"
                                                className="text-decoration-none more-text"
                                              >
                                                What is Pentesting? A Beginner's Guide
                                                <i className="fa-solid fa-arrow-up arrow-right" />
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* end tab of Get Job */}
                              <div
                                className="tab-pane fade"
                                id="pills-05"
                                role="tabpanel"
                                aria-labelledby="pills-05-tab"
                                tabIndex={0}
                              >
                                <div className="course-tabs-wraper">
                                  <div className="course-tabs-row">
                                    <div className="column w-100">
                                      <div className="nav-card">
                                        <div className="icon-img">
                                          <img
                                            src="/assets/img/icons/cisco.webp"
                                            alt="CISCO"
                                          />
                                        </div>
                                        <div className="info-width">
                                          <div className="info">
                                            <h4>
                                              Cisco Training &amp; Certifications
                                            </h4>
                                            <p>
                                              Industry-leading certifications in
                                              networking, security, collaboration,
                                              data center, and software development.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="column">
                                      <h5>Enterprise Networking Track</h5>
                                      <hr />
                                      <a
                                        href="/ccna"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/cisco.webp"
                                            alt="cisco"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            CCNA
                                            <span className="dots" />
                                            <span>6 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Cisco Certified Network Associate (CCNA)
                                          </h6>
                                          <div className="seller">Best Seller</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/ccnp"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/cisco.webp"
                                            alt="cisco"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            CCNP Enterprise
                                            <span className="dots" />
                                            <span>8 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Cisco Certified Network Professional
                                            Enterprise (CCNP Enterprise)
                                          </h6>
                                          <div className="seller trending">
                                            Trending
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="column">
                                      <h5>Security Track</h5>
                                      <hr />
                                      <a
                                        href="/ccnp-security"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/cisco.webp"
                                            alt="cisco"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            CCNP Security
                                            <span className="dots" />
                                            <span>8 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Cisco Certified Network Professional
                                            Security (CCNP Security)
                                          </h6>
                                          <div className="seller">Best Seller</div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="column">
                                      <h5>Collaboration Track</h5>
                                      <hr />
                                      <a
                                        href="/ccnp-collaboration"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/cisco.webp"
                                            alt="cisco"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            CCNP Collaboration
                                            <span className="dots" />
                                            <span>8 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Cisco Certified Network Professional
                                            Collaboration (CCNP Collaboration)
                                          </h6>
                                          <div className="seller new">New</div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="column">
                                      <h5>Data Center Track</h5>
                                      <hr />
                                      <a
                                        href="/ccnp-data-center"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/cisco.webp"
                                            alt="cisco"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            CCNP Data Center
                                            <span className="dots" />
                                            <span>8 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Cisco Certified Network Professional Data
                                            Center (CCNP Data Center)
                                          </h6>
                                          <div className="seller new">New</div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="column">
                                      <h5>DevNet Track</h5>
                                      <hr />
                                      <a
                                        href="/devnet-associate"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/cisco.webp"
                                            alt="cisco"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            DevNet Associate
                                            <span className="dots" />
                                            <span>6 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Cisco Certified DevNet Associate
                                          </h6>
                                          <div className="seller trending">
                                            Trending
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="course-learn-more-bar">
                                      <div className="course-learn-more-row">
                                        <div className="course-learn-more-column">
                                          <h5 className="course-learn-more-title">
                                            Interview Preparation
                                          </h5>
                                          <ul className="more-domains-list learn-more-gap list-unstyled flex-column">
                                            <li>
                                              <a
                                                href="/#"
                                                className="text-decoration-none more-text"
                                              >
                                                Python Tutorial
                                                <i className="fa-solid fa-arrow-up arrow-right" />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                href="/#"
                                                className="text-decoration-none more-text"
                                              >
                                                What is Cloud Computing? A Beginner's
                                                Guide
                                                <i className="fa-solid fa-arrow-up arrow-right" />
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* end tab of Get Job */}
                              <div
                                className="tab-pane fade"
                                id="pills-06"
                                role="tabpanel"
                                aria-labelledby="pills-06-tab"
                                tabIndex={0}
                              >
                                <div className="course-tabs-wraper">
                                  <div className="course-tabs-row">
                                    <div className="column w-100">
                                      <div className="nav-card">
                                        <div className="icon-img">
                                          <img
                                            src="/assets/img/icons/cloud.webp"
                                            alt="Cloud"
                                          />
                                        </div>
                                        <div className="info-width">
                                          <div className="info">
                                            <h4>
                                              Cloud Training &amp; Certifications
                                            </h4>
                                            <p>
                                              Industry-leading certifications in cloud
                                              computing, architecture, security,
                                              development, and operations across major
                                              providers.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="column">
                                      <h5>AWS Track</h5>
                                      <hr />
                                      <a
                                        href="/AWS-training-in-pune"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/aws.webp"
                                            alt="aws"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            AWS Training
                                            <span className="dots" />
                                            <span>6 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            AWS Training in Pune
                                          </h6>
                                          <div className="seller">Best Seller</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/aws-certified-cloud-practitioner-online-training-institute-certification-exam-center"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/aws.webp"
                                            alt="aws"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            AWS Cloud Practitioner
                                            <span className="dots" />
                                            <span>4 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            AWS Certified Cloud Practitioner
                                          </h6>
                                          <div className="seller trending">
                                            Trending
                                          </div>
                                        </div>
                                      </a>
                                      <a
                                        href="/aws-solutions-architect-professional-online-training-institute-certification-exam-center"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/aws.webp"
                                            alt="aws"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            AWS Solutions Architect
                                            <span className="dots" />
                                            <span>8 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            AWS Solutions Architect Professional
                                          </h6>
                                          <div className="seller">Best Seller</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/aws-certified-sysops-administrator-associate-online-training-institute-certification-exam-center"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/aws.webp"
                                            alt="aws"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            AWS SysOps Administrator
                                            <span className="dots" />
                                            <span>6 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            AWS SysOps Administrator (Associate)
                                          </h6>
                                          <div className="seller trending">
                                            Trending
                                          </div>
                                        </div>
                                      </a>
                                      <a
                                        href="/aws-certified-security-specialty-online-training-institute-certification-exam-center"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/aws.webp"
                                            alt="aws"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            AWS Security Specialty
                                            <span className="dots" />
                                            <span>8 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            AWS Security Specialty
                                          </h6>
                                          <div className="seller new">New</div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="column">
                                      <h5>Azure Track</h5>
                                      <hr />
                                      <a
                                        href="/microsoft-azure-fundamentals-online-training-institute-certification-exam-center"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/azure.webp"
                                            alt="azure"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Azure Fundamentals
                                            <span className="dots" />
                                            <span>4 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Microsoft Azure Fundamentals
                                          </h6>
                                          <div className="seller">Best Seller</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/microsoft-azure-administrator-online-training-institute-certification-exam-center"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/azure.webp"
                                            alt="azure"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Azure Administrator
                                            <span className="dots" />
                                            <span>6 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Microsoft Azure Administrator
                                          </h6>
                                          <div className="seller trending">
                                            Trending
                                          </div>
                                        </div>
                                      </a>
                                      <a
                                        href="/microsoft-azure-architect-design-online-training-institute-certification-exam-center"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/azure.webp"
                                            alt="azure"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Azure DevOps
                                            <span className="dots" />
                                            <span>8 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Microsoft Azure DevOps
                                          </h6>
                                          <div className="seller">Best Seller</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/microsoft-azure-architect-technologies-online-training-institute-certification-exam-center"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/azure.webp"
                                            alt="azure"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Azure Architect
                                            <span className="dots" />
                                            <span>8 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Microsoft Azure Architect - Design
                                          </h6>
                                          <div className="seller trending">
                                            Trending
                                          </div>
                                        </div>
                                      </a>
                                      <a
                                        href="/microsoft-azure-security-technologies-online-training-institute-certification-exam-center"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/azure.webp"
                                            alt="azure"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Azure Security
                                            <span className="dots" />
                                            <span>8 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Microsoft Azure Security Technologies
                                          </h6>
                                          <div className="seller new">New</div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="column">
                                      <h5>Google Cloud Track</h5>
                                      <hr />
                                      <a
                                        href="/google-professional-cloud-architect-online-training-institute-certification-exam-center"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/google.webp"
                                            alt="google cloud"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            GCP Cloud Architect
                                            <span className="dots" />
                                            <span>8 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Google Professional Cloud Architect
                                          </h6>
                                          <div className="seller">Best Seller</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/google-professional-cloud-developer-architect-online-training-institute-certification-exam-center"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/google.webp"
                                            alt="google cloud"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            GCP Cloud Developer
                                            <span className="dots" />
                                            <span>6 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Google Professional Cloud Developer
                                          </h6>
                                          <div className="seller trending">
                                            Trending
                                          </div>
                                        </div>
                                      </a>
                                      <a
                                        href="/google-professional-cloud-network-engineer-online-training-institute-certification-exam-center"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/google.webp"
                                            alt="google cloud"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            GCP Network Engineer
                                            <span className="dots" />
                                            <span>6 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Google Professional Cloud Network Engineer
                                          </h6>
                                          <div className="seller">Best Seller</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/google-professional-cloud-security-engineer-online-training-institute-certification-exam-center"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/google.webp"
                                            alt="google cloud"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            GCP Security Engineer
                                            <span className="dots" />
                                            <span>8 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Google Professional Cloud Security
                                            Engineer
                                          </h6>
                                          <div className="seller trending">
                                            Trending
                                          </div>
                                        </div>
                                      </a>
                                      <a
                                        href="/google-professional-cloud-data-engineer-online-training-institute-certification-exam-center"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/google.webp"
                                            alt="google cloud"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            GCP Data Engineer
                                            <span className="dots" />
                                            <span>8 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Google Professional Cloud Data Engineer
                                          </h6>
                                          <div className="seller new">New</div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="course-learn-more-bar">
                                      <div className="course-learn-more-row">
                                        <div className="course-learn-more-column">
                                          <h5 className="course-learn-more-title">
                                            Interview Preparation
                                          </h5>
                                          <ul className="more-domains-list learn-more-gap list-unstyled flex-column">
                                            <li>
                                              <a
                                                href="/#"
                                                className="text-decoration-none more-text"
                                              >
                                                Python Tutorial
                                                <i className="fa-solid fa-arrow-up arrow-right" />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                href="/#"
                                                className="text-decoration-none more-text"
                                              >
                                                What is Cloud Computing? A Beginner's
                                                Guide
                                                <i className="fa-solid fa-arrow-up arrow-right" />
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* end tab of Get Job */}
                              <div
                                className="tab-pane fade"
                                id="pills-07"
                                role="tabpanel"
                                aria-labelledby="pills-07-tab"
                                tabIndex={0}
                              >
                                <div className="course-tabs-wraper">
                                  <div className="course-tabs-row">
                                    <div className="column w-100">
                                      <div className="nav-card">
                                        <div className="icon-img">
                                          <img
                                            src="/assets/img/icons/devops.webp"
                                            alt="DevOps"
                                          />
                                        </div>
                                        <div className="info-width">
                                          <div className="info">
                                            <h4>
                                              DevOps Training &amp; Certifications
                                            </h4>
                                            <p>
                                              Industry-leading certifications in
                                              DevOps practices, including CI/CD,
                                              containerization, orchestration,
                                              configuration management, and
                                              infrastructure as code.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="column">
                                      <h5>Jenkins Track</h5>
                                      <hr />
                                      <a
                                        href="/jenkins-fundamentals"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/jenkins.webp"
                                            alt="jenkins"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Jenkins Fundamentals
                                            <span className="dots" />
                                            <span>4 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Jenkins CI/CD Fundamentals
                                          </h6>
                                          <div className="seller">Best Seller</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/jenkins-advanced"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/jenkins.webp"
                                            alt="jenkins"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Jenkins Advanced
                                            <span className="dots" />
                                            <span>6 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Advanced Jenkins Pipeline Development
                                          </h6>
                                          <div className="seller trending">
                                            Trending
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="column">
                                      <h5>Docker Track</h5>
                                      <hr />
                                      <a
                                        href="/docker-essentials"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/docker.webp"
                                            alt="docker"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Docker Essentials
                                            <span className="dots" />
                                            <span>4 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Docker Containerization Essentials
                                          </h6>
                                          <div className="seller">Best Seller</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/docker-certified-associate"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/docker.webp"
                                            alt="docker"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Docker Certified Associate
                                            <span className="dots" />
                                            <span>6 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Docker Certified Associate (DCA)
                                          </h6>
                                          <div className="seller trending">
                                            Trending
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="column">
                                      <h5>Kubernetes Track</h5>
                                      <hr />
                                      <a
                                        href="/certified-kubernetes-administrator-cka-online-training-institute-certification-exam-center"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/kubernetes.webp"
                                            alt="kubernetes"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Kubernetes Administrator
                                            <span className="dots" />
                                            <span>6 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Certified Kubernetes Administrator (CKA)
                                          </h6>
                                          <div className="seller">Best Seller</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/certified-kubernetes-application-developer-ckad-online-training-institute-certification-exam-center"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/kubernetes.webp"
                                            alt="kubernetes"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Kubernetes Application Developer
                                            <span className="dots" />
                                            <span>6 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Certified Kubernetes Application Developer
                                            (CKAD)
                                          </h6>
                                          <div className="seller">Best Seller</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/certified-kubernetes-security-specialist-cks-online-training-institute-certification-exam-center"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/kubernetes.webp"
                                            alt="kubernetes"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Kubernetes Security
                                            <span className="dots" />
                                            <span>8 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Certified Kubernetes Security Specialist
                                            (CKS)
                                          </h6>
                                          <div className="seller trending">
                                            Trending
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="column">
                                      <h5>Ansible Track</h5>
                                      <hr />
                                      <a
                                        href="/ansible-essentials"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/ansible.webp"
                                            alt="ansible"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Ansible Essentials
                                            <span className="dots" />
                                            <span>4 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Ansible Configuration Management
                                            Essentials
                                          </h6>
                                          <div className="seller">Best Seller</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/ansible-advanced"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/ansible.webp"
                                            alt="ansible"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Ansible Advanced
                                            <span className="dots" />
                                            <span>6 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Advanced Ansible Automation
                                          </h6>
                                          <div className="seller trending">
                                            Trending
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="column">
                                      <h5>Terraform Track</h5>
                                      <hr />
                                      <a
                                        href="/terraform-associate"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/terraform.webp"
                                            alt="terraform"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Terraform Associate
                                            <span className="dots" />
                                            <span>4 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            HashiCorp Certified: Terraform Associate
                                          </h6>
                                          <div className="seller">Best Seller</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/terraform-advanced"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/terraform.webp"
                                            alt="terraform"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Terraform Advanced
                                            <span className="dots" />
                                            <span>6 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Advanced Terraform for Infrastructure as
                                            Code
                                          </h6>
                                          <div className="seller trending">
                                            Trending
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="course-learn-more-bar">
                                      <div className="course-learn-more-row">
                                        <div className="course-learn-more-column">
                                          <h5 className="course-learn-more-title">
                                            Interview Preparation
                                          </h5>
                                          <ul className="more-domains-list learn-more-gap list-unstyled flex-column">
                                            <li>
                                              <a
                                                href="/#"
                                                className="text-decoration-none more-text"
                                              >
                                                Python Tutorial
                                                <i className="fa-solid fa-arrow-up arrow-right" />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                href="/#"
                                                className="text-decoration-none more-text"
                                              >
                                                What is Cloud Computing? A Beginner's
                                                Guide
                                                <i className="fa-solid fa-arrow-up arrow-right" />
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="tab-pane fade"
                                id="pills-08"
                                role="tabpanel"
                                aria-labelledby="pills-08-tab"
                                tabIndex={0}
                              >
                                <div className="course-tabs-wraper">
                                  <div className="course-tabs-row">
                                    <div className="column w-100">
                                      <div className="nav-card">
                                        <div className="icon-img">
                                          <img
                                            src="/assets/img/icons/programming.webp"
                                            alt="Programming"
                                          />
                                        </div>
                                        <div className="info-width">
                                          <div className="info">
                                            <h4>
                                              Programming &amp; Databases Training
                                              &amp; Certifications
                                            </h4>
                                            <p>
                                              Industry-leading certifications in
                                              programming languages like Python,
                                              database systems such as Oracle and SQL,
                                              and big data technologies.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="column">
                                      <h5>Python Track</h5>
                                      <hr />
                                      <a
                                        href="/python-fundamentals"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/python.webp"
                                            alt="python"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Python Fundamentals
                                            <span className="dots" />
                                            <span>4 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Python Programming Fundamentals
                                          </h6>
                                          <div className="seller">Best Seller</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/python-advanced"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/python.webp"
                                            alt="python"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Python Advanced
                                            <span className="dots" />
                                            <span>6 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Advanced Python for Data Science
                                          </h6>
                                          <div className="seller trending">
                                            Trending
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="column">
                                      <h5>Oracle Track</h5>
                                      <hr />
                                      <a
                                        href="/oracle-database-admin"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/oracle.webp"
                                            alt="oracle"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Oracle Database Admin
                                            <span className="dots" />
                                            <span>6 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Oracle Database Administration I
                                          </h6>
                                          <div className="seller">Best Seller</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/oracle-pl-sql"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/oracle.webp"
                                            alt="oracle"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Oracle SQL &amp; PL/SQL
                                            <span className="dots" />
                                            <span>6 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Oracle Database SQL &amp; PL/SQL
                                          </h6>
                                          <div className="seller trending">
                                            Trending
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="column">
                                      <h5>SQL Track</h5>
                                      <hr />
                                      <a
                                        href="/sql-fundamentals"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/sql.webp"
                                            alt="sql"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            SQL Fundamentals
                                            <span className="dots" />
                                            <span>4 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            SQL Fundamentals for Beginners
                                          </h6>
                                          <div className="seller">Best Seller</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/advanced-sql"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/sql.webp"
                                            alt="sql"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            SQL Advanced
                                            <span className="dots" />
                                            <span>6 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Advanced SQL Query Optimization
                                          </h6>
                                          <div className="seller trending">
                                            Trending
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="column">
                                      <h5>Big Data Track</h5>
                                      <hr />
                                      <a
                                        href="/hadoop-fundamentals"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/big-data.webp"
                                            alt="big data"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Hadoop Fundamentals
                                            <span className="dots" />
                                            <span>6 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Hadoop Fundamentals &amp; Administration
                                          </h6>
                                          <div className="seller">Best Seller</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/spark-developer"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/big-data.webp"
                                            alt="big data"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Spark Developer
                                            <span className="dots" />
                                            <span>8 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Apache Spark Developer Certification
                                          </h6>
                                          <div className="seller trending">
                                            Trending
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="course-learn-more-bar">
                                      <div className="course-learn-more-row">
                                        <div className="course-learn-more-column">
                                          <h5 className="course-learn-more-title">
                                            Interview Preparation
                                          </h5>
                                          <ul className="more-domains-list learn-more-gap list-unstyled flex-column">
                                            <li>
                                              <a
                                                href="/#"
                                                className="text-decoration-none more-text"
                                              >
                                                Python Tutorial
                                                <i className="fa-solid fa-arrow-up arrow-right" />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                href="/#"
                                                className="text-decoration-none more-text"
                                              >
                                                What is Cloud Computing? A Beginner's
                                                Guide
                                                <i className="fa-solid fa-arrow-up arrow-right" />
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* end tab of Get Job */}
                              <div
                                className="tab-pane fade"
                                id="pills-09"
                                role="tabpanel"
                                aria-labelledby="pills-09-tab"
                                tabIndex={0}
                              >
                                <div className="course-tabs-wraper">
                                  <div className="course-tabs-row">
                                    <div className="column w-100">
                                      <div className="nav-card">
                                        <div className="icon-img">
                                          <img
                                            src="/assets/img/icons/ai-ml.webp"
                                            alt="AI ML"
                                          />
                                        </div>
                                        <div className="info-width">
                                          <div className="info">
                                            <h4>
                                              AI, ML &amp; Data Analytics Training
                                              &amp; Certifications
                                            </h4>
                                            <p>
                                              Industry-leading certifications in
                                              artificial intelligence, machine
                                              learning, data analytics, and data
                                              science across major providers.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="column">
                                      <h5>AI Track</h5>
                                      <hr />
                                      <a
                                        href="/ai-fundamentals"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/ai.webp"
                                            alt="ai"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Google AI Essentials
                                            <span className="dots" />
                                            <span>4 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Google AI Essentials
                                          </h6>
                                          <div className="seller">Best Seller</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/azure-ai-fundamentals"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/ai.webp"
                                            alt="ai"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Azure AI Fundamentals
                                            <span className="dots" />
                                            <span>4 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Microsoft Certified: Azure AI Fundamentals
                                          </h6>
                                          <div className="seller trending">
                                            Trending
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="column">
                                      <h5>Machine Learning Track</h5>
                                      <hr />
                                      <a
                                        href="/aws-ml-specialty"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/ml.webp"
                                            alt="ml"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            AWS Machine Learning
                                            <span className="dots" />
                                            <span>8 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            AWS Certified Machine Learning - Specialty
                                          </h6>
                                          <div className="seller">Best Seller</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/gcp-ml-engineer"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/ml.webp"
                                            alt="ml"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            GCP Machine Learning
                                            <span className="dots" />
                                            <span>8 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Google Professional Machine Learning
                                            Engineer
                                          </h6>
                                          <div className="seller trending">
                                            Trending
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="column">
                                      <h5>Data Analytics Track</h5>
                                      <hr />
                                      <a
                                        href="/google-data-analytics"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/data-analytics.webp"
                                            alt="data analytics"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Google Data Analytics
                                            <span className="dots" />
                                            <span>6 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Google Data Analytics Certificate
                                          </h6>
                                          <div className="seller">Best Seller</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/power-bi-data-analyst"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/data-analytics.webp"
                                            alt="data analytics"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Power BI Data Analyst
                                            <span className="dots" />
                                            <span>6 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Microsoft Certified: Power BI Data Analyst
                                            Associate
                                          </h6>
                                          <div className="seller trending">
                                            Trending
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="column">
                                      <h5>Data Science Track</h5>
                                      <hr />
                                      <a
                                        href="/ibm-data-science"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/data-science.webp"
                                            alt="data science"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            IBM Data Science
                                            <span className="dots" />
                                            <span>8 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            IBM Data Science Professional Certificate
                                          </h6>
                                          <div className="seller">Best Seller</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/azure-data-scientist"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/data-science.webp"
                                            alt="data science"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Azure Data Scientist
                                            <span className="dots" />
                                            <span>8 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Microsoft Certified: Azure Data Scientist
                                            Associate
                                          </h6>
                                          <div className="seller trending">
                                            Trending
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="course-learn-more-bar">
                                      <div className="course-learn-more-row">
                                        <div className="course-learn-more-column">
                                          <h5 className="course-learn-more-title">
                                            Interview Preparation
                                          </h5>
                                          <ul className="more-domains-list learn-more-gap list-unstyled flex-column">
                                            <li>
                                              <a
                                                href="/#"
                                                className="text-decoration-none more-text"
                                              >
                                                Python Tutorial
                                                <i className="fa-solid fa-arrow-up arrow-right" />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                href="/#"
                                                className="text-decoration-none more-text"
                                              >
                                                What is Cloud Computing? A Beginner's
                                                Guide
                                                <i className="fa-solid fa-arrow-up arrow-right" />
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* end tab of Get Job */}
                              <div
                                className="tab-pane fade"
                                id="pills-10"
                                role="tabpanel"
                                aria-labelledby="pills-10-tab"
                                tabIndex={0}
                              >
                                <div className="course-tabs-wraper">
                                  <div className="course-tabs-row">
                                    <div className="column w-100">
                                      <div className="nav-card">
                                        <div className="icon-img">
                                          <img
                                            src="/assets/img/icons/web-digital.webp"
                                            alt="Web Digital"
                                          />
                                        </div>
                                        <div className="info-width">
                                          <div className="info">
                                            <h4>
                                              Web &amp; Digital Skills Training &amp;
                                              Certifications
                                            </h4>
                                            <p>
                                              Industry-leading certifications in full
                                              stack development, web technologies,
                                              digital marketing, graphic design, and
                                              UI/UX.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="column">
                                      <h5>Full Stack Track</h5>
                                      <hr />
                                      <a
                                        href="/full-stack-developer"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/full-stack.webp"
                                            alt="full stack"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            MERN Stack
                                            <span className="dots" />
                                            <span>6 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Full Stack Web Development with MERN
                                          </h6>
                                          <div className="seller">Best Seller</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/mean-stack"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/full-stack.webp"
                                            alt="full stack"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            MEAN Stack
                                            <span className="dots" />
                                            <span>6 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Full Stack Web Development with MEAN
                                          </h6>
                                          <div className="seller trending">
                                            Trending
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="column">
                                      <h5>Web Tech Track</h5>
                                      <hr />
                                      <a
                                        href="/html-css-js"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/web-tech.webp"
                                            alt="web tech"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Frontend Essentials
                                            <span className="dots" />
                                            <span>4 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            HTML, CSS &amp; JavaScript Fundamentals
                                          </h6>
                                          <div className="seller">Best Seller</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/react-js"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/web-tech.webp"
                                            alt="web tech"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            React Advanced
                                            <span className="dots" />
                                            <span>6 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Advanced React.js Development
                                          </h6>
                                          <div className="seller trending">
                                            Trending
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="column">
                                      <h5>Digital Marketing Track</h5>
                                      <hr />
                                      <a
                                        href="/seo-specialist"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/digital-marketing.webp"
                                            alt="digital marketing"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Google Digital Marketing
                                            <span className="dots" />
                                            <span>6 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Google Digital Marketing &amp; E-commerce
                                            Certificate
                                          </h6>
                                          <div className="seller">Best Seller</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/social-media-marketing"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/digital-marketing.webp"
                                            alt="digital marketing"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Meta Social Media
                                            <span className="dots" />
                                            <span>6 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Meta Social Media Marketing Professional
                                            Certificate
                                          </h6>
                                          <div className="seller trending">
                                            Trending
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="column">
                                      <h5>Graphic Design Track</h5>
                                      <hr />
                                      <a
                                        href="/adobe-illustrator"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/graphic-design.webp"
                                            alt="graphic design"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Adobe Illustrator
                                            <span className="dots" />
                                            <span>6 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Adobe Certified Professional in Graphic
                                            Design &amp; Illustration using Adobe
                                            Illustrator
                                          </h6>
                                          <div className="seller">Best Seller</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/ui-ux-design"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/graphic-design.webp"
                                            alt="graphic design"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Google UX Design
                                            <span className="dots" />
                                            <span>6 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Google UX Design Professional Certificate
                                          </h6>
                                          <div className="seller trending">
                                            Trending
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="course-learn-more-bar">
                                      <div className="course-learn-more-row">
                                        <div className="course-learn-more-column">
                                          <h5 className="course-learn-more-title">
                                            Interview Preparation
                                          </h5>
                                          <ul className="more-domains-list learn-more-gap list-unstyled flex-column">
                                            <li>
                                              <a
                                                href="/#"
                                                className="text-decoration-none more-text"
                                              >
                                                Python Tutorial
                                                <i className="fa-solid fa-arrow-up arrow-right" />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                href="/#"
                                                className="text-decoration-none more-text"
                                              >
                                                What is Cloud Computing? A Beginner's
                                                Guide
                                                <i className="fa-solid fa-arrow-up arrow-right" />
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* end tab of Get Job */}
                              <div
                                className="tab-pane fade"
                                id="pills-11"
                                role="tabpanel"
                                aria-labelledby="pills-11-tab"
                                tabIndex={0}
                              >
                                <div className="course-tabs-wraper">
                                  <div className="course-tabs-row">
                                    <div className="column w-100">
                                      <div className="nav-card">
                                        <div className="icon-img">
                                          <img
                                            src="/assets/img/icons/corporate-career.webp"
                                            alt="Corporate Career"
                                          />
                                        </div>
                                        <div className="info-width">
                                          <div className="info">
                                            <h4>
                                              Corporate &amp; Career Training Programs
                                            </h4>
                                            <p>
                                              Comprehensive programs for soft skills
                                              development, internships, job-oriented
                                              training, and career advancement in
                                              professional environments.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="column">
                                      <h5>Soft Skills Track</h5>
                                      <hr />
                                      <a
                                        href="/communication-skills"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/soft-skills.webp"
                                            alt="soft skills"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Communication Skills
                                            <span className="dots" />
                                            <span>2 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Effective Communication &amp; Presentation
                                            Skills
                                          </h6>
                                          <div className="seller">Best Seller</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/leadership-training"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/soft-skills.webp"
                                            alt="soft skills"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Leadership Training
                                            <span className="dots" />
                                            <span>3 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Leadership &amp; Team Management
                                          </h6>
                                          <div className="seller trending">
                                            Trending
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="column">
                                      <h5>Internships Track</h5>
                                      <hr />
                                      <a
                                        href="/summer-internship"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/internship.webp"
                                            alt="internship"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Summer Internship
                                            <span className="dots" />
                                            <span>2 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Summer Internship Program
                                          </h6>
                                          <div className="seller">Best Seller</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/6-months-internship"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/internship.webp"
                                            alt="internship"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Industrial Internship
                                            <span className="dots" />
                                            <span>6 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            6 Months Industrial Internship
                                          </h6>
                                          <div className="seller trending">
                                            Trending
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="column">
                                      <h5>Job-Oriented Programs Track</h5>
                                      <hr />
                                      <a
                                        href="/job-guarantee-program"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/job-oriented.webp"
                                            alt="job oriented"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Job Guarantee Bootcamp
                                            <span className="dots" />
                                            <span>6 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Job Guarantee Bootcamp
                                          </h6>
                                          <div className="seller">Best Seller</div>
                                        </div>
                                      </a>
                                      <a
                                        href="/career-development"
                                        className="course-link text-decoration-none"
                                      >
                                        <div className="image-icon">
                                          <img
                                            src="/assets/img/icons/job-oriented.webp"
                                            alt="job oriented"
                                          />
                                        </div>
                                        <div className="info">
                                          <h6 className="desc1 flex-desc">
                                            Career Development
                                            <span className="dots" />
                                            <span>4 Months</span>
                                          </h6>
                                          <h6 className="desc2">
                                            Career Development &amp; Placement
                                            Training
                                          </h6>
                                          <div className="seller trending">
                                            Trending
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="course-learn-more-bar">
                                      <div className="course-learn-more-row">
                                        <div className="course-learn-more-column">
                                          <h5 className="course-learn-more-title">
                                            Interview Preparation
                                          </h5>
                                          <ul className="more-domains-list learn-more-gap list-unstyled flex-column">
                                            <li>
                                              <a
                                                href="/#"
                                                className="text-decoration-none more-text"
                                              >
                                                Python Tutorial
                                                <i className="fa-solid fa-arrow-up arrow-right" />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                href="/#"
                                                className="text-decoration-none more-text"
                                              >
                                                What is Cloud Computing? A Beginner's
                                                Guide
                                                <i className="fa-solid fa-arrow-up arrow-right" />
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* end tab of Get Job */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="overlay" className="overlay" />
        </div>
        {/* Search Modal */}
        <div
          className="search-poup modal fade"
          id="searchModal"
          tabIndex={-1}
          aria-labelledby="searchModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="search">
                <input
                  className="form-control"
                  type="name"
                  placeholder="Course title or keyword"
                  aria-label="Search"
                />
                <img src="/assets/imgs/search.png" alt="search" />
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Mobile-Header-Start */}
      </>
    </header>
  );
}