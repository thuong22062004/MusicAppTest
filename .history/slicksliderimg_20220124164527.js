
$(document).ready(function(){
    $('.list__Song-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 500,
        // draggable:true,
        // rtl: true,
        prevArrow:"<button type='button' class='slick-prev pull-left slick-arrow'><i class='ti-angle-left'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right slick-arrow'><i class='ti-angle-right'></i></button>",
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows:false,
                autoplay: true,
                autoplaySpeed:500,
              }
            },
            {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  // slidesToScroll: 1,
                  dots: false,
                  arrows:false,
                infinite: true,
                autoplay: true,
                autoplaySpeed:500,
                }
              },
        ]
    })
    
  })