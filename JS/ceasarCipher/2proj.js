// mind dump
// multiple functions"
    // decrypt/encrypt letter
    // decrypt/encrypt message
    // if input !== string leave as is
    // var  = random alpha letter
    // after encrypt - add random alpha letter after every 2 of message
    // before decrypt - remove random alpha letter after every 2 of message 

// from ceasaer2
// given code:

const friend = 'BRUTUS';
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// generate random alphabetical letter
function randomAlpha(){
return alphabet[Math.floor(Math.random() * alphabet.length)];
}

// is letter found in the alphabet? if not return letter
function notAlpa(letter){
    if (alphabet.includes(letter)){
        return 'yes'
    }
    return letter
}

// encrypt a letter
function encryptLetter(letter, shift) {
    const index = alphabet.indexOf(letter.toLowerCase());
    const newIndex = (index + shift) % alphabet.length; 
        return alphabet[newIndex]     
}

console.log(encryptLetter('a',3))


// decrypt letter
function decryptLetter(letter, shift) {
    const index = alphabet.indexOf(letter.toLowerCase());
    const newIndex = (index - shift) % alphabet.length; //current letter index + shift number
    return alphabet[newIndex]    
}

console.log(decryptLetter('d',3))


// add random letter every 2 
// had to research how to loop every 2 - Bing AI helped
function addRandomChara(input) {
  let result = '';
  for (let i = 0; i < input.length; i++) {
    result += input[i];
    if ((i + 1) % 2 === 0 && i !== input.length - 1) {
      result += randomAlpha();
    }
  }
  return result;
}
console.log(addRandomChara('12345678901'))
console.log(addRandomChara('12345678901'))
console.log(addRandomChara('12345678901'))


// remove extra letter
function removeRandomChara(input) {
  let result = '';
  for (let i = 0; i < input.length; i++) {
    // Skip the third character after every two characters
    if ((i + 1) % 3 === 0) {
      continue;
    }
    result += input[i];
  }
  return result;
}

console.log(removeRandomChara("12i34r56i78w90s1"))

// encypt a whole message
function encryptMessage(word, shift){
    let encryptedMessage = ''
    for( i=0 ; i < word.length; i++){
        encryptedMessage += encryptLetter(word[i], shift);
    }
    
    return addRandomChara(encryptedMessage);    
}

console.log(encryptMessage('BRUTUS',3))
console.log(encryptMessage('BRUTUSisatthegarden',3))




// decrypt message base

function decryptMessage(word, shift){
    let decryptedMessage = ''
    for( i=0 ; i < word.length; i++){
        decryptedMessage += decryptLetter(word[i], shift);
    }
    return removeRandomChara(decryptedMessage.toUpperCase());
}

console.log(decryptMessage('euxwxv',3))
console.log(decryptMessage('JDUGHQ',3))
console.log(decryptMessage('euxwxvlvdwwkhjdughq',3))

