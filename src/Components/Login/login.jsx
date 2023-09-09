import React, { useContext, useState } from "react";
import cookie from "react-cookies";
import "./login.css";
import { MyUserContext } from "../../App.js";
import { authApi, authEndpoints } from "../../services";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, dispatch] = useContext(MyUserContext);

  const login = (evt) => {
    evt.preventDefault();

    const process = async () => {
      try {
        let res = await authApi().post(authEndpoints[`login`], {
          username: username,
          password: password,
        });
        cookie.save("token", res.data);
        let { data } = await authApi().get(authEndpoints[`current-user`]);
        cookie.save("user", data);

        dispatch({
          type: "login",
          payload: data,
        });
      } catch (ex) {
        console.error(ex);
      }
    };

    process();
  };

  return (
    <div className="cover">
      <h1>Đăng nhập</h1>
      <form onSubmit={login}>
        <input
          type="text"
          placeholder="Tên tài khoản"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-btn" type="submit">
          Đăng Nhập
        </button>
        <p> Hoặc chưa có tài khoản </p>
        <div className="register-btn">
          <a href="/register">Tạo tài khoản</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
