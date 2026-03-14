import { Routes, Route } from "react-router-dom";

// ── Main Pages ──
import Home    from "../pages/Home";
import About   from "../pages/About";
import Career  from "../pages/Career";
import Contact from "../pages/Contact";
import PlacedStudents from "../pages/PlacedStudents";
import StudentFeedback from "../pages/StudentFeedback";

import Rhcsa1 from "../pages/Rhcsa1";

// ── OffSec Courses ──
import Oscp from "../pages/Oscp";
import Osep from "../pages/Osep";

// ── Red Hat Courses ──
import Rhcsa from "../pages/Rhcsa";
import Rhce  from "../pages/Rhce";

export default function AppRoutes() {
  return (
    <Routes>

      {/* ── Main Pages ── */}
      <Route path="/"          element={<Home />}    />
      <Route path="/about-us"  element={<About />}   />
      <Route path="/career"    element={<Career />}  />
      <Route path="/contact-us"   element={<Contact />} />

      {/* ── OffSec Courses ── */}
      <Route path="/oscp" element={<Oscp />} />
      <Route path="/osep" element={<Osep />} />

      {/* ── Red Hat Courses ── */}
      <Route path="/rhcsa" element={<Rhcsa />} />
      <Route path="/rhce"  element={<Rhce />}  />


      <Route path="/rhcsa1" element={<Rhcsa1 />} />


      <Route path="/placed-students" element={<PlacedStudents />} />
      <Route path="/student-feedback" element={<StudentFeedback />} />

    </Routes>
  );
}