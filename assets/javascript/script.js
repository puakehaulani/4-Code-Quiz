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
  var welcomeEl = document.getElementById("welcome");
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
}
//function to define choices interactivity
//create clickable spans, onClick functionality
function handleAnswer(ans) {
  questionsEl.onclick = function (event) {
    let li = event.target.closest("li");
    if (!li) return;
    if (!questionsEl.contains(li)) return;

    if ((li.textContent = ans)) {
      //change color green, move forward
    } else {
      //change color red, time penalty, and move forward
    }
  };
}

//function to run questions, wraps displaying question with loop and answer functionality
function runQuestions() {
  for (var i = 0; i < quizArr.length; i++) {
    //   for (var i = 0; i < 1; i++) {
    // line 82 test parameter, replace with line 81 once working
    questionDisplay(quizArr[i].questionText, quizArr[i].multipleChoice);
    handleAnswer(quizArr[i].answer);
    return;
  }
}

//SCORE PAGE FUNCTION
//define scorepage
//call scorepage
//store score in storage

//HIGH SCORE PAGE FUNCTIONS
//define variable
//get storage value and log onto page
