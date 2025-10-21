document.addEventListener('mousemove', function(e){
    const r = Math.round(e.pageX * 255 / window.innerWidth)
    // const g = Math.round((e.pageX + e.pageY) * 255 / (window.innerWidth/window,innerHeight))
    const b = Math.round(e.pageY * 255 / window.innerHeight)
    const color = `rgb(${r}, 0, ${b})`
    // console.log(g)
    document.body.style.backgroundColor = color
})

// function color(pageX, pageY){
    
// }


// e.x              x
// ----            ----
// innerWidth       255

// // cross multiply
// e.x * 255
// innerWidth * x