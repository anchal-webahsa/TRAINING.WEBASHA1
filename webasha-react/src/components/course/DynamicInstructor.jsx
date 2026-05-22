import React from "react";

const DynamicInstructor = ({ heading, description, contentHtml }) => {
  const hasContent = !!contentHtml;

  const formatHeading = (text) => {
    if (!text) return 'Meet Our <span class="red-color">Expert Trainers</span>';
    if (text.includes("class=")) return text; // already has span classes
    return text.replace(/(Expert Trainers|Expert Instructors|Trainers|Instructors)/gi, (match) => `<span class="red-color">${match}</span>`);
  };

  return (
    <section className="contentcard lazy-section" id="our-instructor">
      <div className="instructor-content-wrap">
        <h2 className="heading-main text-center mb-3">
          <span dangerouslySetInnerHTML={{ __html: formatHeading(heading) }} />
        </h2>
        
        {description ? (
          <div 
            className="description text-center mb-4 description-html"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        ) : (
          <p className="description text-center mb-4">
            At WebAsha Training Institute, our instructors are certified experts dedicated to providing practical, real-world IT education.
          </p>
        )}

        {hasContent ? (
          <div 
            className="description-html description"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        ) : (
          <ul>
            <li>
              <i className="fa-solid fa-angles-right text-danger me-2" />
              <b>Simplified Guidance:</b> Break down Linux concepts for beginners.
            </li>
            <li>
              <i className="fa-solid fa-angles-right text-danger me-2" />
              <b>Hands-On Practice:</b> Engage in labs for command-line and admin tasks.
            </li>
            <li>
              <i className="fa-solid fa-angles-right text-danger me-2" />
              <b>Customized Support:</b> Offer one-on-one help for your goals.
            </li>
            <li>
              <i className="fa-solid fa-angles-right text-danger me-2" />
              <b>Career and Lab Aid:</b> Assist with projects and exam prep.
            </li>
            <li>
              <i className="fa-solid fa-angles-right text-danger me-2" />
              <b>Industry Knowledge:</b> Draw from extensive Red Hat experience.
            </li>
            <li>
              <i className="fa-solid fa-angles-right text-danger me-2" />
              <b>Certified Professionals:</b> Hold RHCSA, RHCE credentials.
            </li>
            <li>
              <i className="fa-solid fa-angles-right text-danger me-2" />
              <b>Real-World Application:</b> Insights from enterprise Linux deployments.
            </li>
            <li>
              <i className="fa-solid fa-angles-right text-danger me-2" />
              <b>Training Success:</b> Over 1,000 students guided annually.
            </li>
            <li>
              <i className="fa-solid fa-angles-right text-danger me-2" />
              <b>Corporate Links:</b> Partnerships with IBM, Accenture, Wipro.
            </li>
          </ul>
        )}
      </div>
    </section>
  );
};

export default DynamicInstructor;
