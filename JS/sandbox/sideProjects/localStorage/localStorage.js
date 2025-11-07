// source: https://www.youtube.com/watch?v=fYTTUBa-lPc

const input = document.querySelector("input")
const h2 = document.querySelector("h2")

// load
h2.innerHTML = localStorage.getItem("value")

input.addEventListener("keyup", display)

// only called when typing
function display(){
    localStorage.setItem('value', input.value)
    h2.innerHTML = localStorage.getItem("value")
}

// store item
// localStorage.setItem('keyname', input.value)

// load item
// localStorage.getItem("keyname")

// remove item
// localStorage.removeItem('keyname')

// remove all
// localStorage.clear()