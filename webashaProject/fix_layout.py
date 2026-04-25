import sys
import re
import os

path = r'd:\1.webashaProject\webasha-react\src\pages\ExamTemplate.jsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Find Sidebar Top
sidebar_match = re.search(r'(<div className="col-lg-4 col-sm-12 col-12 sticky-sidebar1">.*?)</div>\s*</div>\s*</div>\s*</div>\s*{/\* --- FULL WIDTH DISCOUNT BANNER --- \*/}', content, flags=re.DOTALL)

if not sidebar_match:
    print('Failed to find sidebar')
    sys.exit(1)

sidebar_content = sidebar_match.group(1) + '</div>'

new_middle = '''
              </div> {/* Close white wrapper for left content */}

              {/* --- FULL WIDTH DISCOUNT BANNER (now inside column) --- */}
              <div className="p-4 py-5 text-white text-center mb-4 shadow-sm" style={{background: '#1e3a8a'}}>
                  <h2 className="fw-bold mb-2 fs-3">Are you looking for Discounted Exam Voucher</h2>
                  <p className="mb-4">Become a certified with best price.</p>
                  <a href={`https://wa.me/918010911256`} target="_blank" rel="noopener noreferrer" className="btn btn-success fw-bold px-4 me-3 border-0"><i className="fa-brands fa-whatsapp me-2"></i>Whatsapp</a>
                  <button className="btn btn-primary fw-bold px-4 border-0"><i className="fa-solid fa-envelope me-2"></i>Enquire Now</button>
              </div>

              {/* --- CENTER PRODUCT LAYOUT --- */}
              <div className="row bg-white p-4 p-md-5 mx-0 mb-4 shadow-sm border align-items-center">
                  <div className="col-md-5 text-center mb-4 mb-md-0 position-relative">
                      <div className="position-absolute z-index-1" style={{top: '40%', left: '-20px', transform: 'translateY(-50%)'}}>
                          <div className="bg-warning text-dark fw-bold rounded-circle p-2 shadow-lg d-flex align-items-center justify-content-center text-center lh-1" style={{width:'100px', height:'100px'}}>
                              <div>
                                  <span className="fs-3 d-block">100%</span>
                                  <span style={{fontSize: '11px'}}>GUARANTEE</span>
                              </div>
                          </div>
                      </div>
                      <div className="ps-4">
                          {examData.box_image ? (
                              <img src={examData.box_image} alt="Questions and Answers" className="img-fluid" style={{maxHeight:'300px'}} />
                          ) : (
                              <div className="bg-dark text-white p-4 text-start shadow-lg mx-auto" style={{width: '90%', height: '300px', transform: 'perspective(600px) rotateY(-15deg)', transformStyle: 'preserve-3d', boxShadow: '15px 15px 20px rgba(0,0,0,0.3)'}}>
                                  <h6 className="text-info fw-bold mb-3 border-bottom pb-2 border-secondary">WEBASHA</h6>
                                  <h5 className="text-warning fw-bold mt-4 pt-2">QUESTIONS & ANSWERS</h5>
                                  <ul className="list-unstyled mt-4 small text-light">
                                      <li className="mb-2"><i className="fa-solid fa-check text-success me-2"></i>Dedicated Batch</li>
                                      <li className="mb-2"><i className="fa-solid fa-check text-success me-2"></i>Higher Passing Rate</li>
                                      <li className="mb-2"><i className="fa-solid fa-check text-success me-2"></i>Free 3 Months Updates</li>
                                  </ul>
                              </div>
                          )}
                      </div>
                  </div>

                  <div className="col-md-7 d-flex flex-column">
                      <table className="table table-borderless table-sm mb-4" style={{fontSize: '14px'}}>
                          <tbody>
                              <tr><th className="text-dark w-50 pb-2">Exam Name :</th><td className="text-muted pb-2">{examData.title}</td></tr>
                              <tr><th className="text-dark pb-2">Exam Code :</th><td className="text-muted pb-2">{examData.exam_code}</td></tr>
                              <tr><th className="text-dark pb-2">Exam Preparation Mode :</th><td className="text-muted pb-2">{examData.preparation_mode}</td></tr>
                              <tr><th className="text-dark pb-2">Mock Test :</th><td className="text-muted pb-2">{examData.mock_test_count}</td></tr>
                              <tr><th className="text-dark pb-2">Bundle includes :</th><td className="text-muted pb-2">{examData.bundle_includes}</td></tr>
                              <tr><th className="text-dark pb-2">Free Updates :</th><td className="text-muted pb-2">{examData.free_updates}</td></tr>
                          </tbody>
                      </table>
                      
                      <div className="text-success fw-bold mb-3 mt-1" style={{fontSize: '14px'}}>Last Update Date : {examData.last_update_date}</div>
                      
                      <div className="align-self-start mb-2">
                          <div className="fs-4 fw-bold mb-3 d-flex align-items-center gap-3">
                              <span>Price: ${examData.price}</span> 
                              <span className="text-danger fs-5 text-decoration-line-through">${examData.original_price}</span>
                          </div>
                          <div className="d-flex flex-wrap gap-2 mt-2">
                              <button className="btn btn-success px-4 fw-bold text-white"><i className="fa-brands fa-whatsapp me-2"></i>Whatsapp</button>
                              <button className="btn btn-warning px-4 fw-bold text-dark"><i className="fa-solid fa-cart-shopping me-2"></i>Add to Cart</button>
                              <button className="btn btn-primary px-4 fw-bold"><i className="fa-solid fa-envelope me-2"></i>Enquire Now</button>
                          </div>
                      </div>
                  </div>
              </div>

              {/* --- STATISTIC BLACK BAR ROW --- */}
              <div className="bg-dark text-white p-4 py-5 mb-4 shadow-sm text-center">
                  <h3 className="fw-bold mb-4 pb-2">This Week Result of {examData.title.split(' | ')[0]}</h3>
                  <div className="row border-top border-secondary pt-4">
                      <div className="col-4">
                          <i className="fa-solid fa-users fs-3 mb-2 text-light"></i>
                          <h3 className="fw-bold mb-1 mt-1">{examData.stat_customers_passed}</h3>
                          <h6 className="mb-1 text-white" style={{fontSize: '13px'}}>Customers Passed</h6>
                          <small className="text-gray-400 d-none d-md-block" style={{fontSize: '11px'}}>They can't be wrong</small>
                      </div>
                      <div className="col-4 position-relative">
                          <div className="position-absolute h-100 border-start border-secondary" style={{left: 0, top: 0}}></div>
                          <i className="fa-regular fa-face-smile fs-3 mb-2 text-light"></i>
                          <h3 className="fw-bold mb-1 mt-1">{examData.stat_average_score}</h3>
                          <h6 className="mb-1 text-white" style={{fontSize: '13px'}}>Average Score</h6>
                          <small className="text-gray-400 d-none d-md-block" style={{fontSize: '11px'}}>Score in Real Exam at Testing Center</small>
                          <div className="position-absolute h-100 border-end border-secondary" style={{right: 0, top: 0}}></div>
                      </div>
                      <div className="col-4">
                          <i className="fa-regular fa-folder-open fs-3 mb-2 text-light"></i>
                          <h3 className="fw-bold mb-1 mt-1">{examData.stat_similar_questions}</h3>
                          <h6 className="mb-1 text-white" style={{fontSize: '13px'}}>Similar Questions</h6>
                          <small className="text-gray-400 d-none d-md-block" style={{fontSize: '11px'}}>Will come in real exam</small>
                      </div>
                  </div>
              </div>

              {/* --- RECENT REVIEWS SECTION --- */}
              <div className="bg-white shadow-sm border p-4 mb-4">
                  <h3 className="fw-bold fs-4 mb-4 text-center text-dark">{examData.title} <span className="text-danger" style={{fontWeight: '300'}}>Recent Reviwes</span></h3>
                  <div className="px-2" style={{ margin: '0 -10px' }}>
                      <Slider {...reviewSliderSettings}>
                          {mockReviews.map((review) => (
                              <div key={review.id} className="px-2">
                                  <div className="card h-100 border-0 shadow-sm text-center px-3 py-4" style={{borderRadius: '0', border: '1px solid #f1f5f9'}}>
                                      <img src={review.img} className="rounded-circle mx-auto mb-3" style={{width: '60px', height: '60px', objectFit: 'cover'}} alt={review.name} onError={(e)=>{e.target.src="https://via.placeholder.com/60"}} />
                                      <h6 className="fw-bold mb-0 text-dark" style={{fontSize: '14px'}}>{review.name}</h6>
                                      <small className="text-muted d-block mb-2" style={{fontSize: '11px'}}>{review.role}</small>
                                      <p className="text-muted mb-2" style={{fontSize: '12px', fontStyle: 'italic', height: '80px', overflow: 'hidden'}}>
                                          <i className="fa-solid fa-quote-left text-danger me-1"></i>
                                          {review.text}
                                          <i className="fa-solid fa-quote-right text-danger ms-1"></i>
                                      </p>
                                      <div className="text-warning" style={{fontSize: '10px'}}>
                                          <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                                      </div>
                                  </div>
                              </div>
                          ))}
                      </Slider>
                  </div>
              </div>

              {/* --- BENEFITS AND JOB SECTION --- */}
              <div className="mb-4 text-dark">
                  <h3 className="fw-bold fs-4 mb-3">{examData.title} <span className="text-danger" style={{fontWeight: '300'}}>Benefits & Job</span></h3>
                  {examData.audience_html && (
                      <DynamicSection id="audience" content={examData.audience_html} title="Audience for This Exam" isCard={false} />
                  )}
                  {examData.prerequisites_html && (
                      <DynamicSection id="prerequisites" content={examData.prerequisites_html} title="Prerequisites for This Exam" isCard={false} />
                  )}
                  {examData.objectives_html && (
                      <DynamicSection id="objectives" content={examData.objectives_html} title="Study Points for the Exam" isCard={false} />
                  )}
                  {examData.certification_value_html && (
                      <DynamicSection id="cert-value" content={examData.certification_value_html} title="Certification Value" isCard={false} />
                  )}
                  {examData.career_opportunities_html && (
                      <DynamicSection id="career" content={examData.career_opportunities_html} title="Career Opportunities" isCard={false} />
                  )}
              </div>

            </div> {/* <--- THIS FINALLY CLOSES THE MAIN col-lg-8 */}
'''

