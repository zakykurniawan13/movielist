import "./Header.scss";

import { useLocation, useNavigate } from "react-router-dom";

import React from "react";
import avatar from "././../../assets/images/avatar.png";
import bellLogo from "././../../assets/images/bell.png";
import searchLogo from "././../../assets/images/search.png";

export const Header = () => {
  let navigate = useNavigate();

  const { pathname } = useLocation();
  console.log(pathname);

  const searchMovie = (e) => {
    //validasi jika keyboard enter
    if (e.key === "Enter") {
      //navigasi dengan membawa data object
      navigate(`/search`, {
        state: {
          movieName: e.target.value,
        },
      });
    }
  };

  return (
    <>
      <div className="header-container">
        <div className="header-left">
          {pathname !== "/search" && (
            <div className="input">
              <img className="search-logo" src={searchLogo} />
              <input
                className="text-input"
                type="text"
                placeholder="Search Movie Here"
                onKeyDown={searchMovie}
              />
            </div>
          )}
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
