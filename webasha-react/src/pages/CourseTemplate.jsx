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
import Rh124Instructor from "../components/redhat/rh124/Rh124Instructor";
import Rh124Bootcamp from "../components/redhat/rh124/Rh124Bootcamp";

import DynamicOverview from "../components/course/DynamicOverview";
import DynamicSyllabus from "../components/course/DynamicSyllabus";
import DynamicSection from "../components/course/DynamicSection";
import DynamicFaq from "../components/course/DynamicFaq";
import { useParams } from "react-router-dom";

function CourseTemplate(props) {
  const { slug: urlSlug } = useParams();
  const slug = props.slug || urlSlug || "rhcsa1";
  
  const [bannerData, setBannerData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/course-banners/${slug}/`)
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
        title={bannerData.heading}
        highlight="Key Features"
        description="Explore the unique benefits of our courses designed for foundational success in Pune's booming IT sector."
      />
      <WhyWebasha />
      <BatchSchedule />

      <main>
        <div className="container">
          <div className="row">
            {/* Left */}
            <div className="col-lg-8 col-12" id="sticky-start-section1">
              <section className="course-training-overview lazy-section" id="overview">
                <Rh124Slider />
              </section>
              
              {/* Dynamic Overview */}
              <DynamicOverview content={bannerData.overview_html} defaultHeading={bannerData.heading} />

              <RedhatTrack />
              
              {/* Dynamic Syllabus */}
              <DynamicSyllabus syllabusModules={bannerData.syllabus_modules} courseTitle={bannerData.heading} />
              
              <Rh124Instructor />
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
              <div id="exam-certification" />
              
              {/* Dynamic Exam Info */}
              <DynamicSection 
                id="exam-info" 
                content={bannerData.exam_info_html} 
                title={`${bannerData.heading} <span class="red-color">Details and Format</span>`}
                isCard={false}
              />
              
              {/* Dynamic Passing Criteria */}
              <DynamicSection 
                id="passing-criteria" 
                content={bannerData.passing_criteria_html} 
                title="Passing Criteria"
                isCard={false}
                customClass="mt-5"
              />
              
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
              
              {/* Dynamic FAQ */}
              <DynamicFaq faqs={bannerData.faqs} />
              
            </div>
            {/* Sidebar-2 */}
            <div className="col-lg-4 col-sm-12 col-12 sticky-sidebar1 lazy-section" id="sticky-sidebar2">
              <div className="course-subsciption sticky-sidebar-container">
                <CourseSidebar2 />
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
    </>
  );
}

export default CourseTemplate;
