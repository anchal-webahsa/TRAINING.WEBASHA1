// var btn = $('#button');

// $(window).scroll(function() {
//   if ($(window).scrollTop() > 300) {
//     btn.addClass('show');
//   } else {
//     btn.removeClass('show');
//   }
// });

// btn.on('click', function(e) {
//   e.preventDefault();
//   $('html, body').animate({scrollTop:0}, '300');
// });


// $(document).ready(function(){
//         $('.banner-slider').slick({
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           speed: 300,
//           infinite: true,
//           dots: true,
//           arrows: false,
//         });
//         $('.banner-trusted-slider').slick({
//           slidesToShow: 5,
//           slidesToScroll: 1,
//           speed: 3000,
//           autoplaySpeed: 0,
//           autoplay: true,
//           infinite: true,
//           arrows: false,
//           dots: false,
//           pauseOnFocus: false,
//           pauseOnHover: false,
//           swipe: false,
//           cssEase: 'linear',
//           responsive: [
//             {
//               breakpoint: 767,
//               settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1,
//               }
//             },
//             {
//               breakpoint: 1180,
//               settings: {
//                 slidesToShow: 4,
//                 slidesToScroll: 1,
//               }
//             },
//           ]
//         });
//         $('.our-choose-slider-left').slick({
//           slidesToShow: 6,
//           slidesToScroll: 1,
//           speed: 3000,
//           autoplaySpeed: 0,
//           autoplay: true,
//           infinite: true,
//           arrows: false,
//           dots: false,
//           pauseOnFocus: true,
//           pauseOnHover: true,
//           swipe: false,
//           cssEase: 'linear',
//           responsive: [
//             {
//               breakpoint: 767,
//               settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//               }
//             },
//             {
//               breakpoint: 1024,
//               settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1
//               }
//             },
//             {
//               breakpoint: 1366,
//               settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1
//               }
//             },
//             {
//               breakpoint: 1725,
//               settings: {
//                 slidesToShow: 5,
//                 slidesToScroll: 1
//               }
//             },
//           ]
//         });
//         $('.our-choose-slider-right').slick({
//           slidesToShow: 6,
//           slidesToScroll: 1,
//           speed: 3000,
//           autoplaySpeed: 0,
//           autoplay: true,
//           infinite: true,
//           arrows: false,
//           dots: false,
//           pauseOnFocus: true,
//           pauseOnHover: true,
//           swipe: false,
//           cssEase: 'linear',
//           rtl: true,
//           responsive: [
//             {
//               breakpoint: 767,
//               settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//               }
//             },
//             {
//               breakpoint: 1024,
//               settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1
//               }
//             },
//             {
//               breakpoint: 1366,
//               settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1
//               }
//             },
//             {
//               breakpoint: 1725,
//               settings: {
//                 slidesToShow: 5,
//                 slidesToScroll: 1
//               }
//             },
//           ]
//         });
//         $('.experience-testimonial-slider').slick({
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           speed: 300,
//           infinite: true,
//           dots: true,
//           arrows: false,
//         });
//         $('.career-straight-slider').slick({
//           slidesToShow: 5,
//           slidesToScroll: 1,
//           speed: 300,
//           infinite: true,
//           dots: false,
//           arrows: true,
//           centerMode: true,
//           centerPadding: '0',
//           focusOnSelect: true,
//           variableWidth: true,
//           responsive: [
//             {
//               breakpoint: 767,
//               settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1,
//               }
//             },
//           ]
//         });
//         // Images to switch in the right column
//         const images = [
//           'assets/img/feedback.png', // Image for slide 1
//           'assets/img/feedback.png', // Image for slide 2
//           'assets/img/feedback.png', // Image for slide 3
//           'assets/img/feedback.png', // Image for slide 4
//           'assets/img/feedback.png', // Image for slide 5
//           'assets/img/feedback.png', // Image for slide 6
//         ];

//         // Listen to afterChange event on Slick Slider
//         $('.career-straight-slider').on('afterChange', function(event, slick, currentSlide) {
//           const $img = $('#right-column-img');

//           // Add fade-out class
//           $img.addClass('fade-out');

//           // Wait for the fade-out transition to complete, then change the image
//           setTimeout(function() {
//             $img.attr('src', images[currentSlide]); // Change the image source

//             // Remove the fade-out class and fade in the new image
//             $img.removeClass('fade-out');
//           }, 500); // Match the timeout to the CSS transition duration
//         });

//         // Listen to afterChange event on Slick Slider
//         // $('.career-straight-slider').on('afterChange', function(event, slick, currentSlide) {
//         //   // Change the image in the right column based on the current slide index
//         //   $('#right-column-img').attr('src', images[currentSlide]);
//         // });



//         $('.success-speaks-reviwe-slider').slick({
//           slidesToShow: 4,
//           slidesToScroll: 1,
//           speed: 300,
//           infinite: true,
//           dots: true,
//           arrows: true,
//           responsive: [
//             {
//               breakpoint: 767,
//               settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//               }
//             },
//             {
//               breakpoint: 1180,
//               settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1
//               }
//             }
//           ]
//         });
//         // Update Slick Slider position when a pill is shown
//         $('button[data-bs-toggle="pill"]').on('shown.bs.tab', function (e) {
//           // debugger
//           $('.success-speaks-reviwe-slider').slick('setPosition'); // Adjusts the position of the slider
//         });
//         // Update Slick Slider position when a pill is shown
//         // $('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
//         //   $('.success-speaks-reviwe-slider').slick('setPosition'); // Adjusts the position of the slider
//         // });

