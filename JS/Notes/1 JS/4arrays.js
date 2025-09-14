// Arrays
//  a list of stuff!

// compare
const evenNum = 2;
const evenNum2 = 4;
const evenNum3 = 6;
const evenNum4 = 8;

// vs array
// an array of variables
const evenNumArray = [2,4,6,8];

// an array of const vars
const evenNums = [
    evenNum,
    evenNum2,
    evenNum3,
    evenNum4
]

// arrays = think empty pill containers
// ordered openings to store information
// can store ALL different vars in an array
emptyArray = []
randomStuff = [1,'f',true,null]

// a different way to make an array
// not used, more to type
new Array (1,2,3,4,5)

// arrays are indexed  ------------
let colors = ["red","orange","green","purple"]
colors.length // 4
console.log(
    colors[0],//red
    colors[1], //orange
    colors[2], //green
    colors[3], //purple
    colors[4]) //undefined

//  find array last value
console.log('display var 3rd from end',colors[colors.length -3]) //orange

// edit an array ------------
const catToy = ['ball', 'string', 'xbox', 'catnip']
console.log(catToy)

// change 'xbox' to 'laser pointer' 
// have to count/know the index of variable to replace
catToy[2] = 'laser pointer'
console.log('change index 2',catToy)

// add something to end of list
catToy[catToy.length] = 'yarn'
console.log('add var to end of array',catToy)


// storing values FROM arrays  ------------
const patterns = ['stripes', 'dots', 'plaid']
console.log(patterns)

const stripes = patterns[0]
const dots = patterns[1]
const plaid = patterns[2]
console.log('variables pulled from array',stripes, dots, plaid)

// common array METHODS ------------
// array.method()

//  Push - ADD value to END of array
//  Unshift - ADD value to START of array
//  Pop - REMOVE value from END
//  Shift - REMOVE value from START

// push - ADD to END of array ------------

console.log('')
console.log('push')

const planets = ["venus", "earth", "mars"]
console.log(planets);
planets.push("jupiter");
console.log('add jupiter to end',planets);


// playlist example
let topSongs = ['a','b','c','d']
console.log(topSongs)

topSongs.push('e')
topSongs.push(true)
console.log('add e and true to topSongs',topSongs)

// POP - REMOVES from END ------------
// popping off values - removing them from end

console.log('')
console.log('pop')

planets.pop()
console.log('pop off end',planets)

topSongs.pop()
console.log('pop off end',topSongs)

// if playlist played started from the end
// removes songs as played
const nextSong = topSongs.pop()
console.log('playlist next',nextSong)

// Unshift - ADDS value to START ------------
// shitf/unshift originated from a different programming language - stacks and cues (?)

console.log('')
console.log('unshift')

planets.unshift('mercury')
console.log("add mercury to front",planets)

// [] = 0, [1] =1 in index world
let dishesToDo = ['platter', 'plate', 'bowl']
console.log(dishesToDo)
dishesToDo.unshift('mug')
console.log('add mug to start',dishesToDo)

// Shift - REMOVES value to START ------------

console.log('')
console.log('shift')

planets.shift()
console.log('shifted 1st value - removed mercury',planets)
planets.shift()
planets.shift()
planets.shift()
console.log('shifted 3x more - empty array',planets)

dishesToDo.shift()
console.log(dishesToDo)
console.log('remove next:',dishesToDo.shift())
console.log('remove next:',dishesToDo.shift())
console.log('remove next:',dishesToDo.shift())
console.log('remove next:',dishesToDo.shift())

// MORE Array Methods ------------
// concat - merge arrays
// includes - look for value - boolean
// indexOf - like string.indexOf
// join - creates a str FROM an array
// reverse - reverses array - mutates/changes it
// slice - copy a portion of array
// splice - removes/replaces elements - mutates/changes it
// sort - sorts an array

// CONCAT combines 2 arrays together ------------
// accepts arrays or values seperated by ','
// creates NEW array to display values

console.log('')
console.log('concat')

// [values].method(values)
console.log('combine [1,2,3] and [4,5,6]',[1,2,3].concat([4,5,6]))
console.log('combine [1,2,3] and (4,5,6)',[1,2,3].concat(4,5,6))
console.log('combine [1,2,3] and ([4,5],6)',[1,2,3].concat([4,5],6))

let meats = ['steak,','chicken']
let fruits = ['apple','banana']
let veggies = ['carrots','brussel sprouts']

// order matters, the first is saved as an array, the following as individuals in the next array
console.log('combine fruit and veggies', [fruits].concat(veggies))
console.log('combine meat, fruit and veggies', [meats].concat(fruits,veggies))
let allFood = [meats].concat(fruits,veggies)
console.log('above but in a var',allFood)

// includes - boolean - returns yes/no values ------------
// if found - yes
// if not found - no

console.log('')
console.log('includes')

const words = ['it','was', 'best']
console.log('array words:',words)
console.log('can i find "it"',words.includes('it'))
// can search after an index #
console.log('can i find "it" after index 2?',words.includes('it',2))

// has to match completely - no partials
console.log('can i find "be"',words.includes('be'))

// used in an if statement
console.log('if "was" is found return "past tense"')
if(words.includes('was')){
    console.log('past tense')
}

