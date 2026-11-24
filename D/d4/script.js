const likebutton = document.getElementById("countButton")
const likes = document.getElementById("count")

let count = 0;

likebutton.addEventListener ("click", function () {
    count++;
    likes.textContent = count;
});