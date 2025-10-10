// source: https://www.youtube.com/watch?v=ec8vSKJuZTk
//  3:51 start
//  4:10 fin

const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let result
// for each button get id - rock papper scissors
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)+1
    if(randomNumber === 1){
        computerChoice = 'rock'
    }
    if(randomNumber === 2){
        computerChoice = 'paper'
    }
    if(randomNumber === 3){
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a DRAW!"
    }
    if (computerChoice === "rock" && userChoice === "paper") {
        result = 'You WIN!'
    }
    if (computerChoice === "rock" && userChoice === "scissors") {
        result = 'You LOSE!'
    }
    if (computerChoice === "paper" && userChoice === "scissors") {
        result = 'You WIN!'
    }
    if (computerChoice === "paper" && userChoice === "rock") {
        result = 'You LOSE!'
    }
    if (computerChoice === "scissors" && userChoice === "rock") {
        result = 'You WIN!'
    }
    if (computerChoice === "scissors" && userChoice === "paper") {
        result = 'You LOSE!'
    }
    resultDisplay.innerHTML = result
}