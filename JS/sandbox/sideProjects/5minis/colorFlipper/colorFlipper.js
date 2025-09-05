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

