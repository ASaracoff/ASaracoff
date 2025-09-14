console.log("Loops")
// Loops
// repeating code
// ex: say hello 10x OR sum all numbers in an array

// types of loops:
// for loop
// while loop
// for...of loop
// for...in loop

// Goals:
// Write 'for' loops
// write 'while' loops
// avoid infinite loops
// iterate over arrays and objects


// console.log repeat vs loop code:

console.log(1)
console.log(3)
console.log(5)
console.log(7)
console.log(9)

// lots of repetition
// keep code DRY = Don't Repeat Yourself

console.log("loop version")
// loop version - odd #s
for (let i = 1; i <=10; i+=2){
    console.log(i);
}

// what happened?
// [i = 1]  -> start number
// [i <=10] ->i keeps going until it is equal or greater than 10
// [i+=2]   -> after each loop (iteration) go up by 2

// Let Revisited
console.log("")
console.log("Let Revisited")

// why use 'let' for all of our iterators?
// 'let' keywaord - scoped inside the loop block only

for(let i = 0;i<2;i++){
    console.log(i);
}
// 0
// 1

for (var i=0; i<2;i++){
    console.log(i);
}
// 0 
//1

console.log(i); //2 <-- why do we want this?


// loop general structure
console.log(" ")
console.log("Loop Gen Structure")

//              1       2   3
console.log("let i=0; i<3; i++")

// 1. Initialization    - declare/assign a counter var (iterator aka i)
// 2. Condition         - evaluate expression before each loop cycle
//                          -> if true = code runs  - false = exit loop
// 3. Final-Expression  - the increment iterator. 
//                          happens after loop runs, before next condition gets evaluated

// primary loop use: ability to iterate through special sequences = iterable objects
// not to count numbers
// 2 main iterable objects = strings and arrays

// For Loop
console.log(" ")
console.log("For Loop")

// the pattern:
// for{
// [initialExpression];
// [condition];
// incrementExpression
// }

console.log("Hello 10x")
// define starting point
// when to run the loop
// how to change value each time
for(let i = 1; //starts at 1
     i<=10;  // run until 10
     i++ ){  // loop 1 at a time
    console.log('hello',i)
}
console.log("")
console.log("start at 1, +3")
for(let i = 1; //starts at 5
     i<=10;  // run until 10
     i+=3 ){  // loop 1 at a time
    console.log('hello',i)
}
console.log("")

// generate perfect quares
console.log("generate first 20 perfect squares")
for(let num = 1; //starts at 1 - using 'num' to prove you can use anything
     num<=20;  // run until 20
     num++ ){  // loop 1 at a time
    console.log(`${num} X ${num} = ${num*num}`)
}
// looping in 1 direction
console.log("")

console.log("going the oposite - down - direction")
for(let i=50;   // i start at 50 
    i>=0;       // -10 each time
    i-=10){     //keep going as long as i >= 0
    console.log(i);
}

console.log("")
console.log(" 200 - 25 each time")
for(let i=200; i>=0; i-=25){
    console.log(i);
}

// infinite loops
console.log("")
console.log("infinite loops")
// one of the MOST common errors - a loop that never ends
//  DO NOT RUN CODE! will crash the window running it!

// for (let i=20;   start at 20
// i>=20;           run if i is greater than 20
// i++){            add 1 each time
// console.log(i);} will never end, always greater than 20

// what to look for to prevent infinite loops
// if you are going forwards (+) use i<=?
// if you are going backward (-) use i>=?
// don't use != or = to specific #, use a >= or <= just in case 

// looping over arrays
console.log(" ")
console.log("Looping Over Arrays")

// without loops:
// loop general structure
const cities = [
    "San Francisco",
    "Berlin",
    "Tokyo",
    "Moscow",
    "Buenos Aires"
]

console.log("without loops: manualy typing console.logs")
// loop general structure
console.log(cities[0]);
console.log(cities[1]);
console.log(cities[2]);
console.log(cities[3]);
console.log(cities[4]);

console.log(" ")
console.log("with loops: code does it all for us!")

for (let i=0; i<cities.length; i++){
    console.log(cities[i])
}

console.log("")
console.log("typing 5 lines of code vs 2!")
console.log("")


