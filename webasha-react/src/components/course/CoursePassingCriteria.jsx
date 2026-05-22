import React from "react";

const CoursePassingCriteria = ({ bannerData }) => {
  if (!bannerData.passing_criteria_heading && !bannerData.passing_criteria_text) {
    return null;
  }

  return (
    <section className="mt-5 text-center" id="passing-criteria">
      <h3 className="fw-bold red-color mb-3">{bannerData.passing_criteria_heading}</h3>
      <div 
        className="text-muted" 
        style={{ lineHeight: "1.8", fontSize: "1.05rem" }}
        dangerouslySetInnerHTML={{ __html: bannerData.passing_criteria_text }}
      />

      <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
        {bannerData.whatsapp_link && (
          <a
            href={bannerData.whatsapp_link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success d-inline-flex align-items-center rounded shadow-sm px-4 py-2"
            style={{ backgroundColor: "#1fa463", borderColor: "#1fa463", fontWeight: "600" }}
          >
            <i className="fab fa-whatsapp me-2 fs-5"></i> WhatsApp
          </a>
        )}
        
        {bannerData.call_number && (
          <a
            href={`tel:${bannerData.call_number.replace(/\s+/g, '')}`}
            className="btn btn-outline-danger d-inline-flex align-items-center rounded shadow-sm px-4 py-2"
            style={{ fontWeight: "600", backgroundColor: "#fff" }}
          >
            <i className="fas fa-phone-alt me-2"></i> {bannerData.call_number}
          </a>
        )}
      </div>
    </section>
  );
};

export default CoursePassingCriteria;
