// Anagram Checker
function areAnagrams(str1, str2) {
    return [...str1].sort().join("") === [...str2].sort().join("");
}

console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world")); // false

// Employee Management System
class Employee {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    displayDetails() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Salary: ${this.salary}`);
    }
}

let employees = [
    new Employee(1, "John Doe", 50000),
    new Employee(2, "Jane Doe", 60000),
    new Employee(3, "Bob Smith", 70000)
];

employees.forEach(employee => employee.displayDetails());

// To-Do List
let todoList = [];

document.getElementById("add-todo-btn").addEventListener("click", addTodo);

function addTodo() {
    let todoInput = document.getElementById("todo-input");
    let todoText = todoInput.value.trim();
    if (todoText) {
        todoList.push(todoText);
        renderTodoList();
        todoInput.value = "";
    }
}

function renderTodoList() {
    let todoListUl = document.getElementById("todo-list-ul");
    todoListUl.innerHTML = "";
    todoList.forEach((todo, index) => {
        let todoItem = document.createElement("li");
        todoItem.classList.add("todo-item");
        todoItem.textContent = todo;
        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", () => removeTodo(index));
        todoItem.appendChild(removeBtn);
        todoListUl.appendChild(todoItem);
    });
}

function removeTodo(index) {
    todoList.splice(index, 1);
    renderTodoList();
}

// Image Slider
let imageUrls = [
    "https://via.placeholder.com/800x500",
    "https://via.placeholder.com/800x501",
    "https://via.placeholder.com/800x502"
];
let currentImageIndex = 0;

document.getElementById("image-slide").src = imageUrls[currentImageIndex];

document.getElementById("prev-btn").addEventListener("click", prevImage);
document.getElementById("next-btn").addEventListener("click", nextImage);

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + imageUrls.length) % imageUrls.length;
    document.getElementById("image-slide").src = imageUrls[currentImageIndex];
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
    document.getElementById("image-slide").src = imageUrls[currentImageIndex];
}
