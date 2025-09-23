// get form 
const form = document.querySelector('#logoForm')
const brandInput = document.querySelector('input[name="brandName"]')
const colorInput = document.querySelector('input[name="color"]')
const sizeInput = document.querySelector('input[name="size"]')
const results = document.querySelector('#results')

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const newLogo = makeLogo(brandInput.value, colorInput.value, sizeInput.value);
    results.appendChild(newLogo)

    // to clear results ex
    // brandInput.value = '',
})

function makeLogo(text,color,size){
    const logo = document.createElement('h2')
    logo.innerText = text;
    logo.style.color = color;
    logo.style.fontSize = `${size}px`;
    return logo;
}
