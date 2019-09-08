

var alphabet = ["a", "b", "c", "d", "e", "f", "g", 
                "h", "i", "j", "k", "l", "m", "n", 
                "o", "p", "q", "r", "s", "t", "u",
                "v", "w", "x", "y", "z"];

var  wordsEasy = ["host","logo","code","ford","claw",
                "data","chip","core","lock","plug"];  

var wordsHard = ["academic","software","variable","database","absolute",
                "firewall","graduate","homepage","intranet","keyboard"]              
var mode = "";
var currentAnswer= [];
var userGuess =[];


function getRandomWord() {
    var i;
    if( mode === "easy") {
        i = Math.floor(Math.random()*wordsEasy.length);
        console.log(i);
    }

    if( mode === "hard") {
        i = Math.floor(Math.random()*wordsHard.length);
        console.log(i);
    }
}



//function firstFunction(message) {
//    console.log();
 // }

  
//  firstFunction();

//  function secondFunction(name) {
  //  console.log();
  //}

