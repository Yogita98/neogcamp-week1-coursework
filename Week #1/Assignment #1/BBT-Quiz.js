
var highScore = 0


// Take the name of the user and print it on the console
var readlineSync = require('readline-sync');
const levelOne = [
  {
    id: 1,
    question: "Big Bang Theory streams on? ",
    choices: ["Netflix", "Prime", "Hotstar", "None"],
    answer: "Netflix"
  },
  {
    id: 2,
    question:
      "What is the genre of BBT? ",
    choices: ["horror", "sci-fi", "romance", "situational comedy"],
    answer: "situational comedy"
  },
  {
    id: 3,
    question:
      "How many seasons are there of BBT? ",
    choices: ["11", "12", "13", "10"],
    answer: "12"
  },
  {
    id: 4,
    question: "In which year was the final season of BBT streamed? ",
    choices: ["2018", "2017", "2019", "2020"],
    answer: "2019"
  }
];
const levelTwo = [
  {
    id: 1,
    question: "Who is Sheldon's girlfriend in BBT? ",
    choices: ["Penny", "Amy", "Bernadette"],
    answer: "Amy"
  },
  {
    id: 2,
    question:
      "What is the profession of Penny? ",
    choices: ["Waitress", "Scientist", "Musician"],
    answer: "Waitress"
  },

  {
    id: 3,
    question:
      "BBT is based on the life of how many male friends? ",
    choices: ["1", "2", "3", "4"],
    answer: "4"
  },
  {
    id: 4,
    question: "Where is Rajesh from? ",
    choices: ["Spain","Ireland", "India", "America"],
    answer: "India"
  }
];

const quizQuestions = new Array(levelOne, levelTwo);
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
  var numOfLevels = quizQuestions.length
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

