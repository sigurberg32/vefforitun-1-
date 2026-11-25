const button = document.getElementById("takki");
const allt = document.getElementById("allt");
const kassi11 = document.getElementById("kassi11")
const kassi22 = document.getElementById("kassi22")
const kassi33 = document.getElementById("kassi33")
const aText = document.getElementById("aText")

function changeTheme() {
    button.classList.toggle("lightmodeTakki");  
    allt.classList.toggle("lightmode");
    kassi11.classList.toggle("lightmode2");
    kassi22.classList.toggle("lightmode2");
    kassi33.classList.toggle("lightmode2");
    aText.classList.toggle("lightmode2");
}

button.addEventListener("click", changeTheme);