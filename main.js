let button1 = document.querySelector('.one')
let button2 = document.querySelector('.two')
let button3 = document.querySelector('.three')
let ball = document.querySelector('.ball')
let innerContainer = document.querySelector('.inner-container')

button1.addEventListener('click', oneClickHandler)
button2.addEventListener('click', twoClickHandler)
button3.addEventListener('click', threeClickHandler)

function oneClickHandler(e){
    innerContainer.style.left = '0'
    ball.style.left = '5px'
}
function twoClickHandler(e){
    innerContainer.style.left = '-450px'
    ball.style.left = '65px'
}
function threeClickHandler(e){
    innerContainer.style.left = '-900px'
    ball.style.left = '125px'
}