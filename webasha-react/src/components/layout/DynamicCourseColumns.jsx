import React from 'react';
import { Link } from 'react-router-dom';

const tabMapping = {
  "01m": "Get a Job",
  "02m": "Red Hat",
  "03m": "Cybersecurity & Ethical Hacking - EC-Council",
  "04m": "Cybersecurity & Ethical Hacking - OffSec",
  "05m": "Networking & Infrastructure (Cisco, VMware, Veritas)",
  "06m": "Cloud (AWS, Azure, GCP)",
  "07m": "DevOps (Docker, Kubernetes)",
  "08m": "Programming & Databases (Python, Oracle, SQL, Big Data)",
  "09m": "AI, ML & Data Science",
  "10m": "Web & Digital Skills (Full Stack, Web Tech, Digital Marketing, Graphic Design)",
  "11m": "Corporate & Career Training (Soft Skills, Internships, Job-Oriented Programs)"
};

export default function DynamicCourseColumns({ tabId, megaMenuData }) {
  if (!megaMenuData || megaMenuData.length === 0) return null;

  const categoryName = tabMapping[tabId];
  if (!categoryName) return null;

  const category = megaMenuData.find(c => c.name === categoryName);
  
  if (!category || !category.subcategories) return null;

  return (
    <>
      {category.subcategories.map((sub) => (
        <div className="column min-w-[300px] me-4" key={sub.id}>
          <h5>{sub.name}</h5>
          <hr />
          {sub.courses && sub.courses.map((course) => (
            <Link
              to={`/${course.slug || course.id}`}
              className="course-link text-decoration-none"
              key={course.id}
            >
              <div className="image-icon">
                {course.menu_icon ? (
                  <img src={course.menu_icon} alt={course.title} />
                ) : (
                  category.icon ? <img src={category.icon} alt={category.name} /> : <div className="placeholder-icon"></div>
                )}
              </div>
              <div className="info">
                <h6 className="desc1 flex-desc">
                  {course.title}
                  {course.course_code && (
                    <>
                      <span className="dots" />
                      <span>{course.course_code}</span>
                    </>
                  )}
                </h6>
                <h6 className="desc2">
                  {course.short_description}
                </h6>
                {course.menu_label !== 'none' && (
                  <div className={`seller ${course.menu_label === 'new' ? 'new' : course.menu_label === 'trending' ? 'trending' : ''}`}>
                    {course.menu_label === 'best_seller' ? 'Best Seller' 
                      : course.menu_label === 'trending' ? 'Trending' 
                      : 'New'}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      ))}
    </>
  );
}
