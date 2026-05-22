import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

// Components
import ExamPageHero from "../components/exams/ExamPageHero";
import ExamIntroSection from "../components/exams/ExamIntroSection";
import ExamBannerSlider from "../components/exams/ExamBannerSlider";
import ExamSidebar from "../components/exams/ExamSidebar";
import ExamOverviewSection from "../components/exams/ExamOverviewSection";
import ExamCertificationValue from "../components/exams/ExamCertificationValue";
import ExamCostSection from "../components/exams/ExamCostSection";
import ExamBenefitsOverview from "../components/exams/ExamBenefitsOverview";
import ExamInfoTable from "../components/exams/ExamInfoTable";
import ExamPassingCriteria from "../components/exams/ExamPassingCriteria";
import ExamVoucherSection from "../components/exams/ExamVoucherSection";
import ExamBootcampIntro from "../components/exams/ExamBootcampIntro";
import ExamCertificatesSection from "../components/exams/ExamCertificatesSection";
import ExamSummaryCard from "../components/exams/ExamSummaryCard";
import ExamStatsSection from "../components/exams/ExamStatsSection";
import ExamReviewsSection from "../components/exams/ExamReviewsSection";
import ExamCourseDetails from "../components/exams/ExamCourseDetails";
import ExamBenefitsSection from "../components/exams/ExamBenefitsSection";
import ExamFutureAndPass from "../components/exams/ExamFutureAndPass";
import ExamWhyChooseUs from "../components/exams/ExamWhyChooseUs";
import RelatedExamsSection from "../components/exams/RelatedExamsSection";
import ExamFAQSection from "../components/exams/ExamFAQSection";
import ExamFooterSEO from "../components/exams/ExamFooterSEO";

function ExamTemplate() {
  const { exam_code } = useParams();
  const [examData, setExamData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`${import.meta.env.VITE_API_URL}/api/exams/${exam_code}/`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setExamData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch exam:", err);
        setError(true);
        setLoading(false);
      });
  }, [exam_code]);

  if (loading) {
    return (
      <div className="text-center py-5 my-5">
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error || !examData) {
    return (
      <div className="text-center my-5 py-5">
        <h2 className="heading-main">Exam <span className="red-color">Not Found</span></h2>
        <p className="description">
          The exam data for '{exam_code}' could not be located.
        </p>
        <Link to="/exams" className="btn btn-danger mt-3">Back to All Exams</Link>
      </div>
    );
  }

  const cleanTitle = (examData.title.split(' | ')[0] || examData.title).replace(/^Pass\s+/i, '');
  const displayCode = (examData.exam_code || "").toUpperCase();

  const infoTableData = {
    name: examData.title,
    code: displayCode,
    duration: examData.exam_duration,
    questions: examData.number_of_questions,
    fee: examData.exam_fee,
    whatsappLink: `https://wa.me/918010911256?text=I'm interested in ${displayCode} Exam`,
    validity: examData.validity,
    format: examData.exam_format_table,
    passingScore: examData.passing_score,
    eligibility: examData.eligibility,
    languages: examData.exam_languages,
    mode: examData.preparation_mode,
    lastUpdate: examData.last_update_date,
    price: examData.price,
    originalPrice: examData.original_price
  };

  return (
    <div className="exam-detail-page bg-white">
      <title>{examData.title}</title>
      
      <ExamPageHero title={examData.title} />

      <main className="py-5">
        <div className="container">
          {/* Top Intro Section */}
          <ExamIntroSection 
            examName={cleanTitle}
            rating={examData.review_score || "4.9"}
            reviewCount={examData.review_count || "49765"}
          />

          <div className="row mt-4">
            {/* Left Content Area */}
            <div className="col-lg-8">
              
              {/* Black Banner Slider */}
              <ExamBannerSlider examCode={displayCode} />

              {/* Merged Section 1 & 2: Overview & What is Certification */}
              <div className="content-section bg-white border rounded-4 p-4 p-md-5 shadow-sm mb-5">
                <ExamOverviewSection 
                  cleanTitle={cleanTitle} 
                  location={examData.location} 
                  overviewHtml={examData.overview_html} 
                />

                <ExamCertificationValue 
                  cleanTitle={cleanTitle} 
                  certificationValueHtml={examData.certification_value_html} 
                />
              </div>

              {/* Section 3: Cost Section */}
              <ExamCostSection 
                cleanTitle={cleanTitle} 
                location={examData.location} 
                careerOpportunitiesHtml={examData.career_opportunities_html} 
              />

              {/* Section 4: Benefits Overview */}
              <ExamBenefitsOverview 
                cleanTitle={cleanTitle} 
                benefitsHtml={examData.benefits_html} 
              />

              {/* Section 5: Attribute Table */}
              <ExamInfoTable data={infoTableData} />

              {/* Section 6: Passing Criteria */}
              <ExamPassingCriteria 
                cleanTitle={cleanTitle} 
                objectivesHtml={examData.objectives_html} 
                whatsappLink={infoTableData.whatsappLink} 
              />

              {/* Section 7: Voucher Section */}
              {examData.voucher_content !== false && (
                <ExamVoucherSection examName={cleanTitle} />
              )}

              {/* Section 8: Bootcamp Intro */}
              <ExamBootcampIntro 
                cleanTitle={cleanTitle} 
                location={examData.location} 
                displayCode={displayCode} 
              />

              {/* Section 9: Recent Certified Candidates */}
              <ExamCertificatesSection 
                examName={cleanTitle} 
                certificates={examData.certificates} 
              />

              {/* Section 10: Bootcamp Summary Card */}
              <h2 className="fw-bold mb-4 text-start" style={{ color: '#0f172a' }}>
                {cleanTitle} ({displayCode}) <span className="text-danger">Certification Bootcamp</span>
              </h2>
              <ExamSummaryCard data={{
                name: cleanTitle,
                code: displayCode,
                price: examData.discounted_price || "199",
                originalPrice: examData.actual_price || "499",
                lastUpdate: examData.updated_at ? new Date(examData.updated_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : "APR 17, 2026"
              }} />

              {/* Section 11: Stats & Results */}
              <ExamStatsSection 
                examName={cleanTitle}
                examCode={displayCode}
                passedCount={examData.stat_customers_passed || "13+"}
                averageScore={examData.stat_average_score || "94%"}
                similarity={examData.stat_similar_questions || "92%"}
              />

              {/* Section 12: Testimonials/Reviews */}
              <ExamReviewsSection 
                examName={cleanTitle} 
                examCode={displayCode} 
                reviews={examData.reviews} 
              />

              {/* Section 13: Course Details and Syllabus */}
              <ExamCourseDetails examName={cleanTitle} />

              {/* Section 14: Career Benefits & Salary */}
              <ExamBenefitsSection examName={cleanTitle} examCode={displayCode} />

              {/* Section 15: Future and How to Pass */}
              <ExamFutureAndPass examName={cleanTitle} examCode={displayCode} />

              {/* Section 16: Why Choose Us */}
              <ExamWhyChooseUs examName={cleanTitle} examCode={displayCode} />

              {/* Section 17: Related Exams List */}
              <RelatedExamsSection />

              {/* FAQs Section */}
              <ExamFAQSection examName={cleanTitle} examCode={displayCode} faqs={examData.faqs} />

              {/* Section 18: SEO Footer */}
              <ExamFooterSEO examName={cleanTitle} examCode={displayCode} />
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="sticky-top" style={{ top: '100px' }}>
                <ExamSidebar data={infoTableData} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ExamTemplate;
