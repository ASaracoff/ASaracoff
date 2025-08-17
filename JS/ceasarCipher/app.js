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