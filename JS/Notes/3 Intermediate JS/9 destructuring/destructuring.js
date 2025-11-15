// Destructuring
//  Array and Object Destructuring

// Goals
    // Understand what destructuring is
    // use objject destrucring to write LESS code
    // use array destructuring to swap vaues and extract nested values

// Object Destructuring
    // 'extract' values to make NEW values

    const teaOrder = {
        variety     : 'oolong',
        teaName     : 'winter sprout',
        origin      : 'Taiwan',
        price       : 12.99,
        hasCaffeine :true,
        quantity    : 2
    }

    // without 'Destructuring'
    const price2 = teaOrder.price;
    const quantity2 = teaOrder.quantity;
    const teaNAme2 = teaOrder.teaName;

    // WITH Destructuring
        //  { } are ESSENTIAL! -> destructure into NEW values
    // const {price,quantity,teaNAme } = teaOrder

    // if you add a variable NOT in the array/object 
    const {country} = teaOrder // undefined
        // same as country = teaOrder.country

    // can use rest ... collects all the OTHER keys
    const {price,quantity,teaName, ...others } = teaOrder

// Defaults with Destructuring
    const options = {
        refreshTime: 200
    }

    // even though wait time is NOT in the original object, you can give it a default value
    const {refreshTime = 750, waitTime = 1000} = options;
        // the 750 is ignored, the # in options overrides it
    console.log(refreshTime)
    console.log(waitTime)

    // example with teaOrder, = 175 ONLY if not found, or without a value
    const {brewTemp = 175} = teaOrder

// renaming 
    const instructorData = {
        name:'Colt',
        job:'Instructor'
    }

    // the keys DO update - overwrite the original
    const {name:instructorName, job: occupaation } = instructorData
    
    const {teaName: tea} = teaOrder

    // can combine name change with giving default value
    const {brewTemp: temp = 175} = teaOrder

// function example
    function checkout(tea){
        // default value = 1
        const {quantity = 1, price} = tea
        return quantity * price
    }

    checkout(teaOrder)

    const order1 = {
        variety     : 'oolong',
        teaName     : 'winter sprout',
        origin      : 'Taiwan',
        price       : 12.99,
        hasCaffeine :true
    }

    checkout(order1)

// Destructuring Arrays
    const myFavoriteThings = ['teaching','reading','music', 'sleep', 'dank memes']
    const [first,second,...others2] = myFavoriteThings
    console.log(first)
    console.log(second)
    console.log(others2)

    // an array of objects
    const students = [
        {name: 'drake', gpa: 4.6},
        {name: 'henrietta', gpa: 4.4},
        {name: 'tung', gpa: 4.0},
        {name: 'harry', gpa: 3.8},
        {name: 'ant', gpa: 3.2}
    ]

// use , , extra comma/empty space to SKIP an index
    // if you use more than 2, it can be confusing - counting is necessary to see how many elements are being skipped. at that point it is recommended to simpply use teaOrder.quantity etc

    const [topStudent,,thirdStudent, ...losers] = students
    const [topStudent2, ...losers2] = students

// in array = names are up to US!
// it is the POSITION that matters


// Destructuring Functions
// parameters
// extract key/value pairs from an object into variables

    // old way
    function makeunstructor(settings) {
        let name = settings.name
        let age = settings.age
    }

    // new way
    // function myFunc({name,age}) {
    //     let name = name
    //     let age = age
    // }

    // new version of checkout
    function getTotal2({quantity: qty = 1, price}) {
        return qty * price
    }


    // 1st, 2nd, 3rd place
    const longJumpResults = ['timmy', 'melissa', 'veronica']
    const swimMeetResults = ['betty', 'anna', 'eric']

    function awardMedals ([gold, silver, bronze]) {
        return {
            gold, silver, bronze
        }
    }

    console.log(awardMedals(longJumpResults))
    console.log(awardMedals(swimMeetResults))


// Nested Objects Destructuring
    const instructor = {
        id:44,
        name: 'colt',
        isHilarioud:true,
        funFacts: {
            favFood: 'burrito',
            favDrink: 'old fashioned'
        }
    }

    const {funFacts: {favFood,favDrink}} = instructor
    console.log(favFood)

    // when destructuring a nested object:
        // destructure an object: use { }
        // destructure an array: use [ ]

    // to skip an object/array add a ','
    // keep an eye on WHERE you are in the structure


// Fancy 1-Line array value swap
    // An application OF destructuring
    
    let delicious = 'mayo'
    let discusting = 'whipped cream'

    // old way - add a 3rd variable
    let temp2 = delicious
    delicious = discusting
    discusting = temp2

    console.log(delicious)
    console.log(discusting)

    // diff way

    let both = []
    both = [delicious,discusting]

    // reverses order
    [discusting, delicious] = both 

    let [a,b] = ['mayo', 'whipped cream']

// SWAP order
    [discusting, delicious] = [delicious,discusting]


// RECAP!!
    // Destructuring + Spread
        // destrucure objects:
            // { property names}
        let {username, firstName, lastName, Id} = userData

        // rest to collect the rest of the objects
        const {password, ...user} = userData

        // rename = object:newName
        const {name: instructorName2, job: occupation2} = instructorData

        // default values - object = value
        const {refreshTime2 = 750, waitTime2 = 1000} = options

        // destructuring nested objects - {object: {nested object}}
        // destructuring nested arrays - {object: [nested array]}
            // or vice a versa
        const {funFacts: {favFood2,favDrink2}} = instructor

        // destructuring to define a function - func({key, key})
            // set defaults ({key: placeholder = defaultValue})
        function getTotal2({quantity: qty = 1, price}) {
            return qty * price
        }

        // destructure arrays
            // based on position NOT name
        const [first3,second3,...others3] = myFavoriteThings

        // 1-liner swap syntax
        let ab = 1
        let ba = 2
        [ab,ba] = [ba,ab]
        // ab = 2
        // ba = 1