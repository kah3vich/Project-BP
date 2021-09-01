$(document).ready(function(){
        $('#bit').on('change', function(){
            $('#bit-showing__list-text-1').text(this.checked ? '338,381' : '104,457');
            $('#bit-showing__list-text-2').text(this.checked ? '64,810' : '26,740');
            $('#bit-showing__list-text-3').text(this.checked ? '340' : '122');
            $('#bit-showing__list-text-4').text(this.checked ? '321' : '650,000');
        });
});


var swiper = new Swiper('.bitSlider', { // объявляем слайдер 
    pagination: { // счетчик сладов "1/6"
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: { // указываем навигацию через стрелочки 
      nextEl: '.swiper-button-next', // стрелочка - следующий слайд 
      prevEl: '.swiper-button-prev', // стрелочка - предыдущий слайд
    },
    speed: 700, // скорость прокрутки слайдов 
    breakpoints: { // адаптация слайдера 
      1700: { // после размера экрана >1700 сработают указанный параметры 
          slidesPerView: 1, // количество слайдов, которых будет показываться 
          spaceBetween: 0, // отступ между слайдами 
      },
      1200: {
          slidesPerView: 1, // количество слайдов, которых будет показываться 
          spaceBetween: 0, // отступ между слайдами 
      },
      992: {
          slidesPerView: 1, // количество слайдов, которых будет показываться 
          spaceBetween: 0, // отступ между слайдами 
      }
    },
  });
