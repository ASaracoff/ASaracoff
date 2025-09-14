// Intro to DOM 
// Goals
    // Understand what is DOM
    // select HTML elements using document methods
    // compare/contrast elements and nodes

// DOM
    // What is?
        // Document Object Model
        // a programming interfface for HTML
        // a representation of our HTML that can be accessed using JS

    // How to create?
        //  when web page is loaded -> browser creates DOM for that specific page
        // allows for the creation of dynamic web pages where users can interact with the page

    // DOM Under the Hood
        // uses a 'tree' where the topmost node is the document object
        // ex: 
        // document.html.body.form.button
        // html ->head->title/link
        // body -> h1/
            // ul->li #1/li #2/li #3
            // form -> input #1/ input #2/ button

    // Things we can do with document Object
        // find elements
        // making new elements
        // updating elements
        // changing properties on elements
        // listening for events like clicks

// Selecting Elements in DOM
    // How to select elements
        // access DOM - document object
        // has properties and functions to access our HTML elements which we can manipulate with JS
    
    // Different Methods
        // getElementById
            // accepts a string which is the name of an 'id' in the DOM 
            // finds the FIRST matching 'id'
            document.getElementById("main");

            // get back a special object: HTMLElement
            // excat kind of object depends on what we select (HTMLDivElement vs HTMLParagraphElement)
        
        // getElementByTagName
            // accepts string which is the name of an element in DOM
            // returns a list of ALL of the elements that match the string passed into the function
            document.getElementsByTagName("li");

            // so all the 'li's in the document via HTMLCollection
            // looks like an array and can access it at a specific index or use a loop
            // CANNOT use common methods ex. push/pop/indexOf/includes

        // getElementByClassName
            // accepts string name of an element in DOM
            // returns list of ALL elements that have a class attribute which match the string passed in
            document.getElementsByClassName("heading");

            // like tagName we get a special type of array = HTMLCollection
            
        // querySelector
            // a string which is valid CSS selector
            // returns FIRST element that matches 
            document.querySelector("#main");
            document.querySelector("h2.section-heading");

            // special HTMLElement object is returned
            // just like ElementById

        // querySelectorAll
            // a sting which is valid CSS selector
            // returns ALL elements that match
            document.querySelectorAll("li");
            document.querySelectorAll("ul .nav-links");

            // get back a NodeList
            // looks like an array
            // same as ElementByTagName
            // almost identical to HTMLCollection but has special kinds of nodes

    // DOM Manipulation
        // Modifying properties with innerText
        let h1=document.querySelector("h1");
        h1.innerText = "Something New!"

// Recap
    // DOM allows us to use JS to modify HTML
    // can use methods like querySelector can access elements on the page
    // using  DOM we can modify elements and attributes