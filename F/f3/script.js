const fruits = ["Epli","Banani","appelsína","Pera"]
const list = document.getElementById("fruitlist");

for (const fruit of fruits){
const item = document.createElement("li");
item.textContent = fruit;
list .appendChild(item);
}