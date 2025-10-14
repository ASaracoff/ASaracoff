// What is debugging?
// multistep process that involves:
    //  Iding a problem
    // isolating the source of problem
    // correcting OR determining a way to work around the problem
    // test the correction/workaround to make sure it works

// begins: developer locates a code error in program is able to reproduce it

// common errors:
    // syntax
    // runtim 
    // semantic 
    // logic
    // diregarding aproted conventions in coding standard
    // calling wrong function
    // using wrong variable name in wrong place
    // failing to initialize a variable when absolutely REQ
    // skipping a check for an error return

// made easier with:
    // unit tests 
    // code reviews 
    // pair programming
    // debuggers

// Challenges:
    // the cause of the coding error is not clear
    // the negative efferct of the error is difficult to reproduce
    // when fixing one error accidentally introduces new error(s)

// SpringBoard Vids 

// Goals 
    // define 3 most common errors in JS and how to unbug
    // examin Chrome Dev Tools for debugging
    // catch errors using tru/catch/finally blocks
    // throw errors with specific messages - custom errors (?)

// Debugging
    // your going to make mistakes!!!
    // let's examin ways to better debug
    // examine some common errors

    // SyntaxError
        // typed something incorrectly so JS doesn't understand
        // "awesome //missed closing quaotation marks
        // function first( {} // missed a parenthesis or curly braces
        // let = "nice!" // missing variable name
        // 3 + ;4 //not expecting the ;

    // Reference Error
        // thrown when you try to aaccess a var hat is not defined
        // does NOT mean undefined
            // function sayHi(){
            //     let greeting = "hi!";
            // }
            // sayHi();    //greeting only exists inside the {}
            // greeting;   // ReferenceError
        // pretty common when used in libraries
        // scripts run OUT of order

    // Type Error
        // when your trying to do something with a type taht you can not
        // accessing properties on undefined or null
        // invoking ("calling") something that is not a function
            // 5()
            // "hello".splice()
            // const person = {
            //     firstname: "rusty"
            // }
            // person.last.toUpperCase()

// Anatomy of an Error Message
    // when error is found in console
        // "uncaught Reference Error: JQuery is not defined at debug.js:6
    // type of error, what was unexpected and what line error is at
    // to better understand google:
        // reference error JQuery undefined - can help you find fixes 
        // everyone (even masters) googles answers/questions abous JS
        
// 2 kinds of bugs
    // error is thrown - easier
    // no generated error - dont get what you wanted - harder

// Process for debugging
    // make assumption
    // test assumption
    // prove assumption
    // repeat

// console.log
    // be minful about what you print out
    // a window into a status of whats goin on
    // great for a sanity check
    // even better when you add parameters
    console.log("We made it!");

    // console.log("The value of x is --->", x);

// simple example
    function hasEnoughFundsToBuy(price, qty, balance) {
        const subtotal = Math.round(price * qty*100)/100;
        console.log("subtotal: ", subtotal)
        console.log("balance: ", balance)
        if(subtotal <= balance) {
            console.log('you have enough money')
        }
        console.log('sorry you need more money!')
    }

    // enough
    hasEnoughFundsToBuy(10,5,60);
    hasEnoughFundsToBuy(30,3,100);
    hasEnoughFundsToBuy(200.3,3,600.9);

    // not enough
    hasEnoughFundsToBuy(50.5,10,300);
    hasEnoughFundsToBuy(200.3,5,600.9);

    let grades = [99, 98, 76, 54, 66, 90, 81];
    let sum = 0;
    // debugger;
    for (let i = 0; i <= grades.length; i++) {
        console.log("i", i);
        console.log("grade", grades[i]);
        console.log("sum", sum);
    sum += grades[i];
    }
    let avg = sum / grades.length;
     
    console.log(avg)

// JS Debugger
// watch execution of code and examin at any point
// built into chrome
// can debug in-browser code or node 

// starting Debugger
    // view code or adding 'breakpoints'
    // view -> developer -> developer tools -> sources tab
    // click left of line of code to add a blue breakpoint
    // stop and then in consle hit 'step' to break down the problem
    // can put breakpoint into code itself
        // let grades2 = [99, 98, 76, 54, 66, 90, 81];
        // let sum2 = 0;
        // // debugger; // <= breakpoint
        // for (let i = 0; i <= grades2.length-1; i++) {
        // sum += grades2[i];
        // }
        // let avg2 = sum2 / grades2.length;
    // usually used in a conditional
        // if it works awesome if it doesn't initiate 'debugger'
    // chromes example:
    // https://googlechrome.github.io/devtools-samples/debug-js/get-started

