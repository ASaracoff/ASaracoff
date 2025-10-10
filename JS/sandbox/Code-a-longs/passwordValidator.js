// write a isValidPassword function
// it accepts 2 arguments: password and username
// password must:
//  - at least 8 charas
//  - cannot contain spaces
//  - cannot contain the username
// if all requirements are me = return tru
// otherwise return false


// my try before following his code
 function isValidPassword(password,username){
    if(password.index <= 8 ){
        return false;
    }else{
        if(password.includes !=" "){
            return false;
        }else{
            if(password.includes = username){
                return false;
            }else{
                return true;
            }
        }
    }
 }

// dont need else, use indexOf not includes but got really close!

 console.log("isValidPassword(kdkdkdkd,alfa)",isValidPassword('kdkdk dkd','alfa'))


// code-a-long
// explicite and clear what is going on
function isValidPassword2(password,username){
    if(password.length < 8){
        return false;
    }
    if(password.indexOf(' ') !==-1){
        return false
    }
    if(password.indexOf(username) !== -1){
        return false;
    }
    return true;
}

console.log("isValidPassword2(alfapuppy, alfapuppy)")
console.log(isValidPassword2('alfapuppy', 'alfapuppy'))


// one long line vrs, not pretty
// added enters
function isValidPassword3(password,username){
    if((password.length < 8) 
        || (password.indexOf(' ') !==-1) 
        || (password.indexOf(username) !== -1)) 
        {
            return false;
    }
    return true;
}  

console.log("isValidPassword3(crazypup, alfapuppy)")
console.log(isValidPassword3('crazypup', 'alfapuppy'))


// use variables
function isValidPassword4(password,username){
    const tooShort = password.length < 8;
    const hasSpace = password.indexOf(' ') !==-1;
    const hasUsername = password.indexOf(username) !== -1
    // both work, just choose between && or || ~
    // if (tooShort || hasSpace || hasUsername) return false;
    if (!tooShort && !hasSpace && !hasUsername) return true;
    // return true;
    return false;
}  

console.log("isValidPassword4(crazypup, alfapuppy)")
console.log(isValidPassword4('crazypup', 'alfapuppy'))

console.log("isValidPassword4(alfapuppy, alfapuppy)")
console.log(isValidPassword4('alfapuppy', 'alfapuppy'))

console.log("isValidPassword4(crazy pup, alfa puppy)")
console.log(isValidPassword4('craz ypup', 'alfa puppy'))

console.log("isValidPassword4(crazy, alfa puppy)")
console.log(isValidPassword4('crazy', 'alfa puppy'))


// can make it shorter
function isValidPassword5(password,username){
    const tooShort = password.length < 8;
    const hasSpace = password.indexOf(' ') !==-1;
    const hasUsername = password.indexOf(username) !== -1
    return !tooShort && !hasSpace && !hasUsername;
}  

console.log("isValidPassword5(crazypup, alfapuppy)")
console.log(isValidPassword5('crazypup', 'alfapuppy'))

console.log("isValidPassword5(123puppy, alfapuppy)")
console.log(isValidPassword5('123puppy', 'alfapuppy'))

console.log("isValidPassword5(crazy pup, alfa puppy)")
console.log(isValidPassword5('craz ypup', 'alfa puppy'))

console.log("isValidPassword5(crazy, alfa puppy)")
console.log(isValidPassword5('crazy', 'alfa puppy'))