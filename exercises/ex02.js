
$("body").css("background-color", "green")

$("#beep").click(function () {
    $("#one").fadeOut("slow")
    $("#one").fadeIn("slow")

});

$("div").dblclick(function () {
     $(this).fadeOut("slow")
});

$("#one").mouseenter(function () {
     $(this).css("background-color", "purple")
     alert($("#two").val());
});
$("#one").mouseleave(function () {
     $(this).css("background-color", "green")
});