//         $('.our-learners-slider-one').slick({
//           slidesToShow: 10,
//           slidesToScroll: 1,
//           speed: 3000,
//           autoplaySpeed: 0,
//           autoplay: true,
//           infinite: true,
//           arrows: false,
//           dots: false,
//           pauseOnFocus: true,
//           pauseOnHover: true,
//           swipe: false,
//           cssEase: 'linear',
//           responsive: [
//             {
//               breakpoint: 767,
//               settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1
//               }
//             },
//             {
//               breakpoint: 1024,
//               settings: {
//                 slidesToShow: 4,
//                 slidesToScroll: 1
//               }
//             },
//             {
//               breakpoint: 1366,
//               settings: {
//                 slidesToShow: 5,
//                 slidesToScroll: 1
//               }
//             },
//             {
//               breakpoint: 1725,
//               settings: {
//                 slidesToShow: 8,
//                 slidesToScroll: 1
//               }
//             },
//           ]
//         });
//         $('.our-learners-slider-two').slick({
//           slidesToShow: 10,
//           slidesToScroll: 1,
//           speed: 3000,
//           autoplaySpeed: 0,
//           autoplay: true,
//           infinite: true,
//           arrows: false,
//           dots: false,
//           pauseOnFocus: true,
//           pauseOnHover: true,
//           swipe: false,
//           cssEase: 'linear',
//           rtl: true,
//           responsive: [
//             {
//               breakpoint: 767,
//               settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1
//               }
//             },
//             {
//               breakpoint: 1024,
//               settings: {
//                 slidesToShow: 4,
//                 slidesToScroll: 1
//               }
//             },
//             {
//               breakpoint: 1366,
//               settings: {
//                 slidesToShow: 4,
//                 slidesToScroll: 1
//               }
//             },
//             {
//               breakpoint: 1725,
//               settings: {
//                 slidesToShow: 8,
//                 slidesToScroll: 1
//               }
//             },
//           ]
//         });
//       });
//       jQuery(document).ready(function(){
//         jQuery('.scrollbar-inner').scrollbar();
//       });
//       function showContent() {
//         var x = document.getElementById("myDIV");
//         x.style.display = "block";
//       };
//       function hideContent() {
//         var x = document.getElementById("myDIV");
//         x.style.display = "none";
//       };



// 	        $(document).ready(function(){
//         $('.slider-for').slick({
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           arrows: false,
//           fade: true,
//           dots: false,
//           asNavFor: '.slider-nav'
//         });
//         $('.slider-nav').slick({
//           slidesToShow: 4,
//           slidesToScroll: 1,
//           asNavFor: '.slider-for',
//           dots: false,
//           arrows: true,
//           // centerMode: true,
//           focusOnSelect: true
//         });
//         $('.accredited-slider').slick({
//           slidesToShow: 5,
//           slidesToScroll: 1,
//           speed: 3000,
//           autoplaySpeed: 0,
//           autoplay: true,
//           infinite: true,
//           arrows: false,
//           dots: false,
//           pauseOnFocus: false,
//           pauseOnHover: false,
//           swipe: false,
//           cssEase: 'linear',
//           responsive: [
//             {
//               breakpoint: 767,
//               settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1,
//               }
//             },
//             {
//               breakpoint: 1180,
//               settings: {
//                 slidesToShow: 4,
//                 slidesToScroll: 1,
//               }
//             },
//           ]
//         });
//         $('.slider-ceh').slick({
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           speed: 300,
//           infinite: true,
//           dots: true,
//           arrows: false,
//           autoplay: true,
//           autoplaySpeed: 3000
//         });
//         /* ...Certified Candidates Slider... */
//         $('.certified-candidates-slider').slick({
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           speed: 3000,
//           autoplaySpeed: 0,
//           autoplay: true,
//           infinite: true,
//           arrows: false,
//           dots: false,
//           pauseOnFocus: true,
//           pauseOnHover: true,
//           swipe: true,
//           cssEase: 'linear',
//           responsive: [
//             {
//               breakpoint: 767,
//               settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1,
//               }
//             },
//             {
//               breakpoint: 1180,
//               settings: {
//                 slidesToShow: 4,
//                 slidesToScroll: 1,
//               }
//             },
//           ]
//         });
//         /* ...Certified Candidates Video Slider... */
//         $('.course-recent-reviews-slider').slick({
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           centerMode: true,
//           arrows: false,
//           dots: false,
//           speed: 300,
//           centerPadding: '60px',
//           infinite: true,
//           autoplaySpeed: 5000,
//           autoplay: true,
//           responsive: [
//             {
//               breakpoint: 768,
//               settings: {
//                 arrows: false,
//                 centerMode: true,
//                 centerPadding: '40px',
//                 slidesToShow: 3
//               }
//             },
//             {
//               breakpoint: 480,
//               settings: {
//                 arrows: false,
//                 centerMode: true,
//                 centerPadding: '40px',
//                 slidesToShow: 1
//               }
//             }
//           ]
//         });
//         /* ...Brands Slider... */
//         $('.course-our-recent-placement-slider').slick({
//           slidesToShow: 5,
//           slidesToScroll: 1,
//           centerMode: true,
//           arrows: false,
//           dots: false,
//           speed: 300,
//           centerPadding: '60px',
//           autoplaySpeed: 5000,
//           autoplay: true,
//           responsive: [
//             {
//               breakpoint: 768,
//               settings: {
//                 arrows: false,
//                 centerMode: true,
//                 centerPadding: '40px',
//                 slidesToShow: 3
//               }
//             },
//             {
//               breakpoint: 480,
//               settings: {
//                 arrows: false,
//                 centerMode: true,
//                 centerPadding: '40px',
//                 slidesToShow: 1
//               }
//             }
//           ]
//         });
//         /* ...Certified Candidates Reviews Slider... */
//         $('.course-discover-profile-slider').slick({
//           dots: false,
//           arrows: true,
//           infinite: true,
//           speed: 300,
//           slidesToShow: 4,
//           slidesToScroll: 1,
//           responsive: [
//             {
//               breakpoint: 769,
//               settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 dots: true
//               }
//             },
//             {
//               breakpoint: 600,
//               settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2
//               }
//             },
//             {
//               breakpoint: 480,
//               settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//               }
//             }
//           ]
//         });
//         /* ...Certified Candidates Slider... */
//         $('.success-speaks-reviwe-slider').slick({
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           speed: 300,
//           infinite: true,
//           dots: true,
//           arrows: true,
//           responsive: [
//             {
//               breakpoint: 767,
//               settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//               }
//             },
//             {
//               breakpoint: 1180,
//               settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1
//               }
//             }
//           ]
//         });

