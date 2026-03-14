document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("videoModal");
  const container = document.getElementById("videoContainer");

  modal.addEventListener("show.bs.modal", event => {
    const button = event.relatedTarget;
    const videoId = button.getAttribute("data-video-id");
    container.innerHTML = `
      <iframe width="100%" height="100%" 
              src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0" 
              frameborder="0" allow="autoplay; encrypted-media" allowfullscreen 
              loading="lazy"></iframe>`;
  });

  modal.addEventListener("hidden.bs.modal", () => {
    container.innerHTML = ""; // unload video
  });
});
