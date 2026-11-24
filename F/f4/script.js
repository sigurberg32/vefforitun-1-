const games = ["leikur1","leikur2","leikur3","leikur4","leikur5"]
const list = document.getElementById("gameList");

for (const game of games){
const item = document.createElement("li");
item.textContent = game;
list .appendChild(item);
}