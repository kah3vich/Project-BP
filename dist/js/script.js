/* Включение всей анимации на странице с определенными параметрами */
var wow = new WOW({
    mobile: false, // отключать анимацию на мобильных устройствах ( зависит от размера экрана )
});
  wow.init(); // инициализация анимации 
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
$('select#sorts').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});
$('select#promotion').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;

    $this.addClass('c-select-hidden'); 
    $this.wrap('<div class="c-select"></div>');
    $this.after('<div class="c-select-styled"></div>');

    var $styledSelect = $this.next('div.c-select-styled');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
        'class': 'c-select-options'
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }

    var $listItems = $list.children('li');

    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.c-active').not(this).each(function(){
            $(this).removeClass('c-active').next('ul.c-select-options').hide();
        });
        $(this).toggleClass('c-active').next('ul.c-select-options').toggle();
    });

    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('c-active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });

    $(document).click(function() {
        $styledSelect.removeClass('c-active');
        $list.hide();
    });

});
// Аккордеон для блока skills

document.querySelectorAll('.skills__accordion-item__trigger').forEach((item) => 
    item.addEventListener('click', () => {
        const parent = item.parentNode;

        if (parent.classList.contains('skills__accordion-item--active')) {
            parent.classList.remove('skills__accordion-item--active');
        } else {
            document
                .querySelectorAll('.skills__accordion-item')
                .forEach((child) => child.classList.remove('skills__accordion-item--active'))
                parent.classList.toggle('skills__accordion-item--active');
        }
    })
);


// Слайдер для блока skills 1

var swiper = new Swiper('.swiper-skills-1', {
        observer: true,
    observeParents: true,
    pagination: { 
        el: '.swiper-pagination-skills-1',
        type: 'fraction',
    },
    navigation: { 
        nextEl: '.swiper-button-next', 
        prevEl: '.swiper-button-prev', 
    },
    speed: 700, 
    breakpoints: { 
        1700: { 
            slidesPerView: 3, 
            spaceBetween: 30, 
        },
        1200: {
            slidesPerView: 2, 
            spaceBetween: 15, 
        },
        992: {
            slidesPerView: 1, 
            spaceBetween: 5, 
        }
    },
    });



// Слайдер для блока skills 2

var swiper = new Swiper('.swiper-skills-2', {
    observer: true,
    observeParents: true,
    pagination: { 
        el: '.swiper-pagination-skills-2',
        type: 'fraction',
    },
    navigation: { 
        nextEl: '.swiper-button-next', 
        prevEl: '.swiper-button-prev', 
    },
    speed: 700, 
    breakpoints: { 
        1700: { 
            slidesPerView: 3, 
            spaceBetween: 30, 
        },
        1200: {
            slidesPerView: 2, 
            spaceBetween: 15, 
        },
        992: {
            slidesPerView: 1, 
            spaceBetween: 5, 
        }
    },
});


// Слайдер для блока skills 3

var swiper = new Swiper('.swiper-skills-3', {
    observer: true,
    observeParents: true,
    pagination: { 
        el: '.swiper-pagination-skills-3',
        type: 'fraction',
    },
    navigation: { 
        nextEl: '.swiper-button-next', 
        prevEl: '.swiper-button-prev', 
    },
    speed: 700, 
    breakpoints: { 
        1700: { 
            slidesPerView: 3, 
            spaceBetween: 30, 
        },
        1200: {
            slidesPerView: 2, 
            spaceBetween: 15, 
        },
        992: {
            slidesPerView: 1, 
            spaceBetween: 5, 
        }
    },
});


// Слайдер для блока skills 4

var swiper = new Swiper('.swiper-skills-4', {
        observer: true,
    observeParents: true,
    pagination: { 
        el: '.swiper-pagination-skills-4',
        type: 'fraction',
    },
    navigation: { 
        nextEl: '.swiper-button-next', 
        prevEl: '.swiper-button-prev', 
    },
    speed: 700, 
    breakpoints: { 
        1700: { 
            slidesPerView: 3, 
            spaceBetween: 30, 
        },
        1200: {
            slidesPerView: 2, 
            spaceBetween: 15, 
        },
        992: {
            slidesPerView: 1, 
            spaceBetween: 5, 
        }
    },
});


