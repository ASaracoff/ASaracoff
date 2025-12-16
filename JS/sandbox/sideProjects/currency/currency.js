// source: https://www.youtube.com/watch?v=3BSA4zxbov8
// start:  9:57 am (js start 10:27am)
//  stop: 11:09
// total: 1 hr 6 min

// API Name: ExchangeRate-API
// API source: https://app.exchangerate-api.com/dashboard/confirmed
// api key: bdb291a5d2c3f6503d262b3b

const currentcyFirstEl = document.getElementById("currency-first")
const currentcySecondEl = document.getElementById("currency-second")
const worthFirstEl = document.getElementById("worth-first")
const worthSecondEL = document.getElementById("worth-second")
const exchangeRateEl = document.getElementById("exchange-rate");

function updateRate() {
    // console.log("called")
    // fetch dynamically
    fetch(`https://v6.exchangerate-api.com/v6/bdb291a5d2c3f6503d262b3b/latest/${currentcyFirstEl.value}`).then((res)=>res.json()).then((data)=> {
        // console.log(data)
        const rate = data.conversion_rates[currentcySecondEl.value]
        // console.log(rate)
        // dynamically change the exchange rate paragraph text
        exchangeRateEl.innerText = `1 ${currentcyFirstEl.value} = ${rate} ${currentcySecondEl.value} `

        // fill output field
        // multiply the user value by the exchange rate 
            // to.Fixed(how many intergers)
        worthSecondEL.value = (worthFirstEl.value * rate).toFixed(2)
    })
}

// everytime there is a change in the first dropdown menu
currentcyFirstEl.addEventListener("change",updateRate)

// everytime there is a change in the second dropdown menu
currentcySecondEl.addEventListener("change",updateRate)

// everytime there is a change in the user input field
worthFirstEl.addEventListener("input",updateRate)