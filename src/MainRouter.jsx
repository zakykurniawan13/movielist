import { Link, Route, Routes } from "react-router-dom";

import { About } from "./pages/About";
import { Home } from "./pages/Home";
import React from 'react'
import { Users } from "./pages/Users";

export const MainRouter = () => {
  return (
  
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/user" element={<Users />} />
    <Route path="/about" element={<About />} />
  </Routes>
  )
}
