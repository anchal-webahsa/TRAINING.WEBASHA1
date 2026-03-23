import React from "react";

const Rh124Salary = () => {
  return (
    <section className="contentcard lazy-section">
      <div className="content-container" id="contentContainer4">
        <h2 className="heading-main text-center">
          Job Roles and Salary Outlook After{" "}
          <span className="red-color">RHCSA</span>
        </h2>
        <p className="description text-center">
          Securing RHCSA certification opens entry to mid-level Linux
          admin roles in India's expanding IT sector for 2025.
        </p>
        <div className="table-responsive custom-table mb-4">
          <table className="table table-bordered align-middle">
            <thead className="table-light">
              <tr>
                <th scope="col" className="subs-title">
                  Job Title
                </th>
                <th scope="col" className="subs-title">
                  Primary Responsibilities
                </th>
                <th scope="col" className="subs-title">
                  Average Salary (INR)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Linux System Administrator</strong>
                </td>
                <td>Manage servers, users, and configurations.</td>
                <td>
                  Fresher: ₹4–6 LPA <br />
                  Experienced: ₹8–15 LPA{" "}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Junior SysAdmin</strong>
                </td>
                <td>Handle basic admin tasks and support.</td>
                <td>
                  Fresher: ₹3.5–5 LPA <br />
                  Experienced: ₹6–10 LPA{" "}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>DevOps Engineer Entry</strong>
                </td>
                <td>Assist in automation and infrastructure.</td>
                <td>
                  Fresher: ₹4–7 LPA <br />
                  Experienced: ₹10–18 LPA{" "}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>IT Support Specialist</strong>
                </td>
                <td>Troubleshoot Linux systems.</td>
                <td>
                  Fresher: ₹3–5 LPA <br />
                  Experienced: ₹6–12 LPA{" "}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Network Administrator</strong>
                </td>
                <td>Configure and manage networks.</td>
                <td>
                  Fresher: ₹4–6 LPA <br />
                  Experienced: ₹8–14 LPA{" "}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Cloud Admin Junior</strong>
                </td>
                <td>Manage cloud-based Linux instances.</td>
                <td>
                  Fresher: ₹5–8 LPA <br />
                  Experienced: ₹10–16 LPA{" "}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Security Admin Entry</strong>
                </td>
                <td>Implement basic security measures.</td>
                <td>
                  Fresher: ₹4–6 LPA <br />
                  Experienced: ₹8–15 LPA{" "}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Storage Administrator</strong>
                </td>
                <td>Handle file systems and storage.</td>
                <td>
                  Fresher: ₹4.5–7 LPA <br />
                  Experienced: ₹9–14 LPA{" "}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Virtualization Tech</strong>
                </td>
                <td>Manage VMs on Linux.</td>
                <td>
                  Fresher: ₹4–6 LPA <br />
                  Experienced: ₹8–13 LPA{" "}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Technical Support Engineer</strong>
                </td>
                <td>Provide Linux support services.</td>
                <td>
                  Fresher: ₹3.5–5 LPA <br />
                  Experienced: ₹7–12 LPA{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="description">
          <b>Note:</b> Salaries vary based on experience, location, and
          company; RHCSA certification significantly increases earning
          potential in 2025.
        </p>
        <p className="description">
          India's IT sector growth forecasts millions of Linux admin roles
          by 2025.
        </p>
        <div className="gradient-overlay" />
      </div>
      <button
        className="toggle-button"
        onclick="toggleContent('contentContainer4', this)"
      >
        View More
      </button>
    </section>
  );
};

export default Rh124Salary;
