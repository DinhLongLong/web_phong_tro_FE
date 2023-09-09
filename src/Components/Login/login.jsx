import React from "react";
import "./login.css"

const Login = () => {

    return (
        <div className="cover">
            <h1>Đăng nhập</h1>
            <input type="text" placeholder="Tên tài khoản" />
            <input type="password" placeholder="Mật khẩu" />
            <div className="login-btn">Đăng Nhập</div>
            <p> Hoặc chưa có tài khoản </p>
            <div className="register-btn"><a href="/register">Tạo tài khoản</a></div>
            
        </div>
    )
}

export default Login