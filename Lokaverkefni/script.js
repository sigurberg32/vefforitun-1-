const button = document.getElementById("takki");
const allt = document.getElementById("allt");
const header1 = document.getElementById("header1")
const kassi1 = document.getElementById("kassi1")
const kassi2 = document.getElementById("kassi2")


function changeTheme() {
    allt.classList.toggle("lightmode");
    header1.classList.toggle("lightmode2");
    kassi1.classList.toggle("lightmode2");
    kassi2.classList.toggle("lightmode2");
}

button.addEventListener("click", changeTheme);