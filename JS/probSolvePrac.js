console.log("FizzBuzz Practice")

// given info:
// given positive integer # = n <- less than 100 (excluded)
// for every number up to n (included) = 
    // print 'Fizz' if number divisible by 3
    // print 'Buzz' of number divisible by 5
    // print 'FizzBuzz' if number divisible by 3 and 5
    // print number if not divisible by 3 or 5
    // print ERROR if unexpected happens and stop execution

// write function(fizzBuzz) using JS that solves above problem and satistfies the conditions

// Psuedocode:

// function fizzbuzz(takes in number)){
    // check to see if 'number' is an integer 
    // less than 100 (exluded) 
        // if yes? proceed
        // if no? break and return error 
    // is number divisible by 3 AND 5 return 'FizzBuzz'
    // OR is number divisible by 3 return 'Fizz'
    // OR is number divisible by 5 return 'Buzz 
    // if none of the above are true then return the number
    // if something unexpected happend (added a string etc) return error and break out of code
// }

console.log(!Number.isInteger("h"))

function fizzBuzz(num){
    // i forgot how to check for number, but everything else i worked through
    if(!Number.isInteger(num) || num<1 || num>=100){
        console.log("Error");
        return;
    }
    // i had to check why nume/3 didn;t work T.T
    const three = num % 3
    const five = num % 5
    if(three === 0 && five === 0){
        return 'FizzBuzz'
    }
    if(three === 0){
        return 'Fizz'
    }
    if(five === 0){
        return 'Buzz'
    }
    return num
}

console.log("0")
console.log(fizzBuzz(0))
console.log("100")
console.log(fizzBuzz(100))
console.log('16')
console.log(fizzBuzz(16))
console.log('9')
console.log(fizzBuzz(9))
console.log('10')
console.log(fizzBuzz(10))
console.log('15')
console.log(fizzBuzz(15))


console.log("")
console.log("Letter Count")

// given a string = word consisting of alphabetical charas
// for each word: 
// return the lowercase letter followed by the number it occurs in the word
// print error if unexpected happens and stop the code
// write function letterOccurrance()


// PSUEDOCODE
// function letterOccurance(word)
// check to see if the 'word' is a string
// if not a string console out error
// make 'word' lower-case
// make a loop 
// grab index of first letter and search the rest of the 'word' for any repeats
// make an array for that letter?
// console log the letter and how many times its in 'word'
// then loop for the second letter and so on til the end
// once you get to the end of the 'word' break out of the code



// function letterOccurrance(word){
//     if (typeof word !== "string"){
//         console.log('Error')
//         return;
//     }
//     // const smallWord = word.toLowerCase
//     // if(smallWord[idx] = char){
//         char 
//     }
//     return 'string';
// }

// console.log('42');
// console.log(letterOccurrance(42));
// console.log('werd');
// console.log(letterOccurrance("werd"));
// console.log('false');
// console.log(letterOccurrance(false));

function letterCount (word)
{
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  if (typeof word !== "string")
  {
    console.error("Error");
    return;
  }

  for (const letter of word)
  {
    if (!alphabet.includes(letter.toLowerCase()))
    {
      console.error("Error");
      return;
    }
  }

  let letterCounts = {};

  for (let letter of word)
  {
    let lowerCaseLetter = letter.toLowerCase();

    // If the letter is already in the dictionary, increment its count
    if (letterCounts[lowerCaseLetter] !== undefined)
    {
      letterCounts[lowerCaseLetter]++;
    }
    else
    {
      letterCounts[lowerCaseLetter] = 1;
    }
  }

  return letterCounts;
}

letterCount("Caesar42");
console.log(letterCount("Caesar"));
console.log(letterCount("AAbaBa"));
