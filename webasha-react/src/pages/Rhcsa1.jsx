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
import Rh124Overview from "../components/redhat/rh124/Rh124Overview";
import Rh124Syllabus from "../components/redhat/rh124/Rh124Syllabus";
import Rh124Instructor from "../components/redhat/rh124/Rh124Instructor";
import Rh124Bootcamp from "../components/redhat/rh124/Rh124Bootcamp";
import Rh124ExamInfo from "../components/redhat/rh124/Rh124ExamInfo";
import Rh124PassingCriteria from "../components/redhat/rh124/Rh124PassingCriteria";
import Rh124Salary from "../components/redhat/rh124/Rh124Salary";
import Rh124CareerBenefits from "../components/redhat/rh124/Rh124CareerBenefits";
import Rh124WhyChoose from "../components/redhat/rh124/Rh124WhyChoose";
import Rh124Faq from "../components/redhat/rh124/Rh124Faq";

function Rhcsa() {
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/course-banners/rhcsa1/")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        if (data.length > 0) {
          setBannerData(data[0]);
        } else {
          setBannerData(data);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch course banner:", err);
      });
  }, []);

  return (
    <>
      <title>
        {bannerData ? bannerData.meta_title : "RH124 v10 Training in Pune | Red Hat Certified System Administrator Course - WebAsha Technologies"}
      </title>
      <meta
        name="description"
        content={bannerData ? bannerData.meta_description : "Join WebAsha Technologies for RH124 v10 Training in Pune. Master foundational Linux administration skills with hands-on labs, expert mentorship, and preparation for Red Hat Certified System Administrator certification in 2025."}
      />
      <meta
        name="keywords"
        content={bannerData ? bannerData.meta_keywords : "RH124 Training Pune, Red Hat Certified System Administrator, Linux Administration Course, RH124 v10 Exam Prep, Red Hat Certification Pune, System Administration Fundamentals"}
      />
      <meta name="author" content="WebAsha Technologies" />
      <meta
        property="og:title"
        content="RH124 v10 Training in Pune | Red Hat Certified System Administrator Course - WebAsha Technologies"
      />
      <meta
        property="og:description"
        content="Launch your Linux administration career with WebAsha Technologies’ RH124 v10 Training in Pune. Gain core skills through practical labs and expert guidance for Red Hat certification success."
      />
      <meta
        property="og:image"
        content="/assets/img/course/redhat/rh124.webp"
      />
      <meta
        property="og:image:alt"
        content="RH124 v10 Training - Red Hat Certified System Administrator Course in Pune"
      />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="RH124 v10 Training in Pune | Red Hat Certified System Administrator Course - WebAsha Technologies"
      />
      <meta
        name="twitter:description"
        content="Begin your Red Hat certification journey with WebAsha Technologies’ RH124 v10 Training in Pune. Hands-on training and exam prep for a thriving career in 2025."
      />
      <meta
        name="twitter:image"
        content="/assets/img/course/redhat/rh124.webp"
      />

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
            title="RH124 v10 Course"
            highlight="Training Key Features"
            description="Explore the unique benefits of our RH124 v10 courses designed for foundational success in Pune's booming IT sector."
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
                  <Rh124Overview />

                  <RedhatTrack />
                  <Rh124Syllabus />
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
                  <Rh124ExamInfo />
                  <Rh124PassingCriteria />
                  <div id="placement-reviews" />
                  <Rh124Salary />
                  <Rh124CareerBenefits />
                  <Rh124WhyChoose />
                  <Rh124Faq />
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
          <RelatedCourses identifier="rh124_related" />

      <section className="other-course-kubernetes lazy-section">
        <div className="container">
          <div className="course-kubernetes-wraper">
            <div className="course-kubernetes">
              <h2 className="heading-main text-center">
                Browse RHCSA related Resources
              </h2>
              <RelatedResources />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Rhcsa;
