const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");

addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Task cannot be empty!");
        return;
    }

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = taskText;

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
    taskInput.value = "";
});

taskList.addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON") return;

    const li = e.target.parentElement;

    if (e.target.textContent === "Delete") {
        li.remove();
    }

    if (e.target.textContent === "Complete") {
        li.firstChild.classList.toggle("completed");
    }
});
