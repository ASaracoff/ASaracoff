// Filter - anther Array Method
    // creates new array
    // loops through array
    // runs callback function on each value in the array
    // if the callback funtion returns:
        // true? value pushed to new array
        // false? not included in new array
    // result of callback will ALWAYS be evaluated into boolean
    // array CAN be SHORTER than origional array - unlike map

    let letters = ['a','b','c','b','c'];

    const bLetter = letters.filter(function(value,index,array) {
        return value === 'b'
    })

    const words = [
        'carrying',
        'boring',
        'potatoe',
        'pouring',
        'shoe',
        'glaring',
        'pot',
        'singing',
        'couch'
    ]

    const longWords = words.filter(function(word){
        // as long as return is true or false it works
        return word.length >= 6; 
    })

    const cPwords = words.filter(function(w){
        return w[0] === 'c' || w[0] === 'p'
    })


// map & filter
// using DOM to get li checkboxes
// use filter to see which are checked and which are not

const allCheckboxes = document.querySelectorAll('input[type="checkbox"')

// cannot use 'filter' on allCheckboxes
// why? not an array => a node list

const checked = Array.from(allCheckboxes).filter(function(box){
    return box.checked
})

// if I want to see a list of things done:

//you did 3 things
checked.length ;

// an actual list of what I did via array
const completedItems = checked.map(function(checkbox) {
    return checkbox.parentElement.innerText
})

// define a function
// chaining

function extractCompletedTodos(){
    // get alll checkboxes
    const allCheckboxes = document.querySelectorAll('input[type="checkbox"')
    // get just the checked ones
        return Array.from(allCheckboxes).filter(function(box){
        return box.checked
    })
    // then map them = list of actual todos
        .map(function(checkbox) {
        return checkbox.parentElement.innerText
    })
}

// filter allows you to search arrays
// then use map to interact with those elements

// write filter

function myFilter(arr,callback) {
    let filteredArr = []
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr
}

const shortWords = myFilter(words, function(word){
    return word.length <= 6;
})

// filter via index = keep every othe word
const everyOtherWord = myFilter(words, function(word,i) {
    // easiest way to check if even:
    return i % 2 === 0
})