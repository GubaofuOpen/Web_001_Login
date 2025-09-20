document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if(username === "" || password === ""){
        document.getElementById('error-message').textContent = "用户名和密码不能为空";
        return false;
    } else {
        alert("登录成功");
    }
});