import re

header_path = 'd:/1.webashaProject/webasha-react/src/components/layout/Header.jsx'
with open(header_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Mobile Nav Replacement
m_nav_start = r'<li>\s*<h4>Domains</h4>\s*</li>'
m_nav_end = r'</ul>\s*<button className="btn btn-all-domains">'

m_nav_repl = """<li>
                            <h4>Domains</h4>
                          </li>
                          {megaMenuData && megaMenuData.map((category) => (
                            <li className="nav-item" role="presentation" key={`nav-cat-m-${category.id}`}>
                              <button
                                className=""
                                id={`pills-cat-m-${category.id}-tab`}
                                data-bs-toggle="pill"
                                data-bs-target={`#pills-cat-m-${category.id}`}
                                type="button"
                                role="tab"
                                aria-controls={`pills-cat-m-${category.id}`}
                                aria-selected="false"
                                onClick={showContent}
                              >
                                {category.icon ? (
                                  <img src={category.icon} alt={category.name} width="16" height="16" style={{marginRight: '8px', objectFit: 'contain'}} />
                                ) : (
                                  <i className={category.icon_class || "fa-solid fa-folder"} />
                                )}
                                {category.name}
                              </button>
                            </li>
                          ))}
                        </ul>
                        <button className="btn btn-all-domains">"""

content = re.sub(m_nav_start + r'.*?' + m_nav_end, m_nav_repl, content, flags=re.DOTALL)

# 2. Mobile Panes Replacement
# We will find the start of pills-02 pane and the end before overlay.
start_str = 'className="tab-pane fade"\n                                id="pills-02"'
start_idx = content.find(start_str)

# go backwards to find the `<div`
real_start_idx = content.rfind('<div', 0, start_idx)

end_str = '<div id="overlay" className="overlay" />'
real_end_idx = content.find(end_str)

# we need to keep the closing divs before overlay, let's see how many there are.
# Actually, the panes are inside `<div className="tab-content" id="pills-tabContent">`
# Let's just find the last `</div>` of the `pills-11`.
# Let's find `id="pills-11"`.
pills_11_idx = content.find('id="pills-11"')
# The end of `pills-11` pane is marked by `{/* end tab of Get Job */}` after it!
end_tab_idx = content.find('{/* end tab of Get Job */}', pills_11_idx)
# Include that comment in the replaced text
end_tab_idx += len('{/* end tab of Get Job */}')

m_pane_repl = """{megaMenuData && megaMenuData.map((category) => (
                              <div
                                className="tab-pane fade"
                                id={`pills-cat-m-${category.id}`}
                                role="tabpanel"
                                aria-labelledby={`pills-cat-m-${category.id}-tab`}
                                tabIndex={0}
                                key={`pane-cat-m-${category.id}`}
                              >
                                <div className="course-tabs-wraper">
                                  <div className="course-tabs-row">
                                    <div className="column w-100">
                                      <div className="nav-card">
                                        <div className="icon-img">
                                          {category.icon ? (
                                            <img
                                              src={category.icon}
                                              alt={category.name}
                                            />
                                          ) : (
                                            <i className={`${category.icon_class || "fa-solid fa-folder"} fa-3x`} style={{color: '#e73827'}} />
                                          )}
                                        </div>
                                        <div className="info-width">
                                          <div className="info">
                                            <h4>
                                              {category.name} Training &amp; Certifications
                                            </h4>
                                            <p>
                                              Explore our comprehensive training and certification programs for {category.name}.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <DynamicCourseColumns category={category} tabId={null} megaMenuData={megaMenuData} />
                                  </div>
                                  <div className="course-learn-more-bar">
                                    <div className="course-learn-more-row">
                                      <div className="course-learn-more-column">
                                        <h5 className="course-learn-more-title">
                                          Interview Preparation
                                        </h5>
                                        <ul className="more-domains-list learn-more-gap list-unstyled flex-column">
                                          <li>
                                            <a
                                              href="/#"
                                              className="text-decoration-none more-text"
                                            >
                                              Python Tutorial
                                              <i className="fa-solid fa-arrow-up arrow-right" />
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              href="/#"
                                              className="text-decoration-none more-text"
                                            >
                                              What is Cloud Computing? A Beginner's
                                              Guide
                                              <i className="fa-solid fa-arrow-up arrow-right" />
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}"""

if real_start_idx != -1 and end_tab_idx != -1:
    content = content[:real_start_idx] + m_pane_repl + content[end_tab_idx:]
else:
    print("Could not find mobile panes start or end")

with open(header_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Done.")
