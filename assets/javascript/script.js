//TIMER FUNCTION
//define variables
var timeEl = document.querySelector(".navbar-text"); //links to location in html
var secondsLeft = 76;
//define timer function
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            //add in game over link
        }

    }, 1000);
}


//WELCOME PAGE FUNCTION
//listen for click, start timer
document.getElementById("startBtn").addEventListener("click", setTime);
document.getElementById("startBtn").addEventListener("click", questionDisplay);
//load questions, hide welcome div when questions start


//QUESTIONS FUNCTION
//define question table variablearrays of diff question blocks with html radio/label elements on button/line.
let question = "Question 1 text";
let questionEl = document.querySelector(".question");

function questionDisplay() {
    questionEl.textContent = question;

}

//define table functions, called in random order
//call table functions



//SCORE PAGE FUNCTION
//define scorepage
//call scorepage
//store score in storage


//HIGH SCORE PAGE FUNCTIONS
//define variable
//get storage value and log onto page