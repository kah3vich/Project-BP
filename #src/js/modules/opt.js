$(document).ready(function(){

    $('#opt').on('change', function(){
        $('#opt-expectation__list-text-1').text(this.checked ? 'Высокая скорость загрузки' : 'Низкая скорость загрузки, некорректный контент и плохое юзабилити сайта.');
        $('#opt-expectation__list-text-2').text(this.checked ? 'Поисковые системы отлично ранжируют подобные сайты' : 'Поисковые системы плохо ранжируют подобные сайты за счет низкого качества сайта.');
    });
});