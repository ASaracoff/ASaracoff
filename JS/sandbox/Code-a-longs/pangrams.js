console.log("Pangrams")
//  Pangram = a sentence that contains every letter of the alphabet like:
// "The quick brown fox jumps over the lazy dog"

// write function called isPangram, which checks to see if a given sentence contaings every letter of the alphabet. Make sure to ignore string casing!

// my try
// function isPangram(str){
//     const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
//     for( let letter of str ){
//         // brain fart T.T
//         str.toLowerCase = alpha.indexOf()
//     }
// }


// code-a-long
// sentence or phrase or str
function isPangram2(sentence){
    let lowerCased = sentence.toLowerCase()
    for (let char of 'abcdefghijklmnopqrstuvwxyz'){
        // will list each char on their line - console.log(char); 
        if(lowerCased.indexOf(char) === -1){
            return false;
        }
    }
    return true;
}
console.log("isPangram2(the quick brown fox jumps over the lazy dog')")
console.log(isPangram2('the quick brown fox jumps over the lazy dog'))

console.log("isPangram2(the ick brown fox jumps over the lazy dog')")
console.log(isPangram2('the ick brown fox jumps over the lazy dog'))

console.log("isPangram2(the QUICK brown fox jumps over the lazy dog')")
console.log(isPangram2('the QUICK brown fox jumps over the lazy dog'))

// works everywhere but IE
function isPangram3(sentence){
    let lowerCased = sentence.toLowerCase()
    for (let char of 'abcdefghijklmnopqrstuvwxyz'){
        // will list each char on their line - console.log(char); 
        // changed indexOf = includes
        // newer
        if(!lowerCased.includes(char)){
            return false;
        }
    }
    return true;
}

console.log("isPangram3(the quick brown fox jumps over the lazy dog')")
console.log(isPangram3('the quick brown fox jumps over the lazy dog'))

console.log("isPangram3(the ick brown fox jumps over the lazy dog')")
console.log(isPangram3('the ick brown fox jumps over the lazy dog'))

console.log("isPangram3(the QUICK brown fox jumps over the lazy dog')")
console.log(isPangram3('the QUICK brown fox jumps over the lazy dog'))