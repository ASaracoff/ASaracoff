// source: https://www.youtube.com/watch?v=dtaZl_Uxzbo
//  8:44 am - start
// 10:55 am - finished basic code ~2 hours 11 min to make
// 11:12 am - ended modifying Xs and Os ~17 min

// makes the div id=gameboard into a js element
const gameBoard = document.querySelector("#gameBoard")
const infoDisplay = document.querySelector("#info")
// console.log(gameBoard)

// represent the whole tictactoe board via an array
// an array of 9 empty strings
const startCells = [
    "", "", "",
    "", "", "",
    "", "", ""
]
// who goes first?
// used let because it can be overwritten
let go = "circle"

// displays text on html
infoDisplay.textContent = "Circle Goes First"

// create the game board
function createBoard(){
    // for each cell in array
    // '_' used to mark that 'cell' wasn't really used
    startCells.forEach((_cell, index) =>{
        // for each arrach create a "div" element but not really putting them anywhere in the document
        // made 9 divs
        const cellElement = document.createElement("div")
         
        // add a class list in JS
        // each array now has a <div class = "square">
        cellElement.classList.add("square")

        // give each cell an id (index of array)
        cellElement.id = index

        // listen/be aware of clicks
        // on click do function addGo
        cellElement.addEventListener("click", addGo)

        // puts numbers in each square array 0-8
        // cellElement.innerHTML = index

        // done to see if the circle and cross look good
        // // create circle
        // const circleElement = document.createElement("div")
        // // add class = "circle" to div
        // circleElement.classList.add("circle")
        // // add to cellElement
        // cellElement.append(circleElement)
        // // add to game board
        // gameBoard.append(cellElement)
        // // now every array has:
        // // <div class="square"><div class="circle"><div></div>

        // put the divs into the game board
        gameBoard.append(cellElement)
    })
}
// see what the function is doing
createBoard()

// define addGo function
// addGo(e) e = event, tells all the info
function addGo(e) {
    console.log("clicked", e.target)

    // create a div element
    const goDisplay = document.createElement("div")

    //  "go" was already set as circle, and will (in theory) change per turn
    goDisplay.classList.add(go)

    // where are we putting it?
    // use the e.target as a placecard
    e.target.append(goDisplay)

    // reassign go 
    // if go true equals circle switch to cross, if not set to circle
    go = go === "circle" ? "cross" : "circle"
    //        if equals      true    false

    // can see whose turn it is
    // console.log(go)
    infoDisplay.textContent = "It is now  " + go + "'s turn!"

    // remove event listenser - only 1 click per box allowed!
    e.target.removeEventListener("click",addGo)

    checkScore()
}
    // function to check score
    function checkScore(){
        // get all squares
        const allSquares = document.querySelectorAll(".square")
        // shows array - also known as a NodeList
        // console.log(allSquares)
        
        // make an array with all winning combos
        const winningCombos = [
            [0,1,2], // first row accross
            [3,4,5], // second row accross
            [6,7,8], // last row accross
            [0,3,6], // left column down
            [1,4,7], // center column down
            [2,5,8], // right column down
            [0,4,8], // diagonal L -> R
            [2,4,6] // diagonal R -> L
        ]

        // for each array
        winningCombos.forEach(array => {
            // circle wins = look into NodeList
            const circleWins = array.every(cell => 
                // every square looking for first child? (element) circle
                allSquares[cell].firstChild?.classList.contains("circle"))
        // if circle wins = display "circle wins!"
        if (circleWins) {
            infoDisplay.textContent = "Circle Wins!"
        
            // end game - no more placements
            // fills other squares so play stops/ stop event listeners
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
        }
        
       })

        winningCombos.forEach(array => {
            // circle wins = look into NodeList
            const crossWins = array.every(cell => 
                // every square looking for first child? (element) circle
                allSquares[cell].firstChild?.classList.contains("cross"))
        // if circle wins = display "cross wins!"
        if (crossWins) {
            infoDisplay.textContent = "Cross Wins!"

            // end game - no more placements
            // fills other squares so play stops/ stop event listeners
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
        }
        
       })
    }
