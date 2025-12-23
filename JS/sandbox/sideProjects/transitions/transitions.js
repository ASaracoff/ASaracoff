// source: https://www.youtube.com/watch?v=QGVXmoZWZuw
// https://github.com/TylerPottsDev/card-flip/blob/master/main.css
// start: 12:45 - 1:30 {work} 45 min
// start:  9:14 - 36min
//  stop:  9:50
// finished 1 hr 21 min

const card = document.querySelector('.card__inner')

card.addEventListener("click",function(e) {
    card.classList.toggle('is-flipped')
})