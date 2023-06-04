var taskCounter = "";
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var dateInput = document.getElementById("dateInput");
    var description=document.getElementById("description");
    var taskList = document.getElementById("taskList");
    
    if (taskInput.value === "") {
      alert("Please enter a task.");
      return;
    }
  else{

    var listItem = document.createElement("li");
    var taskText = document.createElement("hide");
    var dateText = document.createElement("hide");
    var descriptionText = document.createElement("p");
    var brelement=document.createElement("br");
    var toggleButton = document.createElement("button");
    var deleteButton = document.createElement("button");
    taskText.textContent = taskInput.value;
    toggleButton.textContent = "show less";
    toggleButton.addEventListener("click", function() {
        descriptionText.classList.toggle("hide");
        dateText.classList.toggle("hide");
        toggleButton.textContent = descriptionText.classList.contains("hide") ? "Show More" : "Show less";
      });
    
    dateText.textContent = dateInput.value;
    descriptionText.textContent = description.value;
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
    listItem.remove();
  });
    listItem.appendChild(document.createTextNode(taskCounter + "task:-\n"));
    listItem.appendChild(taskText);
    console.log("\n");
    listItem.appendChild(document.createTextNode("--Due date"));
    listItem.appendChild(dateText);
    console.log("\n");
    listItem.appendChild(document.createTextNode("Description\n"));
    listItem.appendChild(descriptionText);
    listItem.appendChild(toggleButton);
    listItem.appendChild(deleteButton);
  
    taskList.appendChild(listItem);
  
    taskInput.value = "";
    dateInput.value = "";
    description.value="";

    

  }
}
  