// write a function to find the average value in an array of numbers

// my try
function avg(arr){
    avg = (arr + arr)/arr.length
    return avg
}

// got basic structure right but blanked on how to call numbers from array and didn't have the loop

let nums = [2,3,4,5] ;
console.log(avg(nums))



// 1st code-a-long loop over each num
// divide by number of nums
function avg2(arr){
    let total = 0;
    // loop
    for(let num of arr){
        // add together
        total += num;
    }
    // divide by number of nums
    // let res = total/arr.length;
    // return res
    // or just:
    return total / arr.length;
}

console.log("avg2([2,3,4,5,6,7])")
console.log(avg2([2,3,4,5,6,7]))

