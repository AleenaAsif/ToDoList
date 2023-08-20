const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

inputBox.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    var inputBox = document.getElementById("input-box");
    var listContainer = document.getElementById("list-container");

    if (inputBox.value === '') {
        alert("Please enter something!");
    } else {
        var li = document.createElement("li");
        li.textContent = inputBox.value;
        listContainer.appendChild(li);
        
        var span = document.createElement("span");
        span.textContent = "\u00d7";
        li.appendChild(span);

        // Adjust the height of the TODO-app box based on the number of tasks
        var todoApp = document.querySelector(".TODO-app");
        var taskCount = listContainer.children.length;
        var newHeight = 200 + taskCount * 40; // Adjust the multiplier as needed
        
        todoApp.style.minHeight = newHeight + "px";
    }

    inputBox.value = '';
    saveData();
}


listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();

    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();