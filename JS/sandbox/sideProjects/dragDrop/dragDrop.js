// source: https://www.youtube.com/watch?v=jfYWwQrtzzY&list=PLZlA0Gpn_vH8DWL14Wud_m8NeNNbYKOkj&index=27
// start: 4:07 pm
//  stop: 5:00 pm
// total: 53 minutes

// what can be moved?
const draggables = document.querySelectorAll('.draggable')

// where can we drop them?
const containers = document.querySelectorAll('.container')

// visual for selected container
draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        // console.log('drag start')
        // .5 opacity to show what has been selected
        draggable.classList.add('dragging')
    })

    draggable.addEventListener('dragend', () => {
        // console.log('drag start')
        // remove class when click release
        draggable.classList.remove('dragging')
    })
})

// what position is being dragged over?
// aka where is the mouse and the element being placed?
containers.forEach(container => {
    container.addEventListener('dragover', e => {
        // console.log('dragover')
        // default = do not allow cursor
        e.preventDefault()
        const afterElement = getDragAfter(container,e.clientY)
        // console.logs the div we are directly hovering above
        // console.log(afterElement)
        // select the element currently being dragged (only thing with the '.dragging' class)
        // very easy, removes the element from original container/position and adds to the bottom of the other container
        const draggable = document.querySelector('.dragging')
        // place element at the bottom
        if(afterElement === null) {
            container.appendChild(draggable)
        } else {
            // place before element that is being hovered over
            container.insertBefore(draggable,afterElement)
        }
    })
})

// able to place element exactly where your want, choose your order
function getDragAfter(container, y){
    // determine all element in container
    // :not => omits the div that we are currently moving
    // change to an array using the ... in order to use array operations
        // offset => so large that the other elements and nearby
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging')]

    // which single element is after the mouse cursor based on y cursor
        // closest = closest to the cursor
        // child = each draggable element
        // 2 parameters that are each a function (?)
    return draggableElements.reduce((closest,child) => {
        // gives coordinates of the box
        const box = child.getBoundingClientRect()
        // console.log(box)
        // center of the box and our mouse cursor (y)
            // middle of box = top - height / 2
        const offset = y - box.top - box.height / 2
        // below an element = positive #s
        // above an element = negative #s
        // we only care aboute -# => we are hovering above an element
        // console.log(offset)
        if(offset < 0 && offset > closest.offset) {
            return {offset: offset, element: child}
        } else {
                return closest
            }
    // add .element so we do not return the offset
    }, {offset: Number.NEGATIVE_INFINITY}).element
}