// Блок со вкладками skills

$(document).ready(function () {
    $(".skills__tabs").on("click", ".skill__tab", function () {
        $(".skills__tabs").find(".skills__active").removeClass("skills__active");

        $(this).addClass("skills__active");
        $(".skill__tab-form").eq($(this).index()).addClass("skills__active");
    });
});





'use strict';


console.clear();

// Параллакс эффект для блока header
window.onload = function() {
    const parallax = document.querySelector('.header');

    if(parallax) {
        // header
        const header__image = document.querySelector('.header__image-item');

      // header
        const forHeaderImage = 10.5;



      // ------------------------------------------------------------------------------------ //


      // Скорость
        const speed = 0.2;

      // Объявление переменных
        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0;

        function setMouseParallaxStyle() {
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;

            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);

          // Передаем стили

          //header
            header__image.style.cssText = `transform: translate(${positionX / forHeaderImage}%,${positionY / forHeaderImage}%);`;

          // ------------------------------------------------------------------------------------ //

            requestAnimationFrame(setMouseParallaxStyle);
        }
        setMouseParallaxStyle();

        parallax.addEventListener("mousemove", function (e) {

          // Получение ширины и высоты блока
            const parallaxWidth = parallax.offsetWidth;
            const parallaxHeight = parallax.offsetHeight;

            // Ноль по середине
            const coordX = e.pageX - parallaxWidth / 2;
            const coordY = e.pageY - parallaxHeight / 2;

            // Получаем проценты 
            coordXprocent = coordX / parallaxWidth * 100;
            coordYprocent = coordY / parallaxHeight * 100;
        });
    } 
};


// Задний фон 1

class Grain_1 {
    constructor (el_1) {
        this.patternSize = 150;
        this.patternScaleX = 1;
        this.patternScaleY = 1;
        this.patternRefreshInterval = 3;
        this.patternAlpha = 15;
        this.canvas = el_1;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.scale(this.patternScaleX, this.patternScaleY);
        this.patternCanvas = document.createElement('canvas');
        this.patternCanvas.width = this.patternSize;
        this.patternCanvas.height = this.patternSize;
        this.patternCtx = this.patternCanvas.getContext('2d');
        this.patternData = this.patternCtx.createImageData(this.patternSize, this.patternSize);
        this.patternPixelDataLength = this.patternSize * this.patternSize * 4; 
        this.resize = this.resize.bind(this);
        this.loop = this.loop.bind(this);
        this.frame = 0;
        window.addEventListener('resize', this.resize);
        this.resize();
        window.requestAnimationFrame(this.loop);
    }
    resize () {
        this.canvas.width = window.innerWidth * devicePixelRatio;
        this.canvas.height = window.innerHeight * devicePixelRatio;
    }
    update () {
        const {patternPixelDataLength, patternData, patternAlpha, patternCtx} = this;
        for (let i = 0; i < patternPixelDataLength; i += 4) {
        const value = Math.random() * 255;
            patternData.data[i] = value;
            patternData.data[i + 1] = value;
            patternData.data[i + 2] = value;
            patternData.data[i + 3] = patternAlpha;
        }
        patternCtx.putImageData(patternData, 0, 0);
    }
    draw () {
        const {ctx, patternCanvas, canvas, viewHeight} = this;
        const {width, height} = canvas;
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = ctx.createPattern(patternCanvas, 'repeat');
        ctx.fillRect(0, 0, width, height);
    }
    loop () {
        const shouldDraw = ++this.frame % this.patternRefreshInterval === 0;
        if (shouldDraw) {
            this.update();
            this.draw();
        }
        window.requestAnimationFrame(this.loop);
    }
}

// Задний фон 2

