// source: https://www.youtube.com/watch?v=MvgiPlVF0Tg&list=PLtMugc7g4GaqAVDZwQ_t1H6500ZGJzOgW&index=19

// only thing changed is the [] index #
document.getElementsByClassName("article")[0].addEventListener("click",function(){
    window.open("MemeGenerator/memeGenerator.html") //where do you want to send them to?
}
)

document.getElementsByClassName("article")[1].addEventListener("click",function(){
    window.open("DOM/DOM.html") 
}
)
document.getElementsByClassName("article")[2].addEventListener("click",function(){
    window.open("spaceMissionInvasion/spaceMissionInvasion.html")
}
)