import "./Header.css";

import React from "react";
import avatar from "././../../assets/images/avatar.png";
import bellLogo from "././../../assets/images/bell.png";
import searchLogo from "././../../assets/images/search.png";

export const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="header-left">
          <div className="input">
            <img className="search-logo" src={searchLogo} />
            <input
              className="text-input"
              type="text"
              placeholder="Search Movie Here"
            />
          </div>
        </div>
        <div className="header-right">
          <img className="bell-logo" src={bellLogo} />
          <img className="avatar-logo" src={avatar} />
          <div className="nickname"> Ahmad Jekong</div>
        </div>
      </div>
    </>
  );
};
