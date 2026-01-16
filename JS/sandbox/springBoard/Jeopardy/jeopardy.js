
document.getElementById("startGame").addEventListener("click", () => {
    document.querySelector(".gameboard").innerHTML = ""

    const ids = getRandomIds(5)
    ids.forEach(id => getQuestions(id))
})


const ids = [2,3,4,6,8]

function getRandomIds(count = 5) {
    const copy = [...ids]
    const result = []

    for (let i = 0; i<count && copy.length > 0; i++) {
        const index = Math.floor(Math.random()*copy.length)
        result.push(copy.splice(index,1)[0])
    }
    return result
}

async function getQuestions(id){
    
    const res = await fetch((`https://rithm-jeopardy.herokuapp.com/api/category?
id=${id}`))
    const data = await res.json();
    const newArray = data.clues;
    console.log("newArray",newArray)

    let items = `<div class="cat">
        <p>${data.title}</p>
    </div>`
    for(let i = 0; i < newArray.length; i++) {
        items += `
        <div class="maincontainer">
        <div class="thecard">
            <div class="thefront">
                <p>$${i+1}00</p>
            </div>
            <div class="theback">
                <p>${newArray[i].question}</p>
                <button class="absBtn" onclick="toggleAnswer(this, event)">Ans</button>
                <div class="ans"><p>${newArray[i].answer}</p></div>
            </div>
        </div>
        </div>` 
    }
    document.querySelector(".gameboard").innerHTML += items
}

function toggleAnswer(btn, e) {
    e.stopPropagation()
    const ans = btn.parentElement.querySelector(".ans")
    ans.style.display = ans.style.display === "none" ? "block" : "none"
}


// flip on click

const card = document.querySelector('.thecards')

document.addEventListener("click", e => {
    if (e.target.closest(".thecard")) {
        e.target.closest(".thecard").classList.toggle("is-flipped")
    }
})
