//Guessing game

function GuessingGame() {
  var answer = prompt("Guess a number between 1 and 10");
  var correct = Math.floor(Math.random() * 10 + 1);

  do {
    var answer = prompt("Guess again!");
  }
  while (answer != correct);

  alert("Correct - the answer was " + correct + "! You must be psychic!");
}

// Quiz

var questions = [
  {
    question: "What is the highest number used in a Sudoku puzzle?",
    answers: {
      a: '8',
      b: '9',
      c: '10'
    },
    correctAnswer: 'b'
  },

  {
    question: "What unit is used to measure horses?",
    answers: {
      a: 'Hands',
      b: 'Feet',
      c: 'Legs'
    },
    correctAnswer: 'a'
  },

  {
    question: "What kind of instrument can be bass, Spanish or electric?",
    answers: {
      a: 'Guitar',
      b: 'Cello',
      c: 'Violin'
    },
    correctAnswer: 'a'
  },

  {
    question: "What was the most downloaded app of 2020?",
    answers: {
      a: 'Tinder',
      b: 'Zoom',
      c: 'TikTok'
    },
    correctAnswer: 'c'
  },

  {
    question: "What is the name of a baby goose?",
    answers: {
      a: 'Squab',
      b: 'Gosling',
      c: 'Gooselet'
    },
    correctAnswer: 'b'
  },

  {
    question: "On average, which country consumes the most chocolate per person?",
    answers: {
      a: 'Belgium',
      b: 'Switzerland',
      c: 'Austria'
    },
    correctAnswer: 'b'
  },

  {
    question: "Which of the following cartoons has been on air the longest?",
    answers: {
      a: 'The Simpsons',
      b: 'Family Guy',
      c: 'South Park'
    },
    correctAnswer: 'a'
  },

  {
    question: "What is the currency of Denmark?",
    answers: {
      a: 'Franc',
      b: 'Euro',
      c: 'Krone'
    },
    correctAnswer: 'c'
  },

  {
    question: "What is the most sold flavour of Walker's Crisps?",
    answers: {
      a: 'Cheese and Onion',
      b: 'Ready Salted',
      c: 'Salt and Vinegar'
    },
    correctAnswer: 'a'
  },

  {
    question: "Definitely Maybe was the debut album of which British band?",
    answers: {
      a: 'Blur',
      b: 'Oasis',
      c: 'The Verve'
    },
    correctAnswer: 'b'
  }

]

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(questions, quizContainer, resultsContainer, submitButton);

function generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton) {

  function showQuestions(questions, quizContainer) {
    // we'll need a place to store the output and the answer choices
    var output = [];
    var answers;

    // for each question...
    for (var i = 0; i < questions.length; i++) {

      // first reset the list of answers
      answers = [];

      // for each available answer to this question...
      for (letter in questions[i].answers) {

        // ...add an html radio button
        answers.push(
          '<label>'
          + '<input type="radio" name="question' + i + '" value="' + letter + '">'
          + letter + ': '
          + questions[i].answers[letter]
          + '</label>'
        );
      }

      // add this question and its answers to the output
      output.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
      );
    }

    // finally combine our output list into one string of html and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(questions, quizContainer, resultsContainer) {
    //gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');
    //keep track of user's answers 
    var userAnswer = '';
    var numCorrect = 0;
    //for each question...
    for (var i = 0; i < questions.length; i++) {
      //find selected answer
      userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;
      //if answer is correct
      if (userAnswer === questions[i].correctAnswer) {
        //add to the number of correct answers
        numCorrect++;
        //colour answers green
        answerContainers[i].style.color = 'lightgreen';
      }
      //if answer is wrong or blank
      else {
        //colour the answers red
        answerContainers[i].style.color = "red"
      }
    }
    //show number of correct answers out of total
    resultsContainer.innerHTML = "Well done! You scored " + numCorrect + " out of " + questions.length;
  }

  showQuestions(questions, quizContainer);

  //on submit show results
  submitButton.onclick = function () {
    showResults(questions, quizContainer, resultsContainer);
  }
}


