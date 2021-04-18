document.addEventListener("keydown", function (event) {
   switch (event.key) {
       case "A":
       case "S":
       case "D":
       case "F":
       case "G":
       case "H":
       case "J":
       case "a":
       case "s":
       case "d":
       case "f":
       case "g":
       case "h":
       case "j":
       case "w":
       case "e":
       case "t":
       case "y":
       case "u":
       case "W":
       case "E":
       case "T":
       case "Y":
       case "U":
           handleKey(event.key);
           break
       default:
           console.log("Warning! Unbound key was pressed!");
   }
});

function handleKey(key) {
    console.log("The '" + key + "' key is pressed.");
    let audio = new Audio("media/" + key.toString().toUpperCase() + ".mp3");
    audio.play()
}