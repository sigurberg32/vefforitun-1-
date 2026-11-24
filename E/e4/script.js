const priceInput = document.getElementById("priceInput");
const countInput = document.getElementById("countInput");

priceform.addEventListener("submit", function (event) {
    event.preventDefault();

    const price = Number(priceInput.value);
    const count = Number(countInput.value);

    output.textContent = price * count + ".kr";
});