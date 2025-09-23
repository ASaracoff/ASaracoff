// JavaScript Event 

// Goals
    // explain what an event is in JS
    // add event listeners and prevent default action 
    // access info about event using special object
    // add event listeners efficiently 

// Events
    // actions that occur in the browser - mostly initiated by user
        // page refresh
        // arrow key press
        // cursor moves
        // browser actions - load page etc
    // use JS to responds/executed to event

    // what kind of events?
        // click
        // hover over via mouse
        // press certain keys
        // when DOM loads
        // when form is submitted
        // MDN = Event Reference page for all/most

// This is really what most browser based JS is about!
    // write code that listens for events ->react accordingly
    // commonly called "Event Driven Programming"

// 3 Methods:
    // old/unused/unrecommended
    // 1. attach name of function to element in HTML
    // 2. attach name of function to element in JS

    // main option:
    // 3. use the 'addEventListener' method

    // when a __ event occurs on __ element, do this ___
        // type, element, action

        // click
        // 1. inline event listener - not recommended
        //  <button onclick="alert('hi')>

    // not ideal options:
        function makeBodyMisty(){
            document.body.style.backgroundColor = "#B5C7EB"
        }

        function makeBody(color){
            document.body.style.backgroundColor = color;
        }

        const btn = document.querySelector('#teal');
        // reference a previous function but change it
        btn.onclick = function() { 
            makeBody('teal');
        }
    
    // add Event Listener
        const indigo = document.querySelector('#indigo');
        indigo.addEventListener("mouseover", function(){
            makeBody('#571289ff')
        })

    // why better?
        // easier to remove Event Listener
        // can add multiple Event Listeners

        const h1 = document.querySelector('h1');
        const h2s = document.querySelectorAll('h2');
        const green = document.querySelector('#green');
        green.onclick = function() {
            makeBody('#4F6A56')
            h1.style.color = '#ff7418cf';
            for (let h2 of h2s){
                h2.style.color = '#DD9042';
            }           
        }

//  A Gotcha - Waiting for DOM to load
    // a problem if <script> is in head 
        // can't mod something that isn't there yet
    // event listener in JS - attached to html itself
    // all code inside of function runs
    document.addEventListener("DOMContentLoaded", function() {
        // console.log('DOM content loaded');
        const indigo = document.querySelector('#indigo');
        indigo.addEventListener("mouseover", function(){
            makeBody('#571289ff');
        });
    });

    window.addEventListener('load', function(){
        // console.log('Fully Loaded');
    });

    // OR solution - defer
        // I prefer - will probably never use DOMContentLoaded
        // <script src="script.js" defer></script>

// Accessing the Event Object
    // callback - event handler
    // get access to special object as a parameter
    // call parameter whatever we want - event = common
    h1.addEventListener("click", function(event){
        console.log(event) 
    })

    // what is inside event object?
        // target - what was clicked on?
        // pageX/pageY - where did happen? coordinates
        // key - keyboard key press
        // preventDefault() - prevent default behavior of event

        // e - can tell you exactly where in the <p> the person clicked - p or bold area
        // e.pageX - where on the page was clicked
        const p = document.querySelector('p')
        p.addEventListener('click', function(e) {
            console.log(e.type, e.pageX) //location
        })
        
        p.addEventListener('mousedown', function(e) {
            console.log(e.type) // what type of press?
        })
        
        p.addEventListener('mouseup', function(e) {
            console.log(e.type)
        })

        // mousedown - when the person presses down on mouse
        // mouseup - button released
        // click - presses down and up on mouse
        // mousemove - coordinates of where the mouse currently is

// Mouse Color Map Demo

// Form Submission
    // <form action="">
        // default - refresh the page

        // traditional form:
        // <form action="/newPage">
        // where should the form be sent to?
        // sends user to new page

        // nuanced change
        // refreshes page but user isn't sent anywhere new
    
    // Submit Event Listener
    const formElement = document.querySelector('#form');
    formElement.addEventListener('submit', function(e) {
        // alert("you submitted the form!")
    })

    // stop default action - refresh page/send new request
    // event.preventDefault()
    formElement.addEventListener('submit', function(event) {
        event.preventDefault();
        alert("you submitted the form!")
    })

    // can remove default behaviour for other events aswell
    const misty = document.querySelector('#misty')
    .addEventListener('onclick', function(event) {
        event.preventDefault();
    })

// Logo Maker Demo

