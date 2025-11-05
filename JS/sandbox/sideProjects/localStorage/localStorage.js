// source: https://www.youtube.com/watch?v=fYTTUBa-lPc

const input = document.querySelector("input")
const h2 = document.querySelector("h2")

input.addEventListener("keyup", display)

function display(){
    h2.innerHTML = input.value
}

