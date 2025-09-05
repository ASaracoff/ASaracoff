// source: https://youtu.be/2ml4x0rO1PQ?si=HXTc4p7W7dsW6FQm&t=1821 

// get 1 item by their id = got the input box
const input = document.getElementById("input")

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
    const value = input.value; // ';' = end line/line terminator
    
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