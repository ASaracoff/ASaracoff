// source: https://youtu.be/ec8vSKJuZTk?si=yC-NGZl2dmMWNKy_&t=3880
// 10:10 start
// 11:17 fin - added custom images found online and slightly modified
// 1hr 7 min total

const squares = document.querySelectorAll('.square')
const PA = document.querySelector('#PA')
const timer = document.querySelector('#timer')
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
        setTimeout(go("We have made it to space! Congratulations Crew and Home Base! We Did IT!!!", sqCenter, "home"), 2000
    )

    setTimeout(
        go("Captain, something has triggered the radar!", sqCenter, "homeR", 'home'), 6000 
    )

    addOneTimeTask(
        go("Three boogies incoming!!", sqCenter, "homeR"), 10000
    )

    setTimeout (
        go('Here comes the first one', sq1, 'ufo2'), 20000
    )

    setTimeout(
        go('another one showed up!', sq3, 'ufo3'), 30000
    )

    setTimeout(
        go('Here comes the ring leader.... What ferocious creature would lead these fiends!', sq2, 'ufo1'), 40000
    )

    setTimeout(
        go(" ", sqCenter, 'blank', 'homeR'), 40500
    )

    setTimeout(
        go(" ", sq2, 'ufo1m','ufo1'),40600
    )

    setTimeout(
        go("Let's give them some space", sq8, 'home'),40600
    )

    setTimeout(
        go("Uh oh, I think that triggered the leader. He is trying to lure us in with a beam!", sqCenter, 'beam'), 50000
    )

    setTimeout(
        go("Deploy Shields!", sq8, 'homeS','homeR'), 55000
    )

    setTimeout(
        go("The shields have De-Activated the beam. Fire Cannon!", sqCenter, 'shot', 'beam'), 60000
    )

    setTimeout(
        go(" ", sq2, 'fade','ufo1m'),62000
    )

    setTimeout(
        go("Target Destroyed", sqCenter, 'blank','shot'), 63000
    )

    setTimeout(
        go("Great, now retaliation", sq3, 'ufo3m','ufo3'), 64000
    )

    setTimeout(
        go("Laser Incoming!", sq6, 'laserBeam'), 65000
    )


    setTimeout(
        go("Shields will only last for 10 more seconds", sq8, 'homeS','home'), 66000
    )

    setTimeout(
        shieldDown(), 66000
    )

    setTimeout(
        go(" ", sq8, 'blank','homeS'), 68490
    )

    setTimeout(
        go("Shoot! Shoot! Shoot!", sq6, 'shot3','laserBeam'), 68500
    )

    // interval - switch between shot and shot3

    setTimeout(
        go("", sq6, 'blank','shot3'), 68900
    )
    setTimeout(
        go("We got him, boys! One more to go!", sq3, 'fade','ufo3m'), 69000
    )

    setTimeout(
        go("Where did he go?", sq1, 'fade','ufo2'), 70000
    )

    setTimeout(
        go("well I guess we survived!", sq9, 'home'), 72000
    )

    setTimeout(
        go("", sq9, 'blank','home'), 74900
    )

    setTimeout(
        go("Let's call it a day and go back to Earth", sqCenter, 'home'), 75000
    )

    setTimeout(
         go("Bye", sqCenter, 'fade'), 80000
    )

    runOneTimeTasks()
}



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
function shieldDown() {
    
    currentTime--
    timer.textContent = currentTime
    
    // end game
    if(currentTime === 0) {
        // reset timer
        clearInterval(countDownTimerID)
        // stop timer
        clearInterval(timerID)
        go('Shields Down! Move! Move! Move!', sq8,'blank','homeS')
        go('Shields Down! Move! Move! Move!', sq9,'home','homeS')
    }
}

// every second
// countDownTimerID(start,1000)

function countDownTimerID(func, speed) {
    setInterval(func, speed)
}

// fade out
// source: Bing Copilot AI


function fadeOut() {
      fade.style.opacity = 0; // Set opacity to 0 to fade out
    }

// i simply reversed fade out and it worked!
function fadeIn() {
      fade.style.opacity = 1; // Set opacity to 0 to fade out
    }