// source: https://www.youtube.com/watch?v=_B-54mvPup4&list=PLtMugc7g4GaqAVDZwQ_t1H6500ZGJzOgW&index=14
// start: 8:52 am
    //    9:19 am - html fin 
    //    9:34 am - css fin
// stop: got distracted by life chores
//  no end time -> did finish in same day ~1 hour? plus some to add local storage feature

// source is 5 yrs old
// source uses vars and getElementByClassName - I modified
const container2 = document.querySelector(".container2")
const container3 = document.querySelector(".container3")
const checkIcon = document.querySelector("#check-icon")
const xIcon = document.querySelector("#x-icon")
const stickyNote = []
let i = 0

// load local storage?
const itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : []

document.querySelector("#check-icon").addEventListener("click", () => {
    const item = document.querySelector("#item")
    createItem(item)
})


xIcon.addEventListener("click", function() {
    typeNote();
})

checkIcon.addEventListener("click", function() {
    createNote();
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

// create item
function createItem(item){
    // store in item array
    itemsArray.push(item.value)
    // save in local storage
    localStorage.setItem("items", JSON.stringify(itemsArray))
    location.reload()
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

// ----------------------------------------------
// toDoList.js -> mini5
/*
// load the array
function loadItems(){
    // get old list from local storage, its in a string
    const oldItems = localStorage.getItem(stickyNote)
    
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
    localStorage.setItem(stickyNote, stringItems)
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

*/