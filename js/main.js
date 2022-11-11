$(function(){

  $('.carousel__inner').slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 841,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 521,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      }
    ]
  });

});