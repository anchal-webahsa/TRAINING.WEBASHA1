// src/components/redhat/slider/Rh124Slider.jsx

import { useEffect, useRef } from "react";

const Rh124Slider = ({ image1, image2 }) => {
  const sliderRef = useRef(null);
  const slides = [
    { src: image1 || "/assets/img/slider/redhat/1.webp", alt: "Course Insight 1" },
    { src: image2 || "/assets/img/slider/redhat/2.webp", alt: "Course Insight 2" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const $ = window.$;
      if (!$ || !$.fn || !$.fn.slick || !sliderRef.current) return;

      const $el = $(sliderRef.current);
      if ($el.hasClass("slick-initialized")) $el.slick("unslick");

      $el.slick({
        slidesToShow:   1,
        slidesToScroll: 1,
        arrows:         false,
        dots:           true,
        autoplay:       true,
        autoplaySpeed:  3000,
        fade:           true,
      });
    }, 300);

    return () => {
      clearTimeout(timer);
      const $ = window.$;
      if (!$ || !sliderRef.current) return;
      const $el = $(sliderRef.current);
      if ($el.hasClass("slick-initialized")) $el.slick("unslick");
    };
  }, [image1, image2]);

  return (
    <div className="slider-ceh sld-dots rh124" ref={sliderRef}>
      {slides.map((s, i) => (
        <div className="ceh-items" key={i}>
          <img src={s.src} alt={s.alt} loading="lazy" />
        </div>
      ))}
    </div>
  );
};

export default Rh124Slider;