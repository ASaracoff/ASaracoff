// source: https://www.youtube.com/watch?v=PeY6lXPrPaA
//  9:42 start -18 min
// 10:00 pause - talk with uncle
// 10:20 resume
// 10:46 done with HTML/CSS - start JS
// 12:00 pause - chimes - 1h 40 m
// 12:22 continue
//  1:25 Finished - 1h 25 min
// ~ 3h 23 min

// runs in an Update Loop
// will breakdown each element into classes

import Ball from "./Ball.js"
import Paddle from "./Paddle.js"

// select ball CSS and make a new class for it
 const ball = new Ball(document.getElementById("ball"))

//  get player and computer paddle - same class
const playerPaddle = new Paddle(document.getElementById("player-paddle"))
const computerPaddle = new Paddle(document.getElementById("computer-paddle"))

// player/computer score
const playerScoreElem = document.getElementById("player-score")
const computerScoreElem = document.getElementById("computer-score")


let lastTime

//  update
function update(time) {
    // check for lastTime - yes? run important code
    if(lastTime != null){

    // convert time to delta (?)
    const delta = time - lastTime
        // console.log(delta)
    
    // Update Code
    // delta fluctuated
    // (time, [player paddle, computer paddle])
    ball.update(delta, [playerPaddle.rect(), computerPaddle.rect()])

    // update computer paddle
    // ball.y - paddle needs to know where the ball is
    computerPaddle.update(delta, ball.y)

    // change color - hsl
    // get the hue
    const hue = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--hue"))

    // change hue incrimentally everytime delta changes
    document.documentElement.style.setProperty("--hue", hue + delta * .01)

        // lose game
        if (isLose()) handleLose() 
    }


    // infinite loop
    lastTime = time
    window.requestAnimationFrame(update)
}

function isLose() {
    const rect = ball.rect()
    
    // out of bounds - a paddle missed
    return rect.left >= window.innerWidth || rect.right <= 0
}

// reset game to start
function handleLose() {
    // increment score
    const rect = ball.rect()

    // player score
    if (rect.right >= window.innerHeight){
        // get score text, make integer + 1
        playerScoreElem.textContent = parseInt(playerScoreElem.textContent) + 1
    } else {
        computerScoreElem.textContent = parseInt(computerScoreElem.textContent) + 1
    }

    // reset ball/paddles
    ball.reset()
    computerPaddle.reset()

}

// player paddle moves with mouse
document.addEventListener("mousemove", e => {
    // e.y = pixel -> convert to % for CSS
    playerPaddle.position =  e.y / window.innerHeight * 100
})

// better than changeInterval because its called everytime something on screen is allowed to change. changeInterval isn't very accurate and will run no matter what (?)
window.requestAnimationFrame(update)