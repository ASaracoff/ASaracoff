// source: https://youtu.be/ec8vSKJuZTk?si=3AiSQDZMQvRm3y3L&t=14903
// start: 10:25 am - 8 min phone call
// stop:  12:04 pm done with code 
// final:  1 hr 21 mins following code + ~30min (with family obliggations) 
// = 1 hour 51 min
// NOTE: same images as 'Space Mission Invasion" 

// get grid & results from doc
const grid = document.querySelector('.grid')
const resultsDisplay = document.querySelector('.results')

// set width:
const width = 15

// player start position
let currentShooterIndex = 202
let direction = 1
let invadersID
let goingRight = true
let results = 0

// make array of removed aliens
 aliensRemoved = []

// generate 225 divs dynamically inside grid
for(let i=0; i < 225; i++) {
    const square = document.createElement('div')
    grid.appendChild(square)
}

// make an array from the divs in the grid
const squares = Array.from(document.querySelectorAll('.grid div'))

// alien start squares
const alienInvaders = [
    0,1,2,3,4,5,6,7,8,9,
    15,16,17,18,19,20,21,22,23,24,
    30,31,32,33,34,35,36,37,38,39
]

// draw invaders
function draw() {
    for (let i = 0; i < alienInvaders.length; i++) {
        // find out if alien was hit by laser
        if (!aliensRemoved.includes(i)) {
            squares[alienInvaders[i]].classList.add('invader')
        }
    }        
}

draw()

// remove invaders
function remove() {
    for (let i = 0; i < alienInvaders.length; i++) {
        squares[alienInvaders[i]].classList.remove('invader')
    }
}


squares[currentShooterIndex].classList.add('shooter')

// move the shooter
function moveShooter(e) {
    squares[currentShooterIndex].classList.remove('shooter')
    switch(e.key) {
        case 'ArrowLeft':
            // is the shooter on the right side edge
            if (currentShooterIndex % width !== 0) currentShooterIndex -=1 // 1 to left
            break
        case 'ArrowRight':
            if(currentShooterIndex % width < width -1) currentShooterIndex += 1
            break
    }
    squares[currentShooterIndex].classList.add('shooter')
}
document.addEventListener('keydown', moveShooter)


// move invaders
function moveInvaders() {
    // aliens on the left edge?
    const leftEdge = alienInvaders[0] % width === 0
    // aliens on the right edge?
    const rightEdge = alienInvaders[alienInvaders.length -1] % width === width -1

    // remove invaders
    remove()

    // direction logid
    if (rightEdge && goingRight) {
        for (let i = 0; i < alienInvaders.length; i++) {
            // move all aliens down
            alienInvaders[i] += width + 1
            // then change direction
            direction = -1
            goingRight = false
        }
    }

    if (leftEdge && !goingRight){
        for (let i = 0; i < alienInvaders.length; i++) {
            alienInvaders[i] += width -1
            direction = 1
            goingRight = true
        }
    }

    // redraw
    for (let i = 0; i < alienInvaders.length; i++) {
        alienInvaders[i] += direction
    }

    // redraw invaders
    draw()

    // if it hits the shooter
    if (squares[currentShooterIndex].classList.contains('invader','shooter')) {
        resultsDisplay.innerHTML = "Game Over!! Final Score: " + results
        clearInterval(invadersID)
    }

    // if aliens hit the bottom
    for (let i = 0; i < alienInvaders.length; i++) {
        if (alienInvaders[i] > squares.length){
            resultsDisplay.innerHTML = "Game Over!! Final Score: " + results
        clearInterval(invadersID)
        }
    }

    // no more aliens
    if (aliensRemoved.length === alienInvaders.length) {
        resultsDisplay.innerHTML = "YOU WIN!!! Final Score: "+ results
        clearInterval(invadersID)
    }
}

invadersID = setInterval(moveInvaders,300)

// shoot
function shoot(e) {
    let laserID
    let currentLaserIndex = currentShooterIndex
    function moveLaser() {
        squares[currentLaserIndex].classList.remove('laser')
        currentLaserIndex -= width
        squares[currentLaserIndex].classList.add('laser')    

        // collision with alien
        if (squares[currentLaserIndex].classList.contains('invader')) {
            squares[currentLaserIndex].classList.remove('laser')
            squares[currentLaserIndex].classList.remove('invader')
            // add red effect
            squares[currentLaserIndex].classList.add('boom')
            
            // remove boom
            setTimeout(() => squares[currentLaserIndex].classList.remove('boom'), 300)
            clearInterval(laserID)

            // remove alien from alien array
            const alienRemoved = alienInvaders.indexOf(currentLaserIndex)

            // singular into plural array
            aliensRemoved.push(alienRemoved)

            // score
            results ++
            resultsDisplay.innerHTML = results
            
        }
    }

    // interval
        switch(e.key) {
            case 'ArrowUp':
                laserID = setInterval(moveLaser, 100)
        }
}

document.addEventListener('keydown', shoot)