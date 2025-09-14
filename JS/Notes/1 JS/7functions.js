console.log("functions");
// one of the most powerful tools
// function = a chunk of code that you can call at ANY time to complete a task

// the last 'big' topic

// Goals
// write valid functions
// write functions with arguments
// comapre function expressions and function statements
// write a bunch of functions!

// what is a function?
// a reusable procedure
// allows us to write reusable, modular code
// we define a chunk of code that we can then execute at a late point
// we use them ALL THE TIME 

// 2 STEP PROCSS:
// 1 DEFINE: this is how to run/about the functionn
// 2 RUN: can be run anytim/ multiple times

// jump to run: 
console.log("hello".toUpperCase())
    // the .UpperCase is a built in method, we just run it

console.log("")
console.log("define function")
console.log("function funcName(){ //do something}")

// function declaration statement
// function funcName(){
    // do something
// }

// registering a function - not running it
function grumpus(){
    console.log('ugh...you again ...');
    console.log('for the last time...');
    console.log('LEAVE ME ALONE');
}

// run it
grumpus()
// console.log('call function grumpus(): ',grumpus())

for( let i=0;i<=2; i++){
    grumpus()
}

console.log('')
console.log('dice roll')

function rollDie(){
    // 0-5 +1
    let roll=Math.floor(Math.random()*6)+1;
    console.log(`Rolled: ${roll}`);
}

console.log(rollDie())

// call functions within other functions
function throwDice(numRolls){
    for (let i=0;i<numRolls;i++){
        rollDie();
    }
}

console.log('throwDice(): ')
console.log(throwDice())

console.log("")
console.log("Arguments")
// also known as parameters
// accepts 'input'

// atm our simple funcction accept 0 inputs. repeat same way everytime

function greet(){
    console.log('Hi!');
}

// greet + input
// greet(Tim)

// avg(20,25) ->22.5

// no input (); input (#,"")

function greet(person){
    console.log(`Hello ${person}!`)
}

console.log(greet('tim'))

console.log("throwDice(numRolls(3)")
console.log(throwDice(3))

console.log('')
console.log('Functions w multiple arguments')

// input => inside of the function() =>  parameter
// input when being run/executed => argument 

// for the function greet(person){} - person is parameter
//  greet(tim) - time is the argument

// 2 argument example
function sum(x,y) {
    console.log(x+y)
}

console.log('sum(4,9)', sum(4,9))


// order MATTERS
function divide(a,b){
    console.log(a/b)
}
console.log('divide(1,4)')
console.log(divide(1,4))
console.log(divide(4,1))

// a problem = only really works with numbers
// no checks to see if inputs are appropriate

console.log("")
console.log("return statement")
// built-in method return values when we call them
// we can store those values

// hello.toUpperCase() 
//console prints return value
// is not seen on screen
const scream = 'hello'.toUpperCase
// then can be returned
// return values can be:
//  - captured
//  - used in other logic

// Not Return! Our functions print values out, but do NOT return anything
// to use return simply write 'return' and then your value

function divide(a,b){
    return a/b
}
// can only return 1 value - can be collected in an array, but cannot return x and y
console.log(divide(1,2))

// return statement ENDS function execution AND specifies the value to be returned by that function

function square(x){
    return x*x
    console.log('all done!')
}
// the console.log('') will not run - it is AFTER return is EXECUTED
// we can capture a return value in a variable

const sum2 = sum(10,16);
console.log("call sum2",sum2)

const answer =sum(100,200);
console.log("answer",answer)

function isPurple(color){
    if(color.toLowerCase === 'purple'){
        return true;
    }else{
        return false;
    }
}

console.log("is blue = to purple?",isPurple('blue'))
console.log("is purple = to purple?",isPurple('purple'))

// can rewrite smoother
function isPurple2(color){
    if(color.toLowerCase() === 'purple'){
        return true;
    }
        return false;
}

// rewrite boolean t/f:
function isPurple3(color){
    return color.toLowerCase() === 'purple';
}
// === will give true or false
// evaluated THEN returned

function containsPurple(arr){
    // takes an array
    for(let color of arr){
        if(color === 'purple'||color === 'lilac'){
            return true;
        }
    }
    // last ditch effort - avoid infinite loop
    return false;
}

console.log(containsPurple(['blue','pink','lilac']))

console.log("")
console.log("Password Validator")
console.log("Average")
console.log("Pangrams")
console.log("Get Playing Card")
console.log("in sandbox")

// Problem Solving Theory
// finite = 
    // algorithm must have clear START and END point - has a finite # of steps
// well-defined 
    // = each step of algorithm be precisely defined, actions to be performed must be rigorously and unambiguously specified
// computer-implementable = 
    // stpes must be sufficiently detailed and clear so that they can be executed on a computer, even though the concept of an algorithm is not limited to computation by electronic computers

// algorithms have INPUT and OUTPUT
// INPUT = 
    // data thats provided to be processed. 
    // some cases an algorithm might not require anyy external input to start operation 
    //  may use predefined set of data or generate its own data internally
// OUTPUT = 
    // result produced by an algorithm after processing
    // ofter (not always) derived from and influenced by the INPUT
    // can manifest in various forms:
        // a value
        // a decision 
        // a set of instructions 
        // a change in state or action performed by the algorithm

// PSUEDOCODE
    // a natural language-level description of algorithms using simple programming constructs
    // developers mostly built the outlin of algorithms during the initial stages of development in human-readable formats THEN trasnlsating into code via progamming langs
    // enables developers to focus on algorithms without dealing with progam langs constraints/syntax
    // is informal and flexible
    // can be adapted to suit the needs of developers


// The Process of Problem-Solving
// solving problems requires a very systematic approach:

// 1. Understand
    // A. Identify the given and requested
    // B. Identify the constraints and requirements
    // C. Build Examples

// 2. Analyze
    // A.Break down the problem into smaller pieces (if possible and efficient)
    // B. Identify the variables and relationships
    // C. Identify dependencies (if any)

// 2. Solve
    // A. build algorithm
    // B. express the algorithm in psuedocode
    // C. convert psuedocode -> code
    // D. Test code against examples and language-specific cases

// 