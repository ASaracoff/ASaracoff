// source: https://www.youtube.com/watch?v=YrvmmJzCAgU
// start: 5:45 (6:14 end html and css)
//  stop: 6:37 (but the api link doesn't work T.T need to look up diff vid or link to find solution)

// 2nd source: https://www.youtube.com/watch?v=8iVDdYpdYjQ
// start: 6:42
//  stop: 6:51 - the api doesn't work T.t
            //  https://api.quotable.io/random = bad -.-
            //   https://thequoteshub.com/api/random = good ^.^


const quote = document.querySelector(".quote")
const author = document.querySelector(".name")
const quoteBTN = document.querySelector(".quote-btn")

// quotable api url
// source: https://github.com/lukePeavey/quotable


// function generateQuote() {
//     fetch('https://thequoteshub.com/api/random')
//         .then(response=> {
//             if(response.ok) {
//                 throw new Error('Network response not ok...')
//             }
//             return response.json()
//         })
//         .then(data=> {
//             quote.textContent = `${data.content}`
//             author.textContent = `${data.author}`
//         })
//         .catch(err=> {
//             quote.textContent = "Failed to load quote"
//             author.textContent = " "
//         })
// }

// first video code:
const quoteAPIUrl  = "https://thequoteshub.com/api/random"

// function to get ranom quotes
const getQuote = async (apiUrl) => {
    // set quoteBTN text to 'loading quote...' while getting response
    quoteBTN.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> "Loading Quote..."`

    // fetch data - didn't work for me, not sure why
    const result = await fetch(apiUrl)

    // getting data into json format
    const data = await result.json()


    // set new quote
    quote.innerText = data.text

    // set new auhtor
    author.innerText = data.author

    // setting quote btn to default value
    quoteBTN.innerHTML = "Get New Quote"
    console.log(data) 
}

// getQuote()