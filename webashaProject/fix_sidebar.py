import re
path = r'd:\1.webashaProject\webasha-react\src\pages\ExamTemplate.jsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# I am replacing the broken right sidebar starting from line {/* Ad Banners Mocks */} down to </main>

sidebar_replacement = '''                {/* Ad Banners Mocks */}
                <div className="mb-4 text-center bg-danger text-white p-5 shadow-sm" style={{backgroundImage: 'linear-gradient(45deg, #990000, #ff0000)'}}>
                    <div className="mb-3">
                        <i className="fa-brands fa-redhat display-2 text-white shadow-sm" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.4)'}}></i>
                    </div>
                    <h2 className="fw-bold">Linux</h2>
                    <p className="fw-bold">Training & Certification</p>
                    <button className="btn btn-dark fw-bold px-4 mt-2 rounded-0">JOIN NOW</button>
                    <div className="mt-4 border-top pt-3 text-start small">
                        <i className="fa-solid fa-envelope me-2"></i> training.webasha@gmail.com<br/>
                        <i className="fa-solid fa-phone me-2"></i> +918485847920
                    </div>
                </div>
                
                <div className="mb-4 text-center bg-dark text-white p-5 shadow-sm">
                    <h1 className="fw-bold text-danger mb-3">EC-Council</h1>
                    <h4 className="fw-bold tracking-wide lh-base">Acquire in-demand cybersecurity skills with EC-Council's Essentials Series!</h4>
                </div>

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
      </main>'''

new_content = re.sub(r'                \{\/\* Ad Banners Mocks \*\/\}.*?</main>', sidebar_replacement, content, flags=re.DOTALL)

with open(path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print('Success')
