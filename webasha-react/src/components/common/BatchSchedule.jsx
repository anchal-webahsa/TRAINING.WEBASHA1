// src/components/common/BatchSchedule.jsx

// ── Helper: add days to today and skip weekends if needed ──
const addDays = (days, skipWeekend = false) => {
  let d = new Date();
  d.setDate(d.getDate() + days);
  if (skipWeekend) {
    while (d.getDay() === 0 || d.getDay() === 6) {
      d.setDate(d.getDate() + 1);
    }
  }
  return d.toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });
};

// ── Helper: next Saturday ──
const nextSaturday = () => {
  const d = new Date();
  const day = d.getDay(); // 0=Sun, 6=Sat
  const daysToSat = day === 6 ? 1 : (6 - day);
  d.setDate(d.getDate() + daysToSat);
  return d.toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });
};

// ── Mode of Training cards ──
const modes = [
  {
    img:   "assets/imgs/mode-training-fi-1.png",
    alt:   "E-learning",
    title: "E-learning",
    desc:  "Self-paced online learning with access to recorded sessions and resources.",
    btn:   "btn-outline-primary",
  },
  {
    img:   "assets/imgs/mode-training-fi-2.png",
    alt:   "Instructor Led",
    title: "Instructor Led",
    desc:  "Live, interactive sessions with expert instructors.",
    btn:   "btn-primary",
  },
  {
    img:   "assets/imgs/mode-training-fi-3.png",
    alt:   "Bootcamp",
    title: "Bootcamp",
    desc:  "Intensive, immersive training for rapid skill development.",
    btn:   "btn-outline-secondary",
  },
  {
    img:   "assets/imgs/mode-training-fi-4.png",
    alt:   "Training on Demand",
    title: "Training on Demand",
    desc:  "Customized training schedules tailored to your needs.",
    btn:   "btn-outline-primary",
  },
];

// ── Batch rows 
const getBatches = () => [
  {
    date:   addDays(0),
    mode:   "Online/Classroom",
    batch:  "Weekdays",
    time:   "6:30 PM IST",
    status: <span className="badge bg-danger">Batch Full</span>,
    action: <a href="#" className="btn btn-danger btn-sm">Enrollment Closed →</a>,
  },
  {
    date:   addDays(7),
    mode:   "Online/Classroom",
    batch:  "Weekdays",
    time:   "6:30 PM IST",
    status: (
      <>
        <span className="badge bg-success">Only 1 Seat Available</span>
        <small className="text-muted d-block">Max intake limit is 10</small>
      </>
    ),
    action: (
      <a href="#" className="btn btn-outline-success btn-sm"
        data-bs-toggle="modal" data-bs-target="#enquiryModal">
        Enrollment Open →
      </a>
    ),
  },
  {
    date:   addDays(14, true), // skip weekends
    mode:   "Online/Classroom",
    batch:  "Weekdays",
    time:   "8:00 AM IST",
    status: (
      <>
        <span className="badge bg-success">Only 5 Seats Available</span>
        <small className="text-muted d-block">Max intake limit is 10</small>
      </>
    ),
    action: (
      <a href="#" className="btn btn-outline-success btn-sm"
        data-bs-toggle="modal" data-bs-target="#enquiryModal">
        Enrollment Open →
      </a>
    ),
  },
  {
    date:   nextSaturday(),
    mode:   "Online/Classroom",
    batch:  "Weekends",
    time:   "10:00 AM IST",
    status: (
      <>
        <span className="badge bg-success">Only 2 Seats Available</span>
        <small className="text-muted d-block">Max intake limit is 10</small>
      </>
    ),
    action: (
      <a href="#" className="btn btn-outline-success btn-sm"
        data-bs-toggle="modal" data-bs-target="#enquiryModal">
        Enrollment Open →
      </a>
    ),
  },
];

const BatchSchedule = () => {
  const batches = getBatches();

  return (
    <>
      {/* ── Section 1: Mode of Training ── */}
      <section className="training-calender py-5 lazy-section" id="training-options">
        <div className="container">
          <div className="wraper">
            <h2 className="heading-main-1 text-center mb-5">
              Mode of <span className="red-color">Training</span>
            </h2>

            <div className="row g-4">
              {modes.map((m, i) => (
                <div className="col-12 col-sm-6 col-lg-3" key={i}>
                  <div className="card h-100 text-center p-3 shadow-sm">
                    <img
                      src={m.img}
                      className="card-img-top mx-auto"
                      alt={m.alt}
                      style={{ maxWidth: "80px" }}
                    />
                    <div className="card-body d-flex flex-column">
                      <h4 className="card-title">{m.title}</h4>
                      <p className="card-text flex-grow-1">{m.desc}</p>
                      <a
                        href="#"
                        className={`btn ${m.btn} mt-3`}
                        data-bs-toggle="modal"
                        data-bs-target="#enquiryModal"
                        aria-label="Enroll in Course"
                      >
                        Request for batch
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Batch Schedule ── */}
      <section className="py-5">
        <div className="container my-4 mb-5">
          <h2 className="heading-main-1 text-center mb-4">
            Upcoming Batches & <span className="red-color">Schedule</span>
          </h2>

          {/* Desktop Table */}
          <div className="table-responsive custom-table d-none d-md-block">
            <table className="table align-middle">
              <thead className="table-light">
                <tr>
                  <th>Date</th>
                  <th>Mode of Class</th>
                  <th>Batch Form</th>
                  <th>Time</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {batches.map((b, i) => (
                  <tr key={i}>
                    <td>{b.date}</td>
                    <td>{b.mode}</td>
                    <td>{b.batch}</td>
                    <td>{b.time}</td>
                    <td>{b.status}</td>
                    <td>{b.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="d-block d-md-none">
            {batches.map((b, i) => (
              <div className="card mb-3 shadow-sm" key={i}>
                <div className="card-body">
                  <h6 className="card-title mb-2">{b.date}</h6>
                  <p className="mb-1"><strong>Mode:</strong> {b.mode}</p>
                  <p className="mb-1"><strong>Batch:</strong> {b.batch}</p>
                  <p className="mb-2"><strong>Time:</strong> {b.time}</p>
                  <div className="mb-2">{b.status}</div>
                  <div>{b.action}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Can't find schedule CTA */}
          <div className="text-center my-5">
            <h5 className="mb-3">📅 Can't Find a Schedule?</h5>
            <p className="mb-4">Don't worry — we'll help you arrange a suitable batch.</p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <a href="tel:+918485847920"
                className="btn btn-danger d-inline-flex align-items-center px-4">
                <i className="fa fa-phone me-2" /> Call Us
              </a>
              <a href="#"
                className="btn btn-outline-danger d-inline-flex align-items-center px-4"
                data-bs-toggle="modal"
                data-bs-target="#enquiryModal">
                <i className="fa fa-envelope me-2" /> Contact Us
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default BatchSchedule;