//         $('.carousel-image').on('click', function() {
//           const imageUrl = $(this).data('image-url');
//           $('#imagePreview').attr('src', imageUrl);
//         });

//         $('#toggleViewMoreFAQ').on('click', function() {
//             // Show all hidden accordion items
//             $('#coursefaqAccordionFlush .accordion-item.d-none').removeClass('d-none');
//             // Hide the "View More" button after click
//             $(this).hide();
//         });

//       });
//       jQuery(document).ready(function(){
//         jQuery('.scrollbar-inner').scrollbar();
//       });
//       function showContent() {
//         var x = document.getElementById("myDIV");
//         x.style.display = "block";
//       };
//       function hideContent() {
//         var x = document.getElementById("myDIV");
//         x.style.display = "none";
//       };

//       document.addEventListener('DOMContentLoaded', function() {
//         // Get all video buttons
//         const videoBtns = document.querySelectorAll('.video-btn');
//         const videoFrame = document.getElementById('videoFrame');

//         // When any video button is clicked
//         videoBtns.forEach(button => {
//             button.addEventListener('click', function() {
//                 const videoId = this.getAttribute('data-video-id');
//                 const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0`;

//                 // Update the iframe's src attribute to load the video
//                 videoFrame.src = videoUrl;
//             });
//         });
//         // Clear the iframe source when modal is closed to stop the video
//         document.getElementById('videoModal').addEventListener('hidden.bs.modal', function () {
//             videoFrame.src = '';
//         });
//     });






/* ============================================================
 custom.js – fixed for React + vanilla JS coexistence
 Fixes:
 1. Null-guard on videoFrame / videoModal (not on every page)
 2. Consolidated duplicate $(document).ready() blocks
 3. Removed duplicate showContent / hideContent definitions
 4. All DOM queries guarded with existence checks
 ============================================================ */






















// /* ---------- Back-to-top button ---------- */
// var btn = $('#button');

// $(window).scroll(function () {
//   if ($(window).scrollTop() > 300) {
//     btn.addClass('show');
//   } else {
//     btn.removeClass('show');
//   }
// });

// btn.on('click', function (e) {
//   e.preventDefault();
//   $('html, body').animate({ scrollTop: 0 }, '300');
// });

// /* ---------- All sliders + UI — single ready block ---------- */
// $(document).ready(function () {

//   /* --- Banner slider --- */
//   if ($('.banner-slider').length) {
//     $('.banner-slider').slick({
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       speed: 300,
//       infinite: true,
//       dots: true,
//       arrows: false,
//     });
//   }

// //   /* --- Banner trusted slider --- */
//   if ($('.banner-trusted-slider').length) {
//     $('.banner-trusted-slider').slick({
//       slidesToShow: 5,
//       slidesToScroll: 1,
//       speed: 3000,
//       autoplaySpeed: 0,
//       autoplay: true,
//       infinite: true,
//       arrows: false,
//       dots: false,
//       pauseOnFocus: false,
//       pauseOnHover: false,
//       swipe: false,
//       cssEase: 'linear',
//       responsive: [
//         { breakpoint: 767,  settings: { slidesToShow: 3, slidesToScroll: 1 } },
//         { breakpoint: 1180, settings: { slidesToShow: 4, slidesToScroll: 1 } },
//       ],
//     });
//   }

//   /* --- Our-choose left slider --- */
//   if ($('.our-choose-slider-left').length) {
//     $('.our-choose-slider-left').slick({
//       slidesToShow: 6,
//       slidesToScroll: 1,
//       speed: 3000,
//       autoplaySpeed: 0,
//       autoplay: true,
//       infinite: true,
//       arrows: false,
//       dots: false,
//       pauseOnFocus: true,
//       pauseOnHover: true,
//       swipe: false,
//       cssEase: 'linear',
//       responsive: [
//         { breakpoint: 767,  settings: { slidesToShow: 1, slidesToScroll: 1 } },
//         { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
//         { breakpoint: 1366, settings: { slidesToShow: 3, slidesToScroll: 1 } },
//         { breakpoint: 1725, settings: { slidesToShow: 5, slidesToScroll: 1 } },
//       ],
//     });
//   }

// //   /* --- Our-choose right slider --- */
//   if ($('.our-choose-slider-right').length) {
//     $('.our-choose-slider-right').slick({
//       slidesToShow: 6,
//       slidesToScroll: 1,
//       speed: 3000,
//       autoplaySpeed: 0,
//       autoplay: true,
//       infinite: true,
//       arrows: false,
//       dots: false,
//       pauseOnFocus: true,
//       pauseOnHover: true,
//       swipe: false,
//       cssEase: 'linear',
//       rtl: true,
//       responsive: [
//         { breakpoint: 767,  settings: { slidesToShow: 1, slidesToScroll: 1 } },
//         { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
//         { breakpoint: 1366, settings: { slidesToShow: 3, slidesToScroll: 1 } },
//         { breakpoint: 1725, settings: { slidesToShow: 5, slidesToScroll: 1 } },
//       ],
//     });
//   }

// //   /* --- Experience testimonial slider --- */
//   if ($('.experience-testimonial-slider').length) {
//     $('.experience-testimonial-slider').slick({
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       speed: 300,
//       infinite: true,
//       dots: true,
//       arrows: false,
//     });
//   }

