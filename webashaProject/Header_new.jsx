import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import DynamicCourseColumns from "./DynamicCourseColumns";

export default function Header() {

  const [megaMenuData, setMegaMenuData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/api/mega-menu/')
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
                                      <DynamicCourseColumns tabId="02m" megaMenuData={megaMenuData} />
                                      {/* Listing OpenShift track */}
                                      {/* Listing Developer track */}
                                      {/* Listing Cloud and Virtualization track */}
                                      {/* Listing Security track */}
                                      {/* Listing Architect Level (RHCA) track */}
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
                                      <DynamicCourseColumns tabId="03m" megaMenuData={megaMenuData} />
                                      {/* Listing Forensics and Monitoring Work tracks */}
                                      {/* Listing Network Defense track */}
                                      {/* Listing Executive & Management track */}
                                      {/* Listing Other Specialists track */}
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
                                      <DynamicCourseColumns tabId="cyber" megaMenuData={megaMenuData} />
                                      {/* Listing Exploit Development track */}
                                      {/* Listing Web Attacks track */}
                                      {/* Listing Defensive track */}
                                      {/* Listing Specialized Tracks */}
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
                                      <DynamicCourseColumns tabId="linux" megaMenuData={megaMenuData} />
                                      {/* Listing Security track */}
                                      {/* Listing Collaboration track */}
                                      {/* Listing Data Center track */}
                                      {/* Listing DevNet track */}
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
                                      <DynamicCourseColumns tabId="network" megaMenuData={megaMenuData} />
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
                                      <DynamicCourseColumns tabId="02" megaMenuData={megaMenuData} />
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
                                      <DynamicCourseColumns tabId="03" megaMenuData={megaMenuData} />
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
                                      <DynamicCourseColumns tabId="04" megaMenuData={megaMenuData} />
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
                                      <DynamicCourseColumns tabId="05" megaMenuData={megaMenuData} />
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
                                      <DynamicCourseColumns tabId="06" megaMenuData={megaMenuData} />
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
                                      <DynamicCourseColumns tabId="07" megaMenuData={megaMenuData} />
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
                                      <DynamicCourseColumns tabId="08" megaMenuData={megaMenuData} />
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
                                      <DynamicCourseColumns tabId="09" megaMenuData={megaMenuData} />
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
                                      <DynamicCourseColumns tabId="10" megaMenuData={megaMenuData} />
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
                                      <DynamicCourseColumns tabId="11" megaMenuData={megaMenuData} />
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