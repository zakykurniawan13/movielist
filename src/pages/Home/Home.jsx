import './Home.css'

import { Header } from "../../Component/Header/Header";
import { NavigationBar } from "../../Component/NavigationBar/NavigationBar";
import React from "react";

export const Home = () => {
  return (
    <div className="home-container">
      <div className="left-container">
        <NavigationBar />
      </div>
      <div className="rigth-container">
        <Header />
        <div></div>
      </div>
    </div>
  );
};
