let counter = 0;


let display = document.querySelector(".display");



let inc = document.querySelector(".inc");
let dec = document.querySelector(".dec");
let reset = document.querySelector(".reset");


inc.addEventListener("click", increment);
dec.addEventListener("click", decrement);
reset.addEventListener("click", resetbutton);




function increment() {
    counter++;
    displayAnswer(counter);
}

function decrement() {
    counter--;
    displayAnswer(counter);
}

function resetbutton() {
    counter = 0;
    displayAnswer(counter);
}

function displayAnswer(val) {
    if(val < 0) {
        counter = 0;
    }
    display.textContent = counter;
}