var alphabet = ["a", "b", "c", "d", "e", "f", "g",
    "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u",
    "v", "w", "x", "y", "z"];

var wordList = ["host", "logo", "code", "ford", "claw",
    "data", "chip", "core", "lock", "plug", "academic", "software", "variable", "database", "absolute",
    "firewall", "graduate", "homepage", "intranet", "keyboard"]

var answer = "";
var matches = "";
var wins = 0;
var losses = 0;

function start() {
    answer = getRandomWord();
    matches = "";
    lives = 10;
    for (i = 0; i < answer.length; i++) {
        matches = matches + "_";
    }
    display();
    document.querySelector("#start-button").innerHTML = "Restart";
    console.log(answer);
}

function getRandomWord() {
    var i;
    i = Math.floor(Math.random() * wordList.length);
    return wordList[i];
}

function display() {
    document.querySelector("#matches").innerHTML = matches.split("").join(" ");
    document.querySelector(".lives").innerHTML = lives;
    document.querySelector(".wins").innerHTML = wins;
    document.querySelector(".losses").innerHTML = losses;
   // document.querySelector(".you-win").innerHTML = "YOU WIN!!";


}

document.onkeyup = function (event) {
    userGuess(event.key);

}

function userGuess(guess) {
    var newMatches = "";
    var found = false;
    for (j = 0; j < answer.length; j++) {

        if (guess === answer[j]) {

            newMatches = newMatches + answer[j];

            found = true;

        } else {
            newMatches = newMatches + matches[j];
        }
    }
    matches = newMatches;


    if (found === false) {
        lives -= 1;
        if (lives === 0) {
            display();
           // document.querySelector(".you-win").innerHTML = "YOU LOOSE";
            losses += 1;
            alert("Boo Hoo!")
        }
    } else if (answer === newMatches) {
        console.log(newMatches);
        display();
        //document.querySelector(".you-win").innerHTML = "YOU WIN!!";
        wins += 1;
        alert("You Win")
        
    }

    display();
}



document.querySelector("#start-button").addEventListener("click", function () {
    start();
});

