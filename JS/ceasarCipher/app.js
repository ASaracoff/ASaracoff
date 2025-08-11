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