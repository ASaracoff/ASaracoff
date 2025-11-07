// let and const
// reviewing var
    // original keyword - used like let/const interchangably
    // var keyword = declare variables
    var musician = "elton john"
    musician = "alanis morissette"
    musician = 57
    musician = true
    // all works no real rule, everything goes

// var scoped
// var song = "goodbye yellow brick road"
// scope => window.song
// a property on the window object
    // let & const do not do that

// var inside the function
    function sing(){
        if(true){
            var song = "goodbye yellow brick road"
        }
        console.log(song)
    }
    // var is scoped to the entire function
        // doesn't matter if they are nested in loops etc
        // again let/const do not do this
// hoisting - late vid that they will review var acting differently

// var outside function - global - console lives on browser/window
    // var console = "i am new console"
    // rewrites the actual console built in objects
    // refresh and it returns default
    // be careful with your naming schemes

// let
    let x = 10
    let myChickens = "don't exist"

// let can be reassigned BUT not redeclared
    let z=5
    z = 25;
    // let z = 10 // syntax error - already declared
    // can = different things, but can't have 2 'z's

// global scope - not added to the window scope
    // harder to override existing objects like 'console' etc
    // let console = different from console -> 2 consoles

// let creates a block-scoped var -> only exists inside a code block

// what is a code block?
    // essentially any pair of {} outside of object syntax
    {
        // this is a code block
        let x = 5
        var y = 4
    }
    console.log(x) // x is not defined
    console.log(y) // 4

// object literal = {x:1, y:6} => not a code block

if (true){
    // code block
    let color = 'teal'
    console.log(color) //defined
    if (true){
    console.log(color) //defined as well
}
}

console.log(color) // not defined


function dance(){
    let danceType = 'tango'
    console.log(danceType)
}

// common areas = for loop

for(var i = 0; i<=3; i++){
    // code block
    console.log(i)
}

console.log(i) // i persists outside of loop

for(let i = 0; i<=3; i++){
    // code block
    console.log(i)
}

console.log(i) // doesn't exist

// practice/quiz

let mood = 'fantastic'
function getMood(num) {
    let mood = 'meh' //
    if(num < 3) {
        let mood = 'bad :(' // printed out but 'meh' in console
        // only exists in this codeblock
    }
    return mood;
}
getMood(2) // 'meh'
mood // still 'fantastic' 



// const
// prevents variable form EVER being reassigned or redeclared
    const cat = 'monty'
    // cat = "dead monty" // type error
    // let cat = 'mont' //let already taken use diff name

    // strings/numbers = can't change
    // arrays/objects = reference types
        // the reference address same
        // contents change
    const myCats = []
    myCats.push('monty')
    myCats[1] = 'rocket' // ['monty','rocket']
    myCats = ['bobo'] //TypeError - cant happen - array already there

    // can change the properties - the insides
    // cant change the shell


// const is ALSO code-blocked
// so in theory you can have 2 const that are diff - only if they are in diff code-blocks

    const PI = 3.14159
    if(true){
        const PI = 4.234567
        console.log(PI)
    }
    console.log(PI)
    // each console.log(PI) will be different

    var PI2 = 3.14159
    if(true){
        var PI2 = 4.234567
        console.log(PI)
    }
    console.log(PI)
    // each console.log(PI2) will be same 
    // code-blocks dont matter

// table

// Keyword  Can Reassign    Can Redeclare   can mutate  Scope Rules
// var          yes             yes             yes      function Scope
// let          yes             no              yes      block Scope
// const        no              no              yes      block Scope





// Hoisting
// not common -> added to cover bases
console.log(chickens) //undefined
var chickens = ["butters",'nancy','junior']
console.log(chickens) //the array

// hoisting
// code compiled:
    // declaration portion processed before functions/console.logs/etc
    // usually recommended to put variables at beginning of code

// const
console.log(chickens2) // immediate ReferenceError - not defined
let chickens2 = ["butters",'nancy','junior']
console.log(chickens2) //the array
// same with const

// const fish // syntax error

// how to choose what variable to use?
    // never use var! unless coding for old systems

// const 
    // usually the go to  variable
    // function, array, object
    // if used as a containers
    // some companies prohibit the use of 'let' and 'var'

// let
    // if const just isn't working for that process
