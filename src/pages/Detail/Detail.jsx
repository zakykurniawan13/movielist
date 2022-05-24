import "./Detail.scss";

import React, { useState } from "react";

import { Layout } from "../../layout/Layout";
import chris from "../../assets/images/chris.jpg";
import extdetail from "../../assets/images/extractiondetail.jpg";

export const Detail = () => {
  const [rating, setRating] = useState(4);

  const handleRating = () => {
    let newRating = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        newRating.push(
          <div className="rating-star">
            <img
              className="star-logo"
              src={require("../../assets/images/bluestarlogo.png")}
            />
          </div>
        );
      } else {
        newRating.push(
          <div className="rating-star">
            <img
              className="star-logo"
              src={require("../../assets/images/greystarlogo.png")}
            />
          </div>
        );
      }
    }
    return newRating;
  };
  return (
    <Layout>
      <div className="main-detail-container">
        <img className="main-detail-extraction" src={extdetail} />
        <div className="main-detail">
          <div className="main-detail-title1"> Sin City</div>
          <div className="main-detail-rating">
            {handleRating()}
            <div
              className="main-detail-rating-title"
              style={{
                color: "white",
              }}
            >
              4.3
            </div>
            <div
              className="main-detail-rating-title"
              style={{
                marginLeft: "0px",
              }}
            >
              /5
            </div>
            <div className="main-detail-rating-title">Thriller</div>
            <div className="main-detail-rating-title"> 2h 4min</div>
            <div className="main-detail-rating-title"> 2005</div>
            <div
              className="main-detail-rating-title"
              style={{
                border: "solid 1px rgba(135, 135, 135, 0.68)",
                padding: "1px 5px",
              }}
            >
              18+
            </div>
          </div>
          <div className="main-detail-title2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            neque voluptatibus, optio excepturi placeat quas, dolor a omnis
            nobis veniam cupiditate pariatur sint ratione nesciunt maxime minus
            iure amet? Fugiat.
          </div>
          <div className="main-detail-title3">
            <div className="main-detail-title3-1">PLAY MOVIE</div>
            <div className="main-detail-title3-2">WATCH LATER</div>
          </div>
          <div className="credit">
            <div className="credit-cast">
              <div className="main-detail-title4-1">CAST</div>
              <div className="cast-list">
                <div className="cast">
                  <img className="cast-img" src={chris} />
                  <div className="cast-name">Chriss hamsowrd</div>
                </div>
                <div className="cast">
                  <img className="cast-img" src={chris} />
                  <div className="cast-name">Chriss hamsowrd</div>
                </div>
                <div className="cast">
                  <img className="cast-img" src={chris} />
                  <div className="cast-name">Chriss hamsowrd</div>
                </div>
                <div className="cast">
                  <img className="cast-img" src={chris} />
                  <div className="cast-name">Chriss hamsowrd</div>
                </div>
                <div className="cast">
                  <img className="cast-img" src={chris} />
                  <div className="cast-name">Chriss hamsowrd</div>
                </div>
                <div className="cast">
                  <img className="cast-img" src={chris} />
                  <div className="cast-name">Chriss hamsowrd</div>
                </div>
                <div className="cast">
                  <img className="cast-img" src={chris} />
                  <div className="cast-name">Chriss hamsowrd</div>
                </div>
                <div className="cast">
                  <img className="cast-img" src={chris} />
                  <div className="cast-name">Chriss hamsowrd</div>
                </div>
                <div className="cast">
                  <img className="cast-img" src={chris} />
                  <div className="cast-name">Chriss hamsowrd</div>
                </div>
                <div className="cast">
                  <img className="cast-img" src={chris} />
                  <div className="cast-name">Chriss hamsowrd</div>
                </div>
              </div>
            </div>

            <div className="credit-director">
              <div className="main-detail-title4-1">DIRECTED BY</div>
              <div className="directed">Jon Belion</div>
              <div className="directed">Adam Levine</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
