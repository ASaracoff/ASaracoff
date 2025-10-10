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



