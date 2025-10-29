// Find & FindIndex
// Goals
// Understand what find and findIndex does
// write own versions

// Find
// find an element in an array - returns FIRST matching element
    // iterates through an array
    // runs callback on each value
    // callback = true at any point => return value in array that's being itterted
    // OTHERWISE => return undefined

// IMPORTANT: only returns 1/First value

    const scores = [0,0,0,0,0,0,0,0,55,59,69,73,73,75,79,83,88,91,93];

    const passing = scores.find(function (score){
        return score > 75
    })

    // 79 

    const even = scores.find(function (score){
        return score !==0 && score % 2 === 0
    })

    // 88

// to find ALL even scores => filter
    const evenScores = scores.filter(function (score){
        return score % 2 === 0
    })

    // returns array with 0x8 and 88

// FindIndex
    // does not return value -> just index #
    // same process and 'find' just it returns the index NOT value
    // can only be used if we KNOW what we are looking for -> like 2 or 88

    const evenIndex = scores.findIndex(function (score){
        return score !==0 && score % 2 === 0
    })

    // [16] aka 88

    // to partition the array -> split into 2 sub arrays 
    // 1st array of 0s/fail
    // 2nd array of #s/pass

    // find the first elements index -> of pass (?)
    function partition(arr,pivot) {
        // use findIndex to find 1st element/score that passes
        const pivotIndex = arr.findIndex(function(el) {
            return el > pivot
        })
        // make 2 arrays - slice
        // up to pivotIndex - doesn't include the pivotIndex
        // then the pivotIndex to end

        const left = arr.slice(0,pivotIndex)
        const right = arr.slice(pivotIndex)
        console.log(left,right)
    }

// Write it out
// Find
    function myFind(arr,callback){
        for(let i = 0; i < arr.length; i++) {
            if(callback(arr[i], i, arr) === true) return arr[i]
        }
    }

    const topScores = myFind(scores, function(score){
        return score > 91
    })

    // 93

    const topScore = myFind(scores, function(score){
        return score > 100;
    })

    // undefined = no score above 100
    // if your callback NEVER finds what your looking for
        //  [-1]

// FindIndex
    function myFindIndex(arr, callback){
        for( i=0; i < arr.length; i++){
            if(callback(arr[i],i,arr) === true)
                return i
        }
        return -1
    }

    const above0 = myFindIndex(scores, function(score){
        return score > 0
    })

