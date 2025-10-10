// source: https://www.youtube.com/watch?v=ec8vSKJuZTk
//  4:06 start
// 

const cardArray = [
    {
        name: 'cheeseberger',
        img: 'img/cheeseburger.png'
    },
    {
        name: 'fries',
        img: 'img/fries.png'
    },
    {
        name: 'hotdog',
        img: 'img/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'img/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'img/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'img/pizza.png'
    },
    {
        name: 'cheeseberger',
        img: 'img/cheeseburger.png'
    },
    {
        name: 'fries',
        img: 'img/fries.png'
    },
    {
        name: 'hotdog',
        img: 'img/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'img/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'img/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'img/pizza.png'
    }
]

// shortcut to shuffle array randomly 
// - shuffle everytime browser is refreshed
cardArray.sort(() => 0.5 - Math.random())

// get grid div
const gridDisplay = document.querySelector('#grid');

// get result
const resultDisplay = document.querySelector('#result')

// empty array - place chosen/pre-clicked cards
// let - it gets emptied
let cardchosen = []

// chosen card ids  - gets emptied
let cardchosenID = []

// collect won cards
let cardsWon = []


function createBoard() {
    // for each item in array create new element
    // run loop 10x then stop
    // instead of hardcoding a # use array.length
    for (let i = 0; i < cardArray.length; i++){
        // create an img
        const card = document.createElement('img');
        // add an image src to each array
        card.setAttribute('src','img/blank.png')
        // add an id for each card images
        card.setAttribute('data-id',i)
        // addEventListener - will only run if card is clicked
        card.addEventListener('click', flipCard)
        // console.log(card,i)


        // add to grid
        gridDisplay.appendChild(card)
    }
}
// call funtion to ssee it in action
createBoard();


// check for matches
function checkMatch(){
    // #grid img = all images inside grid 
    // won't effect other imgs added later/other places
    const cards = document.querySelectorAll('#grid img')


    // save clicked - cleaner code
    const optionOneID = cardchosenID[0]
    const optionTwoID = cardchosenID[1]

    // console.log('check for match')
    
    // clicked same card
    if (optionOneID === optionTwoID) {
        alert('you clicked the same card!')
        // flip back over
        cards[optionOneID].setAttribute('src', 'img/blank.png')
        cards[optionTwoID].setAttribute('src', 'img/blank.png')
    }

    // found 2 diff cards
    else if (cardchosen[0] == cardchosen[1]) {
        alert('you found a match!')
        // if match turn cards white
        cards[optionOneID].setAttribute('src', 'img/white.png')
        cards[optionTwoID].setAttribute('src', 'img/white.png')

        // after turning white - you can't click again
        cards[optionOneID].removeEventListener('click', flipCard)
        cards[optionTwoID].removeEventListener('click', flipCard)
        cardsWon.push(cardchosen)
    } else {
        // flip back over
        cards[optionOneID].setAttribute('src', 'img/blank.png')
        cards[optionTwoID].setAttribute('src', 'img/blank.png')
        alert('sorry try again!')
    }
    // display score
    resultDisplay.textContent = cardsWon.length
    // empty arrays - restart
    cardchosen = []
    cardchosenID = []

    // if all cards won
    if(cardsWon.length === (cardArray.length/2)) {
        resultDisplay.textContent = "CONGRATZ YOU WON!"
    }
}


// flip on click
function flipCard() {
    // get full card array
    // console.log(cardArray)
    // get card id
    // this - interact with element clicked/selected
    let cardID = this.getAttribute('data-id')

    // add clicked card into cardchosen array
    cardchosen.push(cardArray[cardID].name)
    cardchosenID.push(cardID)
    // console.log(cardchosen)
    // console.log(cardchosenID)
    // console.log(cardchosen)
    this.setAttribute('src', cardArray[cardID].img)

    // if you found a pair
    if(cardchosen.length === 2) {
        // run funtion 500 ms after click
         setTimeout( checkMatch, 500)
    }
}