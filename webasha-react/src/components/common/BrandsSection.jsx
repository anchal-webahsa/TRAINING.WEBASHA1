// src/components/common/BrandsSection.jsx

const row1 = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15];
const row2 = [1, 2, 3, 6, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const row3 = [1, 2, 3, 4, 5, 6, 1, 8, 9, 10, 11, 12, 13, 14, 15];

const rowStyle = {
  display:      "flex",
  overflow:     "hidden",
  width:        "100%",
  padding:      "8px 0",
  marginBottom: "12px",
  //Remove fade effect from existing CSS
  WebkitMaskImage: "none",
  maskImage:       "none",
};

const ScrollRow = ({ items, direction = "ltr" }) => {
  const doubled = [...items, ...items];
  const anim    = direction === "rtl" ? "scrollRTL" : "scrollLTR";

  return (
    <div style={rowStyle}>
      <div style={{
        display:    "flex",
        gap:        "14px",
        animation:  `${anim} 35s linear infinite`,
        minWidth:   "max-content",
        willChange: "transform",
      }}>
        {doubled.map((num, i) => (
          <div key={i} style={{
            minWidth:       "150px",
            padding:        "10px 18px",
            border:         "1px solid #e5e7eb",
            borderRadius:   "8px",
            display:        "flex",
            alignItems:     "center",
            justifyContent: "center",
            background:     "#fff",
            flexShrink:     0,
          }}>
            <img
              src={`assets/img/brand/${num}.webp`}
              alt="brand logo"
              loading="lazy"
              style={{ maxHeight: "36px", width: "auto", objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const BrandsSection = () => (
  <>
    <style>{`
      @keyframes scrollLTR {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      @keyframes scrollRTL {
        0%   { transform: translateX(-50%); }
        100% { transform: translateX(0); }
      }
    `}</style>

    <section className="our-learners section-header text-center lazy-section">
      <span className="section-badge">Trusted By</span>
      <h2 className="heading-main text-center mb-4">
        1000+ Leading Universities And Companies
      </h2>

      <ScrollRow items={row1} direction="ltr" />
      <ScrollRow items={row2} direction="rtl" />
      <ScrollRow items={row3} direction="ltr" />
    </section>
  </>
);

export default BrandsSection;