// buttons
    // step over - skip a function
    // step into - step into the function
    // step out - return from functiion into caller (step back), back out of 'step' 
    // step - see each step-by-step action
    // call stack - JS internal to-do list
    //  scope - shows current value of variables - can click to change value
        // things that exist

// Tips to Avoid Bugs 
    // Plan First
    // Software and cathedrals are much the same - first we build them, then we pray. - Sam Redwine
    // Keep it Simple

// Common JS Bugs
    // == very loose about comparisons (=== isn't)
        // 7 == "7"
    // Comparing arrays vs objects - NOT EQUAL to similar arrays & objects - reference types
        // [1,2,3] !== [1,2,3]
    // Calling function w extra argiments is ignored (the extra arguments are ignored)
    // getting a missing property from object/index from array is undefined
// Good News!
    // If debugging is the process of removing bugs, then programming must be the process of putting them in. - Edsger W Dijkstra
     // Bugs are an oppurtunity to improve debugging skills and to learn something
    // Bugs are ENTIRELY normal

// Error Handling try/catch
    // sometimes errors can not be avoided!
    // especially happens when working with external APIs/other people's data
    // internet is down, server down, etc
    // Instead of errors crashing our program, let's handle them gracefully!
// 'Try' it out
        // try {
        //     // add something that your not sure of/may be problematic
        //     functionThatDoesntExist();
        // } catch (err){
        //     console.log('something went wrong!', err);
        // }
        // // still runs
        // console.log('we did it!')
// intro try/catch
    // try and catch breate black scope, so if you define a variable inside using le or const it wil ONLY exist in that block
    // parameter to catch is optional, but we higly recommend using it so you ca see what the error is and any info about it
    // function displayInitials(user){
    //     let firstNameLetter;
    //     let lastNameLetter;
    //     try{
    //         firstNameLetter = user.firstName[0].toUpperCase();
    //         lastNameLetter = user.lastName[0].toUpperCase();
    //     }catch (e) {
    //         return "invalid input!";
    //     }
    //     return `Hello ${firstNameLetter}.${lastNameLetter}`;
    // }
    // a CAUGHT error rather than uncaught

// finally
    // not very well used outside of classroom
    // optional which will execute code regardless if an error is thrown or not
    // used like:
    /*
    openMyFile();
    try{
        // tie up a resource
        writeMyFile(theData);
    } finally {
        closeMyFile() // always close the resource
    }
    */

// Throwing Our Own Errors
// you can actually make your own errors in JS using the 'throw' keyword
    // console.log("an error is coming")
    // throw "What just happened?!?";
    // console.log("did we make it?");

    // try{
    //     throw "I AM THE ERROR!!!"
    // } catch (e) {
    //     console.log("there was an error...", e)
    // }

    // 'new' keyword
    // console.log("an error is coming")
    // try{
    //     throw new Error("I AM THE ERROR!!!")
    // } catch (e) {
    //     console.log("what kind of error?", e.name)
    //     console.dir(e) //shows file location, message, stack, prototype 
    //     console.log("what is of message?", e.message)
    //     console.log("where did it happen?", e.stack)
    // }

// When? should you use this?
// any time you want to HIDE errors from a user
// any time  you want to produce custom errors for you user's benefit
// it works as a nice fallback in areas of your code that could fail under unusual circumstances that were not foreseen during development
    // if your writing a library/API
// can hide overly-technical error messages from users who wouldn't understand them anyhow
// use it for portions of your code where you suspect errors will ovvus that are beyond your control

// make error more customized to see(?)
function DateError(message) {
    this.message = message;
    this.name = 'DateError';
}

// ex of when you'd use a custom error
function getMonthName(mo) {
    if (typeof mo !== 'number') {
        throw new DateError("Month number must be a number!")
    }
    mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
        'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if (months[mo]) {
        return months[mo];
    } else {
        throw new DateError("Month out of bounds")
    }
}
try {
    getMonthName('sdfg')
} catch (e) {
    console.log(e)
}

// MAIN TAKEAWAY
throw new Error("something informative")