class Grain_2 {
    constructor (el_2) {
        this.patternSize = 150;
        this.patternScaleX = 1;
        this.patternScaleY = 1;
        this.patternRefreshInterval = 3; 
        this.patternAlpha = 15; 
        this.canvas = el_2;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.scale(this.patternScaleX, this.patternScaleY);
        this.patternCanvas = document.createElement('canvas');
        this.patternCanvas.width = this.patternSize;
        this.patternCanvas.height = this.patternSize;
        this.patternCtx = this.patternCanvas.getContext('2d');
        this.patternData = this.patternCtx.createImageData(this.patternSize, this.patternSize);
        this.patternPixelDataLength = this.patternSize * this.patternSize * 4; 
        this.resize = this.resize.bind(this);
        this.loop = this.loop.bind(this);
        this.frame = 0;
        window.addEventListener('resize', this.resize);
        this.resize();
        window.requestAnimationFrame(this.loop);
    }
    resize () {
        this.canvas.width = window.innerWidth * devicePixelRatio;
        this.canvas.height = window.innerHeight * devicePixelRatio;
    }
    update () {
        const {patternPixelDataLength, patternData, patternAlpha, patternCtx} = this;
        for (let i = 0; i < patternPixelDataLength; i += 4) {
        const value = Math.random() * 255;
        patternData.data[i] = value;
        patternData.data[i + 1] = value;
        patternData.data[i + 2] = value;
        patternData.data[i + 3] = patternAlpha;
        }
        patternCtx.putImageData(patternData, 0, 0);
    }
    draw () {
        const {ctx, patternCanvas, canvas, viewHeight} = this;
        const {width, height} = canvas;
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = ctx.createPattern(patternCanvas, 'repeat');
        ctx.fillRect(0, 0, width, height);
    }
    loop () {
        const shouldDraw = ++this.frame % this.patternRefreshInterval === 0;
        if (shouldDraw) {
        this.update();
        this.draw();
        }
        window.requestAnimationFrame(this.loop);
    }
}

// Задний фон 3

class Grain_3 {
    constructor (el_3) {
        this.patternSize = 150;
        this.patternScaleX = 1;
        this.patternScaleY = 1;
        this.patternRefreshInterval = 3; 
        this.patternAlpha = 15;
        this.canvas = el_3;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.scale(this.patternScaleX, this.patternScaleY);
        this.patternCanvas = document.createElement('canvas');
        this.patternCanvas.width = this.patternSize;
        this.patternCanvas.height = this.patternSize;
        this.patternCtx = this.patternCanvas.getContext('2d');
        this.patternData = this.patternCtx.createImageData(this.patternSize, this.patternSize);
        this.patternPixelDataLength = this.patternSize * this.patternSize * 4; 
        this.resize = this.resize.bind(this);
        this.loop = this.loop.bind(this);
        this.frame = 0;
        window.addEventListener('resize', this.resize);
        this.resize();
        window.requestAnimationFrame(this.loop);
    }
    resize () {
        this.canvas.width = window.innerWidth * devicePixelRatio;
        this.canvas.height = window.innerHeight * devicePixelRatio;
    }
    update () {
        const {patternPixelDataLength, patternData, patternAlpha, patternCtx} = this;
        for (let i = 0; i < patternPixelDataLength; i += 4) {
        const value = Math.random() * 255;
        patternData.data[i] = value;
        patternData.data[i + 1] = value;
        patternData.data[i + 2] = value;
        patternData.data[i + 3] = patternAlpha;
        }
        patternCtx.putImageData(patternData, 0, 0);
    }
    draw () {
        const {ctx, patternCanvas, canvas, viewHeight} = this;
        const {width, height} = canvas;
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = ctx.createPattern(patternCanvas, 'repeat');
        ctx.fillRect(0, 0, width, height);
    }
    loop () {
        const shouldDraw = ++this.frame % this.patternRefreshInterval === 0;
        if (shouldDraw) {
        this.update();
        this.draw();
        }
        window.requestAnimationFrame(this.loop);
    }
}

// Задний фон 4