//   /* --- Career straight slider --- */
//   if ($('.career-straight-slider').length) {
//     $('.career-straight-slider').slick({
//       slidesToShow: 5,
//       slidesToScroll: 1,
//       speed: 300,
//       infinite: true,
//       dots: false,
//       arrows: true,
//       centerMode: true,
//       centerPadding: '0',
//       focusOnSelect: true,
//       variableWidth: true,
//       responsive: [
//         { breakpoint: 767, settings: { slidesToShow: 3, slidesToScroll: 1 } },
//       ],
//     });

//     /* Right-column image fade on slide change */
//     const images = [
//       'assets/img/feedback.png',
//       'assets/img/feedback.png',
//       'assets/img/feedback.png',
//       'assets/img/feedback.png',
//       'assets/img/feedback.png',
//       'assets/img/feedback.png',
//     ];

//     $('.career-straight-slider').on('afterChange', function (event, slick, currentSlide) {
//       var $img = $('#right-column-img');
//       if (!$img.length) return; // guard: element may not exist on this page
//       $img.addClass('fade-out');
//       setTimeout(function () {
//         $img.attr('src', images[currentSlide]);
//         $img.removeClass('fade-out');
//       }, 500);
//     });
//   }

//   /* --- Success speaks review slider (home) --- */
//   if ($('.success-speaks-reviwe-slider').length) {
//     $('.success-speaks-reviwe-slider').slick({
//       slidesToShow: 4,
//       slidesToScroll: 1,
//       speed: 300,
//       infinite: true,
//       dots: true,
//       arrows: true,
//       responsive: [
//         { breakpoint: 767,  settings: { slidesToShow: 1, slidesToScroll: 1 } },
//         { breakpoint: 1180, settings: { slidesToShow: 2, slidesToScroll: 1 } },
//       ],
//     });

//     /* Re-position slider when Bootstrap pill tab changes */
//     $('button[data-bs-toggle="pill"]').on('shown.bs.tab', function () {
//       $('.success-speaks-reviwe-slider').slick('setPosition');
//     });
//   }

//   /* --- Our learners slider one --- */
//   if ($('.our-learners-slider-one').length) {
//     $('.our-learners-slider-one').slick({
//       slidesToShow: 10,
//       slidesToScroll: 1,
//       speed: 3000,
//       autoplaySpeed: 0,
//       autoplay: true,
//       infinite: true,
//       arrows: false,
//       dots: false,
//       pauseOnFocus: true,
//       pauseOnHover: true,
//       swipe: false,
//       cssEase: 'linear',
//       responsive: [
//         { breakpoint: 767,  settings: { slidesToShow: 3, slidesToScroll: 1 } },
//         { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 1 } },
//         { breakpoint: 1366, settings: { slidesToShow: 5, slidesToScroll: 1 } },
//         { breakpoint: 1725, settings: { slidesToShow: 8, slidesToScroll: 1 } },
//       ],
//     });
//   }

//   /* --- Our learners slider two --- */
//   if ($('.our-learners-slider-two').length) {
//     $('.our-learners-slider-two').slick({
//       slidesToShow: 10,
//       slidesToScroll: 1,
//       speed: 3000,
//       autoplaySpeed: 0,
//       autoplay: true,
//       infinite: true,
//       arrows: false,
//       dots: false,
//       pauseOnFocus: true,
//       pauseOnHover: true,
//       swipe: false,
//       cssEase: 'linear',
//       rtl: true,
//       responsive: [
//         { breakpoint: 767,  settings: { slidesToShow: 3, slidesToScroll: 1 } },
//         { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 1 } },
//         { breakpoint: 1366, settings: { slidesToShow: 4, slidesToScroll: 1 } },
//         { breakpoint: 1725, settings: { slidesToShow: 8, slidesToScroll: 1 } },
//       ],
//     });
//   }

//   /* --- Course-page sliders --- */
//   if ($('.slider-for').length) {
//     $('.slider-for').slick({
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       arrows: false,
//       fade: true,
//       dots: false,
//       asNavFor: '.slider-nav',
//     });
//   }

//   if ($('.slider-nav').length) {
//     $('.slider-nav').slick({
//       slidesToShow: 4,
//       slidesToScroll: 1,
//       asNavFor: '.slider-for',
//       dots: false,
//       arrows: true,
//       focusOnSelect: true,
//     });
//   }

//   if ($('.accredited-slider').length) {
//     $('.accredited-slider').slick({
//       slidesToShow: 5,
//       slidesToScroll: 1,
//       speed: 3000,
//       autoplaySpeed: 0,
//       autoplay: true,
//       infinite: true,
//       arrows: false,
//       dots: false,
//       pauseOnFocus: false,
//       pauseOnHover: false,
//       swipe: false,
//       cssEase: 'linear',
//       responsive: [
//         { breakpoint: 767,  settings: { slidesToShow: 3, slidesToScroll: 1 } },
//         { breakpoint: 1180, settings: { slidesToShow: 4, slidesToScroll: 1 } },
//       ],
//     });
//   }

//   if ($('.slider-ceh').length) {
//     $('.slider-ceh').slick({
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       speed: 300,
//       infinite: true,
//       dots: true,
//       arrows: false,
//       autoplay: true,
//       autoplaySpeed: 3000,
//     });
//   }

//   if ($('.certified-candidates-slider').length) {
//     $('.certified-candidates-slider').slick({
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       speed: 3000,
//       autoplaySpeed: 0,
//       autoplay: true,
//       infinite: true,
//       arrows: false,
//       dots: false,
//       pauseOnFocus: true,
//       pauseOnHover: true,
//       swipe: true,
//       cssEase: 'linear',
//       responsive: [
//         { breakpoint: 767,  settings: { slidesToShow: 3, slidesToScroll: 1 } },
//         { breakpoint: 1180, settings: { slidesToShow: 4, slidesToScroll: 1 } },
//       ],
//     });
//   }

