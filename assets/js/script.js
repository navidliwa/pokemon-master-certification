var question = document.querySelector('#question');
var choices = Array.from(document.querySelectorAll('.choice-text'));
var progressText = document.querySelector('#progressText');
var scoreText = document.querySelector('#score');
var progressBarFull = document.querySelector('#progressBarFull');

var currentQuestion = {}
var acceptingAnswers = true
var score = 0
var questionCounter = 0
var availableQuestions = []

var questions = [
    {
        question: 'What are the 3 types of Starter Pokemon?',
        choice1: '1',
        choice2: '2',
        choice3: '3',
        choice4: '17',
        answer: '2',
    },
    {
        question: 'What are the 3 types of Starter Pokemon?',
        choice1: '1',
        choice2: '2',
        choice3: '3',
        choice4: '17',
        answer: '2',
    },
    {
        question: 'What are the 3 types of Starter Pokemon?',
        choice1: '1',
        choice2: '2',
        choice3: '3',
        choice4: '17',
        answer: '2',
    },
    {
        question: 'What are the 3 types of Starter Pokemon?',
        choice1: '1',
        choice2: '2',
        choice3: '3',
        choice4: '17',
        answer: '2',
    },
    {
        question: 'What are the 3 types of Starter Pokemon?',
        choice1: '1',
        choice2: '2',
        choice3: '3',
        choice4: '17',
        answer: '2',
    },
    {
        question: 'What are the 3 types of Starter Pokemon?',
        choice1: '1',
        choice2: '2',
        choice3: '3',
        choice4: '17',
        answer: '2',
    },
    {
        question: 'What are the 3 types of Starter Pokemon?',
        choice1: '1',
        choice2: '2',
        choice3: '3',
        choice4: '17',
        answer: '2',
    },
    {
        question: 'What are the 3 types of Starter Pokemon?',
        choice1: '1',
        choice2: '2',
        choice3: '3',
        choice4: '17',
        answer: '2',
    },
    {
        question: 'What are the 3 types of Starter Pokemon?',
        choice1: '1',
        choice2: '2',
        choice3: '3',
        choice4: '17',
        answer: '2',
    },
    {
        question: 'What are the 3 types of Starter Pokemon?',
        choice1: '1',
        choice2: '2',
        choice3: '3',
        choice4: '17',
        answer: '2',
    },
    {
        question: 'What are the 3 types of Starter Pokemon?',
        choice1: '1',
        choice2: '2',
        choice3: '3',
        choice4: '17',
        answer: '2',
    },
]

var SCORE_POINTS = 100
var MAX_QUESTIONS = 10

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...quest]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions)
}