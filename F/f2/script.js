const games = ["Mario Kart", "Minecraft", "Tetris", "F1 25"];
const output = document.getElementById("output");

let text = "";

for (const game of games) {
    text += game + " | ";
}

output.textContent = text;