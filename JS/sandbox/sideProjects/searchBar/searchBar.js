// source: https://www.youtube.com/watch?v=TlP5WIxVirU&list=PLZlA0Gpn_vH8DWL14Wud_m8NeNNbYKOkj&index=16
// start: 9:20
//  stop:

const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")

// API source: https://jsonplaceholder.typicode.com
fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => {
    data.forEach(user => {
        // made a copy of the template for all children
        const card = userCardTemplate.content.cloneNode(true).children[0]
        const header = card.querySelector("[data-header]")
        const body = card.querySelector("[data-body]")

        // console.log(user)
        // via console.log(user) we see the options the API gives us, use the name and email portions for this project 
        header.textcontent = user.name
        body.textcontent = user.email
        // add card to page
        userCardContainer.append(card)
    });
})