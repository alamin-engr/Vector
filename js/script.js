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
/*==========
    Home-2
===========*/
$('.project-slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 2,
    margin: 20 ,
    dots: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            },
            breakpoint: 1140,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 776,
            settings: {
                centerMode: false,
                slidesToShow: 1
            }
        },

    ]
});

;