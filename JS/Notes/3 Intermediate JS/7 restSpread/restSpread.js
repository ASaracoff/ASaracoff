// rest/spread Operator
    // like the '+' operator: can add OR concatenate "ddd"+"ssss" = ddssss
    // [...] 

// goals
    // understand 'rest" & 'spread', what they do
    // spread to copy arrays and objects
    // rest to gather remaining arguments in an array

// Life BEFORE rest - what we used to do
    // unlimited amount of arguments can be passed in
    // Math.max([1,4,6,99]) = NaN  // array
    // Math.max(1,4,6,99) = 99     // <- arguments

    // write our own function
        // function max(a,b,c,d,e,f,g,h){  //(cannot recreated unlimited arguments)
        //     logic would be nasty -> logic for each a,b,c,d,e,f,g,...
        // }
    // JS every function created using 'function' has access to a special keyword: 'arguments'
    // arguments is only a thing INSIDE functions
        // looks like an array but NOT
            // an 'array-like-object'
                function sum() {
                    console.log(arguments[0])
                    // TypeError! arguments.reuce != a function
                    arguments.reduce((sum,val) => {
                        return sum + val;
                    })
                }
        // has:
            //  a length property
            // can be accessed at specific index
        // DOESN'T have:
            // built in array method ie map, filter, etc
    // what to do?
        // turn the 'array-like-object' into an array by making a copy and setting the target of the copy to be the arguments 'array-like-object'
        function doubleArgs() {
            let arrayFromArgs = [].slice.call(arguments)
            return arrayFromArgs.map(function(arg){
                return arg * 2
            })
        }

        doubleArgs(1,2) // [2,4]
        
        function doubleArgsSimpler() {
            const args = Array.from(arguments)
            return args.reduce((sum, val) => {
                return sum + val
            })
        }

        doubleArgs(1,2) // [2,4]

// arguments DONT WORK in =>'s PERIOD, 'arguments' dont exist

        const max = function() {
            const args = Array.from(arguments)
            args.reduce((max, CurrVal => {
                return CurrVal > max ? CurrVal : max
            }))
        }

// ------------------------------------------------------------

// Intro to Rest & Spread
// Operator '...' - deleted as 1 character
        // inside a function: REST
            // function doSomething(... asd){ }
            // does: 
                // last parameter definied in a func
                // will evaluate to an array of all additional arguments passed in
                // an ACTUAL array
                function displayArgs(...restOFArgs){
                    console.log("The first argument is ", restOFArgs[0])
                    return `You passed in ${restOFArgs.length} arguments@`
                }
                displayArgs(1,2,3) // 1,2,3 = array

                function sum(...nums) {
                    return nums.reduce((sum, n) => sum + n)
                }

                const sumAll = (...values) => { 
                    if(!values.length) return undefined;
                    return values.reduce((sum, n) => sum + n);
                }
// Collecting Remaining Arguments
    // can also specify several NAMED parameters and collect the rest
    function makeFamily(parent1,parent2,...kids){
        return {parents : [parent1,parent2],
        kids : kids.length ? kids : "NONE YET"}
    }

    const filterByType = (type, ...vals) => {
        return vals.filter((v) => typeof v === type)
    }

    filterByType('number',1,2,3,'a',true) // [1,2,3]
    //const filterByType = (type, ...vals, nums)  <- TypeError

// ----------------------------------------------------------------

// Spread
    // 'spread out' array elements
    // max(...something)
    //     [...something]
    //     {...something}

    function takes4(one,two,three,four) {
        console.log(one)
        console.log(two)
        console.log(three)
        console.log(four)
    }

    const names = ["Mary","Colt",'Angela','Abe']
    takes4(...names)

    // normally the WHOLE array would be 'one'
    // ... takes first 4 of the array

    const nums = [1,2,34,68,0.632,20,-87]
    // only used the first 4
    takes4(...nums)

    Math.max(...nums)

    const things = [1,2,3,'a',true]
    filterByType(...things)

    console.log('variable: ',things)
    console.log('with spread:', ...things)

    console.log('string: ',"things")
    console.log('with spread:', ..."things")

    
            // ------------------------------
            // | rest = compress together   |
            // | spread = space out/split   |
            // ------------------------------

// Array Literals

// make copy of array
const pallette = ['lavender berry', 'sunflower yellow', 'orchid orange']

// not an option
const palletteCopy = pallette; 
// not a copy, copy ONLY reference 
// they are the same array with different names

// slice existing array
const palletteCopy2 = pallette.slice()

// spread existing array into a new array
const palletteCopy3 = [...pallette]

// EXTRA SPRECIAL/USEFUL

// make copy but adding elements before/after
const palletteCopy4 = ['sky blue',...pallette, 'grass geen']

// same but concatenated <- more complex, more steps 
    // adding 1 element at a time
palletteCopy4.concat('deep purple') // adds color to end

const greenTea = ['snow jasmine', 'fragrant leaf']
const oolongTea = ['honey orchid', 'winter sprout']
const herbalTea = ['african solstice', 'marshmallowroot']
const blackTea = ['PG Tips', 'Earl Grey']

// new array with ALL teas
const allTeas = [...blackTea,...greenTea,...herbalTea,...oolongTea]

// we can spread other literals
const vowels = 'aeiou'
const vowelArray = [...vowels, '& sometimes y']


// -----------------------------------------------------------------

// Spread with Objects
    // copying pieces from one place into another/new location
    const tea = {
        type    : 'oolong',
        name    : 'winter sprout',
        origin  : 'Taiwan'
    }

    // for(let x of tea) { // tea is NOT iterable
    //     console.log(x)
    // }


    // make NEW object from an existing object

    // copy of object != reference 
    const tea2 = {...tea}

    // make a copy, then add a new key 'price'
    const teaTin = {...tea, price:22.99}

    // order ONLY matters when there are CONFLICTING properties
    const newTea = {...tea, name:'golden frost'}

    // had an old name, then name got rewritten
    // if new name put BEFORE ...tea, the new name gets reverted to old name
    // last in order is the name that sticks
    // earlier names get rewritten

    const colors = ['red', 'blue', 'green']
    const dummyObj = {...colors};
    // (0:'red', 1: 'blue', 2: 'green')

    const dummyObj2 = {...colors,...'CAT'} // CAT overrides color

// ----------------------------------------------------------------

// Spread & Deep Copy aka cloning(?)
    // Spread is great for 'shallow' arrays 1 lvl arrays
    const shoppingCart = [
        {
            name    : 'honey orchid',
            quantity: 2,
            price   : 13.5
        },
        {
            name    : 'african solstice',
            quantity: 4,
            price   : 25.99
        }
    ];

    const cartCopy = [...shoppingCart]
    // only copies 'name' of each object - nothing more
    // keeps original refrence for copies
    // you can deeply copy objeccts BUT is a bit more complex

// ----------------------------------------------------------------