//   if ($('.course-recent-reviews-slider').length) {
//     $('.course-recent-reviews-slider').slick({
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       centerMode: true,
//       arrows: false,
//       dots: false,
//       speed: 300,
//       centerPadding: '60px',
//       infinite: true,
//       autoplaySpeed: 5000,
//       autoplay: true,
//       responsive: [
//         { breakpoint: 768, settings: { arrows: false, centerMode: true, centerPadding: '40px', slidesToShow: 3 } },
//         { breakpoint: 480, settings: { arrows: false, centerMode: true, centerPadding: '40px', slidesToShow: 1 } },
//       ],
//     });
//   }

//   if ($('.course-our-recent-placement-slider').length) {
//     $('.course-our-recent-placement-slider').slick({
//       slidesToShow: 5,
//       slidesToScroll: 1,
//       centerMode: true,
//       arrows: false,
//       dots: false,
//       speed: 300,
//       centerPadding: '60px',
//       autoplaySpeed: 5000,
//       autoplay: true,
//       responsive: [
//         { breakpoint: 768, settings: { arrows: false, centerMode: true, centerPadding: '40px', slidesToShow: 3 } },
//         { breakpoint: 480, settings: { arrows: false, centerMode: true, centerPadding: '40px', slidesToShow: 1 } },
//       ],
//     });
//   }

//   if ($('.course-discover-profile-slider').length) {
//     $('.course-discover-profile-slider').slick({
//       dots: false,
//       arrows: true,
//       infinite: true,
//       speed: 300,
//       slidesToShow: 4,
//       slidesToScroll: 1,
//       responsive: [
//         { breakpoint: 769, settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true, dots: true } },
//         { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
//         { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
//       ],
//     });
//   }

//   /* --- Carousel image preview --- */
//   $('.carousel-image').on('click', function () {
//     var imageUrl = $(this).data('image-url');
//     $('#imagePreview').attr('src', imageUrl);
//   });

//   /* --- FAQ view more --- */
//   $('#toggleViewMoreFAQ').on('click', function () {
//     $('#coursefaqAccordionFlush .accordion-item.d-none').removeClass('d-none');
//     $(this).hide();
//   });

// }); // end $(document).ready


// /* ---------- jQuery scrollbar plugin ---------- */
// jQuery(document).ready(function () {
//   if (jQuery('.scrollbar-inner').length) {
//     jQuery('.scrollbar-inner').scrollbar();
//   }
// });


// /* ---------- Show / Hide content helpers ---------- */
// function showContent() {
//   var x = document.getElementById('myDIV');
//   if (x) x.style.display = 'block';
// }

// function hideContent() {
//   var x = document.getElementById('myDIV');
//   if (x) x.style.display = 'none';
// }


// /* ---------- Video modal (guarded — element may not exist on every page) ---------- */
// document.addEventListener('DOMContentLoaded', function () {
//   var videoFrame = document.getElementById('videoFrame');
//   var videoModal = document.getElementById('videoModal');

//   /* Only run if both elements exist on this page */
//   if (!videoFrame || !videoModal) return;

//   /* Attach click handlers to all video-trigger buttons */
//   var videoBtns = document.querySelectorAll('.video-btn');
//   videoBtns.forEach(function (button) {
//     button.addEventListener('click', function () {
//       var videoId = this.getAttribute('data-video-id');
//       videoFrame.src = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&mute=0';
//     });
//   });

//   /* Stop video playback when modal is closed */
//   videoModal.addEventListener('hidden.bs.modal', function () {
//     videoFrame.src = '';
//   });
// });















// /**
//  * useCustomScripts.js
//  *
//  * Converts all vanilla-JS / jQuery logic from custom.js into a React-friendly
//  * custom hook.  Import and call this hook once inside your root layout component
//  * (e.g. App.jsx or Layout.jsx) after the page has mounted.
//  *
//  * Prerequisites (install once):
//  *   npm install slick-carousel jquery
//  *
//  * In your entry file (main.jsx / index.jsx) add:
//  *   import 'slick-carousel/slick/slick.css';
//  *   import 'slick-carousel/slick/slick-theme.css';
//  *   import $ from 'jquery';
//  *   window.$ = window.jQuery = $;        // make $ global so slick can find it
//  *
//  * Usage:
//  *   import useCustomScripts from './useCustomScripts';
//  *   function App() { useCustomScripts(); return <Layout />; }
//  */

// import { useEffect } from 'react';

// /* ─── tiny helper: only call .slick() when the element exists ─── */
// function initSlick(selector, options) {
//   const $el = window.$(selector);
//   if ($el.length) $el.slick(options);
// }

// export default function useCustomScripts() {
//   useEffect(() => {
//     const $ = window.$;
//     if (!$) {
//       console.warn('useCustomScripts: jQuery not found on window.$');
//       return;
//     }

//     /* ── 1. Back-to-top button ── */
//     const $btn = $('#button');

//     function handleScroll() {
//       if ($(window).scrollTop() > 300) {
//         $btn.addClass('show');
//       } else {
//         $btn.removeClass('show');
//       }
//     }
//     $(window).on('scroll', handleScroll);

//     $btn.on('click', function (e) {
//       e.preventDefault();
//       $('html, body').animate({ scrollTop: 0 }, 300);
//     });

//     /* ── 2. Slick sliders ── */

//     initSlick('.banner-slider', {
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       speed: 300,
//       infinite: true,
//       dots: true,
//       arrows: false,
//     });

//     initSlick('.banner-trusted-slider', {
//       slidesToShow: 5,
//       slidesToScroll: 1,
//       speed: 3000,
//       autoplaySpeed: 0,
//       autoplay: true,
//       infinite: true,
//       arrows: false,
//       dots: false,
//       pauseOnFocus: false,
//       pauseOnHover: false,
//       swipe: false,
//       cssEase: 'linear',
//       responsive: [
//         { breakpoint: 767,  settings: { slidesToShow: 3, slidesToScroll: 1 } },
//         { breakpoint: 1180, settings: { slidesToShow: 4, slidesToScroll: 1 } },
//       ],
//     });

