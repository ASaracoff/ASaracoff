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

    // callback is an arg function 
    function myForEach(arr, callback){
        for(let i=0; i <arr.length; i++){
            callback(arr[i],i, arr)
        }
    }

    // forEach passes in the index as 2nd arg 
    myForEach(colors, function(color,i){
        console.log(color.toUpperCase(), 'at index of: ',i)
    })

    colors.forEach(function(color,i){
        console.log(color.toUpperCase(), 'at index of: ',i)})

// Map
    // creates a new array
    // iterates/loops through array
    // runs callback function for each val in arr
    // adds/pushes result to new array
    // returns NEW array
    // map ALWAYS returns new array of === length

    let numbers = [1,2,3];
    numbers.map(function(value, index, array){
        return value * 10;
    })

// how 'map' works
    function map(array, callback){
        let newArray = [];
        for(let i = 0; i < array.length; i++){
            newArray.push(callback(array[i], i, array))
        }
        return newArray
    }

// Using 'map' in a Function
    function squareValues(array){
    return array.map(function(value){
        return value ** 2;
    });
    }

    squareValues([2,3,4]) // [4,9,16]

    function extractCourse(array){
    return array.map(function(value){
        return value.course;
    });
    }

    extractCourse([
    { author: "Billy Banks", course: "Tai Bo" },
    { author: "Colt Steele", course: "JavaScript 101" },
    { author: "Gordon Ramsey", course: "Cooking and Yelling" },
    ])

    // ["Tai Bo", "JavaScript 101", "Cooking and Yelling"]

// When to use 'map'
    // to transform ar array into another of the same length
    // DOESN'T overwrite an existing array = a copy

// recap
    // map creates NEW array
    // runs a callback on EACH value and pushes result of callback into NEW array

const numbers2 = [21,37,64,99,142];

const negatives = numbers2.map(function(num) {
    return num * -1;
})

// numbers2 does NOT change!!

const doubles = numbers2.map(function(num) {
    // console.log(num * 2); -> undefines; need to return a value
    return num * 2;
})

const todos = [
    {
        id: 1,
        text: 'walk dog',
        priority: 'high'
    },
    {
        id: 2,
        text: 'walk chickens',
        priority: 'medium'
    },
    {
        id: 3,
        text: 'feed cat',
        priority: 'low'
    },
    {
        id: 4,
        text: 'put out fire in garage',
        priority: 'VERY high'
    }
]

// use 'map' to pull out ONLY 1 part of the objects: the text 
// make it a variable to retrieve/store/use
const todoText = todos.map(function(todo){
    return todo.text;
})

// map anchor tags
// 'a' = nodes !== array
// change nodes to array = Array.from(links)
const links = Array.from(document.querySelectorAll('a'))

const urls = links.map(function(a) {
    return a.href
})

// write our own map
function myMap2(arr, callback){
    const mappedArray = [];
    for (let i = 0; i < arr.length; i++){
        const val = callback(arr[i], i, arr)
        mappedArray.push(val)
    }
    return mappedArray;
}

const priorityMap = myMap2(todos, function(todo){
    return todo.priority
})

const repeatedStrs = myMap2(['a','b','c','d','e'], function(str, idx){
    return str.repeat(idx)
})

// When would you use map>
    // when you want to use an existing array but only parts of it, same length array though
    // doesn't overwrite the OG array