$(document).ready(function(){

    $('#hel').on('change', function(){
        $('#hel-expectation__list-text-1').text(this.checked ? 'Высокая скорость загрузки' : 'Мы поможем вам выстроить прозрачную структуру бизнеса.');
        $('#hel-expectation__list-text-2').text(this.checked ? 'Поисковые системы отлично ранжируют подобные сайты' : 'Поделимся уникальными бизнес стратегиями, которые освоили сами.');
    });
});