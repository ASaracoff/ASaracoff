// given code:

const friend = 'BRUTUS';
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encryptLetter(letter){
    
    if (!alphabet.includes(letter.toLowerCase())){
            console.log('Error');
        }else{
    
        let newLetter = (letter + shiftValue) % alphabet.  length;
        }
    return newLetter
}
