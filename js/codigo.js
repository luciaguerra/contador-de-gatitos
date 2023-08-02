let count = 0;
let gatos = [];
total = 0;

const saveBtn = document.getElementById("save-btn");
const incrementBtn = document.getElementById("increment-btn");
const saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
const welcomeEl = document.getElementById("welcome-el");

let greeting = "¡Hola, michilover! Contá cuántos michis ves a lo largo de tu día";

welcomeEl.innerText = greeting + " 😸";

incrementBtn.addEventListener("click", function(){
    count +=1;
    countEl.innerText = count;
})

saveBtn.addEventListener("click", function(){
    gatos.push(count);
    let total = gatos.reduce((a, b) => a + b, 0);
    console.log(gatos)
    console.log(total);
    saveEl.innerText = total;
    count = 0;
    countEl.innerText = 0;
})

