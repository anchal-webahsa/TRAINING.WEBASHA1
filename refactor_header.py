import re

header_path = 'd:/1.webashaProject/webasha-react/src/components/layout/Header.jsx'
with open(header_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Desktop Nav Replacement
d_nav_start = r'\{/\* Defining the Red Hat tab button \*/\}'
d_nav_end = r'</ul>\s*\{/\* Providing a button to browse all domains \*/\}'

d_nav_repl = """{megaMenuData && megaMenuData.map((category) => (
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
                          {/* Providing a button to browse all domains */}"""

content = re.sub(d_nav_start + r'.*?' + d_nav_end, d_nav_repl, content, flags=re.DOTALL)

# 2. Desktop Panes Replacement
d_pane_start = r'\{/\* Displaying content for the Red Hat tab \*/\}'
d_pane_end = r'</div>\s*</div>\s*</div>\s*</div>\s*</div>\s*</div>\s*</div>\s*</div>\s*</div>\s*\{/\* Search Bar: Input for searching courses \*/\}'

d_pane_repl = """{megaMenuData && megaMenuData.map((category) => (
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
                                        <DynamicCourseColumns tabId={null} megaMenuData={megaMenuData} category={category} />
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
                {/* Search Bar: Input for searching courses */}"""

if not 'id={`pills-cat-d-${category.id}-tab`}' in content:
    content = re.sub(d_pane_start + r'.*?' + d_pane_end, d_pane_repl, content, flags=re.DOTALL)


with open(header_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Done.")
