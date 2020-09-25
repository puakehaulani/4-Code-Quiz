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
document.getElementById("startBtn").addEventListener("click", runQuestions);
//load questions, hide welcome div when questions start

//QUESTIONS FUNCTION
//define question array
var questionsEl = document.querySelector(".question");
quizArr = [
  {
    questionText: "This is question one",
    multipleChoice: ["", "", ""],
    answer: "this is the answer",
  },
  {
    questionText: "This is question two",
    multipleChoice: ["", "", ""],
    answer: "this is the answer",
  },
  {
    questionText: "This is question three",
    multipleChoice: ["", "", ""],
    answer: "this is the answer",
  },
  {
    questionText: "This is question four",
    multipleChoice: ["", "", ""],
    answer: "this is the answer",
  },
  {
    questionText: "This is question five",
    multipleChoice: ["", "", ""],
    answer: "this is the answer",
  },
];

//define table functions,
function questionDisplay(qtn, choice) {
  questionsEl.innerHTML = "";
  // Title
  var questionTitle = document.createElement("p");
  var node = document.createTextNode(qtn);
  questionTitle.appendChild(node);
  questionsEl.appendChild(questionTitle);

  // Choices
  var choiceAEl = document.createElement("li");
  var choiceBEl = document.createElement("li");
  var choiceCEl = document.createElement("li");
  var questionBlock = document.createElement("ol");

  questionBlock.appendChild(choiceAEl);
  questionBlock.appendChild(choiceBEl);
  questionBlock.appendChild(choiceCEl);
  questionsEl.appendChild(questionBlock);
}

function handleAnswer() {}

function runQuestions() {
  //   for (var i = 0; i < quizArr.length; i++) {
  for (var i = 0; i < 1; i++) {
    questionDisplay(quizArr[i].questionText, quizArr[i].multipleChoice);
    handleAnswer();
  }
}

//SCORE PAGE FUNCTION
//define scorepage
//call scorepage
//store score in storage

//HIGH SCORE PAGE FUNCTIONS
//define variable
//get storage value and log onto page
