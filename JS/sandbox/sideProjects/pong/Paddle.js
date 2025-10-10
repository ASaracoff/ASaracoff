// computer has max speed
const SPEED = 0.02

export default class Paddle {
    constructor(paddleElem) {
        this.paddleElem = paddleElem
        // center paddles
        this.reset()
    }


    // move player paddle via mouse - same code as the ball
    get position() {
        return parseFloat(
            getComputedStyle(this.paddleElem).getPropertyValue  ("--position")
        )
    }

    set position(value) {
        this.paddleElem.style.setProperty("--position",value)
    }

    // paddle rectangle - to bounce off
    rect(){
        return this.paddleElem.getBoundingClientRect()
    }

    // reset paddle to center
    reset() {
        this.position = 50
    }

    // update computer paddle - follow ball
    update(delta, ballheight) {
        // paddle always where the ball is - player never win
        // so we set max speed for computer
        // position = speed * time * (ballheigh - current location)
        this.position += SPEED * delta * (ballheight - this.position)
    }
}