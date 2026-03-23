import React from "react";

const Rh124WhyChoose = () => {
  return (
    <section className="contentcard lazy-section">
      <div className="content-container" id="contentContainer6">
        <h2 className="heading-main text-center">
          Why Choose RH124 v10 Training at{" "}
          <span className="red-color">WebAsha Technologies in Pune</span>
        </h2>
        <p className="description text-center">
          Begin your Red Hat journey with RH124 v10 training at WebAsha
          Technologies in Pune, a top center for Linux education.
        </p>
        <ul>
          <li>
            <i className="fa-solid fa-angles-right text-danger me-2" />
            <b>Expert Training:</b> Learn from certified Red Hat
            instructors.
          </li>
          <li>
            <i className="fa-solid fa-angles-right text-danger me-2" />
            <b>Comprehensive Content:</b> Cover essential Linux admin
            fundamentals.
          </li>
          <li>
            <i className="fa-solid fa-angles-right text-danger me-2" />
            <b>Practical Labs:</b> Hands-on with RHEL environments.
          </li>
          <li>
            <i className="fa-solid fa-angles-right text-danger me-2" />
            <b>Flexible Scheduling:</b> Fit into your Pune routine.
          </li>
          <li>
            <i className="fa-solid fa-angles-right text-danger me-2" />
            <b>Modern Infrastructure:</b> Access advanced labs.
          </li>
          <li>
            <i className="fa-solid fa-angles-right text-danger me-2" />
            <b>Regional Excellence:</b> Trusted across Maharashtra.
          </li>
          <li>
            <i className="fa-solid fa-angles-right text-danger me-2" />
            <b>IT Hub Advantage:</b> Network in Pune's tech scene.
          </li>
          <li>
            <i className="fa-solid fa-angles-right text-danger me-2" />
            <b>Career Ready:</b> Prepare for RHCSA certification.
          </li>
          <li>
            <i className="fa-solid fa-angles-right text-danger me-2" />
            <b>Focused Skills:</b> Master command-line and management.
          </li>
          <li>
            <i className="fa-solid fa-angles-right text-danger me-2" />
            <b>Proven Outcomes:</b> Join successful alumni.
          </li>
        </ul>
        <div className="gradient-overlay" />
      </div>
      <button
        className="toggle-button"
        onclick="toggleContent('contentContainer6', this)"
      >
        View More
      </button>
    </section>
  );
};

export default Rh124WhyChoose;
