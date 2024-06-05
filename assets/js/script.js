// let user = document.querySelector(".user");
// let userId = document.querySelector(".user-id");

// user.addEventListener("mousemove", () => {
//     userId.style.display = "block";
// });

// user.addEventListener("mouseleave", () => {
//     userId.style.display = "none";
// });
$('.banner-slider').slick({
    dots: false,
    infinite: true,
    autoplay:true,
    speed: 300,
    arrows:false,
    slidesToShow: 1,
    adaptiveHeight: true
  });
              