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
  $('[type="tel"]').mask("+7 (999) 999-9999");
  // Показывать карту, когда докрутили до нее
  const factory = $('.factory');
  const fc = factory.offset().top;
  $(window).bind('scroll', function () {
    const windowTop = $(this).scrollTop();
    if (windowTop > fc) {
      $('#map').html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1131.5825811087082!2d37.765462656837734!3d55.442352023360534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414aa43ab85a3e01%3A0x5fc3e1155c861c79!2z0JrQsNGI0LjRgNGB0LrQvtC1INGILiwgMjMsINCU0L7QvNC-0LTQtdC00L7QstC-LCDQnNC-0YHQutC-0LLRgdC60LDRjyDQvtCx0LsuLCDQoNC-0YHRgdC40Y8sIDE0MjAwMQ!5e0!3m2!1sru!2sua!4v1591814271316!5m2!1sru!2sua" width="100%" height="410" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>');
      $(window).unbind('scroll');
    }
  });
});