console.log("getPlayingCard")

// function getCard() which returns a random playing card
// {value: 'K'
//  suit: 'clubs'
// }

// pick a random value 1-10,J,Q,K,A
// pick a random suit: clubs, hearts, diamonds, spades
// return both in an object

// my try:
// i don't know what to put in the getCard(????)
// function getCard(){
//     // made object with arrays of options
//     // i got the array prt correct - just made it a variable
//     let card = {card: [2,3,4,5,6,7,8,9,10,'Jack','Queen','King','Ace'],
//     suit: ['spades','clubs','hearts', 'diamonds']}
//     // made variables to randomly generate a # btween 1-13 and 1-4 repecively 
//      instead of hardcodeing in #s i should;ve done card.length and suit.length
//     let randomNum = Math.floor(Math.random()*13+1);
//     let randomSuit = Math.floor(Math.random()*4+1);
//     // then console.log result?
//     console.log(`${card.indexOf[randomNum]} of ${suit.indexOf[randomSuit]}`)
// }

// console.log('getCard()')
// console.log(getCard())

// review
// i guess no argument
// change *13/*4 to card.length/suit.length
// remove +1
// return an object... not console.log
// 


// vrs 1
function getCard2(){
    const values = [2,3,4,5,6,7,8,9,10,'Jack','Queen','King','Ace'];
    
    const valIdx = Math.floor(Math.random()*values.length)
    value = values[valIdx];

    const suits =  ['spades','clubs','hearts', 'diamonds']
    const suitIdx = Math.floor(Math.random()*suits.length);
    const suit = suits[suitIdx];

    // console.log(value,suit);
    // return an object:
    return{value:value, suit:suit};
}

// vrs 2
// when you see repeating code you can make it into a function

// picks a random index of an array
// made it 'generic' but easier to see what is going on
function pick(arr){
    const idx = Math.floor(Math.random()*arr.length)
    return arr[idx];
}

function getCard3(){
    const values = [2,3,4,5,6,7,8,9,10,'Jack','Queen','King','Ace'];
    const suits =  ['spades','clubs','hearts', 'diamonds']

    const value = pick(values);
    const suit = pick(suits);

    return{value:value, suit:suit};
}

function getCard4(){
    const values = [2,3,4,5,6,7,8,9,10,'Jack','Queen','King','Ace'];
    const suits =  ['spades','clubs','hearts', 'diamonds']

    // skip the const = pick(arr) and put it straight into the return
    return{value:pick(values), suit:pick(suits)};
}
