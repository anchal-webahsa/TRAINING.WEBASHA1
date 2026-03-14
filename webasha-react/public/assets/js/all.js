// $(document).ready(function(){
//   $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//       0:{
//         items:1
//       },
//       600:{
//         items:3
//       },
//       1000:{
//         items:5
//       }
//     }
//   })
// });






// const menu = document.getElementById('menu');
// const overlay = document.getElementById('overlay');
// const toggleBtn = document.getElementById('toggle-btn');
// const closeBtn = document.getElementById('close-btn');

// // Toggle menu and overlay visibility on button click
// toggleBtn.onclick = function() {
//   menu.classList.toggle('menu-open');
//   overlay.classList.toggle('overlay-show');
// };

// // Close menu on close button click
// closeBtn.onclick = function(event) {
//   event.stopPropagation(); // Prevent the event from bubbling up to the overlay
//   menu.classList.remove('menu-open');
//   overlay.classList.remove('overlay-show');
// };

// // Overlay click does nothing
// overlay.onclick = function(event) {
//   event.stopPropagation(); // Prevent any event propagation to avoid unexpected behavior
// };



window.addEventListener('scroll', makeTabsSticky);

const headerElm = document.querySelector('header.header');
const bannerElm = document.querySelector('.banner-course');
const tabsContainer = document.getElementById('stickyheader');
//const stickyOffset = tabsContainer.offsetTop;



function makeTabsSticky() {

    const stickyOffset = headerElm.offsetHeight + bannerElm.offsetHeight;
    if (window.scrollY >= stickyOffset) {
        tabsContainer.classList.add('sticky');
    } else {
        tabsContainer.classList.remove('sticky');
    }
}



 // Elements for Menu 1
 const menu1 = document.getElementById('menu-1');
 const overlay1 = document.getElementById('overlay');
 const toggleBtn1 = document.getElementById('toggle-btn-1');
 const closeBtn1 = document.getElementById('close-btn-1');

 // Elements for Menu 2
 const menu2 = document.getElementById('menu-2');
 const overlay2 = document.getElementById('overlay');
 const toggleBtn2 = document.getElementById('toggle-btn-2');
 const closeBtn2 = document.getElementById('close-btn-2');

 // Function to toggle Menu 1 and its overlay
 function toggleMenu1() {
   menu1.classList.toggle('menu-open');
   overlay1.classList.toggle('overlay-show');
 }

 // Function to toggle Menu 2 and its overlay
 function toggleMenu2() {
   menu2.classList.toggle('menu-open');
   overlay2.classList.toggle('overlay-show');
 }

 // Toggle menu and overlay visibility on Menu 1 button clicks
 toggleBtn1.onclick = toggleMenu1;
 closeBtn1.onclick = function(event) {
   event.stopPropagation();
   menu1.classList.remove('menu-open');
   overlay1.classList.remove('overlay-show');
 };

 // Toggle menu and overlay visibility on Menu 2 button clicks
 toggleBtn2.onclick = toggleMenu2;
 closeBtn2.onclick = function(event) {
   event.stopPropagation();
   menu2.classList.remove('menu-open');
   overlay2.classList.remove('overlay-show');
 };

 // Overlay click for Menu 1 does nothing
 overlay1.onclick = function(event) {
   event.stopPropagation();
 };

 // Overlay click for Menu 2 does nothing
 overlay2.onclick = function(event) {
   event.stopPropagation();
 };









// Set the end date and time for the countdown (Year, Month (0-11), Day, Hours, Minutes, Seconds)
let endDate = new Date('2024-12-31T23:59:59').getTime();

// Update the countdown every second
let countdownInterval = setInterval(function() {
  // Get the current date and time
  let now = new Date().getTime();

  // Find the difference between now and the end date
  let timeRemaining = endDate - now;

  // Calculate days, hours, minutes, and seconds
  let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the result in the corresponding HTML elements
  document.getElementById('days').textContent = days < 10 ? '0' + days : days;
  document.getElementById('hours').textContent = hours < 10 ? '0' + hours : hours;
  document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
  document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;

  // If the countdown is over, stop the timer and display a message
  if (timeRemaining < 0) {
    clearInterval(countdownInterval);
    document.getElementById('days').textContent = '00';
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    alert('Countdown finished!');
  }
}, 1000);







document.getElementById('thumbnail').onclick = function() {
  var video = document.getElementById('video');
  var thumbnail = document.getElementById('thumbnail');

  thumbnail.style.display = 'none';
  video.style.display = 'block';
  video.play();
};



var videoModal = document.getElementById('videoModal');
var youtubeVideo = document.getElementById('youtubeVideo');

// When the modal is shown, autoplay the video
videoModal.addEventListener('shown.bs.modal', function () {
youtubeVideo.src += "?autoplay=1&mute=0"; // Autoplay with sound
});

// When the modal is hidden, stop the video
videoModal.addEventListener('hidden.bs.modal', function () {
var src = youtubeVideo.src;
youtubeVideo.src = ''; // Clear src to stop the video
youtubeVideo.src = src.split('?')[0]; // Reset src without autoplay parameters
});







window.onload = function() {
  // Define end values for each counter
  const counters = [
    { id: 'counter1', end: 1250 },
    { id: 'counter2', end: 400 },
    { id: 'counter3', end: 300 },
    { id: 'counter4', end: 100 }
  ];

  // Define total time for each counter to reach its end value (in milliseconds)
  const totalTime = 5000; // 5 seconds for example

  // Start each counter
  counters.forEach(counter => {
    let count = 0;
    const endValue = counter.end;
    const intervalTime = totalTime / endValue; // Time per increment

    // Start the counter
    const intervalId = setInterval(() => {
      if (count >= endValue) {
          clearInterval(intervalId);
      } else {
        count++;
        const element = document.getElementById(counter.id);
        if(element) document.getElementById(counter.id).textContent = count;
      }
    }, intervalTime);
  });
};











// function toggleHeight() {
//   var contentBox = document.getElementById("content");
//   var button = document.getElementById("toggleButton");

//   if (contentBox.classList.contains("expanded")) {
//     contentBox.classList.remove("expanded");
//     button.innerHTML = "See All FAQ’s";
//   } else {
//     contentBox.classList.add("expanded");
//     button.innerHTML = "Less All FAQ’s";
//   }
// }





// function startCounters() {
//   // Define end values for each counter
//   const counters = [
//     { id: 'counter1', end: 1250 },
//     { id: 'counter2', end: 400 },
//     { id: 'counter3', end: 300 },
//     { id: 'counter4', end: 100 }
//   ];

//   // Set the interval timing (in milliseconds)
//   const interval = 10; // Adjust this value to change the speed of counting
//   const increment = 1; // How much to increment each time

//   counters.forEach(counter => {
//     let count = 0;
//     const intervalId = setInterval(() => {
//       if (count >= counter.end) {
//           clearInterval(intervalId);
//       } else {
//         count += increment;
//         document.getElementById(counter.id).textContent = count;
//       }
//     }, interval);
//   });
// }

// // Start all counters at the same time when the page loads
// window.onload = startCounters;