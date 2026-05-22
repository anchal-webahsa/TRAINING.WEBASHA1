import React from "react";

const Rh124Faq = ({ bannerData }) => {
  return (
    <section className="course-webasha-faq lazy-section" id="faqs">
      <div className="container mt-4 mb-4">
        <div className="section-header text-center mb-4">
          <span className="section-badge">FAQs</span>
          <h2 className="heading-main-1 text-center">
            WebAsha FAQs{" "}
            <span className="red-color">(Frequently Asked Questions)</span>
          </h2>
        </div>
        <div className="all-theme-accordion" id="content">
          <div className="accordion accordion-flush" id="coursefaqAccordionFlush">
            {bannerData && bannerData.faqs && bannerData.faqs.length > 0 ? (
              bannerData.faqs.map((faq, index) => (
                <div className="accordion-item" key={faq.id || index}>
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${index === 0 ? '' : 'collapsed'}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#flush-coursefaq-dynamic${index}`}
                      aria-expanded={index === 0 ? "true" : "false"}
                      aria-controls={`flush-coursefaq-dynamic${index}`}
                    >
                      {faq.question}
                    </button>
                  </h2>
                  <div
                    id={`flush-coursefaq-dynamic${index}`}
                    className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                    data-bs-parent="#coursefaqAccordionFlush"
                  >
                    <div className="accordion-body pt-0">
                      <div className="description mb-0 text-break" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <>
            {/* FAQ 1 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-coursefaq1"
                  aria-expanded="false"
                  aria-controls="flush-coursefaq1"
                >
                  What is included in the RH124 v10 course?
                </button>
              </h2>
              <div
                id="flush-coursefaq1"
                className="accordion-collapse collapse show"
                data-bs-parent="#coursefaqAccordionFlush"
              >
                <div className="accordion-body pt-0">
                  <p className="description mb-0">
                    The RH124 v10 course provides foundational Linux admin
                    training with hands-on labs, covering installation,
                    command-line, users, files, processes, services, networking,
                    and more for RHEL.
                  </p>
                </div>
              </div>
            </div>
            {/* FAQ 2 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-coursefaq2"
                  aria-expanded="false"
                  aria-controls="flush-coursefaq2"
                >
                  Who can enroll in RH124 v10 training?
                </button>
              </h2>
              <div
                id="flush-coursefaq2"
                className="accordion-collapse collapse"
                data-bs-parent="#coursefaqAccordionFlush"
              >
                <div className="accordion-body pt-0">
                  <p className="description mb-0">
                    New Linux system administrators; no prerequisites required.
                  </p>
                </div>
              </div>
            </div>
            {/* FAQ 3 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-coursefaq3"
                  aria-expanded="false"
                  aria-controls="flush-coursefaq3"
                >
                  How long is the RHCSA certification valid?
                </button>
              </h2>
              <div
                id="flush-coursefaq3"
                className="accordion-collapse collapse"
                data-bs-parent="#coursefaqAccordionFlush"
              >
                <div className="accordion-body pt-0">
                  <p className="description mb-0">
                    The RHCSA certification is valid for 3 years, with renewal
                    options.
                  </p>
                </div>
              </div>
            </div>
            {/* FAQ 4 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-coursefaq4"
                  aria-expanded="false"
                  aria-controls="flush-coursefaq4"
                >
                  What is the format of the RHCSA exam?
                </button>
              </h2>
              <div
                id="flush-coursefaq4"
                className="accordion-collapse collapse"
                data-bs-parent="#coursefaqAccordionFlush"
              >
                <div className="accordion-body pt-0">
                  <p className="description mb-0">
                    Performance-based hands-on lab tasks in 180 minutes.
                  </p>
                </div>
              </div>
            </div>
            {/* FAQ 5 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-coursefaq5"
                  aria-expanded="false"
                  aria-controls="flush-coursefaq5"
                >
                  What is the passing score for RHCSA?
                </button>
              </h2>
              <div
                id="flush-coursefaq5"
                className="accordion-collapse collapse"
                data-bs-parent="#coursefaqAccordionFlush"
              >
                <div className="accordion-body pt-0">
                  <p className="description mb-0">210 out of 300 points.</p>
                </div>
              </div>
            </div>
            {/* FAQ 6 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-coursefaq6"
                  aria-expanded="false"
                  aria-controls="flush-coursefaq6"
                >
                  In which languages is the RHCSA exam available?
                </button>
              </h2>
              <div
                id="flush-coursefaq6"
                className="accordion-collapse collapse"
                data-bs-parent="#coursefaqAccordionFlush"
              >
                <div className="accordion-body pt-0">
                  <p className="description mb-0">English primarily.</p>
                </div>
              </div>
            </div>
            {/* FAQ 7 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-coursefaq7"
                  aria-expanded="false"
                  aria-controls="flush-coursefaq7"
                >
                  How long does RH124 v10 training take?
                </button>
              </h2>
              <div
                id="flush-coursefaq7"
                className="accordion-collapse collapse"
                data-bs-parent="#coursefaqAccordionFlush"
              >
                <div className="accordion-body pt-0">
                  <p className="description mb-0">
                    Typically 5 days for classroom/virtual sessions.
                  </p>
                </div>
              </div>
            </div>
            {/* FAQ 8 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-coursefaq8"
                  aria-expanded="false"
                  aria-controls="flush-coursefaq8"
                >
                  What is the cost of the RHCSA certification?
                </button>
              </h2>
              <div
                id="flush-coursefaq8"
                className="accordion-collapse collapse"
                data-bs-parent="#coursefaqAccordionFlush"
              >
                <div className="accordion-body pt-0">
                  <p className="description mb-0">
                    Exam fee approx ₹20,000 in India; training costs separate.
                  </p>
                </div>
              </div>
            </div>
            {/* FAQ 9 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-coursefaq9"
                  aria-expanded="false"
                  aria-controls="flush-coursefaq9"
                >
                  What’s the difference between online and in-person RH124 v10
                  training?
                </button>
              </h2>
              <div
                id="flush-coursefaq9"
                className="accordion-collapse collapse"
                data-bs-parent="#coursefaqAccordionFlush"
              >
                <div className="accordion-body pt-0">
                  <p className="description mb-0">
                    Online offers virtual labs; in-person provides direct
                    interaction in Pune.
                  </p>
                </div>
              </div>
            </div>
            {/* FAQ 10 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-coursefaq10"
                  aria-expanded="false"
                  aria-controls="flush-coursefaq10"
                >
                  Are there any prerequisites for the RHCSA exam?
                </button>
              </h2>
              <div
                id="flush-coursefaq10"
                className="accordion-collapse collapse"
                data-bs-parent="#coursefaqAccordionFlush"
              >
                <div className="accordion-body pt-0">
                  <p className="description mb-0">
                    None, but RH124 and RH134 recommended.
                  </p>
                </div>
              </div>
            </div>
            {/* FAQ 11 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-coursefaq11"
                  aria-expanded="false"
                  aria-controls="flush-coursefaq11"
                >
                  How can I recertify for RHCSA?
                </button>
              </h2>
              <div
                id="flush-coursefaq11"
                className="accordion-collapse collapse"
                data-bs-parent="#coursefaqAccordionFlush"
              >
                <div className="accordion-body pt-0">
                  <p className="description mb-0">
                    Retake exam or earn credits every 3 years.
                  </p>
                </div>
              </div>
            </div>
            {/* FAQ 12 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-coursefaq12"
                  aria-expanded="false"
                  aria-controls="flush-coursefaq12"
                >
                  What job roles can I pursue with RHCSA?
                </button>
              </h2>
              <div
                id="flush-coursefaq12"
                className="accordion-collapse collapse"
                data-bs-parent="#coursefaqAccordionFlush"
              >
                <div className="accordion-body pt-0">
                  <p className="description mb-0">
                    Linux Admin, SysAdmin, with salaries ₹4-12 LPA.
                  </p>
                </div>
              </div>
            </div>
            {/* FAQ 13 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-coursefaq13"
                  aria-expanded="false"
                  aria-controls="flush-coursefaq13"
                >
                  Where is RH124 v10 training offered?
                </button>
              </h2>
              <div
                id="flush-coursefaq13"
                className="accordion-collapse collapse"
                data-bs-parent="#coursefaqAccordionFlush"
              >
                <div className="accordion-body pt-0">
                  <p className="description mb-0">
                    Online and in-person in Pune at WebAsha Technologies.
                  </p>
                </div>
              </div>
            </div>
            {/* FAQ 14 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-coursefaq14"
                  aria-expanded="false"
                  aria-controls="flush-coursefaq14"
                >
                  What study materials are provided for RH124 v10?
                </button>
              </h2>
              <div
                id="flush-coursefaq14"
                className="accordion-collapse collapse"
                data-bs-parent="#coursefaqAccordionFlush"
              >
                <div className="accordion-body pt-0">
                  <p className="description mb-0">
                    Red Hat e-books, lab guides, and online resources.
                  </p>
                </div>
              </div>
            </div>
            {/* FAQ 15 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-coursefaq15"
                  aria-expanded="false"
                  aria-controls="flush-coursefaq15"
                >
                  What is the policy for retaking the RHCSA exam?
                </button>
              </h2>
              <div
                id="flush-coursefaq15"
                className="accordion-collapse collapse"
                data-bs-parent="#coursefaqAccordionFlush"
              >
                <div className="accordion-body pt-0">
                  <p className="description mb-0">
                    Retakes allowed with fees, no waiting period for first retake.
                  </p>
                </div>
              </div>
            </div>
            {/* FAQ 16 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-coursefaq16"
                  aria-expanded="false"
                  aria-controls="flush-coursefaq16"
                >
                  Does RHCSA offer career support?
                </button>
              </h2>
              <div
                id="flush-coursefaq16"
                className="accordion-collapse collapse"
                data-bs-parent="#coursefaqAccordionFlush"
              >
                <div className="accordion-body pt-0">
                  <p className="description mb-0">
                    Yes, resume building, interview prep, job guidance.
                  </p>
                </div>
              </div>
            </div>
            {/* FAQ 17 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-coursefaq17"
                  aria-expanded="false"
                  aria-controls="flush-coursefaq17"
                >
                  How does RH124 v10 incorporate practical skills?
                </button>
              </h2>
              <div
                id="flush-coursefaq17"
                className="accordion-collapse collapse"
                data-bs-parent="#coursefaqAccordionFlush"
              >
                <div className="accordion-body pt-0">
                  <p className="description mb-0">
                    Through extensive labs simulating real admin scenarios.
                  </p>
                </div>
              </div>
            </div>
            {/* FAQ 18 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-coursefaq18"
                  aria-expanded="false"
                  aria-controls="flush-coursefaq18"
                >
                  Is RHCSA accredited?
                </button>
              </h2>
              <div
                id="flush-coursefaq18"
                className="accordion-collapse collapse"
                data-bs-parent="#coursefaqAccordionFlush"
              >
                <div className="accordion-body pt-0">
                  <p className="description mb-0">
                    Yes, by Red Hat, industry-standard for Linux.
                  </p>
                </div>
              </div>
            </div>
            {/* FAQ 19 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-coursefaq19"
                  aria-expanded="false"
                  aria-controls="flush-coursefaq19"
                >
                  Are there group discounts for RH124 v10 training?
                </button>
              </h2>
              <div
                id="flush-coursefaq19"
                className="accordion-collapse collapse"
                data-bs-parent="#coursefaqAccordionFlush"
              >
                <div className="accordion-body pt-0">
                  <p className="description mb-0">
                    Yes, for groups of 3+; contact WebAsha for details.
                  </p>
                </div>
              </div>
            </div>
            {/* FAQ 20 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-coursefaq20"
                  aria-expanded="false"
                  aria-controls="flush-coursefaq20"
                >
                  What support is offered after RH124 v10 training?
                </button>
              </h2>
              <div
                id="flush-coursefaq20"
                className="accordion-collapse collapse"
                data-bs-parent="#coursefaqAccordionFlush"
              >
                <div className="accordion-body pt-0">
                  <p className="description mb-0">
                    Lifetime updates, community access, and mentorship.
                  </p>
                </div>
              </div>
            </div>
            </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rh124Faq;
