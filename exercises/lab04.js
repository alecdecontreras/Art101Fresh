// declaring an array with name myCommutes
let myCommutes = ["car", "UCSC taps bus", "personal bike"];
let myFavouriteCommute = {
    vehicle : "bike",
    downhill: true,
    fourleggeds: ["deer", "cayote", "squirrel"],
    lightOrDark: ["light", "dark"]
}

let megaSentence
megaSentence = "<p> my top two favourite commutes from the array are "
                + myCommutes[0] + " and " +myCommutes[2] + "."+"</p>";
megaSentence = megaSentence + "<p>My favourite commute possesses such characteristics: vehicle - " 
                + myFavouriteCommute.vehicle + ", uphill: " + myFavouriteCommute.downhill + 
                ", favourite four legged to see: " + myFavouriteCommute.fourleggeds[0] + ".</p>";
$("#output").html(megaSentence);