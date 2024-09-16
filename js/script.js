$('.hero-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  dots: false,
  arrows: false,
  nextArrow: '<i class="far fa-arrow-right nextArrow"></i>',
  prevArrow: '<i class="far fa-arrow-left prevArrow"></i>',

  responsive: [
      {
          breakpoint: 1200,
          settings: {
              slidesToShow: 2,
          }
      },
      {
          breakpoint: 992,
          settings: {
              slidesToShow: 2,
          }
      },
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
          }
      },
      {
          breakpoint: 576,
          settings: {
              slidesToShow: 1,
          }
      }
  ]
});