// start: 8:22
//  stop: 9:43

// trying to combing:
    //  todo local storage
    // sticky notes 
        // - got all element, but ended up having color randomized
        // maybe figure out how to let user assign colors?
    // drag and drop - not ye

const itemsArray2 = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : []
console.log(itemsArray2)

document.querySelector("#enter").addEventListener("click", () => {
    const item = document.querySelector("#item")
    createItem(item)
})


function displayItems() {
    // loop each item and create html for each
    let items = ""
    for(let i = 0; i < itemsArray2.length; i++) {
        items += `
        <div class="item" style="margin: ${margin()};rotate: ${rotate()};background-color: ${color()};">
            <div class="input-controller">
                <textarea disabled> ${itemsArray2[i]} </textarea>
                <div class="edit-controller">
                    <!-- trash icon -->
                    <i class="fa-solid fa-trash deleteBtn"></i>
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
    itemsArray2.splice(i,1)
    localStorage.setItem("items", JSON.stringify(itemsArray2))
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
    itemsArray2[i] = text
    localStorage.setItem("items", JSON.stringify(itemsArray2))
    location.reload()
}

// create item
function createItem(item){
    // store in item array
    itemsArray2.push(item.value)
    // save in local storage
    localStorage.setItem("items", JSON.stringify(itemsArray2))
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
        "#04e021ff",
        "#bc83e6"]
    return randomColor[Math.floor(Math.random() * randomColor.length)]
}
