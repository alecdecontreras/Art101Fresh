$(".nice-block span").click(function () {

    $(this).parent().toggleClass("more");

    if ($(this).html() == "more") {
        $(this).html("less");
    } else {
        $(this).html("more");
    }

});

$(".nice-block").click(function () {
    
    $("body").css("background-color", "blue")

});