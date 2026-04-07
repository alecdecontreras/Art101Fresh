//using functions with multiple parameters



function a(number){
    return number * 2
}
function b(number){
    return number + 4
}
function c(number){
    return number + 2
}

    

function changeBoxColor(){
    let boxColor = prompt("Box color:");
    $("p").css("background-color", boxColor)

}

function changeBackgroundColor(){
    let backgroundColor = prompt("background color:");
    $("body").css("background-color", backgroundColor)

}
$("#box").click(function (){
    changeBoxColor();
});

$("#background").click(function () {
    changeBackgroundColor();
});

//ask for paragraph color, ask for background color
//change the paragraph color and background color (in js after prompt)