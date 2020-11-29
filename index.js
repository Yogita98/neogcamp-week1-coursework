
var highScore = 0


// Take the name of the user and print it on the console
var readlineSync = require('readline-sync');
const levelOne = [
  {
    id: 1,
    question: "JavaScript is a ______ ",
    choices: ["language", "tool", "framework", "library"],
    answer: "language"
  },
  {
    id: 2,
    question:
      "Is JavaScript the same as Java? ",
    choices: ["yes", "no"],
    answer: "no"
  },
  {
    id: 3,
    question:
      "What language defines the behavior of a web page? ",
    choices: ["HTML", "JavaScript", "Java", "Python"],
    answer: "JavaScript"
  },
  {
    id: 4,
    question: "Where did Tanay print the output in his first lecture? ",
    choices: ["console", "Web page"],
    answer: "console"
  }
];
const levelTwo = [
  {
    id: 1,
    question: "Which of the following type of variable is visible only within a function where it is defined? ",
    choices: ["global", "local"],
    answer: "local"
  },
  {
    id: 2,
    question:
      "Which package did we use in the first lecture of neogcamp? ",
    choices: ["readline", "readlineSync", "sync"],
    answer: "readlineSync"
  },

  {
    id: 3,
    question:
      "Which of the following is a framework of JavaScript used for FrontEnd Dev? ",
    choices: ["ReactJs", "GatsByJs", "NextJs"],
    answer: "ReactJs"
  },
  {
    id: 4,
    question: "Which of the following is a framework of JavaScript used for BackEnd Dev? ",
    choices: ["ReactJs", "GatsByJs", "NextJs", "NodeJs"],
    answer: "NodeJs"
  }
];
const levelThree = [
  {
    id: 1,
    question: "To insert a JavaScript into an HTML page, which tag is used? ",
    choices: ["<js>", "<script>", "<html>", "<web>"],
    answer: "<script>"
  },
  {
    id: 2,
    question:
      "Javascript is an object oriented language? ",
    choices: ["yes", "no"],
    answer: "yes"
  },
  {
    id: 3,
    question:
      "Which of the following is not a framework of JavaScript ",
    choices: ["ReactJs", "GatsByJs", "NextJs", "Django"],
    answer: "Django"
  }
];
const quizQuestions = new Array(levelOne, levelTwo, levelThree);
// console.log(quizQuestions)
var username = readlineSync.question("May I know your name? ");

function newLevel(i) {
  var levelScore = 0
  console.log("Level " + (i + 1));
  console.log("You need to answer atleast 2 questions correct if you wish to level up. So stay focused and let the game begin!")
  for (var j = 0; j < quizQuestions[i].length; j++) {
    var userAnswer = readlineSync.keyInSelect(quizQuestions[i][j].choices, quizQuestions[i][j].question);
    if (quizQuestions[i][j].choices[userAnswer].toUpperCase() === quizQuestions[i][j].answer.toUpperCase()) {
      levelScore += 1
      //userScore += 1
      console.log("You are correct!");
      // console.log("Level " + (i + 1) + " Score: " + levelScore)

    }
    else {
      console.log("Oops! You are incorrect!")
      // console.log("Level " + (i + 1) + " Score: " + levelScore)
    }
    console.log("------------------------------")

  }
  return levelScore
}

function playGame() {
  var userScore = 0
  console.log("Welcome to the quiz " + username + "!");
  var numOfLevels = 3
  for (var i = 0; i < numOfLevels; i++) {
    var levelScore = newLevel(i)
    userScore += levelScore
    if (levelScore >= 2) {
      console.log("Congratulations you cleared level " + (i + 1))
      console.log("Final score: " + userScore)
      console.log("-------------------------------------------------------------")
      console.log("\n")
    }
    else {
      console.log("Oops! You could not clear this level. Better luck next time!")
      console.log("Final score: " + userScore)
      console.log("-------------------------------------------------------------")
      console.log("\n")
      break;
    }

  }



  if (userScore > highScore) {
    highScore = userScore
    console.log("Congratulations!! You set a new high score!")
    console.log("High Score: " + highScore)
  }
  console.log("------------------------------------------------------------------------------------------")
}

playGame()
newGame = readlineSync.question("Would you like to play again? Press y for yes and n for no ")
while (newGame.toUpperCase() === 'Y') {
  playGame()
}
console.log("Thank you! Hope you enjoyed the game.")

