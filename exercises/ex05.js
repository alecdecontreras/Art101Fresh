var count = 0;
let colorCount = 0;
var colors = ["Orchid", "Coral", "HotPink", "Plum"];
$("body").css("background-color", "blue")
$("beep").click(function (){
    $("body").css("background-color", "orange")
});
function makeImage(imageName) {

    if (colors[colorCount] == imageName) {
        $("body").append("<img width=50 src='images/" + imageName +".png'>");
    }

}

function changeBackground(newColor){

    $("body").css("background-color", newColor);

}

function determineMood(moodyCount){
    let mood = ""
    if (moodyCount < 5) { mood = "gresh and happy"; }
    else if ((moodyCount >= 5) && (moodyCount < 10)) { mood = "keep pushing"; }
    else { mood = "so tired"}; 
    return mood
}


$(".color-button").click( function () {
 
   changeBackground(this.id);

});


$("#needy-button").click(function () {
    moodMessage = determineMood(count);
    $("#needy-button").html("Clicks: " + count + " Color: " + colors[colorCount] + " " + moodMessage);
    $("body").css("background-color", colors[colorCount]);

    changeBackground(colors[colorCount]);
    makeImage(colors[colorCount]);
    

    count = count + 1;
    colorCount = colorCount + 1;
    if (colorCount == 4) { colorCount = 0; }
});
