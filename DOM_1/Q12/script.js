const list = document.querySelector("#List");
const button = document.querySelector("#Btn");

button.addEventListener("click", () => {
    const newList = document.createElement("li");

    const count = list.children.length + 1;
    newList.textContent = `Item ${count}`;

    if (count % 2 === 1) {
        newList.style.fontWeight = "bold";
        newList.style.color = "blue";
    } else {
        newList.style.fontStyle = "italic";
        newList.style.color = "red";
    }

    list.appendChild(newList);
});
