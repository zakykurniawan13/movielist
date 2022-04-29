import { Link, Route, Routes } from "react-router-dom";

import { Detail } from "./pages/Detail/Detail";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/login/Login";
import React from 'react'

export const MainRouter = () => {
  return (
  
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/detail" element={<Detail />} />
  </Routes>
  )
}
