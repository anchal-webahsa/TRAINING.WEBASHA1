import React, { useState, useEffect } from "react";
import BrandsSection from "../components/common/BrandsSection";
import VideoReviews from "../components/common/VideoReviews";
import TextReviews from "../components/common/TextReviews";
import PlacementRoadmap from "../components/redhat/PlacementRoadmap";
import KeyFeatures from "../components/redhat/KeyFeatures";
import WhyWebasha from "../components/redhat/WhyWebasha";
import BatchSchedule from "../components/common/BatchSchedule";
import Rh124Slider from "../components/redhat/slider/Rh124Slider";
import RedhatTrack from "../components/redhat/RedhatTrack";
import CourseSidebar1 from "../components/redhat/CourseSidebar1";
import SelfAssessment from "../components/redhat/SelfAssessment";
import CourseSidebar2 from "../components/redhat/CourseSidebar2";
import CareerStraight from "../components/redhat/CareerStraight";
import Alumni from "../components/redhat/Alumni";
import RelatedCourses from "../components/redhat/RelatedCourses";
import RelatedResources from "../components/redhat/RelatedResources";

import Rh124Banner from "../components/redhat/rh124/Rh124Banner";
import Rh124StickyHeader from "../components/redhat/rh124/Rh124StickyHeader";
import DynamicInstructor from "../components/course/DynamicInstructor";
import Rh124Bootcamp from "../components/redhat/rh124/Rh124Bootcamp";

import DynamicOverview from "../components/course/DynamicOverview";
import DynamicSyllabus from "../components/course/DynamicSyllabus";
import DynamicSection from "../components/course/DynamicSection";
import CourseExamTable from "../components/course/CourseExamTable";
import CoursePassingCriteria from "../components/course/CoursePassingCriteria";
import ExamCertificatesSection from "../components/exams/ExamCertificatesSection";
import SyllabusModal from "../components/common/SyllabusModal";
import Rh124Faq from "../components/redhat/rh124/Rh124Faq";
import { useParams } from "react-router-dom";

