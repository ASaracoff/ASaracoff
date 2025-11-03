// Arrow Functions
    // crowd favorite of programmers
    // nice syntax for writing functions
    // not a replacement - but mainly for callback functions
    // ideal for shortening callbacks
    // cannot be named & only work as function expressions


    // function declaration = function(greet){return a}
    
    // arrow functions replace:
    // function expression = const add = function(x,y){return x*y}

    const add = function(x,y){
        return x * y
    }

    // vs

    const add2 = (x,y) => {
        return x * y
    }
// --------------------------------------------------------------
    [1,2,3].forEach(function (n,idx){
        console.log(n,idx)
    })

    // vs 
    // [1,2,3].forEach((n,idx) => {
    //     console.log(n,idx)
    // })

    nums2 = [2,3,6,78,104,23]
    // nums2.reduce(function(max,curNum){
    //     return Math.max(max,curNum)
    // })

    // vs

    nums2.reduce((max,curNum) => {
        return Math.max(max,curNum)
    })

// syntax
    // (a,s,d,f,g) => { }

// shortcuts
    nums2.forEach((n) => {
        console.log(n*10)
    })
    
    // vs
    // can remove () for the n
    // only works for 1 parameter
    // not everyone likes it -> confusing, editors may modify the () back in
    nums2.forEach(n => {
        console.log(n*10)
    })

// => without parameters
    const greet = () => { console.log('Hello!!')}

// return -> implicit return
// only works when there is ONLY 1 expression in the funciton
    // otherwise JS is confused -> which line is returned?


    // leave out the {}
    let nums = [1,2,3]
    let arrSquared = nums.map(n => n**2) // [1,4,9]

    //  return
    const implicit1= nums2.filter(function(num) {
      return num % 2 === 0  
    })
    
    // vs implicit return
    const implicit2 = nums2.filter((num) => num % 2 === 0)

    // more adorable <3
    const double2 = (n) => n * 2
    // vs
    const double = (n) => { 
        return n * 2
    }

    // no implicit return
    const mapOddEven = nums2.map((n) => {
        if(n % 2 === 0){
            return 'even'
        }
        return 'odd'
    })

    // with implicit
        // angry its not on 1 line
        // confused with the if statement
    // const mapOddEven2 = nums2.map((n) => 
    //     if(n % 2 === 0){
    //         return 'even'
    //     }
    //     return 'odd'
    // )

    const mapOddEven2 = nums2.map((n) => (n % 2 === 0 ? 'even' : 'odd'))

    const dailyRainTotals = [
        [1.2, 30.35,2.2],
        [1.7, 0.5, 0.10],
        [2.5, 0.9, 1.50]]

    // reduce = adding each element to 1 number
    // map = call reduce on each element

    // long way
    const rain1 = dailyRainTotals.map((hourlyRainTotals) => {
        return hourlyRainTotals.reduce((sum, inchesOfRain) => {
            return sum + inchesOfRain
        })
    })

    // shortcuts: => => no curly braces
    const rain2 = dailyRainTotals.map((hourlyRainTotals) => hourlyRainTotals.reduce((sum, inchesOfRain) => sum + inchesOfRain))

// sometimes see () around an arrow function 
    // especially with modern frameworks
    // not required but seen in langs such as react

    // const mutiply = (a,b) => (a * b)

// Arrow Function Gotcha/Traps and Mistakes
// Gotcha with Arrow func
    // return an object? 
        // wrap it in () or put on more than 1 line
    
    const makeMath = (num) => {
        return {
            square: num * num,
            double: num * 2
        }
    }

    // vs implicit
    const makeMath2 = (num) => 
        ({
            square: num * num,
            double: num * 2
        })


// -----------------------------------------------------


// Arrow Functions & 'this'
    // Arrow Funct don't have their own 'this' context
        // be wary if yours have 'this'
    // should NOT be using arrow funct:
        // in object method
        // when you need your own  keyword 'this'
    // no no's
        // don't use => inside objects
    
    const cat = {
        name: 'Bubs',
        meow: function() {
            console.log(this);
            // 'this' refers to the object's name 
            return `${this.name} says Meow!!!`;
        }
    }
    
    const cat2 = {
        name: 'Bubs',
        eat: function() {
            return `${this.name} chows down!`;
        },
        meow: () => {
            console.log(this)
            // 'this' is undefined; refers to window.scope not the objects
            return `${this.name} says Meow!!!`;
        }
    }

// ------------------------------------------------------

// => Recap
    // shorthand for anonymous function expression
    // optionally leave off () of 1 parameter
    // must have () on 0 or 2+ parameters
    // return statement implied = leave out {}
    // do NOT make their own 'this' - acts differently


// Babel - https://babeljs.io 
    // popular tool
    // takes modern JS convert to browser compatible JS
        // great if you want your site to work on IE/all browsers
    // essentially a translator app with/for code
    // has a 'try it out' feature