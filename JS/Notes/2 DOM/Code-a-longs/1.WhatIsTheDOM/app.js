
// lists all elements(in browser to see quickly)
console.dir(document)


// finds element by id (in browser to see quickly)
document.getElementById('gallery');
document.getElementById('submit');
document.getElementById('content');

// can grab the elements and make them into variables are HTMLElements 
// - one big object per element
let btn = document.getElementById("submit")
let gallery = document.getElementById("gallery")

// tagName
    // selects ALL imgs
    // looks like an array in browser
    document.getElementsByTagName('img')

    // selects all paragraphs
    document.getElementsByTagName('p')