function CourseTemplate(props) {
  const { slug: urlSlug } = useParams();
  const slug = props.slug || urlSlug || "rhcsa1";
  
  const [bannerData, setBannerData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`${import.meta.env.VITE_API_URL}/api/course-banners/${slug}/`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        // Handle array or object response based on DRF
        const bData = Array.isArray(data) ? data[0] : data;
        if (bData) {
          setBannerData(bData);
        } else {
          setError(true);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch course banner:", err);
        setError(true);
      });
  }, [slug]);

  if (error) {
    return (
      <div className="text-center my-5 py-5">
        <h2 className="heading-main">Course <span className="red-color">Not Found</span></h2>
        <p className="description">
          The course data for '{slug}' has not been set up yet. 
          Please create a Course Banner in the Django Admin dashboard with the page identifier '{slug}'.
        </p>
      </div>
    );
  }

  if (!bannerData) {
    return <div className="text-center my-5 py-5">Loading...</div>;
  }

  return (
    <>
      <title>{bannerData.meta_title || bannerData.heading}</title>
      <meta name="description" content={bannerData.meta_description || "WebAsha Technologies Certification Training"} />
      
      <Rh124Banner bannerData={bannerData} />
      <Rh124StickyHeader />
      
      <section className="our-learners section-header text-center lazy-section">
        <BrandsSection />
      </section>

      <VideoReviews badge="Recent Placements Testimonial Lab" />
      <TextReviews />
      <PlacementRoadmap />

      <KeyFeatures
        badge="Training Key Features"
        title={bannerData.key_features_heading}
        description={bannerData.key_features_description}
        features={bannerData.key_features}
        cloudLabTitle={bannerData.cloud_lab_title}
        cloudLabImage={bannerData.cloud_lab_image}
        cloudLabImageUrl={bannerData.cloud_lab_image_url}
      />
      <WhyWebasha 
        heading={bannerData.why_choose_heading}
        description={bannerData.why_choose_description}
        comparisonRows={bannerData.comparison_rows}
      />
      <BatchSchedule slug={slug} />

      <main>
        <div className="container">
          <div className="row">
            {/* Left */}
            <div className="col-lg-8 col-12" id="sticky-start-section1">
              <section className="course-training-overview lazy-section" id="overview">
                <Rh124Slider image1={bannerData.slider_image_1} image2={bannerData.slider_image_2} />
              </section>
              
              {/* Dynamic Overview */}
              <DynamicOverview content={bannerData.overview_html} defaultHeading={bannerData.heading} />

              <RedhatTrack 
                trackImage={bannerData.training_track_image} 
                courseName={bannerData.breadcrumb_active} 
                trackTools={bannerData.track_tools} 
              />
              
              {/* Dynamic Syllabus */}
              <DynamicSyllabus 
                syllabusModules={bannerData.syllabus_modules} 
                courseTitle={bannerData.heading} 
                shortTitle={bannerData.breadcrumb_active}
                headingTop={bannerData.syllabus_heading_top}
                headingBottom={bannerData.syllabus_heading_bottom}
              />
              
              <DynamicInstructor 
                heading={bannerData.instructor_heading_top} 
                description={bannerData.instructor_description} 
                contentHtml={bannerData.instructor_html} 
              />
            </div>
            {/* Sidebar 1 */}
            <CourseSidebar1 />
          </div>
        </div>

        <section className="newsletter course-newsletter lazy-section" id="sticky-end-section1">
          <SelfAssessment />
        </section>

        <div className="container">
          <div className="row">
            {/* Main Content */}
            <div className="col-lg-8 col-sm-12" id="sticky-start-section2">
              <Rh124Bootcamp />
              
              {/* Dynamic Certificates Slider */}
              <ExamCertificatesSection 
                examName={bannerData.heading} 
                certificates={bannerData.certificates} 
              />
              
              <div id="exam-certification" />
              
              {/* Dynamic Exam Details Table */}
              <CourseExamTable bannerData={bannerData} />
              
              {/* Dynamic Passing Criteria */}
              <CoursePassingCriteria bannerData={bannerData} />
              
              <div id="placement-reviews" />
              
              {/* Dynamic Salary Info */}
              <DynamicSection 
                id="salary-info" 
                content={bannerData.salary_html} 
                title='Job Roles and Salary Outlook <span class="red-color">After Certification</span>'
                isCard={true}
              />
              
              {/* Dynamic Career Benefits */}
              <DynamicSection 
                id="career-benefits" 
                content={bannerData.career_benefits_html} 
                title='Career Benefits of <span class="red-color">Certification</span>'
                isCard={true}
              />
              
              {/* Dynamic Why Choose Us */}
              <DynamicSection 
                id="why-choose" 
                content={bannerData.why_choose_us_html} 
                title='Why Choose <span class="red-color">Us</span>'
                isCard={true}
              />
              
              
            </div>
            {/* Sidebar-2 */}
            <div className="col-lg-4 col-sm-12 col-12 sticky-sidebar1" id="sticky-sidebar2">
              <div className="course-subsciption sticky-sidebar-container">
                <CourseSidebar2 voucherOffer={bannerData.voucher_offer} />
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="career-straight lazy-section">
        <CareerStraight />
      </section>

      <Alumni />
      
      {/* We pass the slug to RelatedCourses if needed, or stick to identifier */}
      <RelatedCourses identifier={`${slug}_related`} />

      <Rh124Faq bannerData={bannerData} />

      <section className="other-course-kubernetes lazy-section">
        <div className="container">
          <div className="course-kubernetes-wraper">
            <div className="course-kubernetes">
              <h2 className="heading-main text-center">
                Browse Related Resources
              </h2>
              <RelatedResources />
            </div>
          </div>
        </div>
      </section>

      <SyllabusModal defaultCourseName={bannerData.heading} />
    </>
  );
}

export default CourseTemplate;
