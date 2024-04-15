
let inputBtn = document.getElementById("btn");
let inputContainer = document.getElementById("input-container");
let addBtn = document.getElementById("add-btn");
let input = document.getElementById("input");
let list = document.getElementById("list");


inputBtn.addEventListener('click',inputAppear);

function inputAppear(){
    inputContainer.style.display = "block"
}

addBtn.addEventListener('click',addTask);

function addTask(){

    let inputValue = input.value

    let newTask = document.createElement("li")
    let icon = document.createElement("i");
    newTask.innerHTML = `<i class="fa-regular fa-square"></i>${inputValue}`
    newTask.addEventListener('click',click)
    list.appendChild(newTask)

   function click(){
    if(newTask.firstElementChild.className === "fa-regular fa-square"){
        newTask.firstElementChild.className = "fa-solid fa-square-check" 
        newTask.style.textDecoration = "line-through"
    }
    else{
        newTask.firstElementChild.className = "fa-regular fa-square"
        newTask.style.textDecoration = "none" 
    }
} 

   input.value = ""

   inputContainer.style.display = "none"
 
}



