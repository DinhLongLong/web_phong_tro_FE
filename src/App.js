import React, { useEffect } from "react";
import cookie from "react-cookies";
import {
  BrowserRouter,
  Route,
  Link,
  Routes,
  useLocation,
} from "react-router-dom";
import "./app.css";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/login";
import PostSell from "./Components/Post/PostSell";
import PostBuy from "./Components/PostBuy/PostBuy";
import Register from "./Components/Register/Register";
import Dormitory from "./Components/Dormitory/Dormitory";
import Apartment from "./Components/Apartment/Apartment";
import Motel from "./Components/Motel/Motel";
import Detail from "./Components/Detail/Detail";
import Admin from "./Components/Admin/Admin";
import { createContext, useReducer } from "react";

import { authApi, authEndpoints } from "./services";
import MyReducer from "./Reducers/MyReducer";

export const MyUserContext = createContext();

const App = () => {
  const [user, dispatch] = useReducer(MyReducer, cookie.load("user") || null);

  useEffect(() => {
    (async () => {
      const res = await authApi().get(authEndpoints["current-user"]);
      console.log("insideee.dev - res current :>", res);
    })();
  }, []);
  return (
    <>
      <MyUserContext.Provider value={[user, dispatch]}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route exact path="/" element={<Main />} />
          </Routes>
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/postsell" element={<PostSell />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/kytucxa" element={<Dormitory />} />
            <Route exact path="/chungcu" element={<Apartment />} />
            <Route exact path="/nhatro" element={<Motel />} />
            <Route exact path="/detail" element={<Detail />} />
            <Route exact path="/postbuy" element={<PostBuy />} />
            <Route exact path="/admin" element={<Admin />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </MyUserContext.Provider>
    </>
  );
};

export default App;
