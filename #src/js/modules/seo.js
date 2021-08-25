$(document).ready(function(){ // стандартный код для начало работы jquery 
    // если страница загрузилась ( стили ), то код начинает свою работу 
    
        //! Работа с атрибутами
    
    
        $('#box').on('change', function(){
            $('#s-showing__list-text-1').text(this.checked ? '338,381' : '104,457');
            $('#s-showing__list-text-2').text(this.checked ? '64,810' : '26,740');
            $('#s-showing__list-text-3').text(this.checked ? '340' : '122');
        });
    
    });
    
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        slidesPerView: 6,
        spaceBetween: 30,
    });