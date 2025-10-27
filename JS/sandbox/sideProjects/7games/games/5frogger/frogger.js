// source: https://youtu.be/ec8vSKJuZTk?si=sjankB9qDqdM6SKE&t=9079
// Start: 10:16 
// Pause: 11:02 => ~46 min done w html & css 
// Start:  5:00 start (-40min for life chores)
//  Stop:  8:16 => 3:16 - 40min = 2:36
// total Time: ~ 3 hours 22  min

const timeLeft = document.querySelector('#time-left')
const resultDisplay = document.querySelector('#result')
const startPauseButton = document.querySelector('#start-pause-button')

const gridDisplay = document.querySelector('.grid')
const squares = document.querySelectorAll('.grid div')


// obstacles
const logsLeft = document.querySelectorAll('.log-left')
const logsRight = document.querySelectorAll('.log-right')
const carsLeft = document.querySelectorAll('.car-left')
const carsRight = document.querySelectorAll('.car-right')

// console.log(squares)
let currentIndex = 76 // starting-block

// grid width
const width = 9 
let timerID // null



// count down - how long does the user have to win?
let currentTime = 20

// startPauseButton
startPauseButton.addEventListener('click', () => {
    if(timerID) {
        clearInterval(timerID)
        clearInterval(outcomeTimerID)
        outcomeTimerID = null
        timerID = null
        document.removeEventListener('keyup', moveFrog)
    } else {
        // execute elements on a timer - move every second
        timerID = setInterval(autoMoveElements, 800)
        outcomeTimerID = setInterval(outcome, 50)
        document.addEventListener('keyup', moveFrog)
    }
})


// timer for logs and cars

function moveFrog(e) {
    // console.log('moved')

    // remove .frog from all divs
    squares[currentIndex].classList.remove('frog')
    
    // to move '.frog' add or subtract #s from currentIndex
    switch(e.key){
        case 'ArrowLeft' :
            // console.log('move left')
            // limit movement -> can't jump to next row up 
            if(currentIndex % width != 0)
            currentIndex -= 1 // 75
            break
        case 'ArrowRight' :
            // console.log('move right')
            // limit movement -> can't jump to next row down
            if(currentIndex % width < width - 1)
            currentIndex += 1 // 77
            break
        case 'ArrowUp' :
            // console.log('move up')
            // if index - width (9) > 0 otherwise no move
            if(currentIndex - width >= 0)
            currentIndex -= width // use grid amount (9)
            break
        case 'ArrowDown' :
            // console.log('move down')
            if(currentIndex + width < width * width)
            currentIndex += width // use grid amount (9)
            break
    }
    squares[currentIndex].classList.add('frog')
}


// check for win/lost
function outcome() {
        // check for a lose
    loseGame()

    // check for a win
    winGame()
}

//  moving log classes l1-l5, car 1-3
function autoMoveElements() {
    // get current time and remove 1 sec
    currentTime--
    timeLeft.textContent = currentTime

    // gets all class 'log-left' divs
    logsLeft.forEach(logLeft => moveLogLeft(logLeft))

    // gets all class 'log-right' divs
    logsRight.forEach(logRight => moveLogRight(logRight))

    // gets all class 'car-right' divs
    carsRight.forEach(carRight => moveCarRight(carRight))

    // gets all class 'car-left' divs
    carsLeft.forEach(carLeft => moveCarLeft(carLeft))

}

// lose - frog hit water or a car:
function loseGame(){
    if(squares[currentIndex].classList.contains('c1') || 
    squares[currentIndex].classList.contains('l4') || 
    squares[currentIndex].classList.contains('l5') ||
    currentTime === 0
    ){
        resultDisplay.textContent = "You Lose!"
        clearInterval(timerID)
        clearInterval(outcometimerID)
        squares[currentIndex].classList.remove('frog')
        document.removeEventListener('keyup', moveFrog)
    }
}

// win - frog got to ending block
function winGame(){
    if(squares[currentIndex].classList.contains('ending-block')){
        resultDisplay.textContent = "You Win!"
        clearInterval(timerID)
        clearInterval(outcometimerID)
        document.removeEventListener('keyup', moveFrog)
    }
}


//  move logs - left
function moveLogLeft(logLeft) {
    // look for true statements
    switch(true){
        // does the div also contain 'l1' class?
        case logLeft.classList.contains('l1'):
        // yes? then:
            logLeft.classList.remove('l1')
            logLeft.classList.add('l2')
            break
        case logLeft.classList.contains('l2'):
        // yes? then:
            logLeft.classList.remove('l2')
            logLeft.classList.add('l3')
            break
        case logLeft.classList.contains('l3'):
        // yes? then:
            logLeft.classList.remove('l3')
            logLeft.classList.add('l4')
            break
        case logLeft.classList.contains('l4'):
        // yes? then:
            logLeft.classList.remove('l4')
            logLeft.classList.add('l5')
            break
        case logLeft.classList.contains('l5'):
        // yes? then:
            logLeft.classList.remove('l5')
            logLeft.classList.add('l1')
            break
    }
}

function moveLogRight(logRight) {
    // look for true statements
    switch(true){
        // does the div also contain 'l1' class?
        case logRight.classList.contains('l1'):
        // yes? then:
            logRight.classList.remove('l1')
            logRight.classList.add('l5')
            break
        case logRight.classList.contains('l5'):
        // yes? then:
            logRight.classList.remove('l5')
            logRight.classList.add('l4')
            break
        case logRight.classList.contains('l4'):
        // yes? then:
            logRight.classList.remove('l4')
            logRight.classList.add('l3')
            break
        case logRight.classList.contains('l3'):
        // yes? then:
            logRight.classList.remove('l3')
            logRight.classList.add('l2')
            break
        case logRight.classList.contains('l2'):
        // yes? then:
            logRight.classList.remove('l2')
            logRight.classList.add('l1')
            break
    }
}


//  move cars - left
function moveCarLeft(carLeft) {
    // look for true statements
    switch(true){
        // does the div also contain 'l1' class?
        case carLeft.classList.contains('c1'):
        // yes? then:
            carLeft.classList.remove('c1')
            carLeft.classList.add('c2')
            break
        case carLeft.classList.contains('c2'):
        // yes? then:
            carLeft.classList.remove('c2')
            carLeft.classList.add('c3')
            break
        case carLeft.classList.contains('c3'):
        // yes? then:
            carLeft.classList.remove('c3')
            carLeft.classList.add('c1')
            break
    }
}

//  move cars - left
function moveCarRight(carRight) {
    // look for true statements
    switch(true){
        // does the div also contain 'l1' class?
        case carRight.classList.contains('c1'):
        // yes? then:
            carRight.classList.remove('c1')
            carRight.classList.add('c3')
            break
        case carRight.classList.contains('c3'):
        // yes? then:
            carRight.classList.remove('c3')
            carRight.classList.add('c2')
            break
        case carRight.classList.contains('c2'):
        // yes? then:
            carRight.classList.remove('c2')
            carRight.classList.add('c1')
            break
    }
}