class Grain_4 {
    constructor (el_4) {
        this.patternSize = 150;
        this.patternScaleX = 1;
        this.patternScaleY = 1;
        this.patternRefreshInterval = 3; 
        this.patternAlpha = 15; 
        this.canvas = el_4;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.scale(this.patternScaleX, this.patternScaleY);
        this.patternCanvas = document.createElement('canvas');
        this.patternCanvas.width = this.patternSize;
        this.patternCanvas.height = this.patternSize;
        this.patternCtx = this.patternCanvas.getContext('2d');
        this.patternData = this.patternCtx.createImageData(this.patternSize, this.patternSize);
        this.patternPixelDataLength = this.patternSize * this.patternSize * 4;
        this.resize = this.resize.bind(this);
        this.loop = this.loop.bind(this);
        this.frame = 0;
        window.addEventListener('resize', this.resize);
        this.resize();
        window.requestAnimationFrame(this.loop);
    }
    resize () {
        this.canvas.width = window.innerWidth * devicePixelRatio;
        this.canvas.height = window.innerHeight * devicePixelRatio;
    }
    update () {
        const {patternPixelDataLength, patternData, patternAlpha, patternCtx} = this;
        for (let i = 0; i < patternPixelDataLength; i += 4) {
        const value = Math.random() * 255;
        patternData.data[i] = value;
        patternData.data[i + 1] = value;
        patternData.data[i + 2] = value;
        patternData.data[i + 3] = patternAlpha;
        }
        patternCtx.putImageData(patternData, 0, 0);
    }
    draw () {
        const {ctx, patternCanvas, canvas, viewHeight} = this;
        const {width, height} = canvas;
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = ctx.createPattern(patternCanvas, 'repeat');
        ctx.fillRect(0, 0, width, height);
    }
    loop () {
        const shouldDraw = ++this.frame % this.patternRefreshInterval === 0;
        if (shouldDraw) {
        this.update();
        this.draw();
        }
        window.requestAnimationFrame(this.loop);
    }
}

// Задний фон 5

class Grain_5 {
    constructor (el_5) {
        this.patternSize = 150;
        this.patternScaleX = 1;
        this.patternScaleY = 1;
        this.patternRefreshInterval = 3;
        this.patternAlpha = 15; 
        this.canvas = el_5;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.scale(this.patternScaleX, this.patternScaleY);
        this.patternCanvas = document.createElement('canvas');
        this.patternCanvas.width = this.patternSize;
        this.patternCanvas.height = this.patternSize;
        this.patternCtx = this.patternCanvas.getContext('2d');
        this.patternData = this.patternCtx.createImageData(this.patternSize, this.patternSize);
        this.patternPixelDataLength = this.patternSize * this.patternSize * 4; 
        this.resize = this.resize.bind(this);
        this.loop = this.loop.bind(this);
        this.frame = 0;
        window.addEventListener('resize', this.resize);
        this.resize();
        window.requestAnimationFrame(this.loop);
    }
    resize () {
        this.canvas.width = window.innerWidth * devicePixelRatio;
        this.canvas.height = window.innerHeight * devicePixelRatio;
    }
    update () {
        const {patternPixelDataLength, patternData, patternAlpha, patternCtx} = this;
        for (let i = 0; i < patternPixelDataLength; i += 4) {
        const value = Math.random() * 255;
        patternData.data[i] = value;
        patternData.data[i + 1] = value;
        patternData.data[i + 2] = value;
        patternData.data[i + 3] = patternAlpha;
        }
        patternCtx.putImageData(patternData, 0, 0);
    }
    draw () {
        const {ctx, patternCanvas, canvas, viewHeight} = this;
        const {width, height} = canvas;
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = ctx.createPattern(patternCanvas, 'repeat');
        ctx.fillRect(0, 0, width, height);
    }
    loop () {
        const shouldDraw = ++this.frame % this.patternRefreshInterval === 0;
        if (shouldDraw) {
        this.update();
        this.draw();
        }
        window.requestAnimationFrame(this.loop);
    }
}

// Задний фон 6

