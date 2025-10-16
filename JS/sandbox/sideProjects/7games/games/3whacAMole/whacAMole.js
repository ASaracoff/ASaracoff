// source: https://youtu.be/ec8vSKJuZTk?si=yC-NGZl2dmMWNKy_&t=3880
// 10:10 start
// 11:17 fin - added custom images found online and slightly modified
// 1hr 7 min total

const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

// set the score
let result = 0

// where did user click
let hitPosition 

// start timer
let currentTime = 60

// make global - used by multi-functions
let timerID = null

// random square - mole placement
function randomSquare() {
    // for every square remove 'mole'
    squares.forEach(square => {
        // refresh grid
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random()*9)]
    // add the mole
    randomSquare.classList.add('mole')

    // hit mole (?)
    hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id === hitPosition){
            // add 1 point
            result++
            // show user
            score.textContent = result
            hitPosition = null
        }
    })
})

// add a timer
function moveMole(){
    // how fast the mole moves
    timerID = setInterval(randomSquare, 1000)
}


// auto start
    // you can add to a button if you wish
moveMole()

// timer countdown
function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    // end game
    if(currentTime === 0) {
        // reset timer
        clearInterval(countDownTimerID)
        // stop mole
        clearInterval(timerID)
        alert('GAME OVER! Your final score is ' + result + '. Refresh to restart.')
    }
}

// every second
let countDownTimerID = setInterval(countDown,1000)