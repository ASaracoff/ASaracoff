// source: https://youtu.be/ec8vSKJuZTk?si=yC-NGZl2dmMWNKy_&t=3880
// 10:10 start
// 11:17 fin - added custom images found online and slightly modified
// 1hr 7 min total

const squares = document.querySelectorAll('.square')
const PA = document.querySelector('#PA')
const fade = document.getElementById('fade');

// squares for movements
let sq1 = document.getElementById('1')
let sq2 = document.getElementById('2')
let sq3 = document.getElementById('3')
let sqCenter = document.getElementById('5')
let sq6 = document.getElementById('6')
let sq8 = document.getElementById('8')
let sq9 = document.getElementById('9')


// function array
const oneTimeTasks = []
// const classNames = ['ufo1', 'ufo1m', 'ufo2', 'ufo3', 'ufo3m', 'home', 'homeR', 'homeS', 'shot', 'shot3', 'beam', 'laserBeam', 'fade']


function addOneTimeTask (func, delay) {
    oneTimeTasks.push({function: func, delay: delay});
}

function runOneTimeTasks ()
{
	for (const oneTimeTask of oneTimeTasks)
	{
		setTimeout(oneTimeTask.function, oneTimeTask.delay);
	}
}


function go(msg, sq, what, obliterate) {
    // for(let i=0; i<classNames.lengths; i++) {
    //     sq.classList.remove(className[i])
    // }
    sq.classList.remove(obliterate)
    PA.innerHTML = msg
    sq.classList.add(what)
}

function startMission() {
     setTimeout(
        function ()
		{go("We have made it to space! Congratulations Crew and Home Base! We Did IT!!!", sqCenter, "home")}, 2000
    )

     setTimeout(
        function ()
        {go("Captain, something has triggered the radar!", sqCenter, "homeR", 'home')}, 6000 
    )

     setTimeout(
        function ()
        {go("Three boogies incoming!!", sqCenter, "homeR")}, 10000
    )

     setTimeout (
        function ()
        {go('Here comes the first one', sq1, 'ufo2')}, 15000
    )

     setTimeout(
        function ()
        {go('another one showed up!', sq3, 'ufo3')}, 17000
    )

     setTimeout(
        function ()
        {go('Here comes the ring leader.... What ferocious creature would lead these fiends!', sq2, 'ufo1')}, 19000
    )

     setTimeout(
        function ()
        {go(" ", sqCenter, 'blank', 'homeR')}, 23000
    )

     setTimeout(
        function ()
        {go(" ", sq2, 'ufo1m','ufo1')},23000
    )

     setTimeout(
        function ()
        {go("Let's give them some space", sq8, 'home')},23000
    )

     setTimeout(
        function ()
        {go("Uh oh, I think that triggered the leader. He is trying to lure us in with a beam!", sqCenter, 'beam')}, 25000
    )

     setTimeout(
        function ()
        {go("Deploy Shields!", sq8, 'homeS','homeR')}, 27000
    )

     setTimeout(
        function ()
        {go("The shields have De-activated the beam. Fire Cannon!", sqCenter, 'shot', 'beam')}, 30000
    )

     setTimeout(
        function ()
        {go(" ", sq2, 'fade','ufo1m')},32000
    )

     setTimeout(
        function ()
        {go("Target Destroyed", sqCenter, 'blank','shot')}, 32000
    )

     setTimeout(
        function ()
        {go("Great, now retaliation", sq3, 'ufo3m','ufo3')}, 36000
    )

     setTimeout(
        function ()
        {go("Laser Incoming!", sq6, 'laserBeam')}, 38000
    )


     setTimeout(
        function ()
        {go("Shields will only last for 10 more seconds", sq8, 'homeS','home')}, 40000
    )

     setTimeout(
        function ()
        {shieldDown()}, 40000
    )

    
// timer & whac-a-mole
// source: Bing Copilot AI
    function shieldDown(){
        let timeLeft = 10; // Start at 10 seconds
        const countDown = document.querySelector('#timer')

        const timer = setInterval(() => {
        timeLeft--;
        countDown.innerHTML = timeLeft;

            if (timeLeft <= 0) {
                clearInterval(timer); // Stop the timer
                go('Shields Down! Move! Move! Move!',sq9,'home')
            }
            // PA.remove = 
        }, 1000); // Update every second
    }
    

     setTimeout(
        function ()
        {go(" ", sq8, 'blank','homeS')}, 49999
    )
     setTimeout(
        function ()
        {go("Move Move Move", sq9, 'home')}, 50000
    )

     setTimeout(
        function ()
        {go("", sq6, 'blank','laserBeam')}, 51000
    )

    setTimeout(
        function ()
        {go("Shoot! Shoot! Shoot!", sq6, 'shot3','blank')}, 52000
    )

    setTimeout(
        function ()
        {go("Shoot! Shoot! Shoot!", sq6, 'blank','shot3')}, 53999
    )

    // interval - switch between shot and shot3


     setTimeout(
        function ()
        {go("We got him, boys! One more to go!", sq3, 'fade','ufo3m')}, 54000
    )

     setTimeout(
        function ()
        {go("Where did he go?", sq1, 'fade','ufo2')}, 56000
    )

     setTimeout(
        function ()
        {go("Well I guess we survived!", sq9, 'home')}, 59000
    )

     setTimeout(
        function ()
        {go("", sq9, 'blank','home')}, 60900
    )

     setTimeout(
        function ()
        {go("Let's call it a day and go back to Earth", sqCenter, 'home','blank')}, 61000
    )

     setTimeout(
        function ()
        {go("Bye", sqCenter, 'fade')}, 63000
    )

     setTimeout(
        function ()
        {go("Bye", sqCenter, 'fade','home')}, 64000
    )

    runOneTimeTasks()
}


startMission()

// function start() {
//     sqCenter.classList.add("homeBase", 'fade')
//     fadeIn
//     PA.innerHTML = 'We have made it to space! Congratulations Crew and Home Base! We Did IT!!!'
// }


// start timer
let currentTime = 10

// make global - used by multi-functions
let timerID = null


// timer countdown
// function shieldDown() {
    
//     currentTime--
//     timer.textContent = currentTime
    
//     // end game
//     if(currentTime === 0) {
//         // reset timer
//         clearInterval(countDownTimerID)
//         // stop timer
//         clearInterval(timerID)
//         // go('Shields Down! Move! Move! Move!', sq8,'blank','homeS')
//         // go('Shields Down! Move! Move! Move!', sq9,'home','homeS')
//     }
// }

// every second
// countDownTimerID(start,1000)

// function countDownTimerID(func, speed) {
//     setInterval(func, speed)
// }

// fade out
// source: Bing Copilot AI


function fadeOut() {
      fade.style.opacity = 0; // Set opacity to 0 to fade out
    }

// i simply reversed fade out and it worked!
function fadeIn() {
      fade.style.opacity = 1; // Set opacity to 0 to fade out
    }