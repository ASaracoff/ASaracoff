// form
const colorForm = document.querySelector('#color-form');
const colorInput = document.querySelector('#color-input');
const newBoxBtn = document.querySelector('#new-box-button');
const classBox = document.getElementsByClassName('box')
let ID = 1

// where to put new boxes
const boxContainer = document.querySelector('#box-container');

// add button
colorForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const box = document.createElement('button');
    box.dataset.color = colorInput.value;
    box.dataset.id = ID
    let boxColor = box.dataset.color
    let boxID = box.dataset.id
    box.setAttribute("class", "box");
    box.textContent = `${boxColor}${boxID}`
    box.innerHTML = `Box ${ID}`;

    newBoxBtn.addEventListener('click', function(e) {
        boxContainer.appendChild(box);
    })
    document.addEventListener('keypress', function(e) {
        if (e.key === 'n' || e.key === 'N') {
            boxContainer.appendChild(box);
        }
    })
    
    colorInput.value = ''
    ID ++
})

// hover
document.addEventListener('mouseover', function(e) {
    if (e.target.classList.contains("box")){
        e.target.textContent = `(X: ${e.clientX}, Y: ${e.clientY})`
    }
})

// mouse out
document.addEventListener('mouseout', function(e) {
    if (e.target.classList.contains("box")){
        const boxID = e.target.getAttribute('data-id')
        e.target.textContent = `Box ${boxID} `
    }
})

// remove box
document.addEventListener('dblclick', function(e) {
    if (e.target.classList.contains("box")){
        e.target.remove();
    }
})


// mouse away
// boxContainer.addEventListener('mousout', function(e) {
//     button.innerText = boxID    
// })
// // remove on double click
// boxContainer.addEventListener('dblclick', function(e) {
//     if (e.target.classList.constains('box')) {
//             e.target.button.remove();
//             } 
// })

