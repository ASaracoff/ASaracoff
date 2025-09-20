
function toggleAllTodos() {
  const todos = document.querySelectorAll('li');

  for(let li of todos) {
    li.classList.toggle('completed');
  }
}

// pausing happy/sad shift
const h1 = document.querySelector('h1')

setInterval(function() {
  // change text - if txt currently says happy (big)
  // can't transition txt in css (?)
  if (h1.classList.contains('big')){
    h1.innerText = "SAD";
  }else{
    h1.innerText = "HAPPY";
  }
  
  // switch between big and small
  // hinges on only one class being in the code big OR small
  // if both are there it breaks the code
  h1.classList.toggle('big');
  h1.classList.toggle('small');
}, 1000)

// var to make new li's
const newTodo = document.createElement('li')
const secondTodo = document.createElement('li')
const thirdTodo = document.createElement('li')
const prependTodo = document.createElement('li')
const boldText = document.createElement('b')
const newImg = document.createElement('img')

// make element
newTodo

// add text
newTodo.textContent = "Give Chickens Treats"
thirdTodo.textContent = "Order More La Croix"
prependTodo.textContent = "I'm At The Start!"

// add image
newImg.setAttribute('src' , 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.E4IJcali_762Oo_vNhhbFgHaEK%3Fpid%3DApi&sp=1758383510Tb2399d61188cfee8870216185f5df541e97de10411b6d9d9f4faf943a48ca1ab')

// add a class list
newTodo.classList.add('todo')
secondTodo.classList.add('todo')
thirdTodo.classList.add('todo')
prependTodo.classList.add('todo')
newImg.classList.add('thumbnail')

// add to page - append
// get parent first
const ul = document.querySelector('ul')
ul.append(newTodo)

// add a 'bold' element
boldText.textContent = " DON'T FORGET TO LOCK THE COOP!"

// added boltText to a new li - li is NOT appended yet
secondTodo.append(boldText);

// can append multiple at once 
ul.append(secondTodo, thirdTodo)

// prepend - add to beginning rather than end
ul.prepend(prependTodo)



// add to body
const body = document.querySelector('body')
body.prepend(newImg)


// remove element - old way
// need to to call 2 elements: 
  // the element to remove
  // the parent element
const removeMe = document.querySelector('#remove-me')
ul.removeChild(removeMe)

// remove element - new way!
  // don't need to call the parent
const removeMe2 = document.querySelector('#remove-me2')
removeMe2.remove()

const h1Head = document.querySelector('#main-heading')
h1Head.remove()

// to remove multiple elements:
  // use a loop
  // set parent element as an empty string