
import { onSnake, expandSnake } from "./snake.js"
import { randomGridPosition } from "./grid.js"

// css grid actually starts with 1 - not 0
let food = getRandomFoodPosition()
// how much does the snake grow when it eats food?
const EXPANSION_RATE = 1

export function update(){
    // is snake ontop of food?
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition()
    }
}

export function draw(gameBoard){
    // create a div 
    const foodElement = document.createElement('div')
    // (x,y) coordinates
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    // add css element to snake via class
    foodElement.classList.add('food')
    // add to page
    gameBoard.appendChild(foodElement)

}

// randomize food location
function getRandomFoodPosition() {
    // when last food eaten generate new food NOT on snake body
    let newFoodPosition
    // as long as new food isn't 0 or on the snake
    while (newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition()
    }
    // will loop forever giving new food until food is NOT on the snake THEN it outputs new food
    return newFoodPosition
}