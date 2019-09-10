var alphabet = ["a", "b", "c", "d", "e", "f", "g",
    "h", "i", "j", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u",
    "v", "w", "x", "y", "z"];

var wordList = ["host", "logo", "code", "ford", "claw",
    "data", "chip", "core", "lock", "plug", "academic", "software", "variable", "database", "absolute",
    "firewall", "graduate", "homepage", "intranet", "keyboard"]

var answer = "";
var matches = "";


function start() {
    answer = getRandomWord();
    matches = "";
    for (i = 0; i < answer.length; i++) {
        matches = matches + "_";
    }
    display();
    console.log(answer);
}

function getRandomWord() {
    var i;
    i = Math.floor(Math.random() * wordList.length);
    return wordList[i];
}

function display() {
    document.querySelector("#matches").innerHTML = matches.split("").join(" ");

}

function userGuess(guess) {
    var newMatches = "";
    for (j = 0; j < answer.length; j++) {

        if (guess === answer[j]) {

            newMatches = newMatches + answer[j];

        } else {
            newMatches = newMatches + matches[j];
        }
    
    }
    matches = newMatches;

display();
}


document.querySelector("#start-button").addEventListener("click", function () {
    start();
});

