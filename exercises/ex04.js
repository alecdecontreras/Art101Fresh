let count = 0;
let colors = ["Orchid", "Coral", "HotPink", "Plum"]; // new line tp add

$("#needy-button").click(function () {
  
    let reminder = count % colors.length;

    $("#needy-button").html( "Clicks: " + count + " Color: " + colors[count] ); 
   // new line tp add

    $("body").css("background-color",colors[count]);
    //library(receptacle)verb(function?)
    //reach an array of the name colors, and take an element from the array
  count = count + 1;

});
//If you click the button
//add one to count to total number

//show the total number
//on out button
//show "clicked total number times"


//a top limit