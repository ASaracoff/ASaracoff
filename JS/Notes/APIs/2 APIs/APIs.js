// APIs that work:
    // https://dog.ceo/api/breeds/image/random

    // https://reqres.in
        // https://reqres.in/api/users
        // need api key
            // not really sure how to insert into code along with the teach
            // curl -X GET "https://reqres.in/api/users" 
            // -H "Content-Type: application/json" 
            // -H "x-api-key: {{reqres_40adedd210ee40f6bb43ce93d66ddbd0}}"
        // free sign up



// APIs
// Goals
    // define api
    // compare contrast diff kinds of apis
    // undstand the limitations
    // use terminal and GUI clients for making HTTP requests

// Application Prograamming Interface
    // interface for code to interact with OTHER code/library/server/etc
    // 3rd party APIs: company will provide access to their data (some NOT free)
        // MOST require an acct and only some features for free:
        // like twitter - all tweets that mention 'ice cream'
        // Facebook = access to current user's profile pic ex
        // Weather API - weather pattern for denver etc
        // Reddit API - what is current top post?
        // GooglePlaces - gas station location
        // Yelp API - 10 restaurants in zip 94110

    // twilio - auto response
    // find the right API for what you want to do

// What is an API?
    // set of clearly defined methods of communication btwn various components
    // an API may be for a web-base system, OS, DB system, computer hardware, or software library

// AJAX  Axios
    // https://axios-http.com
    // simple promise based HTTP client for browser and node.js
    // provides simple to use library in a small package with a very extensible interface

// You don't have to use Axios for this
    // old clunky built-in tool: XMLHttpRequest
    // or newer still clunky 'fetch'
    // or lots of other libraries like jQuery
    // BUT.... axios for now! featureful and popular!
        // axios built ontop of (?) fetch

// Getting Axios
    // easily included using a CDN link:
        // <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        // <script src="mycode.js" defer></script>
        
    // download via gitHub or axios getting started pg
    // insert in html page before the link to your own JS code

// Make a Simple Request
    // axios.get(url)
    // Make a GET request to that URL
    // const request = axios.get('https://swapi.dev/api/planets/')
        // PROBLEM!  i have been blocked, "blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource."
    // let card = axios.get("/api/card");
    // console.log(card)

// What is a promise?
    // more detail to come when we get to Node
    // all we need to know for now: 
        // a promise is like a placeholder for a future value
        // we need to WAIT for a value or a potential error...

    // JS is handing the browser the requests until we get a value/error
    // we WANT to wait for the promise to have that value before proceeding
    // but we don't knowwhen the promis will receive its value

// Asynchronicity
    // AJAX requests are asynchronous
    // async -> declare a function to wait for the api
    // await -> wait until we get something back
    async function getData() {
        const request = await axios.get('https://swapi.dev/api/planets/')
        console.log(response)
        for(let planet of response.data.results) {
            console.log(planet.name)
        }
    }

    // works! 
        // const res = await axios.get('https://dog.ceo/api/breeds/image/random')
        

    async function getRandomDog() {
    const res = await axios.get('https://dog.ceo/api/breeds/image/random')
    console.log(res.data)   
    const img = document.querySelector('#dog')
    img.src = res.data.message
    }

    getRandomDog()

    async function getDogByBreed(breed) {
        try{
            const url = (`https://dog.ceo/api/breed/${breed}/images/random`)
        const res = await axios.get(url)
        const img = document.querySelector('#dog')
        img.src = res.data.message
        } catch(e) {
            getRandomDog()
            alert("BREED NOT FOUND: heres a random dog! :)")
        }
    }
    
// what to do when throwing errors?
    // try and catch
    try{
        // run your code
    }catch{
        // run this if there's a problem
    }

const form = document.querySelector('#searchform')
const input = document.querySelector('#search')
form.addEventListener("submit", function(e) {
    e.preventDefault()
    console.log("submit")
    console.log(input.value)
    getDogByBreed(input.value)
    input.value = "" //reset value
})


// Axios API

// .get
    // axios.get(url, [config])
    // config - optional object many Axios methods use 
    // it holds specific configurations for what you need

// .get w Query Params
    // to request for /resource?a=1&b=2 :
        // axios.get("/resource?a=1&b=2") OR
        // axios.get("/resource", {params: {a:1, b:2}})

    // exists but pops up as a 'roal togel' slot game O.o
    // same block - CORS policy no 'access-control-allow-origin'
    // http://api.icndb.com/jokes/random?firstName=John&amp;lastName=Doe

    async function getJoke(first,last) {
        let res = await axios.get(`http://api.icndb.com/jokes/random?firstName=${first}&amp;lastName=${last}`)
        console.log(res/data.value.joke)
    }

    async function getJokeShort(firstName,lastName) {
        let res = await axios.get(`http://api.icndb.com/jokes/random`, { params: {firstName, lastName}})
        console.log(res/data.value.joke)
    }

// .post
    // axios.post(url, [data], [config])
    // similar to axios.get BUT uses a POST request

    // https://reqres.in
    // 'https://reqres.in/api/users'
    async function getUsers() {
        const res = await axios.get('https://reqres.in/api/users')
        console.log(res)
    }

    async function createUser() {
        const res = await axios.pos('https://reqres.in/api/users', {username:'hi', email:'hi@gmail', age: '1'})
        console.log(res)
    }