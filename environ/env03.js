//describe your environment using variables, 
// arrays, and one or more objects
/*Using JS, print those things on your html page. 
Hints: 
- Add a div with an ID to your html, similar to 
<div id="output"></div> from the follow along.
- Use $("#output").append( ..... ); to add 
content to this div. Observe how ID is used!
- You can use multiple DIVs with different IDs 
for different bits of content.
- Observe how HTML tags are inserted into JS 
variables before they are printed. Use it!
You can also CSS-style those DIVs using the 
same IDs for CSS selectors!*/

let sky = "blue Sky";
let land = "<br>rolling hills";
let colors = ["blue", "dark green", "dark brown", "wheat"];
let env = {
    humans: "none",
    people: "many",
    ghosts: "exist to some"
}

let sentence = "<p> # of humans in the picture: " +
        env.humans + ". " + "# of people: " + env.people+ ". " +
        "ghosts: " + env.ghosts + ". </p>";

$("#output").html(sky);
$("#output").append(land);
$("#blue").html(colors[0]);
$("#darkgreen").html(colors[1]);
$("#darkbrown").html(colors[2]);
$("#wheat").html(colors[3]);
$("#sentence").append(sentence);


