import React from "react";
import "./register.css";

const Register = () => {
  return (
    <div className="cover">
      <h1>Đăng kí</h1>
      <input type="text" placeholder="Tên tài khoản" />
      <input type="password" placeholder="Mật khẩu" />

      <div className="register-btn">Đăng Kí</div>
      <p>Hoặc đã có tài khoản</p>
      <div className="login-btn">
        <a href="/login">Đăng nhập</a>
      </div>
    </div>
  );
};

export default Register;
