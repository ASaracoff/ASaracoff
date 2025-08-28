console.log("Objects")
// Objects
// an UNORDERED list
// reference type
// const save name/reference point BUT change content

const palette = {
    red : '#692221ff',
    yellow : '#bda241ff',
    blue : '#30336b',
};


console.log("palette: ",palette);

const palette2 = palette;

console.log("palette2: ",palette);

palette2.green = "green:'#17ad3add";


console.log("palette2: ",palette2, "palette: ",palette);

// Array & Object Equality ------------------------------
console.log(" ")
console.log("Array and Object Equality")

// == and === for arrays and objects compare refference points/# 
// NOT content

let nums = [1,2,3];
let myst = [1,2,3];

console.log('do nums === myst?',nums === myst);

let moreNums = nums;
// same reference #
console.log('moreNums === nums?',moreNums == nums)

const user = {
    username: 'ger',
    email: 'ger@mail.com',
    notifications: []
};

console.log("user: ",user)

if (!user.notifications.length){
    console.log('No new notifications')
}

// Limitations of Arrays
console.log(" ")
console.log("Limitaionts of Arrays")

// Arrays                   |   Object
// ordered by index         |   unordered
// accessed by index        |   accessed by 'keys's
// helful w/ ordered data   |   helpful with unordered data

const movie = [
    "Titanic", 1997, "PG-13", 3456789, "James Cameron"    
]

// Rating? movie [2]
// Director? movie[4]
// Year? movie[1]
// easier as Object 

const movie2 = {
    title: 'Titanic',
    releaseYear: 1997,
    rating: 'PG-13',
    revenue: 3456789,
    director: 'James Cameron'
};

// list of data points
console.log("movie - array: ",movie)
// list of data points but with context
console.log("movie - object: ",movie2)

// much easier to get the info than remembering the index #
 console.log("director", movie2.director)

 console.log("")
 console.log("Arrays & Objects")

 const student = {
    fName: 'David',
    lName: 'Jones',
    strengths:['art','music'],
    exams:{
        midterms: 92,
        finals: 88
    }
 };
console.log('student: ',student)
//  how to find avg of exams?
// retreving data from an object:
const avg = (student.exams.midterms+student.exams.finals)/2

console.log(' of exams: ',avg)