(function ($, Drupal) {
  Drupal.behaviors.myModuleBehavior = {
    attach: function (context) {
      const $menu = $('#block-logoandmainmenu');
      $menu.once().before("<div class='js-show-more-button'></div>");
      $('.js-show-more-button').once().on('click', function () {
        $('#block-logoandmainmenu').toggleClass('active-burger-menu');
        $('.js-show-more-button').toggleClass('cross-icon-button-js');
      });
      $('.view-id-slider_cars .view-content').once().slick({
        infinity: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows : false,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      });
    }
  };
})(jQuery, Drupal);