import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function MegaMenu() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/mega-menu/`)
      .then(res => res.json())
      .then(data => {
        setCategories(data || []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching mega menu:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="course-dropdown-wraper p-5 text-center">Loading courses...</div>;
  }

  return (
    <div className="course-dropdown-wraper">
      <div className="course-tabs-container">
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          {categories.map((cat, idx) => (
            <li className="nav-item" role="presentation" key={cat.id}>
              <button
                className={idx === 0 ? "active" : ""}
                id={`pills-${cat.slug}-tab`}
                data-bs-toggle="pill"
                data-bs-target={`#pills-${cat.slug}`}
                type="button"
                role="tab"
                aria-controls={`pills-${cat.slug}`}
                aria-selected={idx === 0 ? "true" : "false"}
              >
                {cat.icon && (
                  <img 
                    src={cat.icon} 
                    alt={cat.name} 
                    style={{ width: '20px', marginRight: '8px' }} 
                  />
                )}
                {cat.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="tab-content" id="pills-tabContent">
        {categories.map((cat, idx) => (
          <div
            className={`tab-pane fade ${idx === 0 ? "show active" : ""}`}
            id={`pills-${cat.slug}`}
            role="tabpanel"
            aria-labelledby={`pills-${cat.slug}-tab`}
            tabIndex={0}
            key={cat.id}
          >
            <div className="course-tabs-wraper">
              <div className="course-tabs-row d-flex flex-row overflow-auto">
                {cat.subcategories && cat.subcategories.map((sub) => (
                  <div className="column min-w-[300px] me-4" key={sub.id}>
                    <h5>{sub.name}</h5>
                    <hr />
                    {sub.courses && sub.courses.map((course) => (
                      <Link
                        to={`/${course.slug || course.id}`}
                        className="course-link text-decoration-none"
                        key={course.id}
                        onClick={() => document.body.click()}
                      >
                        <div className="image-icon">
                          {course.menu_icon ? (
                            <img src={course.menu_icon} alt={course.title} />
                          ) : (
                            cat.icon ? <img src={cat.icon} alt={cat.name} /> : <div className="placeholder-icon"></div>
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
