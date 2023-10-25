// the differed elements
const inputText = document.querySelector("#inputText1");
const taskList = document.querySelector("#task_list");
const todoForm = document.querySelector("#todo_form");





// Adding a new task too the taskList 
function addTask(){
    // if input in work
    if(inputText.value){
        const newTask = document.createElement("li");
        const deleteButton = document.createElement("button");

        //burke racoon isteden for wastebasket for deleteButton
        deleteButton.textContent = "🦝"
        newTask.textContent = inputText.value;

        taskList.appendChild(newTask);
        newTask.appendChild(deleteButton);
        }
        else{
            // if  a task is not entered in 
            alert("OPS you forgot to entered a task");

        }
        saveData();
}

//fjerning av task frå taskList no den blir trykkt på
taskList.addEventListener("click",function(event) {
    event.target. tagName === "BUTTON" && event.target.parentElement.remove();
    saveData();
});

//forhindrer standard oppførsel for skjemainnsending og kaller addTask()
//standard innsendingsatferd oppdaterer siden, noe vi ikke vil ha
//det fører til feil
todoForm.addEventListener("submit", function(event){
    event.preventDefault();
    addTask();
});

//lagrer dataene til localStorage
//utløses av funksjonen legg til data

function saveData(){
    localStorage.setItem("taskList",taskList.innerHTML);
}

//laster dataene fra localStorage
function loadData(){
    taskList.innerHTML = localStorage.getItem("taskList");
    
}


// deleting my console.log() after use because my teacher told me too always delete it before posting it on github "🙊"