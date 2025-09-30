
const memeForm = document.querySelector('#meme-form')
const imgInput = document.querySelector('#img-input')
const topTextInput = document.querySelector('#topText-input')
const bottomTextInput = document.querySelector('#textBottom-input')
// button
const submit = document.querySelector('#submit')
//where to put the memes
const memeHolder = document.querySelector('#memeHolder')


// add button
memeForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const meme = document.createElement('div');
    
    // add background img
    meme.dataset.url = imgInput.value;
    let bkgdImg = meme.dataset.url;
    meme.style.backgroundImage = `url(${bkgdImg})` 
    meme.setAttribute("class", "meme");

    //toptext
    const topText = topTextInput.value;
    const h2 = document.createElement('h2');
    h2.setAttribute('class','topText')
    h2.setAttribute('class',' text-outline')
    h2.innerHTML = topText
    meme.appendChild(h2)

    // //bottomtext
    // let bottomText = bottomTextInput.value;
    // let h3 = document.createElement('h3');
    // h3.setAttribute('class','bottomText')
    // h3.setAttribute('class',' text-outline')
    // h3.innerHTML = topText
    // meme.appendChild(h3)
    
    memeHolder.appendChild(meme)
    
    // imgInput.value = ''
    // topTextInput.value = ''
    // bottomTextInput.value = ''
})


// <div class="topText" class="text-outline">ddd</div>
function addTopText(topText){
    let topDiv = document.createElement('div');
    topDiv.setAttribute('class','topText')
    topDiv.setAttribute('class',' text-outline')
    topDiv.innerHTML = topText
    meme.appendChild(topDiv)
}
 
// <div class="bottomText" class="text-outline">DDD</div>
function addBottomText(bottomText){
    const bottomDiv = document.createElement('div');
    bottomDiv.setAttribute('class','topText')
    bottomDiv.setAttribute('class',' text-outline')
    bottomDiv.innerHTML = bottomText
    meme.appendChild(bottomDiv)
}


// hover
// document.addEventListener('mouseover', function(e) {
//     if (e.target.classList.contains("meme")){
        
//     }
// })

// // mouse out
// document.addEventListener('mouseout', function(e) {
//     if (e.target.classList.contains("meme")){
//         const boxID = e.target.getAttribute('data-id')
//         e.target.textContent = `Box ${boxID} `
//     }
// })

// remove box
document.addEventListener('dblclick', function(e) {
    if (e.target.classList.contains("meme")){
        e.target.remove();
    }
})
