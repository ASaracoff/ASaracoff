// alert("Glossary");
// Numbers
// + addition
let hens = 3;
let roosters = 4;
let chickens = hens + roosters;

console.log("addition + ", 3+9,"hens = 3, roosters = 4", hens+roosters, "chickens", chickens);

// - subtraction
console.log("subtraction - ", 9-3, roosters - hens);

// * multiplication
console.log("multiplication *", 3*9, hens*roosters);

// / division
console.log("division / ", 9/3, roosters/hens);

// % modulo aka remainder - use & instead of / 21/5 = 4/1 = 1 is the remainder
console.log("modulo % ", 21%5, roosters%hens);

// ** exponent or power - # to the power of #
console.log("exponent **", 8**3, roosters**hens);

// = assignment - hens = 3;
// let hens = 3;
console.log("assignment =", hens);

// == equality - # == # if the same true, otherwise false
// equality attempts to convert and compare operands of different types
let num = 5;
let str = "5";
console.log("equality ==",1 == 1, 1 == 2, "hello" == "hello", num == str, hens == roosters);

// === strict equality - particularly useful when you want to avoid unexpected results caused by type conversion
console.log("strict equality === ", 1===1, 1===2,  hens == roosters)

//Shorthand

// += add 
hens +=1;
console.log("hens +=1", hens);

// -= subtract
hens -=1;
console.log("hens -=1", hens);


// *= multiply
hens *=2;
console.log("hens *=2", hens);


// ++ add by 1
hens ++;
console.log("hens ++", hens,);

// --  subtract by 1
hens --;
console.log("hens --", hens,);

// Booleans - True/False  Yes/No  1/0
// let - can change
// const - cannot change

let isLoggedOn = true;
let isGameOver = false;

const isWaterWet = true;

console.log("isLoggedOn", isLoggedOn, "isGameOver",isGameOver, "isWaterWet", isWaterWet);


// Strings
// Characters inside "" or '' - but must remain consistent
// NO: "'  or '"
let string = "character";

// typeOf = what variable it is
console.log("typeOf = string", typeOf = string, "typeOf hens", typeOf = hens, "number");

// Concatenate - shoving strings together
let firstName ="Anna";
let lastName = "Saracoff";
fullName = firstName + " " + lastName;

console.log("Concatenate = ", "firstName", firstName, "lastName", lastName, "fullName", fullName);

// Strings are Indexed

// CHICKENS
// 01234567
// .length = how many letters, punctuations, # in the string
// variable [#] = asks for the character in a certain position 

let lastNameIndex = lastName.length;
console.log("lastNameIndex", lastNameIndex, "lastName[3]", lastName[3]); 

// String Methods
// thing  .   method             ()
// string      what       very important

//.toUpperCase & .toLowerCase
let msg = "Boo";
msg.toUpperCase(); //temporary, does not change msg
let bigmsg = msg.toUpperCase();
let smallmsg = msg.toLowerCase();

console.log("msg", msg, "bigmsg", bigmsg, "smallmsg", smallmsg);

// .trim() - removes white space around string
// combining method

let color = "    purple       "
let cleanColor = color.trim().toUpperCase();
console.log("color", color,"cleanColor",  cleanColor)

// thing.method(argument);
// indexOf();  - looks for entire string
// returns number of where the string begins

let tvShow = 'catdog';
tvShow.indexOf("cat");
tvShow.indexOf("dog");
tvShow.indexOf("z");

console.log("tvShow = catdog", tvShow, "tvShow.indexOf('cat')", tvShow.indexOf("cat"), "tvShow.indexOf('dog')",tvShow.indexOf("dog"), "tvShow.indexOf('z')", tvShow.indexOf("z") )

// slice(#,#); - selects certain parts of a string
// slice(0,5); - starts at 0 ends right BEFORE 5, doesn't include 5

let strs = "because";

console.log("strs", strs, "strs.slice(0,5):", strs.slice(0,5), "strs.slice(5):", strs.slice(5), "strs.slice(50):", strs.slice(50))

// replace("");  - only replaces the first instance

let evilLaugh = "teehee so funny! teehee";
console.log("evilLaugh: ", evilLaugh, "evilLaugh.replace('teehee', 'bwahahaha'): ", evilLaugh.replace('teehee', 'bwahahaha'))

console.log("")
// String Quiz
console.log("String Quiz")
//  Q1
const age1 = '5' + '4';

