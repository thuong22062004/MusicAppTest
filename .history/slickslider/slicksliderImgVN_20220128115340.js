$(document).ready(function(){
    $('.container__field-vn').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        draggable:true,
        arrows :false,
        // rtl: true,
        prevArrow:"<button type='button' class='slick-prev pull-left slick-arrow'><i class='ti-angle-left'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right slick-arrow'><i class='ti-angle-right'></i></button>",
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: false,
                dots: false,
                // arrows:true[
              }
            },
            {
                breakpoint: 480,
                settings: {
                  slidesToShow: 3.5,
                  // slidesToScroll: 1,
                  dots: false,
                  arrows:false,
                infinite: false,
                }
              },
        ]
    })
    
  })
