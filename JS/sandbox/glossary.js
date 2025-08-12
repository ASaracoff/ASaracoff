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
// Characters inside "" or '' - but must remaind consistent
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


// String Quiz

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
console.log("Q6");
//  Q7 Value of index?
let yell1 = 'GO AWAY!!';
// let index2 = yell1.indexOf(!);

//  Q8 
//  '' means empty string not space
'GARBAGE!'.slice(2).replace('B','');
console.log();
//  Answers

console.log("Q1", "const age1 = '5' + '4': ", age1);

console.log("Q2","'pecan pie'[7]","pecan pie"[7]);

console.log("Q3","'PUP'[3] : ", 'PUP'[3]);

console.log("Q4 value of song1?", "song1: ", song1,"song1.toUpperCase()", song1.toUpperCase(), "song1: ", song1, "value of song1 doesn't change");

console.log("Q5","userInput1 = '    TODD@gmail.com' :", userInput1, "cleanedInput1 = userInput1.trim().toLowerCase();", cleanedInput1);

