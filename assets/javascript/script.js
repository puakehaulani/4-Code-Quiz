//TIMER FUNCTION
//define variables
var timeEl = document.querySelector(".navbar-text"); //links to location in html
var secondsLeft = 75;
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

function hide() {
  //hides welcome div on button click
  var welcomeEl = document.querySelector("#welcome");
  welcomeEl.style.display = "none";
}
//WELCOME PAGE FUNCTION
//listen for click, start timer
document.getElementById("startBtn").addEventListener("click", hide);
document.getElementById("startBtn").addEventListener("click", setTime);
document.getElementById("startBtn").addEventListener("click", runQuestions);

//load questions, hide welcome div when questions start

//QUESTIONS FUNCTION
//define question array
var questionsEl = document.querySelector(".question");
quizArr = [
  {
    questionText:
      "______ tag is an extension to HTML that can enclose any number of JavaScript statements.",
    multipleChoice: ["<SCRIPT>", "<BODY>", "<HEAD>"],
    answer: "<SCRIPT>",
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

//function to display question,
function questionDisplay(qtn, choice) {
  questionsEl.innerHTML = ""; //clears earlier content so it doesnt display all questions together
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
  //Building
  var nodeA = document.createTextNode(choice[0]);
  choiceAEl.appendChild(nodeA);
  var nodeB = document.createTextNode(choice[1]);
  choiceBEl.appendChild(nodeB);
  var nodeC = document.createTextNode(choice[2]);
  choiceCEl.appendChild(nodeC);

  questionsEl.appendChild(questionBlock);
  questionBlock.appendChild(choiceAEl);
  questionBlock.appendChild(choiceBEl);
  questionBlock.appendChild(choiceCEl);
  console.log("display" + qtn);
}
//function to define choices interactivity
//create clickable spans, onClick functionality

function handleAnswer(ans) {
  console.log("im the answer");

  questionsEl.onclick = function (event) {
    let li = event.target.closest("li");
    if (!li) return;
    if (!questionsEl.contains(li)) return;
    if (li.textContent === ans) {
      //change color green, move forward
      console.log("green");
    } else {
      //change color red, time penalty, and move forward
      console.log("red");
    }
  };
}
// function wait(ms) { //wait function
//   var d = new Date();
//   var d2 = null;
//   do {
//     d2 = new Date();
//   } while (d2 - d < ms);
// }
// function doSetTimeout(i) {
//   setTimeout(function () {
//     questionDisplay(quizArr[i].questionText, quizArr[i].multipleChoice);
//     handleAnswer(quizArr[i].answer);
//   }, 10000);
// }

//NEED TO KEEP TRACK of the clicks, a boolean, build that result into the while loop check answer function to pass in argument of the question to see if its right, then take that and use it to move on

//function to run questions, wraps displaying question with loop and answer functionality
function runQuestions() {
  //   for (var i = 0; i < quizArr.length; i++) {
  //   for (var i = 0; i < 1; i++) {
  while (secondsLeft >= 0 && i < quizArr.length) {
    //define i var, scoped in this function only.
    // line 129 test parameter, replace with line 128 once working
    questionDisplay(quizArr[i].questionText, quizArr[i].multipleChoice);
    handleAnswer(quizArr[i].answer);
    i++; //here or not
    // doSetTimeout(i);
    // setInterval(function () {
    // }, 20000);
    // wait(2000);
    // console.log("waiting");
  }
}

//SCORE DIV FUNCTION
//define scorediv
var scoreEl = document.querySelector(".score");

function show() {
  var scoreEl = document.querySelector(".score");
  scoreEl.style.display = "block";
}
//call scorediv
//store score in storage

//HIGH SCORE PAGE FUNCTIONS
//define variable
//get storage value and log onto page
