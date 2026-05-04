import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import DynamicCourseColumns from "./DynamicCourseColumns";

export default function Header() {
  const [megaMenuData, setMegaMenuData] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/mega-menu/`)
      .then(res => res.json())
      .then(data => setMegaMenuData(data || []))
      .catch(err => console.error(err));
  }, []);


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

                            {megaMenuData && megaMenuData.map((category) => (
                              <li className="nav-item" role="presentation" key={`nav-cat-d-${category.id}`}>
                                <button
                                  className=""
                                  id={`pills-cat-d-${category.id}-tab`}
                                  data-bs-toggle="pill"
                                  data-bs-target={`#pills-cat-d-${category.id}`}
                                  type="button"
                                  role="tab"
                                  aria-controls={`pills-cat-d-${category.id}`}
                                  aria-selected="false"
                                >
                                  {category.icon ? (
                                    <img src={category.icon} alt={category.name} width="16" height="16" style={{ marginRight: '8px', objectFit: 'contain' }} />
                                  ) : (
                                    <i className={category.icon_class || "fa-solid fa-folder"} />
                                  )}
                                  {category.name}
                                </button>
                              </li>
                            ))}
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
                                      <DynamicCourseColumns tabId="01m" megaMenuData={megaMenuData} />
                                      {/* Listing DevOps Engineer program */}
                                      {/* Listing Cyber Security program */}
                                      {/* Listing Cyber Security with Advance Pen Tester program */}
                                      {/* Listing Data Science with AI/ML program */}
                                      {/* Listing Full Stack with Python program */}
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
                                {/* Dynamically Displaying content for the Domain tabs */}
                                {megaMenuData && megaMenuData.map((category) => (
                                  <div
                                    className="tab-pane fade"
                                    id={`pills-cat-d-${category.id}`}
                                    role="tabpanel"
                                    aria-labelledby={`pills-cat-d-${category.id}-tab`}
                                    tabIndex={0}
                                    key={`pane-cat-d-${category.id}`}
                                  >
                                    <div className="course-tabs-wraper">
                                      <div className="course-tabs-row">
                                        <div className="column w-100">
                                          <div className="nav-card">
                                            <div className="icon-img">
                                              {category.icon ? (
                                                <img
                                                  src={category.icon}
                                                  alt={category.name}
                                                />
                                              ) : (
                                                <i className={`${category.icon_class || "fa-solid fa-folder"} fa-3x`} style={{ color: '#e73827' }} />
                                              )}
                                            </div>
                                            <div className="info-width">
                                              <div className="info">
                                                <h4>
                                                  {category.name} Training &amp; Certifications
                                                </h4>
                                                <p>
                                                  Explore our comprehensive training and certification programs for {category.name}.
                                                </p>
                                              </div>
                                              <a
                                                href={`/${category.slug}`}
                                                className="btn-view text-decoration-none"
                                              >
                                                View All {category.name} Courses
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <DynamicCourseColumns category={category} tabId={null} megaMenuData={megaMenuData} />
                                      </div>
                                      <div className="course-learn-more-bar">
                                        <div className="course-learn-more-row">
                                          <div className="course-learn-more-column">
                                            <h5 className="course-learn-more-title">
                                              Authorized Training &amp; Certification Exam Center
                                            </h5>
                                            <div className="flex-wraper"><div className="icon-img"><img src="/assets/img/icons/redhat.webp" alt="Red Hat" /></div><div className="info"><p>Red Hat</p></div></div>
                                            <div className="flex-wraper"><div className="icon-img"><img src="/assets/img/icons/ec.webp" alt="EC-Council" /></div><div className="info"><p>EC-Council</p></div></div>
                                            <div className="flex-wraper"><div className="icon-img"><img src="/assets/img/icons/offsec.webp" alt="OffSec" /></div><div className="info"><p>OffSec</p></div></div>
                                            <div className="flex-wraper"><div className="icon-img"><img src="/assets/img/icons/aws.webp" alt="aws" /></div><div className="info"><p>AWS Cloud</p></div></div>
                                            <div className="flex-wraper"><div className="icon-img"><img src="/assets/img/icons/azure.webp" alt="Azure" /></div><div className="info"><p>Microsoft Azure</p></div></div>
                                            <div className="flex-wraper"><div className="icon-img"><img src="/assets/img/icons/google.webp" alt="Google Cloud" /></div><div className="info"><p>Google Cloud</p></div></div>
                                            <div className="flex-wraper"><div className="icon-img"><img src="/assets/img/icons/cisco.webp" alt="cisco" /></div><div className="info"><p>Cisco</p></div></div>
                                            <div className="flex-wraper"><div className="icon-img"><img src="/assets/img/icons/vmware.webp" alt="vmware" /></div><div className="info"><p>VMware</p></div></div>
                                            <div className="flex-wraper"><div className="icon-img"><img src="/assets/img/icons/oracle.webp" alt="Oracle" /></div><div className="info"><p>Oracle</p></div></div>
                                            <div className="flex-wraper"><div className="icon-img"><img src="/assets/img/icons/linux.webp" alt="The Linux Foundation" /></div><div className="info"><p>The Linux Foundation</p></div></div>
                                            <div className="flex-wraper"><div className="icon-img"><img src="/assets/img/icons/comptia.webp" alt="Comptia" /></div><div className="info"><p>Comptia</p></div></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
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
                          href="#"
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
                      <li>
                        <a
                          className="dropdown-item"
                          href="/certificate"
                        >
                          Certificate
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/exam/ex200"
                        >
                          Exams
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
                              Winter Trainig
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
                            href="#"
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
                        <li>
                          <a
                            className="dropdown-item"
                            href="/exams"
                          >
                            Exams
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
                          {megaMenuData && megaMenuData.map((category) => (
                            <li className="nav-item" role="presentation" key={`nav-cat-m-${category.id}`}>
                              <button
                                className=""
                                id={`pills-cat-m-${category.id}-tab`}
                                data-bs-toggle="pill"
                                data-bs-target={`#pills-cat-m-${category.id}`}
                                type="button"
                                role="tab"
                                aria-controls={`pills-cat-m-${category.id}`}
                                aria-selected="false"
                                onClick={showContent}
                              >
                                {category.icon ? (
                                  <img src={category.icon} alt={category.name} width="16" height="16" style={{ marginRight: '8px', objectFit: 'contain' }} />
                                ) : (
                                  <i className={category.icon_class || "fa-solid fa-folder"} />
                                )}
                                {category.name}
                              </button>
                            </li>
                          ))}
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
                                    <DynamicCourseColumns tabId="01" megaMenuData={megaMenuData} />
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
                              {megaMenuData && megaMenuData.map((category) => (
                                <div
                                  className="tab-pane fade"
                                  id={`pills-cat-m-${category.id}`}
                                  role="tabpanel"
                                  aria-labelledby={`pills-cat-m-${category.id}-tab`}
                                  tabIndex={0}
                                  key={`pane-cat-m-${category.id}`}
                                >
                                  <div className="course-tabs-wraper">
                                    <div className="course-tabs-row">
                                      <div className="column w-100">
                                        <div className="nav-card">
                                          <div className="icon-img">
                                            {category.icon ? (
                                              <img
                                                src={category.icon}
                                                alt={category.name}
                                              />
                                            ) : (
                                              <i className={`${category.icon_class || "fa-solid fa-folder"} fa-3x`} style={{ color: '#e73827' }} />
                                            )}
                                          </div>
                                          <div className="info-width">
                                            <div className="info">
                                              <h4>
                                                {category.name} Training &amp; Certifications
                                              </h4>
                                              <p>
                                                Explore our comprehensive training and certification programs for {category.name}.
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <DynamicCourseColumns category={category} tabId={null} megaMenuData={megaMenuData} />
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
                              ))}
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