console.log(" ")
console.log("examScores - array")
const examScores = [98,77,84,91,57,66];

for(let i=0; i<examScores.length;i++){
    console.log(i,examScores[i])
}

console.log(" ")
console.log("myStudents - an array of object")

const myStudents = [
    { 
        fName:'Zeus',
        grade: 86
    },
    { 
        fName:'Artemis',
        grade: 77
    },
    { 
        fName:'Hera',
        grade: 84
    },
    { 
        fName:'Apollo',
        grade: 91
    },
    { 
        fName:'Posidon',
        grade: 57
    },
    { 
        fName:'Aphrodite',
        grade: 66
    }
]

for(let i=0;                //start at beginning of array/object
    i<myStudents.length;    // go through the entire object
    i++                     // add 1 each round
){
    let student=myStudents[i]; //made variable for student name
    console.log(`${student.fName} scored a ${student.grade}`)
}

console.log("")
console.log("average of scores")

let total = 0; 
//needs to be OUTSIDE loop - or else itll get reset to 0 each time the loop runs
for (let i = 0; i<myStudents.length; i++){
    let student = myStudents[i];
    total += student.grade;
}
console.log(total/myStudents.length)


console.log("")
console.log("loop throgh a string: stressed backwards")

const word = 'stressed'; // in reverse = desserts!
let reversedWord = ''
for (let i= word.length-1; i>=0;i--){
    reversedWord +=word[i]
    console.log(word[i], reversedWord)

} 
console.log(`${word} spelled backwards is ${reversedWord}!`)

// Looping Backwards

let mystr = 'live';
let reversed = '';
console.log("mystr: ",mystr,"reversed: ", reversed)
// reverse it!
for (let i = mystr.length -1; i>=0;i--){
    reversed += mystr[i];
}
console.log(reversed);

// loop is initialize to the last character (mystr.length-1)
// loop condition goes down to the first character at index 0
// 'i' gets decremented by 1 every time until it reaches -1 and exits
// reversed gets re-created each time with a new char from mystr 


// Nested loops
console.log("")
console.log("Nested Loops")

// a bit pointless
// for(let i=1;i<=10;i++){
//     console.log('outer loop: ',i);
//     for(let j = 10; j>=0; j-=2){      // can tecnically use 'i' again but bad idea!*
//         console.log('   inner loop: ',j)
//     }
// }

// *if you wanted to grab both inner and outer loops but they are both 'i' you wont get what your looking for. also very confusing to look at

const gameBoard = [
    [4,32,8,4],
    [64,8,32,2],
    [8,32,16,4],
    [2,8,4,2]
];

// outer loop = each array
// inner loop = add elements
let totalScore = 0;
for (let i=0; i< gameBoard.length; i++){
    // console.log(gameBoard[i])
    let row = gameBoard[i];
    for (let j = 0; j<row.length; j++)
        totalScore += row[j];
}
console.log(totalScore)

// While Loops
console.log("")
console.log("While Loops")
// continues to run as long as its test condition is true
// main alt to 'for loops' are = 'while loops'
// More open-ended than 'for' loops, because - simpler!

// while (condition){
//  do stuff
// }

console.log('for loop')
for (let i=0; i<=5; i++){
    console.log(i);
}

console.log("while loop")

// when generating numbers for loops are preferred
//not many programmers like having to define var b4 loop
let j = 0; 
while (j<=5){
    console.log(j);
    j++;
}
// will only run when true

// one a single condition now, which is an expression that gets evaluated before EACH iteration
// true? loop runs
console.log("")
console.log('ideal use of while loop')
// when you don't know how many 'turn' or times to run the loop
// like in chess or 2048 better players play for longer
// no set amount of turns

// while(!gameOver)
// while(livesLeft > 0)

// a guessing game is a simple use of a while loop
console.log('guess the number: ')
const target = Math.floor(Math.random()*10)+1; //generate random #
let guess = Math.floor(Math.random()*10)+1;
while(guess!== target){
    guess = Math.floor(Math.random()*10)+1;
    
}
console.log("target: ",target, 'guess: ',guess)
console.log("congratz u win")

// while(some condition){
// in the loop, update/attempt to make that condition FALSE
// you need to change something or else INFINITE loop :(
// }


console.log("")
console.log("Break Keyword")
// end loop - break out!

