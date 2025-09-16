// source: https://www.youtube.com/watch?v=R-7eQIHRszQ
//  8:40 am start 
//  9:27 am paused - maybe stop
//  approx 1 hour - stopped because video is too old, and i don't have time to try to update the API with my limited knowledge

// how do we get quotes? API
// the original link didn't work, luckily the video had an ai ask bot in the description and they gave me a new api generator. Then that link didn't work smoothly and the ai recommended using a proxy(?) - long journey short it works now!
const RANDOM_QUOTE_API_URL = 'https://api.allorigins.win/get?url=https://zenquotes.io/api/random'

// get quoteDisplay
const quoteDisplayElement = document.getElementById('quoteDisplay')

function getRandomQuote() {
    fetch(RANDOM_QUOTE_API_URL)
        // returns a promise - convert to JSON
        .then(response => response.json())
        // get the data inside the quote.io
        .then(data => data.content)
}

async function renderNewQuote() {
    const quote = await getRandomQuote()
    // console.log(quote)
    quoteDisplayElement.innerText = quote
}

renderNewQuote()