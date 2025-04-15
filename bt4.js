// Phải thực hiện được các tính năng Create-Read-Delete
// Dữ liệu phải được lưu vào Local Storage và không bị mất đi khi load lại trang

// thêm cv vào mảng 
// render ra màn hình 
// lưu mảng vào local storage 

let todos = [];

localStorage.setItem("todos", JSON.stringify(todos));

let input = document.querySelector(".input");
let themBtn = document.querySelector(".btn");
let ul = document.querySelector(".ul");

themBtn.addEventListener("click", function() {
    let task = input.value.trim();
    if(task=="") {
        alert("Chưa nhập nhiệm vụ");
    } else {
        todos.push(task);
        localStorage.setItem("todos", JSON.stringify(todos));
    input.value = "";
    render();
    } 
})
function render() {
    ul.innerHTML="";
    todos.forEach((todo, index) => {
        ul.innerHTML+= `
     <li class="li">${todo}<button onclick="deleteTask(${index})" class="delete-btn">Xóa</button></li>
    `;
    });          
};

function deleteTask(index) {
    todos.splice(index,1);
    localStorage.setItem("todos", JSON.stringify(todos));
    render();
   
}
