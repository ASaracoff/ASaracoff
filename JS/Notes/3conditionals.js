// shift + alt+ down arrow => duplicates selected code directly below 
// even if the line is barely selected!!!!

// Comparison Operators
console.log('Comparison Operators: ===, !=, <,<=,>,>=')

let userAge = 20;
userAge > 10; // true
userAge <= 20; // true
userAge === 30; // false

// == vs ===
// == checks equality of data type, not just value
// === checks equality of value AND type; prevents stupid mistakes
3 == '3' // is true
3 === '3' // is false

console.log("3 == '3':",3 == '3', ", 3 === '3':",3 === '3')
// == is seen as BAD practice

console.log("!= vs !==")
// != not equal to
// != equivalent to ==
// !== equivalent to === <- just use this one

console.log("3 != '3':",3 != '3', ", 3 !== '3':",3 !== '3')

console.log('Return as Boolean: <,<=,>,>=')
//  gets dicey when comparing case
//  all UPPERCASE letters < lowercase letters
//  based on Unicode, ex U+0000 -> 0=null
10 > 1 //true
.2 > .3 //false
.5 <= .5 //true
'a' < 'b' //true
'a' < 'A' //false
99 >= 99 // true

console.log("'a' < 'b': ",'a' < 'b',", 'A'> 'a' :",'A'> 'a')

// Conditional Statements
console.log("Conditional Statements (CS): if/else if/ else")

//  if (expression){
//      true then run
//  }if else{
//      false then run 
//  }else{
//      (everything else run this)
//  }

//simple if/else statement
if (false){
    console.log("this was true")
}else{
    console.log("this was false")
}

// RL example

let inputPass = 'secret1'
if ('secret1' === inputPass){
    console.log("logged in") //authenticate user
}else{
    console.log("wrong password") //password incorrect
}

// simple if/else if/else

let x=10
// only 1 block of code will run
if (x>10){
    console.log('x is greater than 10');
}else if (x === 10){
    console.log('x equals 10');
}else{
    console.log('x is less than 10');
}

// If statements
// IF => run code IF condition = true
// Else If => if not first thing, maybe this one?
// Else => if nothing else true, run this

let rating = 3;
if(rating === 3){
    console.log("You Are a Superstar!");
}else if (rating === 2){
    console.log("Meets Expectations");
}else if (rating === 1){
    console.log("FAILURE");
}else{
    console.log("Invalid Entry")
}

// can only use else and else/if ONLY when following an 'if' statement
// Ex of showing an arcade score
let highScore = 1430;
let userScore = 1600;
if (userScore >= highScore){
    console.log(`New High Score! ${userScore}`);
}else{
    console.log(`Good Game! ${userScore}`)
}

// Nesting
// If {
//  if{ } else { } 
// }else{ }

let password = "catdog";
if (password.length >=6) {
    if (password.indexOf(' ') !== -1){
        console.log("Password is long enough, but cannot contain spaces")
    }else{
        console.log("Valid Password")
    }
}else{
    console.log("Password must be longer")
}

// nestting can have multiple layers BUT can be VERY confusing. Making you and others lost and maybe make mistakes

// Truthy & Falsy Values
// 6 falsy values:
// - false  -null   -undefined
// - 0      -Nan    -' ' (empty string)
// all other values are truthy/true

console.log("Determining Truthiness - ", "Boolean ('hi'):",Boolean ('hi'))
console.log("Boolean (undefined): ",Boolean (undefined))

// instead of console.log to see t/f replace mystery with what you want to test:
let mystery = 9;
if (mystery){
    console.log("truthy")
}else{
    console.log("falsy")
}

console.log("! - NOT, && - AND, || - OR")

// if ! (NOT) this flavor && AND that flavor we DON'T have it
let flavor = 'milk'
if(!(flavor === 'grape' && flavor === 'cherry')){
    console.log("We don't have that flavor")
}else{
    console.log('we  have that flavor')
}

let x1 = 7;
x === 7 || x=== 3 && x>10;
// true     false   false  = false <= if we go Left to Right
// && runs before || so the answer is true
console.log(x)
console.log( "Operator Precedents: ! && ||")
console.log(" All >, >= <, <=  types run BEFORE Operators")

console.log("Ternary Operators")
let Num = 7;
if (Num === 7){
    console.log("Lucky!");
}else{
    console.log("BAD!");
}

// shorthand - Ternary:
Num === 7 ? console.log("LUCKY") : console.log("BAD");
//condition ? Expression if True : Expression if False
// only used for simple yes/no  code options
// real life use option: 
        
//let color1 = status === 'offfline' ? 'red' : 'greed';
   //   if user is offline status = red, if anything else status = green

console.log(" if/else if/else VS Switch Statment")
//  if/else if/else
let day = 3;
if (day === 1){
    console.log('Monday');
}else if (day === 2){
    console.log('Tuesday');
}else if (day === 3){
    console.log('Wednesday');
}else if (day === 4){
    console.log('Thursday');
}else if (day === 5){
    console.log('Friday');
}else if (day === 6){
    console.log('Saturday');
}else if (day === 7){
    console.log('Sunday');
}else{
    console.log("Invalid Entry")
}
console.log("Switch Statement")
// Switch Statement
let day1 = 2
switch (day1) {
    // (what are we checking)
case 1:
    console.log('Monday'); break;
// if 1 respond with ^; break = stop running
// if you remove the break; all other code blocks will run
case 2:
    console.log('Tuesday'); break;
case 3:
    console.log('Wednesday'); break;
case 4:
    console.log('Thursday'); break;
case 5:
    console.log('Friday'); break;
case 6:
    console.log('Saturday'); break;
case 7:
    console.log('Sunday'); break;
default:
// same as 'else'; if nothing else matches display this:
    console.log("Invalid Entry");
}

// practical use example of strategically NOT using break:
let emoji = 'heart';
switch (emoji) {
    case 'sad face' :
    case 'happy face':
        // both sad and happy are yellow, aka same answer = run same console/ans
        console.log("yellow");  break;
    case 'eggplant' :
        console.log('purple');  break;
    case 'lips' :
    case 'heart' :
        console.log('red');  break;
    default :
        console.log('try again')
}

