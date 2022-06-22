import { Link, Route, Routes, useHref, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { Detail } from "./pages/Detail/Detail";
import { Genre } from "./pages/genre/Genre";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/login/Login";
import { Search } from "./pages/Search/Search";

export const MainRouter = () => {
  const token = localStorage.getItem("token");
  //untuk berpindah halaman
  let navigate = useNavigate();
  //

  const [isAuthenticate, setIsAuthenticate] = useState(false)

  const handleLogin = (email, password) => {
    if (email === "zaki@gmail.com" && password === "12345") {
      localStorage.setItem("token", email);
      setIsAuthenticate(true);
    }
    else {
      alert("Login Failed");
    }
  }

  const handleLogout =() => {
    setIsAuthenticate(false);
    localStorage.clear()
    navigate("/")
  }

  useEffect(() => {
    setIsAuthenticate(token ? true : false);
  }, [token])
  

  const Authenticate = () => {
    return (
      <Routes>
        <Route path="/" element={<Home handleLogout={handleLogout} />} />
        <Route path="/detail" element={<Detail handleLogout={handleLogout} />} />
        <Route path="/genre" element={<Genre handleLogout={handleLogout} />} />
        <Route path="/search" element={<Search handleLogout={handleLogout} />} />
    </Routes>
    )
  }

  const Unauthenticate = () => {
    return (
      <Routes>
        <Route path="/" element={<Login handleLogin={handleLogin} />} />
      </Routes>
    )
  }

  return isAuthenticate ? (
    <Authenticate />
  ) : (
    <Unauthenticate />
  );
};
