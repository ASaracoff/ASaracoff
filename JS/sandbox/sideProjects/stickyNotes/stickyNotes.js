// source: https://www.youtube.com/watch?v=_B-54mvPup4&list=PLtMugc7g4GaqAVDZwQ_t1H6500ZGJzOgW&index=14
// start: 8:52 am
    //    9:19 am - html fin 
    //    9:34 am - css fin
// stop: 

// source is 5 yrs old
// source uses vars and getElementByClassName - I modified
const container2 = document.querySelector(".container2")
const container3 = document.querySelector(".container3")
const checkIcon = document.querySelector("#check-icon")
const xIcon = document.querySelector("#x-icon")
let i = 0

// load local storage?

xIcon.addEventListener("click", function() {
    typeNote();
})

checkIcon.addEventListener("click", function() {
    createNote();

    // save to local storage?
})

function typeNote(){
    // toggle write note on/off -> seen/unseen
    if(container3.style.display === "none"){
        container3.style.display = "block"
    } else {
        container3.style.display = "none"
    }
}

function createNote(){
    const noteText = document.querySelector("#note-text").value 
    const node0 = document.createElement("div")
    const node1 = document.createElement("h1")

    // add to page
    node1.innerHTML = noteText;

    // add features to node 1 (sticky note)
    // I moded: moved attributes to a class name, then added class
    node1.classList.add('note')
    node1.style.margin = margin();
    node1.style.transform = rotate();
    node1.style.background = color();

    node0.appendChild(node1)
    // new - insertAdjacentElement
    container2.insertAdjacentElement("beforeend", node0)

    // doubleclick delete
    node0.addEventListener("dblclick", function(){
        // remove from local storage

        // remove notes
        node0.remove()
    })
    document.querySelector("#note-text").value = '';
}

function margin(){
    const randomMargin = ["-5px", "1px", "5px", "10px", "15px", "20px"]
    // get random # based on array
    return randomMargin[Math.floor(Math.random() * randomMargin.length)]
}

function rotate(){
    // degrees
    const randomRotate = [
        "rotate(3deg)", 
        "rotate(1deg)",
        "rotate(-1deg)", 
        "rotate(-3deg)",
        "rotate(-5deg)", 
        "rotate(-10deg)"]
    return randomRotate[Math.floor(Math.random() * randomRotate.length)]
}

function color(){
    const randomColor = [
        "#c2ff3d",
        "#ff3de8",
        "#3dc2ff",
        "#FFD100",
        "#04e022",
        "#bc83e6",
        "#ebb328"]
    if(i > randomColor.length -1){
        i = 0
    }
    return randomColor[i++]
}