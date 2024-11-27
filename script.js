const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something ! ");
    }
    else{
        let li = document.createElement("li");//display the list in click the ADD
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);//display the span
    }

    //input field clear after enter some task
    inputBox.value = "";
    saveData();
}

//click the container add all the task
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


//don't disapper the add task in refresh browser
//save the content in the browser
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

//data save the open programme again
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

//call the function
showTask()