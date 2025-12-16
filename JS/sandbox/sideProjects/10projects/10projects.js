// source: https://www.youtube.com/watch?v=8GPPJpiLqHk
// start: 12:00 JS start 12:28pm
//  stop: 12:47 - played with aesethetics
// finish hidden nav bar - 47 min
// start: 12:00 - auto write text
//        12:16 - done with autowrite ->start popup
//        12:57 - done with popup ->start purple heart rain 
                    // wasted time trying to trun off rain...
//         1:23 - done with rain 1 hour 23 min


const btn = document.getElementById("btn")
const nav = document.getElementById("nav")

btn.addEventListener("click", () => {
    nav.classList.toggle("active")
    btn.classList.toggle("active")
})

// autowrite text

const autoWrite = document.querySelector("#text")

// what to say
const text = "I will automatically be written on your screen...  FOREVER!!!!"

// what letter are we on?
let index = 0

// write the text
function writeText() {
    document.querySelector("#text").innerText = text.slice(0,index)
    
    // go to next letter
    index++

    // when done reset letter position to beginning
        // essentially on an infinite loop
    if (index > text.length -1) {
        index = 0
    }
}

// how fast do we write?
// auto write at how many miliseconds per letter
setInterval(writeText,100)


// ------------------------------------------------------------
// pop up script

const open = document.querySelector("#open");
const close = document.querySelector("#close");
const container = document.querySelector("#container");

// show container by adding .active
open.addEventListener("click", () => {
    container.classList.add("active")
})

// then hide by removing the class
close.addEventListener("click", () => {
    container.classList.remove("active")
})


// ------------------------------------------------------------
// purple heart rain

function createHeart() {
    // create element
    const heart = document.createElement("div")
    heart.classList.add('heart');

    
    // on top of screen and fall down -> css
    // rain position x = random
    heart.style.left = Math.random()*100 + "vw"

    // animation duration - some fall faster than others
    heart.style.animationDuration = Math.random() *2 + 3 + "s"

    // font awesome heart
    heart.innerHTML = `<i class="fa-solid fa-heart"></i>`

    // add to page
    document.body.appendChild(heart)

    // remove after 5s - doesnn't stop the rain >.>
    setTimeout(() => {
        heart.remove()
    }, 5000)
}
// how fast does the rain fall? every second
setInterval(createHeart,1000)



// ------------------------------------------------------------
// dark mode toggle

const background = document.querySelector("#background")