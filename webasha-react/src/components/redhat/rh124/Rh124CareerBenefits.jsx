import React from "react";

const Rh124CareerBenefits = () => {
  return (
    <section className="contentcard lazy-section">
      <div className="content-container" id="contentContainer5">
        <h2 className="heading-main text-center">
          Career Benefits of <span className="red-color">RHCSA</span>
        </h2>
        <p className="description text-center">
          In 2025's cloud-driven IT world, RHCSA training provides
          essential Linux skills for career launch.
        </p>
        <ul>
          <li>
            <i className="fa-solid fa-angles-right text-danger me-2" />
            <b>Strong Demand:</b> Manage systems with proven Red Hat
            knowledge.
          </li>
          <li>
            <i className="fa-solid fa-angles-right text-danger me-2" />
            <b>Attractive Salaries:</b> Earn competitive pay in admin
            roles.
          </li>
          <li>
            <i className="fa-solid fa-angles-right text-danger me-2" />
            <b>Multiple Paths:</b> Progress to DevOps or cloud admin.
          </li>
          <li>
            <i className="fa-solid fa-angles-right text-danger me-2" />
            <b>Global Opportunities:</b> Use cert for international
            positions.
          </li>
          <li>
            <i className="fa-solid fa-angles-right text-danger me-2" />
            <b>Immediate Use:</b> Apply skills in real setups quickly.
          </li>
          <li>
            <i className="fa-solid fa-angles-right text-danger me-2" />
            <b>Wide Impact:</b> Cover installation, networking, security.
          </li>
          <li>
            <i className="fa-solid fa-angles-right text-danger me-2" />
            <b>Career Growth:</b> Advance to senior admin levels.
          </li>
          <li>
            <i className="fa-solid fa-angles-right text-danger me-2" />
            <b>Freelance Options:</b> Offer Linux support services.
          </li>
          <li>
            <i className="fa-solid fa-angles-right text-danger me-2" />
            <b>Innovation Scope:</b> Build secure IT infrastructures.
          </li>
          <li>
            <i className="fa-solid fa-angles-right text-danger me-2" />
            <b>Future-Proof:</b> Adapt to evolving Linux technologies.
          </li>
        </ul>
        <div className="gradient-overlay" />
      </div>
      <button
        className="toggle-button"
        onclick="toggleContent('contentContainer5', this)"
      >
        View More
      </button>
    </section>
  );
};

export default Rh124CareerBenefits;
