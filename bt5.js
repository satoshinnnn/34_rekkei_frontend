let btn = document.querySelector(".btn");
let nameInput = document.querySelector(".nameInput");
let positionInput = document.querySelector(".positionInput");
let tbody = document.querySelector(".tbody")
let employees = []; 
localStorage.setItem("employees", JSON.stringify(employees));
btn.addEventListener("click", function () {
    tbody.innerHTML ="";
    let name = nameInput.value.trim();
    let position = positionInput.value.trim();
    if (name === "" || position === "") {
        alert("Chưa nhập đủ dữ liệu")
    } else {
        let employee = {name, position};
        employees.push(employee);
        localStorage.setItem("employees", JSON.stringify(employees));
        employees.forEach( (employee,index) => {
            tbody.innerHTML += `
              <tr>
                <td>${index+1}</td>
                <td>${employee.name}</td>
                <td>${employee.position}</td>
            </tr>`;
        });

    }
});
