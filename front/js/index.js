$(".toggle-button").click(function () {
  let clicked = $(".gnbMenu").hasClass("active");
  $(".gnbMenu").toggleClass("active", !clicked);
});

$(".toggle-button").click(function () {
  let clicked = $(".toggle-button").hasClass("active");
  $(this).toggleClass("active", !clicked);
});

$(document).ready(function () {
  // Show loading spinner when page starts loading
  $(".loading").show();

  // Wait for 1 second
  setTimeout(function () {
    // Hide loading spinner after 1 second
    $(".loading").hide();
  }, 1000);
});

// Hide the loading spinner when the page has finished loading
// $(window).on("load", function () {
//   $(".loading").hide();
// });

// init first Swiper:
new Swiper(".swiper-container.firstSwiper", {
  slidesPerView: 1,
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 3000,
  },

  pagination: {
    el: ".swiper-pagination.firstSwiper",
    type: "fraction",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next.firstSwiper",
    prevEl: ".swiper-button-prev.firstSwiper",
  },
});

// init second Swiper:
new Swiper(".swiper-container.secondSwiper", {
  slidesPerView: 3,
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 3000,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next.secondSwiper",
    prevEl: ".swiper-button-prev.secondSwiper",
  },
});