// uncommon in for loop - you set the rules
for(let i = 0; i < 10; i++){
    console.log(i);
    if(i===5){ //you could of just set i<5
        break;
    }
}

// if you add a 'break' in an inner loop:
//      it does NOT stop the other loops from running
//      only stops that particular loop

while(true){ //run forever 
    if(target === guess) break; //until
    console.log(`Target: ${target} Guess: ${guess}`); 
    guess = Math.floor(Math.random()*10)+1;
}

// 1 - too easy to get infinite loops
// 'true' - is too nebulous => not intuitive


console.log("")
console.log("for...of loop")
// for...of loop
// a nice and easy way of iterating over arrays (or other iterable objects)
// internet explorere !=  supported
// iterable: ex variable, string, array
// simple syntax:
// for (variable of iterable){
//      statement}
console.log("the for loop")
subreddits = ['soccer', 'popheads', 'cringe', 'books'];

for (let i=0; i<subreddits.length;i++){
    console.log(subreddits[i]);
}

// use 'i' to access each element: not attractive, clean and a lot of work
//  especially if all we care about are the content NOT the numbers
//  we only need # and indexes to access word

// default loops = iterate through indices
// can iterate through the elements directly

console.log("for ... of loops: let city of cities then display city")
for (let city of cities) {
    console.log(city)
}


console.log("")
console.log("the for...of loop")

for(let sub of subreddits){ //not recommended to use 'i' because conotation to for loop
    console.log(sub);
}
// easier to read, approximates english
// no numbers needed
// works on anything 'iterable'

console.log("")
console.log("for..loop of a string")
for(let char of 'cockadeedledoo'){
    console.log(char.toUpperCase())
}
  
// every element in array
// every letter/character in a string
console.log("")
console.log("magic square")
const magicSquare = [  //each row/column/diag = 15
    [2,7,6], 
    [9,5,1],
    [4,3,8]
];

for(let i=0;i<magicSquare.length;i++){
    let row = magicSquare[i];
    let sum = 0 // reset 0 after inner loop runs - 1 sum per array
        for (let j=0;j<row.length;j++){
        console.log(row[j]);
        sum += row[j];
        }
        console.log(`${row} summed to ${sum}`)
}

console.log("")
console.log("same but with for...of loop")

for(let row //access to each nested array
    of magicSquare){
    let sum = 0;
    for(let num of row){
        sum += num;
    }
    console.log(`${row} summed to ${sum}`)
}

// NOT to your advantage to use for..of

const words1 = ['mail', 'milk', 'bath', 'black'];
const words2 = ['box', 'shake', 'tub', 'berry'];
// we want to have the 1st of each array connected

// for...of = no index to correlate
// don't use if you need access to an index
console.log("")
console.log("correlated same indexs of both arrays")
for(let i=0; i<words1.length; i++){
    console.log(`${words1[i]}-${words2[i]}`);
}

console.log("");
console.log("for...of loops with objects");
// for...of with objects
// iterating over objects doesn't work well

const movieReviews = {
    arrival:9.5,
    alien:9,
    amelie:8,
    'in bruges':9,
    amadeus: 10,
    'kill bill':8,
    'little miss sunshine':8.5,
    coraline:7.5
};

// iterating through an Object
console.log("")
console.log("Iterating through an Object")

const city = {
    name: "san fran",
    state: "CA",
    population: 871000,
    bridges: 2
}

for (let key in city) {
    console.log(key, city[key]);
}
console.log("for...of loops don't work on OBJECTS")
// for...of loops don't work on objects!


// loop and print name - review
// objects !== iterable
// for(let x of movieReviews){
//     console.log(x);
// }

// we can loop over the keys and values
console.log(Object.keys(movieReviews));
console.log(Object.values(movieReviews));

console.log('');
console.log("for...of Object.keys(movieReviews");
for(let movie of Object.keys(movieReviews)){
    console.log(movie, movieReviews[movie]);
}

console.log("");
console.log("find avg of movie reviews");

let ratings = Object.values(movieReviews);
let total2 = 0;
for(let r of ratings){
    total2 +=r;
}
avg = total2/ratings.length;
console.log(avg);

// we are isolating the keys/value THEN doing a for...loop

console.log("");
console.log("for...in");