// indexOf vs include
// inclue - don't care where to find variable
// indexOF - where is it?

// indexOF ------------
// searches for values in an array
// returns FIRST match only
// if NOT found returns -1

console.log('')
console.log('indexOf')

console.log("find 'it'",words.indexOf('it'))
console.log("find 'be'",words.indexOf('be'))

console.log('if "was" is found return "past tense"')
if(words.indexOf('was')!==-1){
    console.log("it's here")
}


// reverse - reverses an array - mutates/changes array ------------
console.log('')
console.log('reverse')

const letters =  ['a','b','c','d','e']
console.log('original array:',letters)
console.log('reversed array:',letters.reverse())
console.log('how the array looks now:',letters)


// join - combines all array element into a string ------------
// accepts seperator (',' default) to put inbetween values

console.log('')
console.log('join')

const commands = ['eat','drink','be merry']

console.log('commands: ',commands)
const doEverything = commands.join(' and ')
console.log('a join using " and " : ',doEverything)

const doEverything2 = commands.join(', and ')
console.log('a join using ", and " : ',doEverything2)


// splice - add/removes elements from array ------------
// super powerful metof
// returns an aray of DELETED elements

// structure: array.plice(start,deleteCount, item1, item2, etc)
// start - where to start REMOVING
// deleteCount - # of items to delete
// item1,item3 - what to add

console.log('')
console.log('splice')

const instruments = ['guitar', 'piano', 'bass', 'tuba','drums','tambourine', 'ipod']
console.log('instruments: ',instruments)

// remove middle elements
console.log('remove 2 elements starting at index 1', instruments.splice(1,2))
console.log('instruments: ',instruments)

// add elements
console.log('add 2 elements starting after index 2: flute & wistle', instruments.splice(2,0,'flute','wistle'),)
console.log('instruments: ',instruments)

// remove and add elements
console.log('remove 3 elements starting after index 3, and add sax', instruments.splice(3,3,'sax'))
console.log('instruments: ',instruments)

// sort - sorts elements ------------
// default - sorts alphabetically via UTF-18
console.log('')
console.log('sort')

const alpha = ['b','s','l','o']
console.log('alpha:',alpha)
console.log('alpha sorted:',alpha.sort())

// sort does NOT modify array
console.log('alpha:',alpha)

// sorts numbers only by 1st # not whole number
const num = [2,34444,3,10000,65]
console.log('num:',num)
console.log('num sorted:',num.sort())
// unique, not used without a  function to choose sortation method

// slice - copies parts of arrays ------------
// creates a copy of subsets of an array
// accepts OPTIONAL starting index (begin slice)
// accepts OPTIONAL ending index (end slice)
// returns the copied (sub) array
console.log('')
console.log('slice')
const days = ['mon','tues','weds','thurs','fri','sat','sun' ]
console.log('days: ',days)

// start after index 5
const weekend = days.slice(5)
console.log('weekend days: ',weekend)

// select first until 5
const weekdays = days.slice(0,5)
console.log('week days: ',weekdays)

// select 2nd until 4
const midweek = days.slice(1,4)
console.log('midweek days: ',midweek)

// takes a portion of an array to make a NEW array

// Reference Types ------------
// - how arrays work
// - work differently than primitive types

console.log('')
console.log('Reference Types')

// order of code matters!
let fruit = 'orange'
console.log('fruit: ',fruit)

let color = fruit
console.log('color: ',color)

fruit = 'watermelon'
console.log('fruit: ',fruit)
// color doesn't change
console.log('does color change? : ',color)

// value type variables 
// vars are reference to where the array is stored in memory
// const array only preserves name of array, not what is inside it
// EVERYTHING inside an array can change or even be empty

// in short:
// arrays = reference points
// names = stay the same
// content = can change

const myEggs = ['brown','brown']
console.log("myEggs: ",myEggs)
myEggs.push('purple')
console.log("myEggs push purple: ",myEggs)

myEggs[0]='green'
console.log("myEggs insert green [0]: ",myEggs)
//can change everything inside

// myEggs=['blue','pink']
// console.log("myEggs reset: ",myEggs)

// Nested Arrays
// arrays can be 'nested' or inserted inside OTHER arrays
// access values using another set of []

console.log('')
console.log('Nested Arrays')

// found often in gameboards
const gameBoard = [
    ['p',7,'b'],
    ['null',2,'y'],
    ['X',9,'O']
]

// gameBoard[array #][index in that array]
// gameBoard[0][0]
// gameBoard[1st array][first]
console.log('gameBoard[0][0]',gameBoard[0][0],'gameBoard[1][1]', gameBoard[1][1],'gameBoard[2][0]', gameBoard[2][0])

// pairs of related info color/dark color
const colorCombo = [ 
    ['red','crimson'],           // 0
    ['orange','dark crimson'],   // 1
    ['yellow','goldenrod'],     // 2
    ['green','olive'],           // 3
    ['blue','navy blue'],        // 4
    ['purple','orchid']         // 5
]

console.log('colorCombo', colorCombo)

console.log('colorCombo[2]',colorCombo[2])
console.log('colorCombo[2][0]',colorCombo[2][0])
console.log('colorCombo[2][1]=gold - replace goldenrod with gold: ',colorCombo[2][1] = 'gold')
