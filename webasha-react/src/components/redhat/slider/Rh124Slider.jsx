// src/components/redhat/slider/Rh124Slider.jsx

import { useEffect } from "react";

const slides = [
  { src: "/assets/img/slider/redhat/1.webp", alt: "Red Hat Insight 1" },
  { src: "/assets/img/slider/redhat/2.webp", alt: "Red Hat Insight 2" },
];

const Rh124Slider = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const $ = window.$;
      if (!$ || !$.fn || !$.fn.slick) return;

      const $el = $(".slider-ceh.rh124");
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
      if (!$) return;
      const $el = $(".slider-ceh.rh124");
      if ($el.hasClass("slick-initialized")) $el.slick("unslick");
    };
  }, []);

  return (
    <div className="slider-ceh sld-dots rh124">
      {slides.map((s, i) => (
        <div className="ceh-items" key={i}>
          <img src={s.src} alt={s.alt} loading="lazy" />
        </div>
      ))}
    </div>
  );
};

export default Rh124Slider;