import { Link, Route, Routes } from "react-router-dom";

import { Detail } from "./pages/Detail/Detail";
import { Genre } from "./pages/genre/Genre";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/login/Login";
import React from "react";
import { Search } from "./pages/Search/Search";

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/genre" element={<Genre />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
};
