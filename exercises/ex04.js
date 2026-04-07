let count = 0;
let colorCount = 0;
let colors = ["Orchid", "Coral", "HotPink", "Plum"]; // new line tp add


$("#needy-button").click(function () {
  if (colorCount <6) { mood = "fresh and happy"}
  else if ((colorCount < 11) && (colorCount > 5)){ mood = "pushing it"}
  else {mood = "so tired"}
    $("#needy-button").html( "Clicks: " + colorCount + " Color: " + colors[count] +" "+mood); 
   // new line tp add

    $("body").css("background-color",colors[count]);
    //library(receptacle)verb(function?)
    //reach an array of the name colors, and take an element from the array
  count = count + 1;
  colorCount = colorCount + 1;

  if (count ==4) { count = 0}

})
//If you click the button
//add one to count to total number

//show the total number
//on out button
//show "clicked total number times"


//a top limit