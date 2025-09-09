// given code:

const friend = 'BRUTUS';
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";


// Step 1 
// encrypt a letter
function encryptLetter(letter, shift) {
    const index = alphabet.indexOf(letter.toLowerCase());
    const newIndex = (index + shift) % alphabet.length; //current letter index + shift number
        return alphabet[newIndex]    
}

console.log(encryptLetter('a',3))


// Step 2
// encypt a whole message
function encryptMessage(word, shift){
    let encryptedMessage = ''
    for( i=0 ; i < word.length; i++){
        encryptedMessage += encryptLetter(word[i], shift);
    }
    return encryptedMessage;
}

console.log(encryptMessage('BRUTUS',3))
console.log(encryptMessage('BRUTUSisatthegarden',27))


// Step 3 
// decrypt letter
function decryptLetter(letter, shift) {
    const index = alphabet.indexOf(letter.toLowerCase());
    const newIndex = (index - shift + alphabet.length) % alphabet.length; //current letter index + shift number
        return alphabet[newIndex]    
}

console.log(decryptLetter('d',3))

// Step 4
// decrypt message
// Step 2
// encypt a whole message
function decryptMessage(word, shift){
    let decryptedMessage = ''
    for( i=0 ; i < word.length; i++){
        decryptedMessage += decryptLetter(word[i], shift);
    }
    return decryptedMessage.toUpperCase();
}

console.log(decryptMessage('euxwxv',3))
console.log(decryptMessage('JDUGHQ',3))
console.log(decryptMessage('csvuvtjtbuuifhbsefo',27))


// Question:
// encrypt 'BRUTUS' then decrypts it, will he receive 'BRUTUS' back? Why/Why not?

// as it is atm yes and no. yes it will say brutus, but in lowercase letters. can be modified to return in all capitalized characters if you want. simply return 'decryptedMessage.toUpperCase()' 
