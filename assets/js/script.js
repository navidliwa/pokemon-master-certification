var question = document.querySelector('#question');
var choices = Array.from(document.querySelectorAll('.choice-text'));
var progressText = document.querySelector('#progressText');
var scoreText = document.querySelector('#score');
var progressBarFull = document.querySelector('#progressBarFull');
var timerText = document.querySelector('#timer');

var currentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];

var questions = [
    {
        question: 'What are the 3 types of Starter Pokemon?',
        choice1: 'Cute, Tough, and Cool',
        choice2: 'Fire, Water, and Grass',
        choice3: 'Frog, Turtle, Lizard',
        choice4: 'Ash, Brock, and Misty',
        answer: 2,
    },
    {
        question: `What is the name of Pickachu's voice actor/actress?`,
        choice1: 'Ikue Otani',
        choice2: 'Ash Ketchup',
        choice3: 'Elon Musk',
        choice4: 'Rica Matsumoto',
        answer: 1,
    },
    {
        question: 'Where can you go to breed pokemon?',
        choice1: 'Pokemon Center',
        choice2: `The Professor's Lab`,
        choice3: 'The Daycare',
        choice4: `They'll breed by themselves`,
        answer: 3,
    },
    {
        question: 'What are the 3 types of Starter Pokemon?',
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: 1,
    },
    {
        question: 'What are the 3 types of Starter Pokemon?',
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: 4,
    },
    {
        question: 'What are the 3 types of Starter Pokemon?',
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: 2,
    },
    {
        question: 'What are the 3 types of Starter Pokemon?',
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: 4,
    },
    {
        question: 'What are the 3 types of Starter Pokemon?',
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: 1,
    },
    {
        question: 'What are the 3 types of Starter Pokemon?',
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: 3,
    },
    {
        question: 'What are the 3 types of Starter Pokemon?',
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '17',
        answer: 2,
    },
]

var SCORE_POINTS = 100;
var MAX_QUESTIONS = 10;
var totalTimer = 300;
var intervalId;

startTimer = () => {
    totalTimer = 300;
    timerText.innerText = `${Math.floor(totalTimer / 60)}:${(totalTimer % 60).toString().padStart(2, '0')}`;
    intervalId = setInterval(function () {
        totalTimer--;
        timerMin = Math.floor(totalTimer / 60);
        timerSec = (totalTimer % 60).toString().padStart(2, '0');
        timerText.innerText = `${timerMin}:${timerSec}`;
        if(totalTimer === 0){
            clearInterval(intervalId);

            localStorage.setItem('mostRecentScore', score);
            
            window.location.assign('/end.html');
        }
    }, 1000);
}

startGame = () => {
    startTimer();
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    
    getNewQuestion();
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);

        return window.location.assign('/end.html');
    }

    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;

    var questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        var number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    })

    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        var selectedChoice = e.target;
        var selectedAnswer = selectedChoice.dataset['number'];

        var classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame()