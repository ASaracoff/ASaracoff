// callback functions: passed as an argument to a second function and executed while 2nd function is runnins or after it completes
// timers: execute a function after a certain amount of time Ex: smiley appears 2 seconds after alert/click

// Callback Functions
// Goals
    // learn hos JS treats funcitons as first-class data types
    // into callback functions
    // explore a pattern for using callbacks to write declarative code
    // into Anonymous functions
    // understand the diff between synchronous and asynchronous code
    // learn about setTimeout and setInterval

// First Class functions
// other languages - functions are their own thing
// JS? - no distinction or discrimination
// JS functins are considered first-class because they are treated like any other data type
    // function = a special kind of object
// To be first-class:
    // 1. passed as argument
    // returned value can be another function
    // function can be assigned to a variable
    function name(arg) {
        arg();
    }
    function fn() {
        console.log("this is function 2");
    }
    name(fn);
    // we pass function 'fn' to the 'name' function as argument
    // this function can be invoked later by the 'name' function

    function greet() {
        console.log('Hi! I see you!')
    }

    function diss() {
        console.log('You suck!')
    }
    
    // fn or funs = placeholder
    function repeat3Times(func){
        func();
        func();
        func();
    }
    // repeats greet 3x - only value no '()'
    repeat3Times(diss)

    // repeat function a specific # of times
    function repeat(num, func) {
        for(let i = 0; i < num; i++){
            func();
        }
    }
    
    repeat(5,greet)

// function stored in a variable
// greet and diss in an array

    let funcs = [greet,diss]
    funcs[0]     // retrieving it
    funcs[0]()   // executing it

    // holds the value of the array and can exectute it - JS doesn't really care what type of thing it is, it just does the action

    // make function into a variable
    const myFunct = function add(x,y) {
        return x + y;
    }

        console.log("myFunct(8,7) ", myFunct(8,7))

    // return function as another function
        function giveBirth(){
            console.log("GIVING BIRTH!!!!")
            return function cry() {
                console.log("WAAAHHHHH")
            }
        }

        const birth = giveBirth()
        
        console.log('dfghjk ')
        birth
        birth()
        
    // why do this?
        function makeMultiplyFunc(num){
            return function mult(x) {
                return num * x;
            }
        }

    // the function is a multiplyer 
        // - can be used to make multiple variables without needing to write multiple functions etc
        // 'a function factory'
        const quad = makeMultiplyFunc(4)
        const double = makeMultiplyFunc(2)

    // 'x' is whatever number we put into the next function 
        console.log('double(9) ', double(9))
        console.log('double(24) ', double(24))
        console.log('quad(24) ', quad(24))

// JS structure
// Single-threaded!
    // thread: a single processes
    // other languages have many threads going on at once
    // can cause problems
    // how to get around the single-threadedness

    greet() // this happens first
    console.log("alert: i am alert") // blocks the thread - alert takes a long time :(
    diss()  // then this runs

    // JS can't multi-task T.T

// Timers
// to not hold up the rest of the code
    greet();
    // wait5seconds(); //doesn't exist yet but will wait 5 sec b4 continuing
    diss();

// setTimeout
    // common to write code that we want to be executed after a specific amount of time
    // maybe you want to perform some animation on page after a fixed amount of time has elapsed
    // wait x time then run callback function
    greet()
    // setTimeout(func, delay)
    setTimeout(diss, 2000) // 2 sec
    setTimeout(diss, 1000) // 1 sec
    greet() // will appear before the diss

    // setTimeout() sends the function to their assistant (the browser) to remind JS to run the function in x time

// setInterval(func, 2000) - runs EVERY 2 sec until stopped
    const id = setInterval(diss,500)
    // when writen in console it returns intervals ID #
    clearInterval(id)

// Call Stack - Viualizing Timers
    // http://latentflip.com/loupe/
    // call stack = task manager/to do list
    // the browser(Apis) is like a wingman - assistant - helper
    
// Anonymous Functions
// no name
// cannot be recalled w/o a name/reference of some sort

    // option 1
    function doubleDiss(){
        diss()
        diss()
    }
    setTimeout(doubleDiss,5000)

    // anonymous function: 
    // great for when you want to use a function 1x
    // a thing to be run temporarily
    setTimeout(function(){
        diss()
        diss()
        diss()
    },3000)

    setTimeout(function(){
        console.log("MEOW")
        console.log("WOOF")
        console.log("OINK")
    },3000)

    function doTwice(func) {
        func()
        func()
    }

    doTwice(function(){
        console.log("STOP BOTHERING ME!!!")
        console.log("PLEASE GO AWAY!!")
    })

    // can be stored in variables
    // function() { //error needs name
    //     console.log(1)
    // }

    // function with name
    function one() { 
        console.log(1)
    }

    // var with an anonymouse func
    const printOne = function () { 
        console.log(1)
    }

    // in an array
    const funcs2 = [
        function() {},
        function() {}
    ]

// why pass functions?
// to get around the single threadedness
// make some kind of psuedo multi-tasking
