import React from "react";

const CourseExamTable = ({ bannerData }) => {
  // Only render if at least one field has data
  if (
    !bannerData.exam_detail_name &&
    !bannerData.exam_detail_duration &&
    !bannerData.exam_detail_questions
  ) {
    return null;
  }

  const headingPrefix = bannerData.exam_detail_heading_prefix || "Exam";

  return (
    <section className="mt-5" id="exam-info">
      <h2 className="heading-main text-center mb-4">
        {headingPrefix} <span className="red-color">Details and Format</span>
      </h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="bg-danger text-white">
            <tr>
              <th className="bg-danger text-white border-white">Attribute</th>
              <th className="bg-danger text-white border-white">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="fw-bold text-muted">Exam Name</td>
              <td>{bannerData.exam_detail_name}</td>
            </tr>
            <tr>
              <td className="fw-bold text-muted">Exam Duration</td>
              <td>{bannerData.exam_detail_duration}</td>
            </tr>
            <tr>
              <td className="fw-bold text-muted">Number of Questions</td>
              <td>{bannerData.exam_detail_questions}</td>
            </tr>
            <tr>
              <td className="fw-bold text-muted">Exam Fee</td>
              <td>{bannerData.exam_detail_fee}</td>
            </tr>
            <tr>
              <td className="fw-bold text-muted">Validity</td>
              <td>{bannerData.exam_detail_validity}</td>
            </tr>
            <tr>
              <td className="fw-bold text-muted">Exam Code</td>
              <td>{bannerData.exam_detail_code}</td>
            </tr>
            <tr>
              <td className="fw-bold text-muted">Exam Format</td>
              <td>{bannerData.exam_detail_format}</td>
            </tr>
            <tr>
              <td className="fw-bold text-muted">Passing Score</td>
              <td>{bannerData.exam_detail_passing_score}</td>
            </tr>
            <tr>
              <td className="fw-bold text-muted">Eligibility / Prerequisite</td>
              <td>{bannerData.exam_detail_eligibility}</td>
            </tr>
            <tr>
              <td className="fw-bold text-muted">Exam Languages</td>
              <td>{bannerData.exam_detail_languages}</td>
            </tr>
            <tr>
              <td className="fw-bold text-muted">Exam Mode</td>
              <td>{bannerData.exam_detail_mode}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default CourseExamTable;
