const rutaVara1 = document.querySelector(".antal")
const rutaVara2 = document.querySelector(".antal2")
const rutaFrakt = document.querySelector(".frakt")
const rutaRabatt = document.querySelector(".rabatt")
const rutaTotal = document.querySelector(".total")
const knappTotal = document.querySelector("total")
const knappMinus1 = document.querySelector("minus1")
const knappPlus1 = document.querySelector("plus1")
const rutaSumma1 = document.querySelector(".summa1")
const rutaSumma1 = document.querySelector(".summa1")
const rutaAntal1 = document.querySelector(".antal1")
const rutaAntal2 = document.querySelector(".antal2")
const knappMinus2 = document.querySelector("minus2")
const knappPlus2 = document.querySelector("plus2")


knappTotal.addEventListener("click", function () {
    console.log("du har klickat");

    var vara1 = Number(rutaVara1.value) * 39;
    var vara2 = Number(rutaVara2.value) * 102;
    var frakt = Number(rutaFrakt.value);

    if (rutaRabatt.value = "5599" == -29);

    rutaTotal.value = vara1 + vara2 + frakt;
})
knappMinus1.addEventListener("click", function () {
    knappMinus1.value;
})
knappPlus1.addEventListener("click", function () {
    knappPlus1.value;
})
knappMinus2.addEventListener("click", function () {
    knappMinus2.value;
})
knappPlus2.addEventListener("click", function () {
    knappPlus2.value;
})
beställning.textContent = " Du har beställt " + rutaVara1.value + "st Infekterad Lysande Stressboll och " + rutaVara2.value


