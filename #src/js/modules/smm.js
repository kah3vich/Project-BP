var swiper = new Swiper('.peopleSMM', { // объявляем слайдер 
    in: {
        effect: "fadeIn",
      },
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