$(document).ready(function(){
    $('.container__field-usuk').slick({
       lazyLoad: 'ondemand',
       slidesToShow: 3,
       slidesToScroll: 1,
        infinite: false,
        draggable:true,
        centerMode: true,
        centerPadding: '60px',
        arrows :false,
        // rtl: true,
        prevArrow:"<button type='button' class='slick-prev pull-left slick-arrow'><i class='ti-angle-left'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right slick-arrow'><i class='ti-angle-right'></i></button>",
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: false,
                dots: false,
                centerMode: true,
                centerPadding: '60px',
                // arrows:true[
              }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2,
                    infinite: true,
                   slidesToScroll: 3,
                }
              },
        ]
    })
    
  })