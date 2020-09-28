var currentQuestion = 0;
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


//QUESTIONS FUNCTION
//define question array
var questionsEl = document.querySelector(".question");

quizArr = [{
    questionText: "______ tag is an extension to HTML that can enclose any number of JavaScript statements.",
    multipleChoice: ["<SCRIPT>", "<BODY>", "<HEAD>"],
    answer: "<SCRIPT>",
  },
  {
    questionText: "What are variables used for in JavaScript Programs?",
    multipleChoice: ["Storing numbers, dates, or other values", "Varying randomly", "Causing high-school algebra flashbacks"],
    answer: "Storing numbers, dates, or other values",
  },
  {
    questionText: "What should appear at the very end of your JavaScript?",
    multipleChoice: ["The </script>", "The <script>", "The END statement"],
    answer: "The </script>",
  },
  {
    questionText: 'What is the correct JavaScript syntax to write "Hello World"?',
    multipleChoice: ['System.out.println("Hello World")', 'document.write("Hello World")', 'response.write("Hello World")'],
    answer: 'document.write("Hello World")',
  },
  {
    questionText: 'What is the correct syntax for referring to an external script called " abc.js"?',
    multipleChoice: ['<script href=" abc.js">', '<script name=" abc.js">', '<script src=" abc.js">'],
    answer: '<script src=" abc.js">',
  },
  {
    questionText: 'Which is the correct way to write a JavaScript array?',
    multipleChoice: ['var txt = new Array("tim","kim","jim")', 'var txt = new Array(1:"tim",2:"kim",3:"jim")', 'var txt = new Array="tim","kim","jim"'],
    answer: 'var txt = new Array("tim","kim","jim")',
  },
  {
    questionText: "Which of the following best describes JavaScript?",
    multipleChoice: ["a low-level programming language.", "a scripting language precompiled in the browser.", "an object-oriented scripting language."],
    answer: "an object-oriented scripting language.",
  },
];

//function to display question,
function questionDisplay(qtn, choice) {
  console.log("question display");
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

questionsEl.onclick = function (event) {
  let li = event.target.closest("li");
  if (!li) return;
  if (!questionsEl.contains(li)) return;
  if (li.textContent === quizArr[currentQuestion].answer) {
    console.log("green");
    currentQuestion++;
    console.log(currentQuestion);
    runQuestion();
  } else {
    console.log("red");
    currentQuestion++;
    runQuestion();
  }

};

function runQuestion() {
  questionDisplay(
    quizArr[currentQuestion].questionText,
    quizArr[currentQuestion].multipleChoice
  );
}
//WELCOME PAGE FUNCTION
//listen for click, start timer
document.getElementById("startBtn").addEventListener("click", hide);
document.getElementById("startBtn").addEventListener("click", setTime);
document.getElementById("startBtn").addEventListener("click", runQuestion);
console.log(currentQuestion);

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