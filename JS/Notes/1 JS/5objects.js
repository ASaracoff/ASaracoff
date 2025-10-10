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

// Creating Objects
console.log(" ")
console.log("Creating Objects")

// Objects use { }
//  { } object literal syntax (empty)
// Keys : Values 
// Key - Value pairs seperated by ','
// displayed alaphabetically - automatically

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

// Syntax
 console.log("")
 console.log("Object Syntax")
//  [ ] - evaluated as an expression 
//  '.' - NOT evaluated as an expression
// if not sure what to use: [ ]
// [ ] -> for 'strings' = need to add '' 
//              vars = no neet for ''
// cannot use '.' syntax

const num = {
    100: 'one hundred',
    16: 'sixteen'
};

// keys are returned as 'strings'

// num.100 - unexpected, syntax error
console.log('num[100]: ',num[100])
console.log("num['100']: ", num['100'])


 //  Arrays & Objects
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

// Updating Values in Objects
 console.log("")
 console.log("Updating Values in Objects")

 //  values update with a simple assignment
// const obj = {key: "old value"};
// obj.key = "new value"
// obj["key"] = "newer value"

student.favColor = 'red';
console.log("add favColor: ", student)

student.fName = 'Dave';
console.log('change fname: ', student)

student['lName'] = 'Jony';
 console.log("lName change: ", student['lName'])

//  Removing Keys from Object
 console.log("")
 console.log("Removing Keys from Objects")

//  Remove a key-value pair = delete
//  const obj = { key: "old value" };
//  delete obj.key //true

delete student.favColor
console.log('delete favColor', student)

// Storing Values FROM an Object
console.log(" ")
console.log("Storing Values FROM an Object")

// store by ACESSING them

const lang = {
    name2:'JS',
    hasObj: true,
    yrRelease: 1995,
    isFun: true,
};

// making var from an object
const name2 = lang.name2
const hasObj = lang['hasObj']
const yrRelease = lang.yrRelease

console.log("variables from objects: ", name2, hasObj, yrRelease)

// Updating Value
console.log(" ")
console.log("add favColor: ")

const userReviews = { }; //empty object - no reviews yet
console.log("userReviews", userReviews)

userReviews['queenBee49'] = 4.0; //added a review
userReviews.mrRobin78 = 3.5

// both reviews added
console.log("userReviews", userReviews)

// Operators
console.log("")
console.log("Operators")

userReviews['queenBee49'] +=2; // add 2
userReviews.mrRobin78 ++ //
console.log("userReviews", userReviews)

// hasOwnProperty
console.log("")
console.log("hawOwnPropert")

// called on an Object
// accepts the name of a key
// returns = true if key exists
        // = false if NOT found

const cat = {
    name: 'blue',
    eyeColor: 'grey',
    hairColor: 'orange'
};

console.log('object: cat', cat)

console.log("is there key: name? ",cat.hasOwnProperty("name"))
console.log("is there key: favFood? ",cat.hasOwnProperty('favFood'))

