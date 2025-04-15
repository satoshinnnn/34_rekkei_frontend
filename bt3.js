let btn = document.querySelector(".btn");
let inputEmail = document.querySelector(".inputEmail");
let inputPassword = document.querySelector(".inputPassword");

let users = JSON.parse(localStorage.getItem("users")) || [];; // local storage 

btn.addEventListener("click", function(e) {
    // e.preventDefault(); // Ngăn reload form
    let email = inputEmail.value.trim();
    let password = inputPassword.value.trim();
    let loginUser = {
        email,
        password,
    }
    if (isEmpty(email,password)) { 
        alert("Nhập thiếu thông tin, vui lòng nhập lại")
    } else {     
            let isMatched = users.some(user => user.email === loginUser.email && user.password === loginUser.password);
            if(isMatched) {
                alert("Đăng nhập thành công")
            } else {
                alert("Email hoặc mật khẩu nhập sai")
            }
    };
    }
);

function isEmpty(email, password) {
    return !email || !password;
}

