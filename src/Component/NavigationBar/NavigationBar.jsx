import "./NavigationBar.scss";

import React from "react";
import bookmarked from "../../assets/images/bookmarket.png";
import comingsoonlogo from "../../assets/images/comingSoon.png";
import communitylogo from "../../assets/images/community.png";
import downloaded from "../../assets/images/downloaded.png";
import favourites from "../../assets/images/heart.png";
import history from "../../assets/images/history.png";
import settings from "../../assets/images/settings.png";
import { useNavigate } from "react-router-dom";
import vectorlogo from "../../assets/images/Vector.png";

export const NavigationBar = (props) => {
  const {handleLogout} =props
  //untuk berpindah halaman
  let navigate = useNavigate();
  //

  const navigateTo = (routeTo) => {
    //navigasi
    navigate(`${routeTo}`);
  }
  
  return (
    <div className="navigation-bar-container">
      <div className="navigation-bar-header">
        <div className="navigation-bar-header-title">My Movie</div>
      </div>
      <div className="navigation-bar-menu">
        <div className="navigation-bar-menu-title">Menu</div>
        <div className="navigation-bar-menu-item" onClick={() => navigateTo("/")}>
          <img className="navigation-bar-menu-item-logo" src={vectorlogo} />
          <div className="navigation-bar-menu-item-title">Home</div>
        </div>
        <div className="navigation-bar-menu-item">
          <img className="navigation-bar-menu-item-logo" src={comingsoonlogo} />
          <div
            className="navigation-bar-menu-item-title"
            style={{
              color: "#878787",
            }}
          >
            Coming Soon
          </div>
        </div>
        <div className="navigation-bar-menu-item">
          <img className="navigation-bar-menu-item-logo" src={communitylogo} />
          <div
            className="navigation-bar-menu-item-title"
            style={{
              color: "#878787",
            }}
          >
            Community
          </div>
        </div>
        <div className="navigation-bar-menu-item">
          <img className="navigation-bar-menu-item-logo" src={favourites} />
          <div
            className="navigation-bar-menu-item-title"
            style={{
              color: "#878787",
            }}
          >
            Favourites
          </div>
        </div>
      </div>
      <div className="line" />
      <div className="navigation-bar-menu">
        <div className="navigation-bar-menu-title">Library</div>
        <div className="navigation-bar-menu-item">
          <img className="navigation-bar-menu-item-logo" src={bookmarked} />
          <div className="navigation-bar-menu-item-title" style={{
            color: "#878787",
          }}>BookMarked</div>
        </div>
        <div className="navigation-bar-menu-item">
          <img className="navigation-bar-menu-item-logo" src={downloaded} />
          <div
            className="navigation-bar-menu-item-title"
            style={{
              color: "#878787",
            }}
          >
            Downloaded
          </div>
        </div>
        <div className="navigation-bar-menu-item">
          <img className="navigation-bar-menu-item-logo" src={history} />
          <div
            className="navigation-bar-menu-item-title"
            style={{
              color: "#878787",
            }}
          >
            History
          </div>
        </div>
        <div className="navigation-bar-menu-item">
          <img className="navigation-bar-menu-item-logo" src={settings} />
          <div
            className="navigation-bar-menu-item-title"
            style={{
              color: "#878787",
            }}
          >
            Settings
          </div>
        </div>
        <div className="navigation-bar-menu-item" onClick={handleLogout}>
          <img className="navigation-bar-menu-item-logo" src={settings} />
          <div
            className="navigation-bar-menu-item-title"
            style={{
              color: "#878787",
            }}
          >
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};
