// Modifyint the DOM

// Goals 
    // Mod the text and HTML of elements using innerText and innerHTML
    // change inline styling of an element using the style object
    // mod attributes using getAttribute and setAttribute
    // travese, creat, append and remove elements from the DOM

// Recap 
    // select elements in DOM 
        // querySelector
        // querySelectorAll
        // getElementById
        // getElementByClassName
        // getElementByTagName

// Mod Elements in DOM
    // Accessing Text 
    const mainGreeting = document.getElementById("main-greeting")

    console.log(mainGreeting.innerText) //"Hello World!"

    // Modifying 
    // change ANY text = innerHTML or innerText
    mainGreeting.innerText = "It's Changed"
    
    
    // Using textContent
    // access and mod with textContent

    mainGreeting.textContent = "Change again!"

// whats the difference?
    // innerText 
        // aware of rendered appearance of text
        // only shows "human-readable" elements
        
    // textContent 
        // unaware of rendered appearance of text
        // gets the content of ALL elements, includeing <script> and <style> 

    // depending on complexity of content inside an element
        // innerText is a but LESS performant than textContent
    // can use either for now!

// Accessing HTML
    // use innerHTML
    // includes all elements inside of the one you select
    // innerText is used more commonly
    // security concerns for innerHTML

// Mod HTML
    // change any HTML - innerHTML
    mainGreeting.innerHTML = "<article>Just Changed into an article!</article>";

    // another reason less used:
    // you need the string to be valid HTML to work
        // - can be quite tedious

// Mod Styling
    // very common to change inline style for an element
    // access ANY inline style for an element - style

    // get hi
    const mainHeading = document.querySelector("h1")

    // font color is black
    mainHeading.style.color
    
    // font color changed to  navy
    mainHeading.style.color = "navy"

    // change background color
    // mainHeading.style.background-color //Error!!
    // camelCase!
    mainHeading.style.backgroundColor = "green"

// Mod Attributes
    // access = getAttribute  
    // modify = setAttribute

    // attribute are part of EVERY HTML element that mod then
    // either mods the default functionality of an element type or PROVIDES functionality
        // src
        // href
        // class
        // id
        // type
        // value
    
    // getAttribute 
        const firstInput = document.querySelector("input")

        firstInput.getAttribute("type") //type

    // setAttribute 
        firstInput.setAttribute("type","email") //type, email

    // Direct attribute access
        // one attribute you can DIRECTLY access/mood = id

        firstInput.id //"first-name"
        firstInput.id = "full-name" //changes attribute

        // more common = value
        firstInput.value //""

        // changes attribute
        firstInput.value = "Just added some value!"

// Manipulating Classes
    // setAttribute("class") - override the class
    // className - give you a strin representation of the class
    // classList - gives an array-like object to add/remove/toggle classes

    // setAttribute("class")
        // added a new class to h1 - but overrides a previous class
        mainHeading.setAttribute("class", "section-heading");

    // className
    // reassignin className property
        // workds but is prone to bugs
        mainHeading.className += "top-heading"

    // classList
        // easier way to interact with classes on an element
        // .classList 

        mainHeading.classList // []
        // when adding a class make sure to add a " " or else it will meld with the existing class!
        mainHeading.classList.add(" top-heading") // ["top-heading"]
        mainHeading.classList.remove("section-headingtop-heading") // []
        mainHeading.classList.toggle("top-heading") // true
        mainHeading.classList.contains("top-heading") // true

    // changing multiple elements
        const listItems = document.querySelectorAll("li");

        // change all to green
        listItems.style.color = "green" //error: cannot set property of 'color of undefined

        // how its done - loop!
        for(let listItem of listItems){
            listItem.style.color = "red" 
        }

// Working with DOM
        // Creating Elements
            // createElement() function
            // creates an empty element

        // create new button
        const newButton = document.createElement("button");
        
        // create new unoredered list
        const newUnorderedList = document.createElement("ul");
        
        // create new div element
        const newDiv = document.createElement("div");
        
        newDiv.innerText = "a brand new div!"
        newDiv.style.color = "green"
