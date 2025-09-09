// from ceasaer2
// given code:

const friend = 'BRUTUS';
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";


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


// encypt a whole message
function encryptMessage(word, shift){
    let encryptedMessage = ''
    for( i=0 ; i < word.length; i++){
        encryptedMessage += encryptLetter(word[i], shift);
    }
    return encryptedMessage;
}

console.log(encryptMessage('BRUTUS',3))
console.log(encryptMessage('BRUTUSisatthegarden',3))


// decrypt message base

function decryptMessage(word, shift){
    let decryptedMessage = ''
    for( i=0 ; i < word.length; i++){
        decryptedMessage += decryptLetter(word[i], shift);
    }
    return decryptedMessage.toUpperCase();
}

console.log(decryptMessage('euxwxv',3))
console.log(decryptMessage('JDUGHQ',3))
console.log(decryptMessage('euxwxvlvdwwkhjdughq',3))


// given code for project 2

function encrypt (message, shiftValue)
{
     let encryptedMessage = ''
    for( i=0 ; i < word.length; i++){
        encryptedMessage += encryptLetter(word[i], shift);
    }
  return encryptedMessage;
}

function decrypt (encryptedMessage, shiftValue)
{
  // Your decryption code here
  return decryptedMessage;
}