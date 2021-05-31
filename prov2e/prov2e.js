const rutaPromenad = document.querySelector(".promenad")
const rutaJogging = document.querySelector(".jogging")
const rutaStyrka = document.querySelector(".styrka")
const rutaTrappor = document.querySelector(".trappor")
const pLista1 = document.querySelector(".lista1")
const pLista2 = document.querySelector(".lista2")
const pTyngsta = document.querySelector(".tyngsta")
const knapp = document.querySelector("button")

var pass = 30;

knapp.addEventListener("click", function () {
  
    var promenad = Number (rutaPromenad.value);
    var styrka = Number (rutaStyrka.value);
    var trappor = Number (rutaTrappor.value);
    var jogging = Number (rutaJogging.value);
    
    pLista1.textContent = (promenad + jogging + styrka + trappor) * pass;
    pLista2.textContent = promenad * 107 + jogging * 240 + styrka * 350 + trappor * 540;
})