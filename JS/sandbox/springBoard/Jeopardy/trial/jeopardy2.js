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
    }}