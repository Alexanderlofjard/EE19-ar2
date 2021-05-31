const rutaPasta = document.querySelector(".pasta");
const rutaLaxfile = document.querySelector(".laxfile");
const rutaGrädde = document.querySelector(".grädde");
const rutaBuljong = document.querySelector(".buljong");
const knappBeställ = document.querySelector("button");
const rutaLista = document.querySelector(".lista");
const rutaSumma = document.querySelector(".summa");

knappBeställ.addEventListener("click", function () {
    console.log("Du har klickat");
 
    var pasta =  Number (rutaPasta.value);
    var laxfile =  Number (rutaLaxfile.value);
    var grädde =  Number (rutaGrädde.value);
    var buljong =  Number (rutaBuljong.value);
    var antalPasta = Number (pasta * 300);
    var antalLax = Number (laxfile * 400);
    var antalGrädde = Number (grädde * 2.5);
    var antalBuljong = Number (buljong * 5);

    rutaLista.textContent = (pasta + "st Pasta " + antalPasta + "g " + laxfile + "st Laxfile " + antalLax + "g " + grädde + "st Grädde " + antalGrädde + "dl " + buljong + "st Buljong " + antalBuljong + "g ");
    rutaSumma.textContent = pasta * 29 + laxfile * 99 + grädde * 15 + buljong * 15
})