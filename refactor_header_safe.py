header_path = 'd:/1.webashaProject/webasha-react/src/components/layout/Header.jsx'
with open(header_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
skip = False

# Variables
desktop_nav_start = "{/* Defining the Red Hat tab button */}"
desktop_nav_end = "{/* Providing a button to browse all domains */}"

desktop_pane_start = "{/* Displaying content for the Red Hat tab */}"
desktop_pane_end = "{/* Search Bar: Input for searching courses */}"

mobile_nav_start = "<li>\n                            <h4>Domains</h4>\n                          </li>" # We will detect this differently
mobile_pane_start = 'className="tab-pane fade"\n                                id="pills-02"'

# Let's define the replacements
d_nav_repl = """
                            {megaMenuData && megaMenuData.map((category) => (
                              <li className="nav-item" role="presentation" key={`nav-cat-d-${category.id}`}>
                                <button
                                  className=""
                                  id={`pills-cat-d-${category.id}-tab`}
                                  data-bs-toggle="pill"
                                  data-bs-target={`#pills-cat-d-${category.id}`}
                                  type="button"    
                                  role="tab"
                                  aria-controls={`pills-cat-d-${category.id}`}
                                  aria-selected="false"
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
                          {/* Providing a button to browse all domains */}
"""

d_pane_repl = """                                {/* Dynamically Displaying content for the Domain tabs */}
                                {megaMenuData && megaMenuData.map((category) => (
                                  <div
                                    className="tab-pane fade"
                                    id={`pills-cat-d-${category.id}`}
                                    role="tabpanel"
                                    aria-labelledby={`pills-cat-d-${category.id}-tab`}
                                    tabIndex={0}
                                    key={`pane-cat-d-${category.id}`}
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
                                              <a
                                                href={`/${category.slug}`}
                                                className="btn-view text-decoration-none"
                                              >
                                                View All {category.name} Courses
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <DynamicCourseColumns category={category} tabId={null} megaMenuData={megaMenuData} />
                                      </div>
                                      <div className="course-learn-more-bar">
                                        <div className="course-learn-more-row">
                                          <div className="course-learn-more-column">
                                            <h5 className="course-learn-more-title">
                                              Authorized Training &amp; Certification Exam Center
                                            </h5>
                                            <div className="flex-wraper"><div className="icon-img"><img src="/assets/img/icons/redhat.webp" alt="Red Hat" /></div><div className="info"><p>Red Hat</p></div></div>
                                            <div className="flex-wraper"><div className="icon-img"><img src="/assets/img/icons/ec.webp" alt="EC-Council" /></div><div className="info"><p>EC-Council</p></div></div>
                                            <div className="flex-wraper"><div className="icon-img"><img src="/assets/img/icons/offsec.webp" alt="OffSec" /></div><div className="info"><p>OffSec</p></div></div>
                                            <div className="flex-wraper"><div className="icon-img"><img src="/assets/img/icons/aws.webp" alt="aws" /></div><div className="info"><p>AWS Cloud</p></div></div>
                                            <div className="flex-wraper"><div className="icon-img"><img src="/assets/img/icons/azure.webp" alt="Azure" /></div><div className="info"><p>Microsoft Azure</p></div></div>
                                            <div className="flex-wraper"><div className="icon-img"><img src="/assets/img/icons/google.webp" alt="Google Cloud" /></div><div className="info"><p>Google Cloud</p></div></div>
                                            <div className="flex-wraper"><div className="icon-img"><img src="/assets/img/icons/cisco.webp" alt="cisco" /></div><div className="info"><p>Cisco</p></div></div>
                                            <div className="flex-wraper"><div className="icon-img"><img src="/assets/img/icons/vmware.webp" alt="vmware" /></div><div className="info"><p>VMware</p></div></div>
                                            <div className="flex-wraper"><div className="icon-img"><img src="/assets/img/icons/oracle.webp" alt="Oracle" /></div><div className="info"><p>Oracle</p></div></div>
                                            <div className="flex-wraper"><div className="icon-img"><img src="/assets/img/icons/linux.webp" alt="The Linux Foundation" /></div><div className="info"><p>The Linux Foundation</p></div></div>
                                            <div className="flex-wraper"><div className="icon-img"><img src="/assets/img/icons/comptia.webp" alt="Comptia" /></div><div className="info"><p>Comptia</p></div></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Search Bar: Input for searching courses */}
"""

m_nav_repl = """                          <li>
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
                        <button className="btn btn-all-domains">
"""

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
                            ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="overlay" className="overlay" />
"""

desktop_nav_started = False
desktop_pane_started = False
mobile_nav_started = False
mobile_pane_started = False

i = 0
while i < len(lines):
    line = lines[i]
    if not desktop_nav_started and desktop_nav_start in line:
        desktop_nav_started = True
        # skip lines until closing tag
        while i < len(lines) and desktop_nav_end not in lines[i]:
            i += 1
        new_lines.append(d_nav_repl)
        i += 1
        continue
    
    if not desktop_pane_started and desktop_pane_start in line:
        desktop_pane_started = True
        while i < len(lines) and desktop_pane_end not in lines[i]:
            i += 1
        new_lines.append(d_pane_repl)
        i += 1
        continue
    
    # mobile nav start: we look for <li> followed by <h4>Domains</h4>
    if not mobile_nav_started and "<li>" in line and i + 1 < len(lines) and "<h4>Domains</h4>" in lines[i+1] and i > 2500:
        mobile_nav_started = True
        # skip lines until `<button className="btn btn-all-domains">`
        while i < len(lines) and '<button className="btn btn-all-domains">' not in lines[i]:
            i += 1
        new_lines.append(m_nav_repl)
        i += 1
        continue
    
    # mobile pane start: we look for `id="pills-02"` which is around line 3173
    if not mobile_pane_started and 'id="pills-02"' in line and i > 3000:
        mobile_pane_started = True
        # we need to go back 2 lines to remove `<div \n className="tab-pane fade"`
        new_lines.pop()
        new_lines.pop()
        # skip lines until `<div id="overlay"`
        while i < len(lines) and '<div id="overlay"' not in lines[i]:
            i += 1
        new_lines.append(m_pane_repl)
        i += 1
        continue
    
    new_lines.append(line)
    i += 1

with open(header_path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("Done Refactoring.")
