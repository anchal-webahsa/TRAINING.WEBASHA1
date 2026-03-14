import { useState, useEffect } from "react";
import { fetchData, MEDIA_BASE_URL } from "../../api/config";

// SVG icons extracted once
const PeopleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="me-1">
        <path d="M16 11c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm-8 0c1.7 0 3-1.3 3-3S9.7 5 8 5 5 6.3 5 8s1.3 3 3 3zm0 2c-2.3 0-7 1.2-7 3.5V20h14v-3.5C15 14.2 10.3 13 8 13zm8 0c-.3 0-.7 0-1 .1 1.2.8 2 2.1 2 3.4V20h6v-3.5c0-2.3-4.7-3.5-7-3.5z" />
    </svg>
);

const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD700" viewBox="0 0 24 24" className="me-1">
        <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.401 8.178L12 18.897l-7.335 3.856 1.401-8.178L.132 9.21l8.2-1.192z" />
    </svg>
);

// ── Default Fallback ──
const defaultRedhatCourses = [
    {
        thumbnail: "assets/img/course/redhat/rh124.webp",
        title: "RHCSA I | RH124 | EX200",
        short_description: "Build foundational Linux administration skills with the <strong>Red Hat Certified System Administrator (RHCSA) I</strong> certification, covering essential system management tasks.",
        student_count: "1,500",
        rating: "4.9",
        slug: "rhcsa1",
    },
    {
        thumbnail: "assets/img/course/redhat/rh134.webp",
        title: "RHCSA II | RH134 | EX200",
        short_description: "Advance your Linux skills with the <strong>Red Hat Certified System Administrator (RHCSA) II</strong> certification, focusing on automation and enterprise-level administration.",
        student_count: "1,400",
        rating: "4.9",
        slug: "rhcsa2",
    },
    {
        thumbnail: "assets/img/course/redhat/rhcsa.webp",
        title: "RHCSA | EX200",
        short_description: "Master Linux system administration with the <strong>Red Hat Certified System Administrator (RHCSA)</strong> certification, covering essential skills for managing Red Hat Enterprise Linux environments.",
        student_count: "1,456",
        rating: "4.9",
        slug: "redhat-linux-rhcsa-online-training-institute-certification-exam-center",
    },
    {
        thumbnail: "assets/img/course/redhat/rhce.webp",
        title: "RHCE | EX294",
        short_description: "Elevate your expertise with the <strong>Red Hat Certified Engineer (RHCE)</strong> certification, focusing on advanced automation and system management using Ansible.",
        student_count: "1,456",
        rating: "4.9",
        slug: "rhce",
    }
];

const defaultHomeCourses = [
    {
        thumbnail: "assets/img/course/eccouncil/ceh-practical.webp",
        title: "CEH v13 Practical",
        short_description: "Validate hands-on hacking skills with the <strong>Certified Ethical Hacker (CEH) Practical</strong> certification, focusing on real-world penetration testing scenarios.",
        student_count: "1,800",
        rating: "4.7",
        slug: "ceh-practical",
    },
    {
        thumbnail: "assets/img/course/eccouncil/ceh-master.webp",
        title: "CEH v13 Master",
        short_description: "Achieve mastery in ethical hacking with the <strong>CEH v13 Master</strong> certification, combining CEH and Practical for comprehensive cybersecurity expertise.",
        student_count: "1,500",
        rating: "4.8",
        slug: "ceh-master",
    },
    {
        thumbnail: "assets/img/course/eccouncil/ecsa.webp",
        title: "ECSA v10 | Certified Security Analyst",
        short_description: "Advance your penetration testing skills with the <strong>EC-Council Certified Security Analyst (ECSA) v10</strong> certification, focusing on advanced security analysis techniques.",
        student_count: "1,400",
        rating: "4.6",
        slug: "ecsa",
    },
    {
        thumbnail: "assets/img/course/eccouncil/cpent.webp",
        title: "CPENT | Certified Penetration Testing Professional",
        short_description: "Excel in advanced penetration testing with the <strong>Certified Penetration Testing Professional (CPENT)</strong> certification, focusing on real-world attack scenarios and mitigation.",
        student_count: "1,200",
        rating: "4.6",
        slug: "cpent",
    }
];

