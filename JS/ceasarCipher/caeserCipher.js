// Exercise 2
console.log("Exercise 2")

const friend = "BRUTUS"
const shiftValue = 3;

//step 1
const latinAlpha = "abcdefghijklmnopqrstuvwxyz";
console.log(friend, latinAlpha);
// latinAlpha.length works in browser console but not here look to line 30 for the index of latinAlpha

//step 2
const friendIndex = friend[0];
const index = latinAlpha.indexOf(friendIndex.toLowerCase(), latinAlpha.length);

console.log(friendIndex, latinAlpha.indexOf('b'), index);

//Q1. 'b' is indexed at #1 because indexing starts with 0 rather than our tendency of starting with 1.

// Step 3
const FriendNewIndex = index + shiftValue;
const encryptedFirstLetter = latinAlpha[FriendNewIndex];

console.log(FriendNewIndex, encryptedFirstLetter);

// Q2. % Modulo apperantly is the remainder, but was not shown how to use it in code yet.

// Step 4 + 5
const alphaLength = latinAlpha.length;
const newIndex = (index +shiftValue) % alphaLength;
//I did look at answer to know how to use th % correctly

console.log(alphaLength, newIndex);

//step 6
const encryptedMess = "EUXWXV";
const teaserMess = encryptedMess.slice(0,3); 

console.log(teaserMess);


// Excercise 3 Creating a Secret Shift Value
console.log("Exercise 3")

// step 1
let randomDec = Math.random();
console.log("randomDec",randomDec)

// step 2 - my true try
let shiftVal = Math.floor(Math.random()*31)+3
console.log(shiftVal)

// step 2 checked answer because I was curious and realized I missunderstood the question?
const range = (33-3) +1
console.log("range value:", range)


// Q1 - Why add the 1?
// because we don't want the 0 in the cypher

// step 3
randomDec * range
console.log ("randomDec * range", randomDec*range)

// Q2 - how does multiplying randomDec by range help get a number in range?
// randomDec is only a # 0-1 (not including 1) so by multiplying it by the range i assume it complys to my wishes

// step 4
let randomInt = Math.floor(randomDec*range)
console.log("randomInt",randomInt)

// Q3 - Why use the Math.floor instead of Math.round?
// I simply don't want decimals, so i use floor. If I use .round instead I  will never have 0 which means we won't get that cypher option of 3.

// step 5
randomInt + shiftValue
console.log("randomInt + shiftValue",randomInt + shiftValue)

// Q4 - How does adding 3 to randomIn ensure final shiftValue is between 3-33?
// range was 0-30, added 1 to remove getting the #0 
// then add shiftValue (3) shifts all # by 3 to get 3-33 



// Excercise 4 - The Secret Emblem
console.log("Exercise 4")


const emblemClue1 = 'Eagle';
const emblemClue2 = 'Laurel';
const emblemClue3 = 7;

// Step 1 
// Use if/else if/else to decipher first clue

if (emblemClue1 === 'Eagle'){
   locationStart = 'Forum';
}else if (emblemClue1 === 'Lion'){
    locationStart = 'Coloseum';
}else{
    locationStart = 'Villa';
}
console.log(locationStart);

// Step 2 - Boolean Logic
//  if A && B then C
//  if A || B then C

if (emblemClue2 === 'Laurel' && locationStart === 'Forum'){
    locationStart += (" of Augustus");
}else if (emblemClue2 === 'Grapes' || locationStart === 'Villa'){
    locationStart += (" of Pompey")
}
console.log(locationStart);

// Step 3 -  Switch Statement
// debending on value of emblemClue3 append a direction to Location

switch (emblemClue3){
    case 7: locationStart += (" North")
    break;
    case 3: locationStart += (" South")
    break;
    case 9: locationStart += (" East")
    break;
    case 4: locationStart += (" West")
    break;
}

console.log(locationStart);

// Question: Why is it important to be careful when using '==' instead of '===' in our conditionals?
// '==' only compares data type, so 1 == '1' is true even though one is a number while the other is a string
// '===' compares data type AND Value so 1 === '1' is false, they are not EXACTLY the same

// Exercise 5
console.log("Exercise 5")

// given code:
const guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"];

// Step 1
// Add BRUTUS to beginning 

guests.unshift('BRUTUS');
console.log (guests)

// Question 1
// verify by using console.log 
// OR indexOf('BRUTUS') = 0 = first in line!

guests.indexOf('BRUTUS');
console.log('index of BRUTUS', guests.indexOf('BRUTUS'))

// Step 2
// Add AUGUSTUS and LUCIA to end of array

guests.push('AUGUSTUS', 'LUCIA');
console.log (guests)

// Step 3
// Search for SPARTACUS, what position?
spartacusIndex = guests.indexOf('SPARTACUS')
console.log(spartacusIndex)

// Question 2
// If Sparticus isnt invited what value would spartacusIndex be?
// -1 Not found

// Step 4
// Remove CASSIUS
guests.splice(3,1)
console.log (guests)

// Step 5
// make a copy array but only with first 3 lists
specialInvite = guests.slice(0,3);
console.log(specialInvite)


// Step 6
// keep Brutus, alphabatize everyone else
specialGuests = guests.slice(0,1)
console.log(specialGuests)
otherGuests = guests.slice(1)
console.log(otherGuests)
otherGuests.sort()
console.log(otherGuests)

sortedList = specialGuests.concat(otherGuests)
console.log(sortedList)

// Exercise 6
console.log("Exercise 6")

// given code:
const vipGuests = {
    ANTONY: {
        title: "General",
        region:"Rome",
        dietaryPreferences: "Vegetarian",
        pastGifts:["Golden Laurel", "Chariot"]
    },
    CICERO: {
        title: "Operator",
        region:"Arpinum",
        dietaryPreferences: "Omnivore",
        pastGifts:["Scroll of Proverbs","Quill"]
    }
};

console.log('original list',vipGuests);

// Step 1
// Add Brutus

vipGuests.BRUTUS ={
    BRUTUS: {
        title: "Senator",
        region: "Rome",
        dietaryPreferences: "Vegan",
        pastGifts: ["Silver Daggar", "Marbel Bust"]
    }
};

console.log('add BRUTUS',vipGuests)

// Step 2
// CICERO's past gift: add golden lyre

vipGuests.CICERO.pastGifts += ", Golden Lyre";
console.log("update gifts from cicero",vipGuests.CICERO.pastGifts)


// Step 3
// retrieve region of 'ANTONY'

console.log("ANTONY's region:", vipGuests.ANTONY.region)

// Step 4
// remove CICERO from guest list

delete vipGuests.CICERO;
console.log("delete cicero: ",vipGuests);

// Step 5
// assign ANTONY's profile to a new variable: generalProfile
// then change region to Egypt

generalProfile = vipGuests.ANTONY
console.log("ANTONY's new profile: ",generalProfile )

generalProfile.region = "Egypt"
console.log("change region to egypt:", generalProfile)

// Question 1
//  After executing Step 5, what is ANTONY's region in vipGuests object?
// Egypt, because the reference # are the same

console.log("ANTONY's info in vipGuests: ",vipGuests.ANTONY)