import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BrandsSection from "../components/common/BrandsSection";
import ExamHero from "../components/exams/ExamHero";
import ExamList from "../components/exams/ExamList";

const Exams = () => {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchExams();
  }, []);

  const fetchExams = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/exams/`);
      const data = await response.json();
      setExams(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching exams:", error);
      setLoading(false);
    }
  };

  return (
    <main className="exams-page">
      <ExamHero />

      {/* breadcrumb */}
      <div className="py-3 bg-light border-bottom">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Exams</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-5">
        <div className="container">
          <ExamList exams={exams} loading={loading} />
        </div>
      </section>

      <BrandsSection />
    </main>
  );
};

export default Exams;
