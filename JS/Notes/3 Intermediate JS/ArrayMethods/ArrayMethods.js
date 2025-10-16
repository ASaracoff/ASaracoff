// Using Array Methods
// callback Functions review
// declaration:
    // function name (maybe parameters){what} 
    function holler(){
        console.log('GO AWAY!');
    }

// function expression
    // anonymous function expressiong
    const whipser = function(){
        console.log('pssst i have a secret')
    }

// passing functions as other functions
    function add(x, y) {
        return x + y;
    }
    function subtract(x, y) {
        return x - y;
    }
    function multiply(x, y) {
        return x * y;
    }
    function divide(x, y) {
        return x / y;
    }
    function power(x, y){
        return x ** y
    }

// we can treat functions as a variable
    // array of functions
    const mathFuncs = [add, subtract, multiply, divide, power]

// to divide
    console.log("mathFuncs[3](4,5): ", mathFuncs[3](4,5))

// callbacks
    setTimeout(whipser, 4000)

    function doMath(a,b,mathFuncs){
        return mathFuncs(a,b)
    }

    console.log('doMath(7,3,multiply)', doMath(7,3,multiply))

// pass in another anonymous func
    doMath(3,3, function(a,b){
        console.log(a**b)
    })

// do all math functions
    function doAllMath(a,b,mathFuncs){
        for(let func of mathFuncs){
            console.log(func(a,b))
        }
    }

// FIRST array method
// forEach
    // loops through an array
    // runs a callback function for each value in the array ant hen returns undefined - no matter what!
    let arr = [1,2,3];

    arr.forEach(function(value,index,array){
                        //v,i,a - can be named differently  
        console.log(value);
    })

    const colors = ['teal', 'cyan', 'peach', 'purple']
    
    function yell(val, i){
        const caps = val.toUpperCase()
        console.log(`At index ${i}, ${caps}`)
    }

    colors.forEach(yell)

    const prices = [30.99,19.99,2.50,99.0];
    let total = 0;

    // forEach
    // prices.forEach(function(price) {
    //     total += price;
    // });
    // console.log(total)

// forEach is good for already created functions going into a forEach

    // for of => createed AFTER forEach
    // for of is cleaner
    // most used
    for(let price of prices){
        total += price;
    }
    console.log(total)

// Let's Build Our Own!
    // loops through an array
    // runs a callback function on each val in arr
    // returns undefined

    