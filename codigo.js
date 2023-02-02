let welcomeEl = document.getElementById("welcome-el");

let name = "Lucía";
let greeting = "¡Hola, " + name + "! Contá cuántos michis ves";

welcomeEl.innerText = greeting;

welcomeEl.innerText += " 😸";

let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count +=1;
    countEl.innerText = count;
}

function save() {
    let guardarCuenta = count += " -";
    saveEl.innerText += guardarCuenta;
    console.log(count);
}
