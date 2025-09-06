// Color Flipper
// source: https://youtu.be/2ml4x0rO1PQ?si=ndUGO3dlGieVXvib&t=403

// tage name = body/button/default tags in html
// [which element of that tag]
const body = document.getElementsByTagName("body")[0] // body tag[first]

// changes background Color to red
// body.style.backgroundColor="red"

function setColor(name) { //(parameter)
    body.style.backgroundColor = name;
}

// setColor("green") // sets background color

function randomColor(){
    // generate a random amount of red, of blue, of green
    const red = Math.round(Math.random()*255)
    // gives a random # 0 to 255
    const blue = Math.round(Math.random()*255)
    const green = Math.round(Math.random()*255)

    const color = `rgb(${red},${green},${blue})`
    body.style.backgroundColor = color;
}





// Stop Watch
// source:  https://youtu.be/2ml4x0rO1PQ?si=3lk05W-QTkNDQEQV&t=3750
// 10:12 start
// 10:25 puase - @ 1:10:22 timestamp - mine wont run! checked code but can't fig it out. Need to do errands
// 8:34 different day continued, easy fix - js wasn't connected to html! numbuts
// 9:00 end
// ~ 39 minutes


// stub - write the function without the code/logic
// Ex: function startClock(){}

// let - we can change these values
let secondsElapsed = 0;

// we will add value later, but for now null
let interval = null;

// grab time header
const time = document.getElementById("time")


// pad our values - if not 2 digits add a leading 0
function padStart(value) {
    // String(value) = turns value into a string 
    // padStart - only used for strings -built in method
    // (2,"0") - how many digits? if not add a "0"
    return String(value).padStart(2,"0")
}



// changes timer to show secondsElapsed
function setTime(){
    // round down to get smooth minutes
    const minutes = Math.floor(secondsElapsed / 60)
    const seconds = secondsElapsed % 60
    // make the time look 00:00 added padStart()
    time.textContent = `${padStart(minutes)}:${padStart(seconds)}`;
}

// adds 1
function timer(){
    secondsElapsed++;
    setTime()
}

// start an interval
function startClock(){
    // if the start button is clicked +2x
    // if there is already an interval restart
    // if(interval) resetClock()

    // if stop and then start = pause
    if (interval) stopClock()
    // calls function every time
    //  (function,1000 - miliseconds)
    interval = setInterval(timer, 1000)
}


// chaining of functions: 
    //  startClock() calls on 
    //  resetClock() whitch calls on
    //  stopClock() - clears the clock 


function stopClock(){
    clearInterval(interval)
}


function resetClock(){
    //  stop
     stopClock()
    //  reset secondsElapsed back to 0
     secondsElapsed = 0;
    //  show 00:00 on clock
     setTime()
}


// source: https://youtu.be/2ml4x0rO1PQ?si=qYodVYcErZDerqSE&t=2744

// create an array of strings
const quotes = [
"But man is not made for defeat. A man can be destroyed but not defeated.    -Ernest Hemingway",
"When you reach the end of your rope, tie a knot in it and hang on.     - Franklin D. Roosevelt",
"There is nothing permanent except change.  - Heraclitus",
"You cannot shake hands with a clenched fist.   - Indira Gandhi",
"Let us sacrifice our today so that our children can have a better tomorrow.    - A. P. J. Abdul Kalam",
"The only way to do great work is to love what you do."    
]

// set = unique collection of elements {} only can have unique values
//  can tell you if you have or DONT have something
// better for performance bassed 
// 'new' keyword
// used to make sure we don't reuse a quote
const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")



function generateQuote() {
    if(usedIndexes.size >= quotes.length){
        // clears out usedIndexes - resets generator
        usedIndexes.clear()
    }

    while(true){
    // innerHTML - puts quote inbetween the <p></p> tags
    // quoteElement.innerHTML = "hello"
    
    // Math.random = random number
    // Math.floor = round down -  9.999999 -> 9
    const randomIndx = Math.floor(Math.random() * quotes.length)

        if (usedIndexes.has(randomIndx)) continue

    const quote = quotes[randomIndx]
    quoteElement.textContent = quote;
    // don't use this
    usedIndexes.add(randomIndx)
    break
    }
}

// check out APIs



// Palindrome Checker
// source: https://youtu.be/2ml4x0rO1PQ?si=HXTc4p7W7dsW6FQm&t=1821 

// get 1 item by their id = got the input box
const input2 = document.getElementById("input")

// reverse the string
function reverseString(str) {
    // make string into an array
    // split - finds spaces and saves words on each side as unique elements into array
    // no space? just 1 array
    // reverse = reverses the array
    // join - make string elements into a word
    return str.split("").reverse().join("") 

}

// get the value put into the tag/input box
function check() {
    // output what the value is 
    const value = input2.value; // ';' = end line/line terminator
    
    // reverse the string and then compare the 2 strings
    const reverse = reverseString(value)
    

    // compare the 2 strings - are the equal?
    if (value === reverse) {
        alert(" P A L I N D R O M E")
    }else   {
        alert("Not Today!")
    }

    // set value to empty string
    input.value = ""
}

// To Do List
// src: https://www.youtube.com/watch?v=2ml4x0rO1PQ&t=4760s
//  9:48   Start time
// 10:37   Finish time
// ~51 minutes 


// array to hold to do items
let items = [];

// get items
// where do i want my items? - itemsDiv
const itemsDiv = document.getElementById("items")

// input item
const input = document.getElementById("itemInput")

// storage key - access storage being used
const storageKey = "items";


// display array
function renderItems(){
    // clear space - fresh slate
    itemsDiv.innerHTML = null;

    // loop over item
    // for loop - i know how many times you want to iterate
    // [idx (index), item] gives us pairings (1, item 1) etc
    // dynamically render items!
    for(const [idx, item] of Object.entries(items)){
        const container = document.createElement("div")
        // in code styling
        container.style.marginBottom = "10px"

        // added a class instead of inline styling
        // cellElement.classList.add("itemStyle")
        
        
        // created a 'p' element
        const text = document.createElement("p")
        // make button move from below to the right side
        text.style.display = 'inline'
        text.style.marginRight = '10px'
        text.textContent = item;

        // add remove button!
        // button onclick calls removeItems()
        const button = document.createElement("button")
        button.textContent = "Delete"

        // code will automatically be run 
        // need to add = () =>
        button.onclick = () => removeItems(idx)

        container.appendChild(text)
        container.appendChild(button)


        // creates element and adds to the div element
        // itemsDiv.append(cellElement)
        itemsDiv.appendChild(container)
    }
}


// load the array
function loadItems(){
    // get old list from local storage, its in a string
    const oldItems = localStorage.getItem(storageKey)
    
    // convert string into array
    // converts into a JS object
    if(oldItems) items = JSON.parse(oldItems)
    renderItems()
}


// save to array
    // local storage: in your browser (cient side user side)
    // can only store list/string
function saveItems(){
    const stringItems = JSON.stringify(items);
    // only storing the most up to date version
    localStorage.setItem(storageKey, stringItems)
}


// add to array
function addItem(){
    // get value
    const value = input.value;
    if (!value) {
        alert("you cannot add an empty item")
        return //naked return - get out of the function
    }
    items.push(value)
    renderItems()
    input.value = ""

    // save items after adding
    saveItems()
}


// remove from array
function removeItem(idx){
    // get idx of item to delete
    // splice = remove at a certian spot
    // (idx,1) at this spot and delete 1
    items.splice(idx,1)

    // refresh list
    renderItems()

    // save items after removing 
    saveItems()
}

// load all html then load items automatically
document.addEventListener("DOMContentLoaded", loadItems)