//     initSlick('.our-choose-slider-left', {
//       slidesToShow: 6,
//       slidesToScroll: 1,
//       speed: 3000,
//       autoplaySpeed: 0,
//       autoplay: true,
//       infinite: true,
//       arrows: false,
//       dots: false,
//       pauseOnFocus: true,
//       pauseOnHover: true,
//       swipe: false,
//       cssEase: 'linear',
//       responsive: [
//         { breakpoint: 767,  settings: { slidesToShow: 1, slidesToScroll: 1 } },
//         { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
//         { breakpoint: 1366, settings: { slidesToShow: 3, slidesToScroll: 1 } },
//         { breakpoint: 1725, settings: { slidesToShow: 5, slidesToScroll: 1 } },
//       ],
//     });

//     initSlick('.our-choose-slider-right', {
//       slidesToShow: 6,
//       slidesToScroll: 1,
//       speed: 3000,
//       autoplaySpeed: 0,
//       autoplay: true,
//       infinite: true,
//       arrows: false,
//       dots: false,
//       pauseOnFocus: true,
//       pauseOnHover: true,
//       swipe: false,
//       cssEase: 'linear',
//       rtl: true,
//       responsive: [
//         { breakpoint: 767,  settings: { slidesToShow: 1, slidesToScroll: 1 } },
//         { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
//         { breakpoint: 1366, settings: { slidesToShow: 3, slidesToScroll: 1 } },
//         { breakpoint: 1725, settings: { slidesToShow: 5, slidesToScroll: 1 } },
//       ],
//     });

//     initSlick('.experience-testimonial-slider', {
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       speed: 300,
//       infinite: true,
//       dots: true,
//       arrows: false,
//     });

//     /* Career slider + right-column image swap */
//     if ($('.career-straight-slider').length) {
//       $('.career-straight-slider').slick({
//         slidesToShow: 5,
//         slidesToScroll: 1,
//         speed: 300,
//         infinite: true,
//         dots: false,
//         arrows: true,
//         centerMode: true,
//         centerPadding: '0',
//         focusOnSelect: true,
//         variableWidth: true,
//         responsive: [
//           { breakpoint: 767, settings: { slidesToShow: 3, slidesToScroll: 1 } },
//         ],
//       });

//       const images = [
//         'assets/img/feedback.png',
//         'assets/img/feedback.png',
//         'assets/img/feedback.png',
//         'assets/img/feedback.png',
//         'assets/img/feedback.png',
//         'assets/img/feedback.png',
//       ];

//       $('.career-straight-slider').on('afterChange', function (_e, _slick, currentSlide) {
//         const $img = $('#right-column-img');
//         if (!$img.length) return;
//         $img.addClass('fade-out');
//         setTimeout(() => {
//           $img.attr('src', images[currentSlide]);
//           $img.removeClass('fade-out');
//         }, 500);
//       });
//     }

//     /* Success-speaks slider (home — 4 slides) */
//     if ($('.success-speaks-reviwe-slider').length) {
//       $('.success-speaks-reviwe-slider').slick({
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         speed: 300,
//         infinite: true,
//         dots: true,
//         arrows: true,
//         responsive: [
//           { breakpoint: 767,  settings: { slidesToShow: 1, slidesToScroll: 1 } },
//           { breakpoint: 1180, settings: { slidesToShow: 2, slidesToScroll: 1 } },
//         ],
//       });

//       $('button[data-bs-toggle="pill"]').on('shown.bs.tab', function () {
//         $('.success-speaks-reviwe-slider').slick('setPosition');
//       });
//     }

//     initSlick('.our-learners-slider-one', {
//       slidesToShow: 10,
//       slidesToScroll: 1,
//       speed: 3000,
//       autoplaySpeed: 0,
//       autoplay: true,
//       infinite: true,
//       arrows: false,
//       dots: false,
//       pauseOnFocus: true,
//       pauseOnHover: true,
//       swipe: false,
//       cssEase: 'linear',
//       responsive: [
//         { breakpoint: 767,  settings: { slidesToShow: 3, slidesToScroll: 1 } },
//         { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 1 } },
//         { breakpoint: 1366, settings: { slidesToShow: 5, slidesToScroll: 1 } },
//         { breakpoint: 1725, settings: { slidesToShow: 8, slidesToScroll: 1 } },
//       ],
//     });

//     initSlick('.our-learners-slider-two', {
//       slidesToShow: 10,
//       slidesToScroll: 1,
//       speed: 3000,
//       autoplaySpeed: 0,
//       autoplay: true,
//       infinite: true,
//       arrows: false,
//       dots: false,
//       pauseOnFocus: true,
//       pauseOnHover: true,
//       swipe: false,
//       cssEase: 'linear',
//       rtl: true,
//       responsive: [
//         { breakpoint: 767,  settings: { slidesToShow: 3, slidesToScroll: 1 } },
//         { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 1 } },
//         { breakpoint: 1366, settings: { slidesToShow: 4, slidesToScroll: 1 } },
//         { breakpoint: 1725, settings: { slidesToShow: 8, slidesToScroll: 1 } },
//       ],
//     });

//     /* ── Course-page sliders ── */
//     if ($('.slider-for').length) {
//       $('.slider-for').slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: false,
//         fade: true,
//         dots: false,
//         asNavFor: '.slider-nav',
//       });
//     }

//     initSlick('.slider-nav', {
//       slidesToShow: 4,
//       slidesToScroll: 1,
//       asNavFor: '.slider-for',
//       dots: false,
//       arrows: true,
//       focusOnSelect: true,
//     });

//     initSlick('.accredited-slider', {
//       slidesToShow: 5,
//       slidesToScroll: 1,
//       speed: 3000,
//       autoplaySpeed: 0,
//       autoplay: true,
//       infinite: true,
//       arrows: false,
//       dots: false,
//       pauseOnFocus: false,
//       pauseOnHover: false,
//       swipe: false,
//       cssEase: 'linear',
//       responsive: [
//         { breakpoint: 767,  settings: { slidesToShow: 3, slidesToScroll: 1 } },
//         { breakpoint: 1180, settings: { slidesToShow: 4, slidesToScroll: 1 } },
//       ],
//     });

