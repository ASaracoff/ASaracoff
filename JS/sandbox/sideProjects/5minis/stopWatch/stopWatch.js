// source:  https://youtu.be/2ml4x0rO1PQ?si=3lk05W-QTkNDQEQV&t=3750
// 10:12 start
// 10:25 puase - @ 1:10:22 timestamp - mine wont run! checked code but can't fig it out. Need to do errands
// 8:34 different day continued, easy fix - js wasn't connected to html! numbuts
// 9:00 end
// ~ 39 minutes


// stub - write the function without the code/logic
// Ex: function startClock(){}

// let - we can change these values
let secondsElapsed = 0;

// we will add value later, but for now null
let interval = null;

// grab time header
const time = document.getElementById("time")


// pad our values - if not 2 digits add a leading 0
function padStart(value) {
    // String(value) = turns value into a string 
    // padStart - only used for strings -built in method
    // (2,"0") - how many digits? if not add a "0"
    return String(value).padStart(2,"0")
}



// changes timer to show secondsElapsed
function setTime(){
    // round down to get smooth minutes
    const minutes = Math.floor(secondsElapsed / 60)
    const seconds = secondsElapsed % 60
    // make the time look 00:00 added padStart()
    time.textContent = `${padStart(minutes)}:${padStart(seconds)}`;
}

// adds 1
function timer(){
    secondsElapsed++;
    setTime()
}

// start an interval
function startClock(){
    // if the start button is clicked +2x
    // if there is already an interval restart
    // if(interval) resetClock()

    // if stop and then start = pause
    if (interval) stopClock()
    // calls function every time
    //  (function,1000 - miliseconds)
    interval = setInterval(timer, 1000)
}


// chaining of functions: 
    //  startClock() calls on 
    //  resetClock() whitch calls on
    //  stopClock() - clears the clock 


function stopClock(){
    clearInterval(interval)
}


function resetClock(){
    //  stop
     stopClock()
    //  reset secondsElapsed back to 0
     secondsElapsed = 0;
    //  show 00:00 on clock
     setTime()
}