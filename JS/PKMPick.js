function changeScr() {
    document.getElementById("pkm1").src="Images/shiny/"+pkm[(Math.floor(Math.random() * pkm.length))]+".png";
    document.getElementById("pkm2").src="Images/shiny/"+pkm[(Math.floor(Math.random() * pkm.length))]+".png";
    document.getElementById("pkm3").src="Images/shiny/"+pkm[(Math.floor(Math.random() * pkm.length))]+".png";
    document.getElementById("pkm4").src="Images/shiny/"+pkm[(Math.floor(Math.random() * pkm.length))]+".png";
    document.getElementById("pkm5").src="Images/shiny/"+pkm[(Math.floor(Math.random() * pkm.length))]+".png";
}

// window.addEventListener("load", (event) => {
//     changeScr();
// });