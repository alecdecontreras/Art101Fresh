let totalNumber = 0;

//add a button titled click me

//function(receptacle).listener(what happens)
$("#needy-button").click(function(){

    totalNumber = totalNumber + 1;

    let sentence = "I was clicked ";
    let totalNumbers = sentence + totalNumber;

    $("#needy-button").html(totalNumbers);



});
//If you click the button
//add one to count to total number

//show the total number
//on out button
//show "clicked total number times"


//a top limit