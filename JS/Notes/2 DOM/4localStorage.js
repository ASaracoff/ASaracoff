// goals
    // utilize localStorage to save info in browser
    // compare/contrast localStorage and sessionStorage
    // add/remove primitives to/from localStorage
    // add/remove objects to/from localStorage

// localStorage
    // a mechanism for storing info in browser for a specific somain
    // API is quite easy to use and very minimal

// localStorage vs sessionStorage
    //               localStorage        sessionStorag
    // data stored  no expiration   cleared when browsing tab closed

// modifiying localStorage
    // most important: all your keys MUST be strings
    // localStorage = everything string 
        // so get into the habit of setting keys as string to avoid confusion

    // setting an item in localStorage
        // setItem method

localStorage.setItem("firstName","Colt");
localStorage.setItem("favNum",22);
localStorage.setItem("hasChicken",true);

    // retrieving an item in localStorage
        // getItem method (only passing in the key)

localStorage.getItem("firstName"); // "Colt"
    // or
localStorage.firstName //"Colt"

    // should have access even after a refresh

// Clearing localStorage
    // delete a key = removeItem function

localStorage.removeItem("firstName");

    // clear everything = clear function
 localStorage.clear();

//  Adding objects to localStorage
const friends = ["Lana", "Hayden", "Jessie"];

localStorage.setItem("friends", friends);
localStorage.getItem("friends");

// changes array to a string
// EVERYTHING put into local storage is converted to string

// to get arrays back use JSON
// JavaScript Object Notion = lightweight data-interchange format
// easy for humans to read/write
// easy for machines to parse and generate

// Working with JSON in browser
    // built in JSON object + 2 methods
        // JSON.stringify - convert JS to JSON
        // JSON.parse     - parses a string as JAON

const friends2 = ["Lana", "Hayden", "Jessie"];

// converts friends array into JSON string
localStorage.setItem("friends2", JSON.stringify(friends2));

// back into JS - a valid array in this case
JSON.parse(localStorage.getItem("friends2"));


const preferences = {
    fontSize: '18px',
    favColor: 'teal'
}
// saves as string 
// returns as preferences: "[object Object]"
localStorage.setItem('preferences',preferences)
localStorage.setItem('preferences', JSON.stringify(preferences))
JSON.parse(localStorage.getItem('preferences'))
JSON.parse(localStorage.preferences)

// could make a stored item into a const variable:
const { favColor } = JSON.parse(localStorage.preferences);
document.body.style.backgroundColor = favColor;

// JSON transcribing javaScript to string and back
// JSON.stringify{a:1, b:true}
// JSON version
// JSON.stringify{"a":"1","b":"true"}

// Recap
    // localStorage = useful for storing info in browse
    // to store objects - JSON.stringify when setting
                    //  - JSON.parse when retrieving
    // if you just want to store info for the time a tab is open - sessionStorage