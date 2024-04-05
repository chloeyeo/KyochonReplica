$(".toggle-button").click(function () {
  let clicked = $(".gnbMenu").hasClass("active");
  $(".gnbMenu").toggleClass("active", !clicked);
});

$(".toggle-button").click(function () {
  let clicked = $(".toggle-button").hasClass("active");
  $(this).toggleClass("active", !clicked);
});
