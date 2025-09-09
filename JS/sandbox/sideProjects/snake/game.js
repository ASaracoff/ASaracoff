// source: https://www.youtube.com/watch?v=QTcIXok9wNY&list=PLZlA0Gpn_vH8DWL14Wud_m8NeNNbYKOkj&index=27
// started on a diff day, forgot to log times >.>
// 5:25 continue from (18:03 mark)
// 7:22 ended
// second half ~ 2 hours
// if 28 min took 2 hours then 18 took 1? some of that time was css which is simpler and i have a firmer grasp of it
// approx 3 hours to follow and type

let lastRenderTime = 0

// starts game  - no failure yet!
let gameOver = false

// get gameBoard from html
const gameBoard = document.getElementById('game-board')

// don't do anything until you hit a certain threhold = snake speed => import speed from snake.js
import { update as updateSnake, draw as drawSnake,  SNAKE_SPEED, getSnakeHead, snakeIntersection } from "./snake.js"

// import food
import { update as updateFood, draw as drawFood} from "./food.js"

// import outside grid from grid
import { outsideGrid } from "./grid.js"


// game loop - function repeats on a set interval to update the 'snake' and 'food' location
// loops forever (or until turned off)

function main(currentTime) {
    // check to see if game over
    if (gameOver){
        if(confirm('Game Over. Restart? press OK')) {
            // refreshes page
            // if use '/' goes to root home page (proj1/CV)
            window.location = '/JS/sandbox/sideProjects/snake/snake.html'
        }
        return
    }

    // when can i refresh? ask the browser
    window.requestAnimationFrame(main)
    
    // in seconde not miliseconds
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000

    // refresh every half second between snake moves (?)
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return
    

    // last time we rendered snake
    console.log('render')
    lastRenderTime = currentTime



    // logic for our game
    // 2 diff steps: 
        // update loop = updates logic for game - did snake eat? did we loose? eat ourself?
        // draw/render = draws everything on the screen based on update logic

    update()
    draw() 
}

window.requestAnimationFrame(main)

// update
function update(){
    updateSnake()
    updateFood()
    checkDeath()
}


// draw
function draw(){
    // set gameBoard to nothing - so snake doesn't grow w/o food
    gameBoard.innerHTML = ''
    // process drawSnake 
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    // game fail if you hit a wall or yourself
    gameOver = outsideGrid(getSnakeHead())  || snakeIntersection()
}