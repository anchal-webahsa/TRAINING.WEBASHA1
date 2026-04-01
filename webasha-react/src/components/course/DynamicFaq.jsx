import React from "react";

const DynamicFaq = ({ faqs }) => {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="faq-section lazy-section mt-5 pt-4">
      <h2 className="heading-main text-center">
        Frequently Asked <span className="red-color">Questions</span>
      </h2>
      <div className="accordion" id="faqAccordion">
        {faqs.map((faq, index) => (
          <div className="accordion-item" key={faq.id || index}>
            <h2 className="accordion-header" id={`faq-heading-${index}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#faq-collapse-${index}`}
                aria-expanded="false"
                aria-controls={`faq-collapse-${index}`}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={`faq-collapse-${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`faq-heading-${index}`}
              data-bs-parent="#faqAccordion"
            >
              <div 
                className="accordion-body description description-html"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DynamicFaq;