class Grain_6 {
    constructor (el_6) {
        this.patternSize = 150;
        this.patternScaleX = 1;
        this.patternScaleY = 1;
        this.patternRefreshInterval = 3; 
        this.patternAlpha = 15; 
        this.canvas = el_6;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.scale(this.patternScaleX, this.patternScaleY);
        this.patternCanvas = document.createElement('canvas');
        this.patternCanvas.width = this.patternSize;
        this.patternCanvas.height = this.patternSize;
        this.patternCtx = this.patternCanvas.getContext('2d');
        this.patternData = this.patternCtx.createImageData(this.patternSize, this.patternSize);
        this.patternPixelDataLength = this.patternSize * this.patternSize * 4; 
        this.resize = this.resize.bind(this);
        this.loop = this.loop.bind(this);
        this.frame = 0;
        window.addEventListener('resize', this.resize);
        this.resize();
        window.requestAnimationFrame(this.loop);
    }
    resize () {
        this.canvas.width = window.innerWidth * devicePixelRatio;
        this.canvas.height = window.innerHeight * devicePixelRatio;
    }
    update () {
        const {patternPixelDataLength, patternData, patternAlpha, patternCtx} = this;
        for (let i = 0; i < patternPixelDataLength; i += 4) {
        const value = Math.random() * 255;
        patternData.data[i] = value;
        patternData.data[i + 1] = value;
        patternData.data[i + 2] = value;
        patternData.data[i + 3] = patternAlpha;
        }
        patternCtx.putImageData(patternData, 0, 0);
    }
    draw () {
        const {ctx, patternCanvas, canvas, viewHeight} = this;
        const {width, height} = canvas;
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = ctx.createPattern(patternCanvas, 'repeat');
        ctx.fillRect(0, 0, width, height);
    }
    loop () {
        const shouldDraw = ++this.frame % this.patternRefreshInterval === 0;
        if (shouldDraw) {
        this.update();
        this.draw();
        }
        window.requestAnimationFrame(this.loop);
    }
}

// Задний фон 7

class Grain_7 {
    constructor (el_7) {
        this.patternSize = 150;
        this.patternScaleX = 1;
        this.patternScaleY = 1;
        this.patternRefreshInterval = 3; 
        this.patternAlpha = 15; 
        this.canvas = el_7;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.scale(this.patternScaleX, this.patternScaleY);
        this.patternCanvas = document.createElement('canvas');
        this.patternCanvas.width = this.patternSize;
        this.patternCanvas.height = this.patternSize;
        this.patternCtx = this.patternCanvas.getContext('2d');
        this.patternData = this.patternCtx.createImageData(this.patternSize, this.patternSize);
        this.patternPixelDataLength = this.patternSize * this.patternSize * 4; 
        this.resize = this.resize.bind(this);
        this.loop = this.loop.bind(this);
        this.frame = 0;
        window.addEventListener('resize', this.resize);
        this.resize();
        window.requestAnimationFrame(this.loop);
    }
    resize () {
        this.canvas.width = window.innerWidth * devicePixelRatio;
        this.canvas.height = window.innerHeight * devicePixelRatio;
    }
    update () {
        const {patternPixelDataLength, patternData, patternAlpha, patternCtx} = this;
        for (let i = 0; i < patternPixelDataLength; i += 4) {
        const value = Math.random() * 255;
        patternData.data[i] = value;
        patternData.data[i + 1] = value;
        patternData.data[i + 2] = value;
        patternData.data[i + 3] = patternAlpha;
        }
        patternCtx.putImageData(patternData, 0, 0);
    }
    draw () {
        const {ctx, patternCanvas, canvas, viewHeight} = this;
        const {width, height} = canvas;
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = ctx.createPattern(patternCanvas, 'repeat');
        ctx.fillRect(0, 0, width, height);
    }
    loop () {
        const shouldDraw = ++this.frame % this.patternRefreshInterval === 0;
        if (shouldDraw) {
        this.update();
        this.draw();
        }
        window.requestAnimationFrame(this.loop);
    }
}


const el_1 = document.querySelector('.grain-1');
const grain_1 = new Grain_1(el_1);


const el_2 = document.querySelector('.grain-2');
const grain_2 = new Grain_2(el_2);


const el_3 = document.querySelector('.grain-3');
const grain_3 = new Grain_3(el_3);


const el_4 = document.querySelector('.grain-4');
const grain_4 = new Grain_4(el_4);


const el_5 = document.querySelector('.grain-5');
const grain_5 = new Grain_5(el_5);


const el_6 = document.querySelector('.grain-6');
const grain_6 = new Grain_5(el_6);


const el_7 = document.querySelector('.grain-7');
const grain_7 = new Grain_7(el_7);

