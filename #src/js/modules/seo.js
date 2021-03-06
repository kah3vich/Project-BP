$(document).ready(function(){ // стандартный код для начало работы jquery 
    // если страница загрузилась ( стили ), то код начинает свою работу 
    
        //! Работа с атрибутами
    
    
        $('#box').on('change', function(){
            $('#seo-showing__list-text-1').text(this.checked ? '338,381' : '104,457');
            $('#seo-showing__list-text-2').text(this.checked ? '64,810' : '26,740');
            $('#seo-showing__list-text-3').text(this.checked ? '340' : '122');
        });
    });
    
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        breakpoints: { 
          800: { 
              slidesPerView: 6, 
              spaceBetween: 30, 
          },
          400: {
              slidesPerView: 3, 
              spaceBetween: 30, 
          },
          0: {
            slidesPerView: 2, 
            spaceBetween: 30, 
          }
        },
    });


    var swiper = new Swiper('.newSeo', { // объявляем слайдер 
      flipEffect: {
        rotate: 30,
        slideShadows: false,
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
          1371: { // после размера экрана >1700 сработают указанный параметры 
              slidesPerView: 2, // количество слайдов, которых будет показываться 
              spaceBetween: 20, // отступ между слайдами 
          },
          1370: {
              slidesPerView: 1, // количество слайдов, которых будет показываться 
              spaceBetween: 0, // отступ между слайдами 
          },
          992: {
              slidesPerView: 1, // количество слайдов, которых будет показываться 
              spaceBetween: 0, // отступ между слайдами 
          }
        },
      });