// Intro to DOM 
// Goals
    // Understand what is DOM
    // select HTML elements using document methods
    // compare/contrast elements and nodes

// DOM
    // What is?
        // Document Object Model
        // a programming interface for HTML
        // a representation of our HTML that can be accessed using JS

    // How to create?
        //  when web page is loaded -> browser creates DOM for that specific page
        // allows for the creation of dynamic web pages where users can interact with the page

    // DOM Under the Hood
        // uses a 'tree' where the topmost node is the document object
        // ex: think parent,child,sibling
        // document.html.body.form.button
        // html ->head->title/link
        // body -> h1/
            // ul->li #1/li #2/li #3 ('li''s are siblings)
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
    
    // lists all the elements in that document/html
        console.dir(document)
    
    // Different Methods
        // getElementById
            // accepts a string which is the name of an 'id' in the DOM 
            // finds the FIRST matching 'id'
            // there really should only be 1 id per page...
            document.getElementById("main");

            // get back a special object: HTMLElement
            // exact kind of object depends on what we select (HTMLDivElement vs HTMLParagraphElement)
            // ById - case sensitive
            // finds element by id (in browser to see quickly)
                document.getElementById('gallery');
                document.getElementById('submit');
                document.getElementById('content');

    // can grab the elements and make them into variables are   HTMLElements 
    // - one big object per element
    let btn = document.getElementById("submit")
    let gallery = document.getElementById("gallery")
        
        // getElementByTagName
            // accepts string which is the name of an element in DOM
            // returns a list of ALL of the elements that match the string passed into the function
            document.getElementsByTagName("li");

            // selects ALL 'imgs'
            // looks like an array in browser
            document.getElementsByTagName('img')

            // selects all paragraphs
            // including all the things inside of the paragraphs
                // li, italic, subscripts etc
            document.getElementsByTagName('p')

            // so all the 'li's in the document via HTMLCollection
            // looks like an array and can access it at a specific index or use a loop
            // CANNOT use common methods ex. push/pop/indexOf/includes

        // getElementByClassName
            // accepts string name of an element in DOM
            // returns list of ALL elements that have a class attribute which match the string passed in
            document.getElementsByClassName("heading"); 

            // like tagName we get a special type of array = HTMLCollection
            // even if there is only 1 class the return is the same
            // 0 class match = empty []

            // select multiple classes 
            // these are 2 classes in the same section/ < >
            document.getElementsByName('section-title country')
            
        // querySelector - newer and prefered
        // the swiss army knife of DOM selectors
        // 'can do it all!'
        // can use css class selector to select specific types

            // a string which is valid CSS selector
            // returns FIRST element that matches 
            document.querySelector("#main");

            // combining multiple selectors
            document.querySelector("h2.section-heading");

            // submit button - id of submit
            document.querySelector("#submit");

            // find via class
            document.querySelector(".section-title"); 

            // finds first input
            document.querySelector('input'); 
            
            // finds input type text
            document.querySelector('input[type="text"]'); 

            // finds input type randge
            document.querySelector('input[type="range"]'); 

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

            // go fancy - find 'hr' direct children of body
            document.querySelectorAll('body > hr');

            // go fancy - find everything NOT a paragraph
            document.querySelectorAll(':not(p)');

            // go fancy - find first (1) of h2 -- change # for different number of h2's 
            document.querySelectorAll('h2:nth-of-type(1)');

    // search within an element 
        // get an element from HTML and add to JS
        const form = document.querySelector('form')

        // search within the query
        form.querySelectorAll('button')
    
    // DOM Manipulation
        // Modifying properties with innerText
        let h1 = document.querySelector("h1");
        h1.innerText = "Something New!"

// Recap
    // DOM allows us to use JS to modify HTML
    // can use methods like querySelector can access elements on the page
    // using  DOM we can modify elements and attributes