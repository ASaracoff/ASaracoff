// where we get all the input

let inputDirection = {x:0, y:0 }
let lastInputDirection = {x:0, y:0}

// add a listender for key press and translate into movement
window.addEventListener('keydown', e =>{
    switch (e.key){
        case 'ArrowUp':
            // to prevent the snake from moving onto itself
            if(lastInputDirection.y !==0)break
            // -1 moves us upwards
            inputDirection = { x: 0, y:-1 }
            break
        case 'ArrowDown':
            if(lastInputDirection.y !==0)break
            // -1 moves us downwards
            inputDirection = { x: 0, y:1 }
            break
        case 'ArrowLeft':
            if(lastInputDirection.x !==0)break
            // -1 moves us leftwards
            inputDirection = { x: -1, y:0 }
            break
        case 'ArrowRight':
            if(lastInputDirection.x !==0)break
            // -1 moves us rightwards
            inputDirection = { x: 1, y:0 }
            break
    }
})


export function getInputDirection(){
    lastInputDirection = inputDirection
    return inputDirection
}