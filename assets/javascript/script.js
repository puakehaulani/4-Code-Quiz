//TIMER FUNCTION
//define variables
var timeEl = document.querySelector(".navbar-text"); //links to location in html
var secondsLeft = 67;
//define timer function
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }

    }, 1000);
}
//call timer function -- need to set this inside start button on welcome page
setTime();


//WELCOME PAGE FUNCTION
//define variables
var welcomeEL = document.querySelector(".welcome");
//define function - create elements to display instructions, button below to start quiz. also link button to timer.
function welcome() {
    welcomeEL.textContent = "HI";
}
//call function at page load
welcome();


//QUESTIONS FUNCTION
//define question table variablearrays of diff question blocks with html radio/label elements on button/line.

// var q1 = [{question: "", answers:["A:", "B:", "C:"]}]
// var q2 = [{question: "", answers:["A:", "B:", "C:"]}]
// var q3 = [{question: "", answers:["A:", "B:", "C:"]}]
// var q4 = [{question: "", answers:["A:", "B:", "C:"]}]
// var q5 = [{question: "", answers:["A:", "B:", "C:"]}]

//define table functions, called in random order, 
// function QuizQuesiton(question, choices, correctAnswer) {
//     this.question = question;
//     this.choices = choices;
//     this.correctAnswer = correctAnswer;}
//call table functions


//SCORE PAGE FUNCTION
//define scorepage
//call scorepage
//store score in storage


//HIGH SCORE PAGE FUNCTIONS
//define variable
//get storage value and log onto page