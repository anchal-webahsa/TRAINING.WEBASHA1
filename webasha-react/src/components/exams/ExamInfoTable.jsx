import React from 'react';

const ExamInfoTable = ({ data }) => {
  return (
    <section className="exam-info-table-section mb-5">
      <div className="table-responsive bg-white border rounded-4 shadow-sm overflow-hidden">
        <table className="table table-borderless align-middle mb-0">
          <thead>
            <tr className="bg-danger text-white">
              <th scope="col" className="ps-4 py-3 fw-bold" style={{ width: '35%' }}>Attribute</th>
              <th scope="col" className="ps-4 py-3 fw-bold">Details</th>
            </tr>
          </thead>
          <tbody>
            {[
              { label: 'Exam Name', value: data.name },
              { label: 'Exam Duration', value: data.duration },
              { label: 'Number of Questions', value: data.questions },
              { label: 'Exam Fee', value: (
                <div className="d-flex align-items-center flex-wrap gap-2">
                  <span>{data.fee}</span>
                  {data.whatsappLink && (
                    <a
                      href={data.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-success btn-sm px-3 fw-bold d-flex align-items-center"
                      style={{ backgroundColor: '#128c7e', border: 'none' }}
                    >
                      <i className="fab fa-whatsapp me-2"></i> For Discount
                    </a>
                  )}
                </div>
              )},
              { label: 'Validity', value: data.validity },
              { label: 'Exam Code', value: data.code },
              { label: 'Exam Format', value: data.format },
              { label: 'Passing Score', value: data.passingScore },
              { label: 'Eligibility / Prerequisite', value: data.eligibility },
              { label: 'Exam Languages', value: data.languages },
              { label: 'Exam Mode', value: data.mode },
            ].map((row, idx) => (
              <tr key={idx} className={idx !== 0 ? "border-top" : ""}>
                <td className="ps-4 py-3 fw-bold text-muted" style={{ fontSize: '14px' }}>{row.label}</td>
                <td className="ps-4 py-3 text-dark" style={{ fontSize: '14px' }}>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ExamInfoTable;
