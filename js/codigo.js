let count = 0;
let gatos = [];

const saveBtn = document.getElementById("save-btn");
const incrementBtn = document.getElementById("increment-btn");
const saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
const welcomeEl = document.getElementById("welcome-el");
const gatosFromLocalStorage = localStorage.getItem("gatos");

let greeting = "¡Hola, michilover! Contá cuántos michis ves a lo largo de tu día";

welcomeEl.innerText = greeting + " 😸";

incrementBtn.addEventListener("click", function(){
    count +=1;
    countEl.innerText = count;
    console.log(gatos);
})

saveBtn.addEventListener("click", function(){
    gatos.push(count);
    localStorage.setItem("gatos", JSON.stringify(gatos));
    saveEl.innerText += count + " - ";
    count = 0;
    countEl.innerText = 0;
})

