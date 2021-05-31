const rutaTal1 = document.querySelector(".tal1");
const rutaTal2 = document.querySelector(".tal2");
const knappPlus = document.querySelector(".plus");
const knappMinus = document.querySelector(".minus");
const knappGånger = document.querySelector(".gånger");
const knappDividera = document.querySelector(".dividera");
const knappSlumpa = document.querySelector(".slumpa");
const knappRita = document.querySelector(".rita");
const rutaSvar = document.querySelector(".svar");


knappPlus.addEventListener("click", function () {
  //console.log("Klickat");  

  var tal1 = rutaTal1.value;
  console.log(tal1);

  var tal2 = rutaTal2.value;
  console.log(tal2);

  var svar = rutaSvar.value;
  console.log(svar);

  var svar = tal1 + " " + tal2;
  console.log(svar);

  rutaSvar.value = svar;
})