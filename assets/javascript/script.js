var currentQuestion = 0;
//TIMER FUNCTION
//define variables
var timeEl = document.querySelector(".navbar-text"); //links to location in html
var secondsLeft = 60;
//define timer function


function hideWelcome() {
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

function setTime() {
  var timerInterval = setInterval(function () {
    timeEl.textContent = "Time: " + secondsLeft;

    if (secondsLeft <= 0 || currentQuestion >= quizArr.length) {
      clearInterval(timerInterval);
      //add in game over links
      score();
    } else {
      secondsLeft--;
    }
  }, 1000);
}

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
    currentQuestion++;
    // console.log(currentQuestion);
    runQuiz();
  } else {
    console.log("red");
    if (secondsLeft < 25) {
      secondsLeft = 0
      score();
    } else {
      secondsLeft = secondsLeft - 25;
    }
    currentQuestion++;
    runQuiz();
  }

};

function runQuiz() {
  if (currentQuestion < quizArr.length) {
    questionDisplay(
      quizArr[currentQuestion].questionText,
      quizArr[currentQuestion].multipleChoice
    );
  } else {
    score()
  }
}
//SCORE DIV FUNCTION
//define scorediv
var scoreEl = document.querySelector(".score");

function hideQuestions() {
  //hides welcome div on button click
  questionsEl.style.display = "none";
}

function score() {
  scoreEl.innerHTML = "";
  hideQuestions();
  // Title

  var scoreHeader = document.createElement("h1");
  var node = document.createTextNode("It's Over");
  scoreHeader.appendChild(node);
  scoreEl.appendChild(scoreHeader);

  // lines
  var yourScore = document.createElement("p");
  var enterInitial = document.createElement("input");
  var submitBtn = document.createElement("button");
  var tryAgain = document.createElement("a");
  var brk = document.createElement("br");

  //Building
  var nodeA = document.createTextNode("Your score: " + secondsLeft);
  yourScore.appendChild(nodeA);

  enterInitial.setAttribute("placeholder", "Your initials");
  enterInitial.setAttribute("maxlength", 3);
  enterInitial.setAttribute("id", "initialInput");

  submitBtn.setAttribute("class", "submit");
  submitBtn.setAttribute("type", "submit");
  submitBtn.textContent = "submit";

  var nodeC = document.createTextNode("Try again");
  tryAgain.setAttribute("href", "index.html");
  tryAgain.appendChild(nodeC);

  scoreEl.appendChild(yourScore);
  scoreEl.appendChild(enterInitial);
  scoreEl.appendChild(submitBtn);
  scoreEl.appendChild(brk);
  scoreEl.appendChild(tryAgain);

  var buttonSubmit = document.querySelector(".submit");
  buttonSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    if (enterInitial.value.length < 1)
      return;
    else {
      // localStorage.setItem("initials", );
      localStorage.setItem(document.getElementById("initialInput").value, secondsLeft);
      enterInitial.value = "";
    }
    document.querySelector(".submit").disabled = true; //disables button, submit initials only once per try
  })
}

//WELCOME PAGE FUNCTION
//listen for click, start timer
document.getElementById("startBtn").addEventListener("click", hideWelcome);
document.getElementById("startBtn").addEventListener("click", setTime);
document.getElementById("startBtn").addEventListener("click", runQuiz);



//call scorediv
//store score in storage

//HIGH SCORE PAGE FUNCTIONS
//define variable
//get storage value and log onto page