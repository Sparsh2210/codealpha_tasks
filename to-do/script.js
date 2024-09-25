//ADDING FUNCIONALITY TO INPUT BOX.

const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

//ADDING, REMOVING, EDITING TASK.

function addTask(){
 if(inputBox.value === ''){
    alert("You must write any task!");
 }
 else{
    let li= document.createElement("li");
    li.innerHTML=inputBox.value;
    listContainer.appendChild(li);

    let editButton = document.createElement("button");
    editButton.classList.add("edit-btn");
    li.appendChild(editButton);

    let span= document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);

 }
 inputBox.value="";
 saveData();
}

//ADDING RESPONSIVE BUTTONS FOR ALL FUNCTIONS.

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
       e.target.parentElement.remove();
       saveData(); 
    }
    else if (e.target.classList.contains("edit-btn")) {
        editTask(e.target.parentElement);
    }
},false);

// ADDING PROMPT TO REPLACE OLD TASK FROM NEW.

function editTask(taskItem){
    let newValue = prompt("Edit your task:", taskItem.childNodes[0].nodeValue);
    if (newValue !== null && newValue.trim() !== "") {
        taskItem.childNodes[0].nodeValue = newValue;
        saveData();
    }
}

//TO SAVE THE DATA EVEN AFTER REFRESHING.

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

//TO SHOW THE SAVED DATA. 

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();