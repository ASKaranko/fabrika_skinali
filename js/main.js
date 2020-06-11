$(window).load(function() {
  $(".before-after").twentytwenty(
    {
      before_label: 'Без скинали', // Set a custom before label
      after_label: 'Со скинали' // Set a custom after label
    }
  );
  $('.before-slider').slick({
    draggable: false,
    dots: true,
    dotsClass: 'before-slider__dots',
    prevArrow: $('.arrow-left'),
    nextArrow: $('.arrow-right'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          touchMove: false,
          draggable: false,
          swipe: false,
          adaptiveHeight: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          arrows: false,
          touchMove: false,
          draggable: false,
          swipe: false,
          adaptiveHeight: true
        }
      }
    ]
  });
  $('.menu-button').on('click', function () {
    $('.menu').toggleClass('menu_active');
  });

  // Настройка select

  $('.select').on('click', function () {
    $('.select__dropdown').toggleClass('select__dropdown_open');
  });
  $('.select__option').on('click', function () {
    const value = $(this).attr('data-value');
    $('#select-type').val(value);
    $('.select__dropdown').toggleClass('select__dropdown_close');
  });
});