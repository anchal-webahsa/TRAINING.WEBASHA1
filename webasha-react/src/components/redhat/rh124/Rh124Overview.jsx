import React from "react";

const Rh124Overview = () => {
  return (
    <section className="contentcard lazy-section">
      <div className="content-container" id="contentContainer1">
        <div className="summary-details">
          <h2 className="heading-main text-center">
            Red Hat Certified System Administrator Course{" "}
            <span className="red-color"> Training Overview</span>
          </h2>
          <p className="description mb-0">
            {" "}
            Kickstart your Linux administration career with our Classroom
            / Online Red Hat Certified System Administrator (RHCSA) I |
            RH124 v10 Course Training, covering essential skills in Red
            Hat Enterprise Linux installation, configuration, and
            management. Prepare for RHCSA certification to advance your
            2025 IT career.{" "}
          </p>
        </div>
        <h5 className="bold-text mb-2 mt-2">
          Red Hat Certified System Administrator Course Training Overview:
        </h5>
        <p className="description mb-0">
          {" "}
          The RH124 v10 Course offers foundational training for Red Hat
          Enterprise Linux administration, focusing on core tasks like
          installation, file management, user administration, and basic
          security, leading toward RHCSA certification.{" "}
        </p>
        <h5 className="bold-text mb-2 mt-2">Intended Audience:</h5>
        <p className="description mb-0">
          {" "}
          Designed for new Linux administrators aiming to build survival
          skills in system management. Ideal for beginners in Pune seeking
          practical Red Hat expertise.{" "}
        </p>
        <h5 className="bold-text mb-2 mt-2">Topics Covered:</h5>
        <ul>
          <li>
            <i className="fa-solid fa-angles-right text-danger me-2" />{" "}
            Introduction to Red Hat Enterprise Linux
          </li>
          <li>
            <i className="fa-solid fa-angles-right text-danger me-2" />{" "}
            Accessing the Command Line
          </li>
          <li>
            <i className="fa-solid fa-angles-right text-danger me-2" />{" "}
            Managing Files from the Command Line
          </li>
          <li>
            <i className="fa-solid fa-angles-right text-danger me-2" />{" "}
            Getting Help in Red Hat Enterprise Linux
          </li>
          <li>
            <i className="fa-solid fa-angles-right text-danger me-2" />{" "}
            Creating, Viewing, and Editing Text Files
          </li>
          <li>
            <i className="fa-solid fa-angles-right text-danger me-2" />{" "}
            Managing Local Users and Groups
          </li>
          <li>
            <i className="fa-solid fa-angles-right text-danger me-2" />{" "}
            Controlling Access to Files
          </li>
          <li>
            <i className="fa-solid fa-angles-right text-danger me-2" />{" "}
            Monitoring and Managing Linux Processes
          </li>
          <li>
            <i className="fa-solid fa-angles-right text-danger me-2" />{" "}
            Controlling Services and Daemons
          </li>
          <li>
            <i className="fa-solid fa-angles-right text-danger me-2" />{" "}
            Configuring and Securing SSH
          </li>
          <li>
            <i className="fa-solid fa-angles-right text-danger me-2" />{" "}
            Analyzing and Storing Logs
          </li>
          <li>
            <i className="fa-solid fa-angles-right text-danger me-2" />{" "}
            Managing Networking
          </li>
          <li>
            <i className="fa-solid fa-angles-right text-danger me-2" />{" "}
            Archiving and Transferring Files
          </li>
          <li>
            <i className="fa-solid fa-angles-right text-danger me-2" />{" "}
            Installing and Updating Software
          </li>
          <li>
            <i className="fa-solid fa-angles-right text-danger me-2" />{" "}
            Accessing Linux File Systems
          </li>
          <li>
            <i className="fa-solid fa-angles-right text-danger me-2" />{" "}
            Managing Virtual Machines
          </li>
          <li>
            <i className="fa-solid fa-angles-right text-danger me-2" />{" "}
            Comprehensive Review
          </li>
        </ul>
        <h5 className="bold-text mb-2 mt-2">Requirements:</h5>
        <p className="description mb-0">
          {" "}
          Basic computer knowledge; reliable internet for online
          participation. Commitment to labs essential for skill
          development.{" "}
        </p>
        <h5 className="bold-text mb-2 mt-2">Pre-Requisites:</h5>
        <p className="description mb-0">
          {" "}
          No prerequisites specified, suitable for novices.{" "}
        </p>
        <h5 className="bold-text mb-2 mt-2">Career Benefits:</h5>
        <p className="description mb-0">
          {" "}
          Pursue roles like Linux System Administrator, Junior SysAdmin.
          Leads to RHCSA certification, with salaries ₹4-12 LPA, enabling
          global IT opportunities.{" "}
        </p>
        <div className="gradient-overlay" />
      </div>
      <button
        className="toggle-button"
        onclick="toggleContent('contentContainer1', this)"
      >
        View More
      </button>
    </section>
  );
};

export default Rh124Overview;