//     initSlick('.slider-ceh', {
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       speed: 300,
//       infinite: true,
//       dots: true,
//       arrows: false,
//       autoplay: true,
//       autoplaySpeed: 3000,
//     });

//     initSlick('.certified-candidates-slider', {
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       speed: 3000,
//       autoplaySpeed: 0,
//       autoplay: true,
//       infinite: true,
//       arrows: false,
//       dots: false,
//       pauseOnFocus: true,
//       pauseOnHover: true,
//       swipe: true,
//       cssEase: 'linear',
//       responsive: [
//         { breakpoint: 767,  settings: { slidesToShow: 3, slidesToScroll: 1 } },
//         { breakpoint: 1180, settings: { slidesToShow: 4, slidesToScroll: 1 } },
//       ],
//     });

//     initSlick('.course-recent-reviews-slider', {
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       centerMode: true,
//       arrows: false,
//       dots: false,
//       speed: 300,
//       centerPadding: '60px',
//       infinite: true,
//       autoplaySpeed: 5000,
//       autoplay: true,
//       responsive: [
//         { breakpoint: 768, settings: { arrows: false, centerMode: true, centerPadding: '40px', slidesToShow: 3 } },
//         { breakpoint: 480, settings: { arrows: false, centerMode: true, centerPadding: '40px', slidesToShow: 1 } },
//       ],
//     });

//     initSlick('.course-our-recent-placement-slider', {
//       slidesToShow: 5,
//       slidesToScroll: 1,
//       centerMode: true,
//       arrows: false,
//       dots: false,
//       speed: 300,
//       centerPadding: '60px',
//       autoplaySpeed: 5000,
//       autoplay: true,
//       responsive: [
//         { breakpoint: 768, settings: { arrows: false, centerMode: true, centerPadding: '40px', slidesToShow: 3 } },
//         { breakpoint: 480, settings: { arrows: false, centerMode: true, centerPadding: '40px', slidesToShow: 1 } },
//       ],
//     });

//     initSlick('.course-discover-profile-slider', {
//       dots: false,
//       arrows: true,
//       infinite: true,
//       speed: 300,
//       slidesToShow: 4,
//       slidesToScroll: 1,
//       responsive: [
//         { breakpoint: 769, settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true, dots: true } },
//         { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
//         { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
//       ],
//     });

//     /* ── 3. Carousel image preview ── */
//     $(document).on('click', '.carousel-image', function () {
//       const imageUrl = $(this).data('image-url');
//       $('#imagePreview').attr('src', imageUrl);
//     });

//     /* ── 4. FAQ view-more toggle ── */
//     $(document).on('click', '#toggleViewMoreFAQ', function () {
//       $('#coursefaqAccordionFlush .accordion-item.d-none').removeClass('d-none');
//       $(this).hide();
//     });

//     /* ── 5. jQuery scrollbar plugin ── */
//     if (window.jQuery && $('.scrollbar-inner').length) {
//       try { $('.scrollbar-inner').scrollbar(); } catch (_) {}
//     }

//     /* ── 6. Video modal (only pages that have #videoFrame + #videoModal) ── */
//     const videoFrame = document.getElementById('videoFrame');
//     const videoModal = document.getElementById('videoModal');

//     let cleanupVideoModal = null;

//     if (videoFrame && videoModal) {
//       const handleVideoBtnClick = function () {
//         const videoId = this.getAttribute('data-video-id');
//         videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0`;
//       };

//       const videoBtns = document.querySelectorAll('.video-btn');
//       videoBtns.forEach((btn) => btn.addEventListener('click', handleVideoBtnClick));

//       const handleModalHide = () => { videoFrame.src = ''; };
//       videoModal.addEventListener('hidden.bs.modal', handleModalHide);

//       cleanupVideoModal = () => {
//         videoBtns.forEach((btn) => btn.removeEventListener('click', handleVideoBtnClick));
//         videoModal.removeEventListener('hidden.bs.modal', handleModalHide);
//       };
//     }

//     /* ── Cleanup on unmount ── */
//     return () => {
//       $(window).off('scroll', handleScroll);
//       $btn.off('click');

//       const sliderSelectors = [
//         '.banner-slider', '.banner-trusted-slider',
//         '.our-choose-slider-left', '.our-choose-slider-right',
//         '.experience-testimonial-slider', '.career-straight-slider',
//         '.success-speaks-reviwe-slider', '.our-learners-slider-one',
//         '.our-learners-slider-two', '.slider-for', '.slider-nav',
//         '.accredited-slider', '.slider-ceh', '.certified-candidates-slider',
//         '.course-recent-reviews-slider', '.course-our-recent-placement-slider',
//         '.course-discover-profile-slider',
//       ];
//       sliderSelectors.forEach((sel) => {
//         try {
//           const $el = $(sel);
//           if ($el.length && $el.hasClass('slick-initialized')) {
//             $el.slick('unslick');
//           }
//         } catch (_) {}
//       });

//       $(document).off('click', '.carousel-image');
//       $(document).off('click', '#toggleViewMoreFAQ');
//       if (cleanupVideoModal) cleanupVideoModal();
//     };
//   }, []); // run once on mount
// }



var btn = $('#button');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});