new_sidebar = sidebar_content.replace('</div>', '')
new_sidebar += '''
                
                <div className="mb-4 bg-white border shadow-sm p-3">
                    <small className="text-muted fw-bold mb-2 d-block">Carousel with controls</small>
                    <div id="sideCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://via.placeholder.com/400x250/0f172a/ffffff?text=CISCO+CCNA" className="d-block w-100" alt="CCNA Slide 1" style={{height: '220px', objectFit: 'cover'}}/>
                            </div>
                            <div className="carousel-item">
                                <img src="https://via.placeholder.com/400x250/dc3545/ffffff?text=RED+HAT+LINUX" className="d-block w-100" alt="Linux Slide 2" style={{height: '220px', objectFit: 'cover'}}/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#sideCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#sideCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                
                <div className="bg-light p-4 text-center border shadow-sm mb-4" style={{position: 'relative'}}>
                    <h6 className="text-muted fw-bold text-uppercase mb-2">Free Red Hat certification exam offer</h6>
                    <h3 className="fw-bold text-danger mb-4">Buy 1 Get 1 Exam Voucher</h3>
                    <button className="btn btn-outline-danger fw-bold px-5 py-2 mb-2 bg-white">Enroll Here</button>
                </div>

                <div className="mt-4">
                    <BrandsSection />
                </div>

              </div>
            </div> {/* <--- CLOSES RIGHT SIDEBAR col-lg-4 */}
          </div> {/* <--- CLOSES ROW */}
        </div> {/* <--- CLOSES CONTAINER */}
      </main>
'''

final_content = re.sub(r'              </div> \{\/\* Close white wrapper for left content \*\/}.*?</main>', f'{new_middle}\n{new_sidebar}', content, flags=re.DOTALL)

with open(path, 'w', encoding='utf-8') as f:
    f.write(final_content)

print('Success')
