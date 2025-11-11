// source: https://www.youtube.com/watch?v=SeKQSQDUMDQ
// paralleling local storage with stickyNotes
// start: 11:00 am
// pause: 11:30 am - go to work alarm. 30 min
// start:  8:19 am - next day
//  stop:  9:26 am - 53 min
// total: 1hr 23 min

// do we have local storage? 
    // if yes parse localstorage
    // if no = empty array
const itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : []
console.log(itemsArray)

document.querySelector("#enter").addEventListener("click", () => {
    const item = document.querySelector("#item")
    createItem(item)
})

function displayItems() {
    // loop each item and create html for each
    let items = ""
    for(let i = 0; i < itemsArray.length; i++) {
        items += `
        <div class="item">
            <div class="input-controller">
                <textarea disabled> ${itemsArray[i]} </textarea>
                <div class="edit-controller">
                    <!-- check icon -->
                    <i class="fa-solid fa-check deleteBtn"></i>
                    <!-- edit icon -->
                    <i class="fa-solid fa-pen-to-square editBtn"></i>
                </div>
            </div>
            <div class="update-controller">
                <button class="saveBtn">Save</button>
                <button class="cancelBtn">Cancel</button>
            </div>
        </div>`
    }
    document.querySelector(".to-do-list").innerHTML = items
    
    // addEventlisteners RIGHT when we create
    activateDeleteListeners()
    activateEditListeners()
    activateSaveListeners()
    activateCancelListeners()
}

// get all delete buttons:
function activateDeleteListeners() {
    let deleteBtn = document.querySelectorAll(".deleteBtn")
    deleteBtn.forEach((db, i) => {
        db.addEventListener("click", () => {deleteItem(i)})
    })
}

// delete item
function deleteItem(i) {
    itemsArray.splice(i,1)
    localStorage.setItem("items", JSON.stringify(itemsArray))
    location.reload()
}

// get all edit buttons:
function activateEditListeners() {
    const editBtn = document.querySelectorAll(".editBtn")
    const updateController = document.querySelectorAll(".update-controller")
    const inputs = document.querySelectorAll(".input-controller textarea")
    editBtn.forEach((eb, i) => {
        eb.addEventListener("click", () => {
            // in css it is hidden
            updateController[i].style.display = "block"
            // in html textarea is diabled
            inputs[i].disabled = false
        })
    })
}

// save listeners
function activateSaveListeners() {
    // access to all save buttons and the textareas
    const saveBtn = document.querySelectorAll(".saveBtn")
    const inputs = document.querySelectorAll(".input-controller textarea")

    saveBtn.forEach((sb,i) => {
        sb.addEventListener("click", () => {
            updateItem(inputs[i].value, i)
        })
    })
}

// cancel listeners - revert
function activateCancelListeners() {
    // access cancel buttons, textareas and inputs
    const cancelBtn = document.querySelectorAll(".cancelBtn")
    const updateController = document.querySelectorAll(".update-controller")
    const inputs = document.querySelectorAll(".input-controller textarea")
    console.log(updateController)
    cancelBtn.forEach((cb, i) => {
        cb.addEventListener("click", () =>{
            // hide save and cancel buttons
            updateController[i].style.display = "none"
            inputs[i].disabled = true
        })
    })
}

// add update to local storage
function updateItem(text, i) {
    itemsArray[i] = text
    localStorage.setItem("items", JSON.stringify(itemsArray))
    location.reload()
}

// create item
function createItem(item){
    // store in item array
    itemsArray.push(item.value)
    // save in local storage
    localStorage.setItem("items", JSON.stringify(itemsArray))
    location.reload()
}

// display date
function displayDate() {
    let date = new Date() // shows mon nov 11:03:03 GMT-0700 (MST)
    date = date.toString().split(" ") // turns into an array
    // console.log(date) 
    document.querySelector('#date').innerHTML = date[0] + ", " + date[1] + " " + date[2] + " " + date[3] // weekday, month, day, year
}

window.onload = function() {
    displayDate()
    displayItems()
}