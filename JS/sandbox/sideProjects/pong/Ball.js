// good starting speed not too slow but fast enough to get moving
const INITIAL_VELOCITY = .0025

// speed up very slowly - will slowly add up
const VELOCITY_INCREASE = 0.00001

export default class Ball {
    constructor(ballElem) {
        this.ballElem = ballElem
        // reset ball
        this.reset()
    }

    // where is the ball?
    // helper function to get X position
    get x(){
        // get starting x from CSS then converted it into a JS # we can use
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--x"))
    }

    set x(value){
        this.ballElem.style.setProperty("--x",value)
    }

    // helper function to get Y position
    get y(){
        // get starting x from CSS then converted it into a JS # we can use
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--y"))
    }

    set y(value){
        this.ballElem.style.setProperty("--y",value)
    }

    // bounce off walls
    rect() {
        return this.ballElem.getBoundingClientRect()
    }


    reset() {
        // default center position
        this.x = 50 
        this.y = 50
        
        // direction - where we are going
        this.direction = { x: 0 }
        
        // abs - positive #, then if the ball is going directly up/down OR right/left - boring game
        while(
            Math.abs(this.direction.x) <= .2 || 
            Math.abs(this.direction.x) >= .9 
        ) {
            // where are we going? our heading
            // 2 * PI = ~360 degrees - can use cos and sin
            const heading = randomNumberBetween(0, 2 * Math.PI)
            // converted into  a (x,y) position
            this.direction = { x: Math.cos(heading), y: Math.sin(heading) }
        }
        // console.log(this.direction)
        // velocity = how fast we are going
        this.velocity = INITIAL_VELOCITY
    }

    // update ball 
    // velocity and direction
    // add paddle rectangles - bounce
    update(delta, paddleRects) {
        // location of ball
        // plugs # as value in set x() / y()
        // add direction we are going * speed * time delay
        this.x += this.direction.x * this.velocity * delta
        this.y += this.direction.y * this.velocity * delta

        // increase ball speed * time dela
        this.velocity += VELOCITY_INCREASE * delta

        // rect - bounce wall
        const rect = this.rect()

        // eventually will write code so bounce only off paddles
        // ball hits bottom/top of screen
        if (rect.bottom >= window.innerHeight || rect.top <= 0) {
            //  flip the y direction
            this.direction.y *= -1
        }

        // ball hits left/right of screen
        // modified to see if ball hit paddles
        // if (rect.left >= window.innerWidth || rect.right <= 0) 
        // now it loops through all paddles/walls to see if theres a collision/hit and flips ball direction
        if (paddleRects.some( r => isCollision( r, rect)))
            {
            //  flip the y direction
            this.direction.x *= -1
        }
    }
}

function randomNumberBetween(min, max){
    // get random number * scale for our range + min (so min will always be the min)
    return Math.random() * (max - min) + min
}

// if the ball hits any direction/wall 
function isCollision(rect1, rect2) {
    return (
        rect1.left <= rect2.right &&
        rect1.right >= rect2.left &&
        rect1.top <= rect2.bottom &&
        rect1.bottom >= rect2.top
    )
}