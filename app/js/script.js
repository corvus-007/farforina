document.addEventListener('DOMContentLoaded', function() {
  svg4everybody();

  $.fancybox.defaults.animationEffect = 'zoom-in-out';
  $.fancybox.defaults.transitionEffect = 'slide';
  $.fancybox.defaults.transitionDuration = 600;

  $('input[type="tel"]').inputmask({
    "mask": "+7 (999) 999-99-99"
  });

  // Init fancybox
  // =============
  var selector = '.homepage-carousel .slick-slide:not(.slick-cloned) a';

  // Skip cloned elements
  $().fancybox({
    selector: selector,
    backFocus: false
  });

  // Attach custom click event on cloned elements,
  // trigger click event on corresponding link
  $(document).on('click', '.slick-cloned a', function(e) {
    $(selector)
      .eq(($(e.currentTarget).attr("data-slick-index") || 0) % $(selector).length)
      .trigger("click.fb-start", {
        $trigger: $(this)
      });

    return false;
  });


  $('[data-homepage-carousel]').slick({
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '0',
    speed: 750,
    responsive: [{
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        centerMode: true,
      }
    }, {
      breakpoint: 737,
      settings: {
        arrows: false,
        slidesToShow: 3,
        centerMode: true,
        // centerPadding: '10px',
      }
    }, {
      breakpoint: 500,
      settings: {
        arrows: false,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '40px',
      }
    }]
  });
});
