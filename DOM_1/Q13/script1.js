const colorInput = document.querySelector("#colorInput");
const textInput = document.querySelector("#textInput");
const bgBtn = document.querySelector("#bgBtn");
const textBtn = document.querySelector("#textBtn");
const box = document.querySelector("#box");

function isValidColor(color) {
    const s = new Option().style;
    s.color = color;
    return s.color !== "";
}

bgBtn.addEventListener("click", () => {
    const color = colorInput.value.trim();

    if (!isValidColor(color)) {
        alert("Invalid color name!");
        return;
    }

    box.style.backgroundColor = color;
});

textBtn.addEventListener("click", () => {
    const text = textInput.value.trim();

    if (text === "") {
        alert("Please enter some text!");
        return;
    }

    box.textContent = text;
});
