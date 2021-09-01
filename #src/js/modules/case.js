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


$('.c-promotion__block-btn-open').on('click', function() {
    $('.c-promotion__blocks-hidden').removeClass('c-promotion__block-none');
    $('.c-promotion__block-btn-close').removeClass('c-promotion__block-none');
    $(this).addClass('c-promotion__block-none');
});
$('.c-promotion__block-btn-close').on('click', function() {
    $('.c-promotion__blocks-hidden').addClass('c-promotion__block-none');
    $(this).addClass('c-promotion__block-none');
    $('.c-promotion__block-btn-open').removeClass('c-promotion__block-none');
});