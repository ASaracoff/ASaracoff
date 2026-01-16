// source: https://www.youtube.com/watch?v=n4dtwWgRueI
// start: 9:00 - 9:55  55mim
//  stop: 

// api key af1a71c74367f881238fc81aca5609d8
const api = {
    key: "af1a71c74367f881238fc81aca5609d8",
    baseurl: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery)

function setQuery(evt) {
    // 13 = enter key on keyboard
    if (evt.keyCode == 13) {
        getResults(searchbox.value)
        console.log(searchbox.value)
    }
}

function getResults(query) {
    fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        }).then(displayResults)
}

function displayResults(weather) {
    console.log(weather)
}