$(document).ready(function () {
  $('.banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    infinite: true,
    dots: true,
    arrows: false,
  });
  $('.banner-trusted-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 3000,
    autoplaySpeed: 0,
    autoplay: true,
    infinite: true,
    arrows: false,
    dots: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    swipe: false,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
    ]
  });
  $('.our-choose-slider-left').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 3000,
    autoplaySpeed: 0,
    autoplay: true,
    infinite: true,
    arrows: false,
    dots: false,
    pauseOnFocus: true,
    pauseOnHover: true,
    swipe: false,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1725,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
    ]
  });
  $('.our-choose-slider-right').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 3000,
    autoplaySpeed: 0,
    autoplay: true,
    infinite: true,
    arrows: false,
    dots: false,
    pauseOnFocus: true,
    pauseOnHover: true,
    swipe: false,
    cssEase: 'linear',
    rtl: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1725,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
    ]
  });
  $('.experience-testimonial-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    infinite: true,
    dots: true,
    arrows: false,
  });
  $('.career-straight-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 300,
    infinite: true,
    dots: false,
    arrows: true,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
    ]
  });
  // Images to switch in the right column
  const images = [
    'assets/img/feedback.png', // Image for slide 1
    'assets/img/feedback.png', // Image for slide 2
    'assets/img/feedback.png', // Image for slide 3
    'assets/img/feedback.png', // Image for slide 4
    'assets/img/feedback.png', // Image for slide 5
    'assets/img/feedback.png', // Image for slide 6
  ];

  // Listen to afterChange event on Slick Slider
  $('.career-straight-slider').on('afterChange', function (event, slick, currentSlide) {
    const $img = $('#right-column-img');

    // Add fade-out class
    $img.addClass('fade-out');

    // Wait for the fade-out transition to complete, then change the image
    setTimeout(function () {
      $img.attr('src', images[currentSlide]); // Change the image source

      // Remove the fade-out class and fade in the new image
      $img.removeClass('fade-out');
    }, 500); // Match the timeout to the CSS transition duration
  });

  // Listen to afterChange event on Slick Slider
  // $('.career-straight-slider').on('afterChange', function(event, slick, currentSlide) {
  //   // Change the image in the right column based on the current slide index
  //   $('#right-column-img').attr('src', images[currentSlide]);
  // });



  $('.success-speaks-reviwe-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 300,
    infinite: true,
    dots: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
  // Update Slick Slider position when a pill is shown
  $('button[data-bs-toggle="pill"]').on('shown.bs.tab', function (e) {
    // debugger
    $('.success-speaks-reviwe-slider').slick('setPosition'); // Adjusts the position of the slider
  });
  // Update Slick Slider position when a pill is shown
  // $('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
  //   $('.success-speaks-reviwe-slider').slick('setPosition'); // Adjusts the position of the slider
  // });

  $('.our-learners-slider-one').slick({
    slidesToShow: 10,
    slidesToScroll: 1,
    speed: 3000,
    autoplaySpeed: 0,
    autoplay: true,
    infinite: true,
    arrows: false,
    dots: false,
    pauseOnFocus: true,
    pauseOnHover: true,
    swipe: false,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1725,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1
        }
      },
    ]
  });
  $('.our-learners-slider-two').slick({
    slidesToShow: 10,
    slidesToScroll: 1,
    speed: 3000,
    autoplaySpeed: 0,
    autoplay: true,
    infinite: true,
    arrows: false,
    dots: false,
    pauseOnFocus: true,
    pauseOnHover: true,
    swipe: false,
    cssEase: 'linear',
    rtl: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1725,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1
        }
      },
    ]
  });
});
jQuery(document).ready(function () {
  jQuery('.scrollbar-inner').scrollbar();
});
function showContent() {
  var x = document.getElementById("myDIV");
  x.style.display = "block";
};
function hideContent() {
  var x = document.getElementById("myDIV");
  x.style.display = "none";
};



$(document).ready(function () {
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots: false,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: true,
    // centerMode: true,
    focusOnSelect: true
  });
  $('.accredited-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 3000,
    autoplaySpeed: 0,
    autoplay: true,
    infinite: true,
    arrows: false,
    dots: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    swipe: false,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
    ]
  });
  $('.slider-ceh').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000
  });
  /* ...Certified Candidates Slider... */
  $('.certified-candidates-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 3000,
    autoplaySpeed: 0,
    autoplay: true,
    infinite: true,
    arrows: false,
    dots: false,
    pauseOnFocus: true,
    pauseOnHover: true,
    swipe: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
    ]
  });
  /* ...Certified Candidates Video Slider... */
  $('.course-recent-reviews-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    dots: false,
    speed: 300,
    centerPadding: '60px',
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  /* ...Brands Slider... */
  $('.course-our-recent-placement-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    dots: false,
    speed: 300,
    centerPadding: '60px',
    autoplaySpeed: 5000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  /* ...Certified Candidates Reviews Slider... */
  $('.course-discover-profile-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  /* ...Certified Candidates Slider... */
  $('.success-speaks-reviwe-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 300,
    infinite: true,
    dots: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.carousel-image').on('click', function () {
    const imageUrl = $(this).data('image-url');
    $('#imagePreview').attr('src', imageUrl);
  });

  $('#toggleViewMoreFAQ').on('click', function () {
    // Show all hidden accordion items
    $('#coursefaqAccordionFlush .accordion-item.d-none').removeClass('d-none');
    // Hide the "View More" button after click
    $(this).hide();
  });

});
jQuery(document).ready(function () {
  jQuery('.scrollbar-inner').scrollbar();
});
function showContent() {
  var x = document.getElementById("myDIV");
  x.style.display = "block";
};
function hideContent() {
  var x = document.getElementById("myDIV");
  x.style.display = "none";
};

document.addEventListener('DOMContentLoaded', function () {
  // Get all video buttons
  const videoBtns = document.querySelectorAll('.video-btn');
  const videoFrame = document.getElementById('videoFrame');

  // When any video button is clicked
  videoBtns.forEach(button => {
    button.addEventListener('click', function () {
      const videoId = this.getAttribute('data-video-id');
      const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0`;

      // Update the iframe's src attribute to load the video
      videoFrame.src = videoUrl;
    });
  });
  // Clear the iframe source when modal is closed to stop the video
  document.getElementById('videoModal').addEventListener('hidden.bs.modal', function () {
    videoFrame.src = '';
  });
});






