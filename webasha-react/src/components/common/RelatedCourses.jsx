import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchData, MEDIA_BASE_URL } from "../../api/config";

const defaultCourses = [
  {
    title: "RHCSA Training",
    short_description: "Master Red Hat Enterprise Linux administration.",
    thumbnail: "assets/img/course/rhcsa.webp",
    student_count: "5,000+",
    rating: "4.9",
    slug: "rhcsa"
  },
  {
    title: "AWS Certified Solutions Architect",
    short_description: "Learn cloud computing with AWS.",
    thumbnail: "assets/img/course/aws.webp",
    student_count: "3,500+",
    rating: "4.8",
    slug: "aws"
  },
  {
    title: "Ethical Hacking (CEH v13)",
    short_description: "Master the art of ethical hacking.",
    thumbnail: "assets/img/course/ceh.webp",
    student_count: "4,200+",
    rating: "4.9",
    slug: "ceh-v13"
  },
  {
    title: "DevOps Course",
    short_description: "Bridge the gap between dev and ops.",
    thumbnail: "assets/img/course/devops.webp",
    student_count: "2,800+",
    rating: "4.7",
    slug: "devops"
  }
];

const RelatedCourses = ({ identifier = "related_courses" }) => {
  const [courses, setCourses] = useState([]);
  const [section, setSection] = useState({
    badge: "Popular Courses",
    title: 'Popular Training & <span class="red-color">Certification Courses</span>',
    description: "Find additional courses to boost your career and skills.",
    button_text: "Explore More",
    view_all_text: "View All",
    view_all_link: "/all-courses"
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCourses = async () => {
      try {
        const sectionData = await fetchData(`sections/${identifier}/`).catch(() => null);

        if (sectionData && sectionData.is_active) {
          // Use curated courses if available, otherwise fetch all active courses
          if (sectionData.curated_courses && sectionData.curated_courses.length > 0) {
            setCourses(sectionData.curated_courses);
          } else {
            const courseData = await fetchData("courses/");
            setCourses(courseData && courseData.length > 0 ? courseData : defaultCourses);
          }

          let processedTitle = sectionData.title;
          if (sectionData.highlight_text && processedTitle.includes(sectionData.highlight_text)) {
            processedTitle = processedTitle.replace(
              sectionData.highlight_text,
              `<span class="red-color">${sectionData.highlight_text}</span>`
            );
          }

          setSection({
            badge: sectionData.badge || "Popular Courses",
            title: processedTitle,
            description: sectionData.description || "Find additional courses to boost your career and skills.",
            button_text: sectionData.button_text || "Explore More",
            view_all_text: sectionData.view_all_text || "View All",
            view_all_link: sectionData.view_all_link || "/all-courses"
          });
        } else {
          const courseData = await fetchData("courses/");
          setCourses(courseData && courseData.length > 0 ? courseData : defaultCourses);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setCourses(defaultCourses);
      } finally {
        setLoading(false);
      }
    };
    getCourses();
  }, [identifier]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 900, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  if (loading) return null;

  return (
    <section className="course-related-courses lazy-section visible">
      {/* ── Section Header ── */}
      <div className="section-header text-center mb-4 mt-4">
        <span className="section-badge">{section.badge}</span>
        <h2 className="heading-main-1 text-center" dangerouslySetInnerHTML={{ __html: section.title }} />
        <p className="desc text-center">
          {section.description}
        </p>
      </div>

      {/* ── Slider ── */}
      <div className="container">
        <div className="course-discover-profile-slider slider-arrows-cs">
          <Slider {...settings}>
            {courses.map((course, i) => (
              <div className="items" key={i}>
                <div className="card card-hover h-100 d-flex flex-column">
                  {/* Image — */}
                  <div className="image-wrapper" style={{ height: '200px', overflow: 'hidden' }}>
                    <img
                      src={course.thumbnail ? (course.thumbnail.startsWith('http') || course.thumbnail.startsWith('assets') ? course.thumbnail : `${MEDIA_BASE_URL}${course.thumbnail}`) : "assets/img/course/default.webp"}
                      className="card-img-top w-100 h-100"
                      style={{ objectFit: 'cover' }}
                      alt={course.title}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  {/* Card Inner — */}
                  <div className="card-inner d-flex flex-column flex-grow-1 p-3">
                    <div className="card-wraper mb-2">
                      <h3 className="card-title text-start fs-6 fw-bold m-0" dangerouslySetInnerHTML={{ __html: course.title }} style={{ fontSize: '1.1rem' }} />
                    </div>

                    <p
                      className="description mb-3 text-start text-muted flex-grow-1" style={{ fontSize: '0.9rem', lineHeight: '1.4' }}
                      dangerouslySetInnerHTML={{ __html: course.short_description || "Short description placeholder text goes here to describe the course contents." }}
                    />

                    {/* Footer — students + rating  */}
                    <div className="d-flex justify-content-between align-items-center mb-3 text-muted" style={{ fontSize: '0.85rem' }}>
                      <span className="d-flex align-items-center">
                        <i className="fa-solid fa-user-group me-2" />
                        {course.student_count || "1,000+"} students
                      </span>
                      <span className="d-flex align-items-center fw-bold text-dark">
                        <i className="fa-solid fa-star text-warning me-1" />
                        {course.rating || "4.8"}
                      </span>
                    </div>

                    {/* CTA */}
                    <div className="button-group mt-auto w-100">
                      <a
                        href={`/courses/${course.slug}`}
                        className="btn btn-outline-primary w-100 rounded-pill"
                        style={{ padding: '8px 0', borderColor: '#e60000', color: '#e60000' }}
                        aria-label="Learn More"
                      >
                        {section.button_text} <i className="fa-solid fa-arrow-right ms-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="text-center mt-4">
        <a href={section.view_all_link} className="btn btn-width btn-primary text-decoration-none mx-auto">
          {section.view_all_text}
        </a>
      </div>
    </section>
  );
};

export default RelatedCourses;