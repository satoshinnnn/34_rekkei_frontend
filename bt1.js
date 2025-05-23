// Kiểm tra sự hợp lệ thông tin người dùng nhập vào: Email không được bỏ trống, mật khẩu không được bỏ trống, xác nhận mật khẩu trùng khớp
// Kiểm tra sự tồn tại của email đăng ký
// Lưu tài khoản vừa tạo thành công vào localstorage.
let btn = document.querySelector(".btn");
let inputEmail = document.querySelector(".inputEmail");
let inputPassword = document.querySelector(".inputPassword");
let inputConfirm = document.querySelector(".inputConfirm");

let users = JSON.parse(localStorage.getItem("users")) || [];

btn.addEventListener("click", function() {
    let email = inputEmail.value.trim();
    let password = inputPassword.value.trim();
    let confirmPassword = inputConfirm.value.trim();
    if (isEmpty(email,password,confirmPassword)) { 
        alert("Nhập thiếu thông tin, vui lòng nhập lại")
    } else {
        if (!isMatch(password, confirmPassword)) {
            alert("Password không trùng với confirm password, vui lòng nhập lại")
        } else {
            const newUser = {
                email,
                password
            };            
            let isExisted = users.some(user => user.email === newUser.email);
            if (!isExisted) {
                users.push(newUser);
                localStorage.setItem("users", JSON.stringify(users));
                alert("Đăng kí thành công");
            } else {
                alert("Email đã được đăng kí");
            }
        }
    }
});

function isEmpty(email, password, confirmPassword) {
    return !email || !password || !confirmPassword;
}

function isMatch(password, confirmPassword) {
    if (password!==confirmPassword) {
        return false
    } else {
        return true
    }
}

