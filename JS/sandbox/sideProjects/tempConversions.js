// wont change - todays forecast
const kelvin = 284
// celsius is 273 less than kelvin
const celsius = kelvin - 273

// calculate fahrenheit - round down
const fahrenheit = Math.floor(celsius * (9/5) +32)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.
`)

const newton = Math.floor(celsius * (33/100))
console.log(`The temperature is ${newton} degrees Fahrenheit.
`)