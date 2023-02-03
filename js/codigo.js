let welcomeEl = document.getElementById("welcome-el");

let greeting = "¡Hola, michilover! Contá cuántos michis ves a lo largo de tu día";

welcomeEl.innerText = greeting;

welcomeEl.innerText += " 😸";

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

let count = 0;

function increment() {
    count +=1;
    countEl.innerText = count;
}

function save() {
    saveEl.innerText += count + " - ";
    count = 0;
    countEl.innerText = 0;
}