//  Q2
"pecan pie"[7];

//  Q3
"PUP"[3];

//  Q4 value of song?
let song1 = "London Calling"
song1.toUpperCase();

//  Q5 value of cleanedInput?
let userInput1 = "    TODD@gmail.com";
let cleanedInput1 = userInput1.trim().toLowerCase();

//  Q6 Value of index?
let park1 = 'Yellowstone';
const index1 = park1.indexOf('Stone');

//  Q7 Value of index?
let yell1 = 'GO AWAY!!';
// let index2 = yell1.indexOf(!);

//  Q8 
//  '' means empty string not space
'GARBAGE!'.slice(2).replace('B','');
//  Answers

console.log("Q1", "const age1 = '5' + '4': ", age1);

console.log("Q2","'pecan pie'[7]","pecan pie"[7]);

console.log("Q3","'PUP'[3] : ", 'PUP'[3]);

console.log("Q4 value of song1?", "song1: ", song1,"song1.toUpperCase()", song1.toUpperCase(), "song1: ", song1, "value of song1 doesn't change");

console.log("Q5","userInput1 = '    TODD@gmail.com' :", userInput1, "cleanedInput1 = userInput1.trim().toLowerCase();", cleanedInput1);



console.log("Q6",index1)

console.log("Q7", "let yell1 = 'GO AWAY!!';", yell1)

console.log("Q8", "'GARBAGE!'.slice(2).replace('B','');", 'GARBAGE!'.slice(2).replace('B',''))



console.log(" ")
console.log("Math.Object")

Math.PI
console.log("Math.PI ",Math.PI)

// rounding a number
Math.round(2.9)
console.log("Math.round(2.9)",Math.round(2.9))

//absolute value
Math.abs(-456)
console.log("Math.abs(-456)",Math.abs(-456))

//Raises (x,y) x to the power of y
Math.pow(2,5)
console.log("Math.pow(2,5)",Math.pow(2,5))

// Removes the decimal numbers
Math.floor(3.9999)
console.log("Math.floor(3.9999)",Math.floor(3.9999))

// Random Integers
// long way:
const step1 = Math.random();
const step2 = step1*10;
const step3 = Math.floor(step2);
const step4 = step3 + 1;
console.log("Random Inegers: long way ","step1: ", step1,"step2:", step2,"step3:", step3,"step4:", step4)

// shorthand
Math.floor(Math.random()*10)+1;
console.log("shorthand","Math.floor(Math.random()*10)+1;",Math.floor(Math.random()*10)+1, Math.floor(Math.random()*10)+1,Math.floor(Math.random()*10)+1,)

// simulated dice roll

// # 0-5.9 NEVER 6
Math.random()*6

Math.floor(Math.random()*6)
// doesn't round - just removes the decimals, 0-5 MAX

Math.floor(Math.random()*6)+1
// cuts off decimals, gives 0-5, add 1 = 1-6 random dice roll

console.log("Simulated Dice Roll","Math.floor(Math.random()*6)+1", Math.floor(Math.random()*6)+1)

// typeof = Used to determine type of given value
// is a type of 'operator' but doesn't use an = sign

typeof 'hello'; //string
typeof 2;   //number
typeof true; //boolean
typeof null  //'object' - allegedly a mistake in code

console.log("typeof 'hello'", typeof 'hello',", typeof 2", typeof 2, ", typeof true", typeof true, ", typeof null", typeof null )


// ParseINT - returns an Integer
// ParseFloat - returns entire decimal #
//  both used to parse strings into numbers, BUT watch out for NaN

parseInt('24')
parseInt(24.343243)
parseInt('28dayslater')
console.log(" ")
console.log('parseInt')
console.log("parseInt('24')", parseInt('24'), 
            "parseInt(24.343243)", parseInt(24.343243),
            "parseInt('28dayslater')", parseInt('28dayslater'))

parseFloat(24.342)
parseFloat('7')
parseFloat('i ate 3 shramp')
console.log(" ")
console.log('parseFloat')
console.log("parseFloat(24.342)", parseFloat(24.342),
            ", parseFloat('7')", parseFloat('7'),
            ", parseFloat('i ate 3 shramp')",parseFloat('i ate 3 shramp'))

// parseFloat does NOT expect fist input to be anything besides a #
// thus it returns NaN, but can process string if it leads with the number. Only sees the number


