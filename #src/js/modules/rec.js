$(document).ready(function () {
    $(".rec-skills__tabs").on("click", ".rec-skill__tab", function () {
        $(".rec-skills__tabs").find(".rec-skills__active").removeClass("rec-skills__active");

        $(this).addClass("rec-skills__active");
        $(".rec-skill__tab-form").eq($(this).index()).addClass("rec-skills__active");
    });
});