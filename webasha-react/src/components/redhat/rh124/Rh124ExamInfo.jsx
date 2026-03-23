import React from "react";

const Rh124ExamInfo = () => {
  return (
    <section className="course-exam-information lazy-section">
      <h2 className="heading-main text-center">
        RHCSA Exam <span className="red-color">Details and Format</span>
      </h2>
      <div className="table-responsive custom-table mb-4">
        <table className="table table-bordered align-middle">
          <thead className="table-light">
            <tr>
              <th scope="col" className="subs-title">
                Attribute
              </th>
              <th scope="col" className="subs-title">
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Exam Name</strong>
              </td>
              <td>Red Hat Certified System Administrator (RHCSA)</td>
            </tr>
            <tr>
              <td>
                <strong>Exam Duration</strong>
              </td>
              <td>180 Minutes</td>
            </tr>
            <tr>
              <td>
                <strong>Number of Questions</strong>
              </td>
              <td>Performance-based tasks</td>
            </tr>
            <tr>
              <td>
                <strong>Exam Fee</strong>
              </td>
              <td>Varies (approx ₹20,000 in India)</td>
            </tr>
            <tr>
              <td>
                <strong>Validity</strong>
              </td>
              <td>3 Years</td>
            </tr>
            <tr>
              <td>
                <strong>Exam Code</strong>
              </td>
              <td>EX200</td>
            </tr>
            <tr>
              <td>
                <strong>Exam Format</strong>
              </td>
              <td>Hands-On Lab</td>
            </tr>
            <tr>
              <td>
                <strong>Passing Score</strong>
              </td>
              <td>210 out of 300</td>
            </tr>
            <tr>
              <td>
                <strong>Eligibility / Prerequisite</strong>
              </td>
              <td>None, RH124/RH134 recommended</td>
            </tr>
            <tr>
              <td>
                <strong>Exam Languages</strong>
              </td>
              <td>English</td>
            </tr>
            <tr>
              <td>
                <strong>Exam Mode</strong>
              </td>
              <td>In-Person/Remote Proctor</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Rh124ExamInfo;
