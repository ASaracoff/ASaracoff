// src: https://www.youtube.com/watch?v=2ml4x0rO1PQ&t=4760s
//  9:48   Start time
// 10:37   Finish time
// ~51 minutes 


// array to hold to do items
let items = [];

// get items
// where do i want my items? - itemsDiv
const itemsDiv = document.getElementById("items")

// input item
const input = document.getElementById("itemInput")

// storage key - access storage being used
const storageKey = "items";


// display array
function renderItems(){
    // clear space - fresh slate
    itemsDiv.innerHTML = null;

    // loop over item
    // for loop - i know how many times you want to iterate
    // [idx (index), item] gives us pairings (1, item 1) etc
    // dynamically render items!
    for(const [idx, item] of Object.entries(items)){
        const container = document.createElement("div")
        // in code styling
        container.style.marginBottom = "10px"

        // added a class instead of inline styling
        // cellElement.classList.add("itemStyle")
        
        
        // created a 'p' element
        const text = document.createElement("p")
        // make button move from below to the right side
        text.style.display = 'inline'
        text.style.marginRight = '10px'
        text.textContent = item;

        // add remove button!
        // button onclick calls removeItems()
        const button = document.createElement("button")
        button.textContent = "Delete"

        // code will automatically be run 
        // need to add = () =>
        button.onclick = () => removeItems(idx)

        container.appendChild(text)
        container.appendChild(button)


        // creates element and adds to the div element
        // itemsDiv.append(cellElement)
        itemsDiv.appendChild(container)
    }
}


// load the array
function loadItems(){
    // get old list from local storage, its in a string
    const oldItems = localStorage.getItem(storageKey)
    
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
    localStorage.setItem(storageKey, stringItems)
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