// all code on how the snake moves


// get getInputDirection()
import { getInputDirection } from "./input.js"


// don't do anything until you hit a certain threhold = snake speed
// 2 : how many times the snake moves per second 
// larger number = faster the snake
export const SNAKE_SPEED = 5

// draw snake with x,y positions on grid
const snakeBody = [
    // make a 3-segment snake a vert line
    // to make snake move simply add new direction to start of array and shift the body up 1, and last segment dissapears
    { x:11, y:11 }
]

// grow snake - start at 0
let newSegments = 0

export function update(){
    // grow body
    addSegments()
    // from input.js
    const inputDirection = getInputDirection()
    // -2 gives second to last element, loop as long as body is greater than 0 and delete 1 each loop
    // work from the bottom and work our way up
    for(let i = snakeBody.length - 2;i >= 0; i-- ){
        // before the last one we selected + last element = to current element 
        // {...} new object = no reference problems = no duplicated snake
        // move to where it's 'parent' in in the body
        snakeBody[i+1] = {...snakeBody[i] }
    }

    // adding movement to head of snake
    snakeBody[0].x += inputDirection.x    
    snakeBody[0].y += inputDirection.y
}

export function draw(gameBoard){
    snakeBody.forEach(segment => {
        // create a div 
        const snakeElement = document.createElement('div')
        // (x,y) coordinates
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        // add css element to snake via class
        snakeElement.classList.add('snake')
        // add to page
        gameBoard.appendChild(snakeElement)
    })
}

// grow snake
export function expandSnake(amount){
    newSegments += amount
}

// is snake on food?
// ignoreHead - false on default, or an empty object if no input
export function onSnake(position, { ignoreHead = false} = {}){
    // snake body position = to onSnake position?
    // if any part of the snake body is on the food it grows
    return snakeBody.some(( segment, index) => {
        // if we are on the head
        if (ignoreHead && index === 0) return false
        return equalPositions(segment,position)
    })
}

// snake Head location
export function getSnakeHead(){
    // the first snake segment
    return snakeBody[0]
}


export function snakeIntersection(){
    // is the snake head touching any other segment?
    return onSnake(snakeBody[0], { ignoreHead:true})

}

// do the 2 positions match up?
function equalPositions( pos1, pos2 ){
    return  pos1.x === pos2.x && pos1.y === pos2.y
}

// add to snake body
function addSegments(){
    for(let i=0; i < newSegments; i++) {
        // add 1 more than lengh
        // taking the last segment and duplicating it
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
  }
//   fixes the endless growth problem
  newSegments = 0
}