function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  // Toggle completion
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "X";
  delBtn.className = "delete-btn";
  delBtn.onclick = () => li.remove();

  li.appendChild(delBtn);

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}
