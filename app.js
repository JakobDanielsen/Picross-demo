// console.log(document.querySelectorAll(".square"))

const CANVAS = document.querySelector(".canvas")
let squares = Array.from(document.querySelectorAll('.canvas .square'))

$(".square").click(e => {
    e.currentTarget.classList.toggle("filled")
    
})



