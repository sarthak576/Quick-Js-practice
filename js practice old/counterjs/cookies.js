const button = document.getElementById('btn');

const Counts = document.getElementById('counter')
let CookieCounter = 0 ;

button.addEventListener("click", increase)

function  increase(){
    CookieCounter++;
    counter.innerText = CookieCounter;
}