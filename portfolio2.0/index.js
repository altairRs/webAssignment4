// buttons
const heroSection = document.querySelector('.hero');

function changeBg() {

    alert("Magic button clicked!");
    heroSection.style.background = 'linear-gradient(300deg, #ff6347, #ffcc00, #66ccff)';
}

// to do list

function addTask() {
    taskInput = document.getElementById('taskInput');
    taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("You must type something");
        return;
    }

    taskList = document.getElementById('taskList');
    newTask = document.createElement('li');
    
    newTask.innerHTML = `${taskText} <button onclick="deleteTask(this)">Delete</button>`;
    newTask.onclick = function() {
        newTask.classList.toggle('completed');
    };

    taskList.appendChild(newTask);
    taskInput.value = ""; 
}

function deleteTask(button) {
    const taskList = document.getElementById('taskList');
    taskList.removeChild(button.parentElement);
}

// Number sorting tool



function sortASC() {
    let arr = document.getElementById("inputArray").value.split(',').map(Number);
    asc=arr.sort();

    document.getElementById("SoResult").innerHTML = asc;
}

function sortDESC() {
    let arr = document.getElementById("inputArray").value.split(',').map(Number);
    desc=arr.reverse();

    document.getElementById("SoResult").innerHTML = desc;
}

// Calculator

function plus() {
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    
    let result = num1 + num2;
    document.getElementById("CaResult").innerHTML = result;
}

function minus() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    
    result = num1 - num2;

    document.getElementById("CaResult").innerHTML = result;
}

function multiply() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    
    result = num1 * num2;

    document.getElementById("CaResult").innerHTML = result;
}

function divide() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    
    result = num1 / num2;

    document.getElementById("CaResult").innerHTML = result;
}

// Tax Calculator

function tax() {
    let price = document.getElementById("price").value;

    if (price>10000) {
        tax = price * 0.25;
    }
    else if (price>5000) {
        tax = price * 0.2;
    }
    else {
        tax = price * 0.15;
    }

    document.getElementById("TResult").innerHTML = tax;
}