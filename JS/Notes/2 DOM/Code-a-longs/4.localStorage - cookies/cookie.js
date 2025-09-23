// cookie = a small txt file stored on you computer used to remember info about the user
    // saved in name=value pairs

// to see if cookies enabled
console.log(navigator.cookieEnabled);

// add a cookie
                    // what cookie, does it expire? 'expires' then when? 2030
                    // where to store - path 

// document.cookie can hold multiple cookies
// document.cookie = "firstName=SpongeBob; expires=Sun, 1 January 2030 12:00:00 UTC; path=/"
// document.cookie = "lastName=SquarePants; expires=Sun, 1 January 2030 12:00:00 UTC; path=/"

// // all cookies are called at once:
// console.log(document.cookie)


// setCookie("lName","asdfg",365);

// deleteCookie("firstName")
// deleteCookie("lastName")
// deleteCookie("email")

// console.log(document.cookie)

// setCookie("email", "adfgh@gmail.com",365);
// console.log("get")
// console.log(getCookie("email"));

// get text/input/btn info from html
const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitBtn = document.querySelector("#submitBtn");
const cookieBtn = document.querySelector("#cookieBtn");

// event istener to submitBtn
submitBtn.addEventListener("click", () => {
    setCookie("firstName", firstText.value, 365);
    setCookie("lastName", lastText.value, 365);
})

// event listener for cookies
submitBtn.addEventListener("click", () => {
    firstText.value = getCookie("firstName")
    lastText.value = getCookie("lastName")
})

// name - name/value pairs
// daysToLive - how many days to live
function setCookie(name, value, daysToLive){
    const date = new Date();
    // current time is milliseconds (1000) * hours/min/seconds/miliseconds
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000)
    let expires = "expirews =" +date.toUTCString();
    document.cookie = `${name} = ${value} ; ${expires} ; path=/`
}

// remove a cookie
function deleteCookie(name){
    setCookie(name,null,null);
}

// find a cookie
function getCookie(name){
    // gets all cookies
    const cDecoded = decodeURIComponent(document.cookie);

    // splits each cookie at ';' - saves cookie as an array
    const cArray = cDecoded.split(";");
    let result = null;
    // 
    cArray.forEach(element => {
        if(element.indexOf(name) === 0){
            result = element.substring(name.length + 1)
        }
    })
    return result;
}

/*
const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitBtn = document.querySelector("#submitBtn");
const cookieBtn = document.querySelector("#cookieBtn");

submitBtn.addEventListener("click", () => {
    setCookie("firstName", firstText.value, 365);
    setCookie("lastName", lastText.value, 365);
});
cookieBtn.addEventListener("click", () => {
    firstText.value = getCookie("firstName");
    lastText.value = getCookie("lastName");
});

function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() +  (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`
}
function deleteCookie(name){
    setCookie(name, null, null);
}
function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;
    
    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1)
        }
    })
    return result;
}

*/