const CourseCard = ({ img, alt, title, desc, students, rating, href }) => {
    // Determine the final image source - handle asset vs server paths
    const finalImg = img ? (img.startsWith('http') || img.startsWith('assets') ? img : `${MEDIA_BASE_URL}${img}`) : "assets/img/course/default.webp";
    
    return (
        <div className="items">
            <div className="card card-hover">
                <img
                    src={finalImg}
                    className="card-img-top"
                    alt={alt}
                    width="360"
                    height="100%"
                    loading="lazy"
                    decoding="async"
                />
                <div className="card-inner">
                    <div className="card-wraper">
                        <h3 className="card-title" dangerouslySetInnerHTML={{ __html: title }} />
                    </div>
                    <p className="description mb-0" dangerouslySetInnerHTML={{ __html: desc }} />

                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <span className="d-flex align-items-center">
                            <PeopleIcon /> {students} students
                        </span>
                        <span className="d-flex align-items-center">
                            <StarIcon /> {rating}
                        </span>
                    </div>

                    <div className="button-group mt-3">
                        <a href={href} className="btn btn-outline-primary" aria-label="Learn More">
                            Explore More <i className="fa-solid fa-arrow-right" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const RelatedCourses = ({ identifier = "rh124_related" }) => {
    const [coursesList, setCoursesList] = useState([]);
    
    // Set appropriate defaults based on the identifier
    const isHome = identifier === "related_courses";
    const currentDefaults = isHome ? defaultHomeCourses : defaultRedhatCourses;
    
    const [section, setSection] = useState({
        badge: isHome ? "Popular Courses" : "Related Courses",
        title: isHome 
            ? 'Popular Training & <span class="red-color">Certification Courses</span>' 
            : 'Explore <span class="red-color">Related Courses</span>',
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
                    // Curation check
                    if (sectionData.curated_courses && sectionData.curated_courses.length > 0) {
                        setCoursesList(sectionData.curated_courses);
                    } else {
                        const courseData = await fetchData("courses/");
                        setCoursesList(courseData && courseData.length > 0 ? courseData : currentDefaults);
                    }

                    let processedTitle = sectionData.title;
                    if (sectionData.highlight_text && processedTitle.includes(sectionData.highlight_text)) {
                        processedTitle = processedTitle.replace(
                            sectionData.highlight_text,
                            `<span class="red-color">${sectionData.highlight_text}</span>`
                        );
                    }

                    setSection({
                        badge: sectionData.badge || (isHome ? "Popular Courses" : "Related Courses"),
                        title: processedTitle,
                        description: sectionData.description || "Find additional courses to boost your career and skills.",
                        button_text: sectionData.button_text || "Explore More",
                        view_all_text: sectionData.view_all_text || "View All",
                        view_all_link: sectionData.view_all_link || "/all-courses"
                    });
                } else {
                    const courseData = await fetchData("courses/");
                    setCoursesList(courseData && courseData.length > 0 ? courseData : currentDefaults);
                    // Ensure defaults are correct if no backend data
                    setSection(prev => ({
                        ...prev,
                        badge: isHome ? "Popular Courses" : "Related Courses",
                        title: isHome 
                            ? 'Popular Training & <span class="red-color">Certification Courses</span>' 
                            : 'Explore <span class="red-color">Related Courses</span>'
                    }));
                }
            } catch (error) {
                console.error("Failed to fetch data:", error);
                setCoursesList(currentDefaults);
            } finally {
                setLoading(false);
            }
        };
        getCourses();
    }, [identifier, isHome, currentDefaults]);

    // Slider Initialization Effect
    useEffect(() => {
        if (loading || coursesList.length === 0) return;

        const timer = setTimeout(() => {
            const $ = window.$;
            if (!$ || !$.fn || !$.fn.slick) return;

            const $el = $(".related-courses-slider");
            if ($el.hasClass("slick-initialized")) $el.slick("unslick");

            $el.slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true,
                dots: false,
                autoplay: false,
                responsive: [
                    { breakpoint: 992, settings: { slidesToShow: 2 } },
                    { breakpoint: 576, settings: { slidesToShow: 1 } },
                ],
            });
        }, 300);

        return () => {
            clearTimeout(timer);
            const $ = window.$;
            if (!$) return;
            const $el = $(".related-courses-slider");
            if ($el.hasClass("slick-initialized")) $el.slick("unslick");
        };
    }, [loading, coursesList]);

    if (loading) return null;

    return (
        <section className="course-related-courses lazy-section">
            <div className="section-header text-center mb-4">
                <span className="section-badge">{section.badge}</span>
                <h2 className="heading-main-1 text-center" dangerouslySetInnerHTML={{ __html: section.title }} />
                <p className="desc text-center">
                    {section.description}
                </p>
            </div>

            <div className="container">
                <div className="course-discover-profile-slider related-courses-slider slider-arrows-cs">
                    {coursesList.map((c, i) => (
                        <CourseCard 
                            key={i} 
                            img={c.thumbnail} 
                            alt={c.title} 
                            title={c.title} 
                            desc={c.short_description} 
                            students={c.student_count || "1,000+"} 
                            rating={c.rating || "4.8"} 
                            href={`/courses/${c.slug}`} 
                        />
                    ))}
                </div>

                <div className="text-center mt-4">
                    <a href={section.view_all_link} className="btn btn-outline-primary mx-auto btn-width text-decoration-none">
                        {section.view_all_text}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default RelatedCourses;