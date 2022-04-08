import './NavigationBar.css'

import React from "react";

export const NavigationBar = () => {
  return (
    <div className="navigation-bar-container">
      <div className="navigation-bar-header">
        <div className="navigation-bar-header-title">My Movie</div>
      </div>
      <div className="navigation-bar-menu"></div>
      <div className="navigation-bar-library"></div>
    </div>
  );
};