// Key Events
    // when a user hits a kwy on keyboard
    document.addEventListener("keypress", function(e) {
        if (e.key === 'a'){
            // alert("you pressed the 'a' key!");
            
        }
        // a full key press is done
        // doesn't register a 'shift' for A only the 'A'
        // console.log(e.key);
    })

    // fired when ANY key is held down
    document.addEventListener("keydown", function(e) {
        // console.log(e.key);
    })

    // fired when ANY key is released
    document.addEventListener("keyup", function(e) {
        // console.log(e.key);
    })

    // fired when input is selected and a user is typing
    document.querySelector('input').addEventListener("keydown", function(e) {
        // console.log("KeyDown", e.key);
    })

    // 'keypress' is the most commonly used
    // registers: a-z, 1-0, symbols, and Enter

// Adding Multiple Event Listeners
    // 1st way to addEventListener
    // const removeButtons = document.querySelectorAll('li button');

    // loop for each remove button
    // for(let btn of removeButtons) {
    //     btn.addEventListener('click', function(e) {
    //         e.target.parentElement.remove()
    //     })
    // }

    // need to find the parent of the remove button to completely 'remove' the friend
    // use the (e) to detect which box was clicked
    // remove the whole li
    // if you don' add parentElement - deletes button only
    // works for infinite amoount of 'li buttons'

    // add new friend
    const addFriend = document.querySelector('#addFriend');
    let friendInput = document.querySelector('#firstName');
    const friendList = document.querySelector('#friend-list');

    // 2nd way - Delegation: addEventListener to <ul> instead of <li>
    friendList.addEventListener('click', function(e) {
        // need to add the 'if' to make specific
        // esp if there are multiple elements with eventListerners on them
        if (e.target.tagName === 'BUTTON') {
            e.target.parentElement.remove();
            } 
            // add style to <li>
            else if (e.target.tagName === 'LI') {
                e.target.classList.add('bestFriend');
                // add heart
                const heart = document.createElement('span');
                // inner text - only shows '&#10084;'
                heart.innerHTML = '&#10084;';
                e.target.prepend(heart)
            }
            // add stars

        })

    addFriend.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log(friendInput.value)
        const newFriend = document.createElement('li');
        const removeBtn = document.createElement('button');
        newFriend.innerText = friendInput.value;
        removeBtn.innerText = 'Remove';
        // 1st way to add event listener - fine but clunky
        // removeBtn.addEventListener('click', function(e) {
        //      e.target.parentElement.remove()
        // })
        newFriend.appendChild(removeBtn);
        friendList.appendChild(newFriend);
        friendInput = '';
    })

    // problem = the new freind's 'remove' button doesn't work!

    // in inspector - look the same but nothing happens
    // why don't the new buttons work?

// Event Delegation
    // Answer - no event listener! the existing buttons got the listeners right when we deployed it but the new friends don't have them yet

    // 2 ways to add eventListener to new buttons
        // 1. add listener when we create new button
            // removeBtn.addEventListener('click', function(e) {
            //      e.target.parentElement.remove()
            // })

            // we will have many, many listeners this way

        // 2. event delegation
            // we 'delegate' the listener to a parent element instead
            // put the 'click' on the <ul> instead of <li>
            // 1 listener for ALL friends
            
            // for (let friend of friendList) {
            //     friend.addEventListener('click', function(e) {
            //         e.target.parentElement.remove()
            //     })
            //     }

    // click text - change style
        // add an 'else if' to event listener to add a new event
        // if (e.target.tagName === 'BUTTON') {
        //     e.target.parentElement.remove();
        //     } 
        //     else if (e.target.tagName === 'LI') {
        //         e.target.classList.toggle('bestFriend');
        //      // add heart
                // const heart = document.createElement('span');
                // // inner text - only shows '&#10084;'
                // heart.innerHTML = '&#10084;';
                // e.target.prepend(heart)
        //     }
        // })

// Data Attributes = 'data-'
    // store meta data without showing user
    // custom  ids => replaces css id/class
    // can be read easily in CSS and JS
    const ulCars = document.querySelector('#cars');
    ulCars.addEventListener('click', function(e) {
        // console.log(e.target.getAttribute('data-id')) 
        
        // show data-set
        const selectedElement = e.target;
        // show ALL data-
        console.log("see all data attributes: ", selectedElement.dataset); 
        // just show the year dataset
        console.log("see all data attributes: ", selectedElement.dataset.year); 

        // change sata-sets
        // changes the 'year' on ALL li's
        // 1st click - og yr, 2nd click = 2020
        e.target.dataset.sold = 'true';
        
    })

    // data-set <= get all data attributes
    // behaves like an object

// Color Paletter Example
