document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".lazy-section");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  sections.forEach(sec => observer.observe(sec));
});
