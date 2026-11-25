const button = document.getElementById("takki");
const allt = document.getElementById("allt");
const header1 = document.getElementById("header1")
const kassi1 = document.getElementById("kassi1")
const kassi2 = document.getElementById("kassi2")
const kassi3 = document.getElementById("kassi3")
const kassi4 = document.getElementById("kassi4")
const aText = document.getElementById("aText")


function changeTheme() {
    button.classList.toggle("lightmodeTakki");  
    allt.classList.toggle("lightmode");
    header1.classList.toggle("lightmode2");
    kassi1.classList.toggle("lightmode2");
    kassi2.classList.toggle("lightmode2");
    kassi4.classList.toggle("lightmode2");
    kassi3.classList.toggle("lightmode2");
    aText.classList.toggle("lightmode2");
} 

button.addEventListener("click", changeTheme);