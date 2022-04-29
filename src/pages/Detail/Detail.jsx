import "./Detail.scss";

import React, { useState } from "react";

import { Layout } from "../../layout/Layout";
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
            <div className="main-detail-rating-title">4.3/5</div>
            <div className="main-detail-rating-title">Thriller</div>
            <div className="main-detail-rating-title"> 2h 4min</div>
            <div className="main-detail-rating-title"> 2005</div>
            <div className="main-detail-rating-title" style={{
              border: "solid 1px #FFFFFF",
              padding: "1px 5px"
            }}>18+</div>
          </div>
          <div className="main-detail-title2">deskripsi filmm</div>
        </div>
      </div>
    </Layout>
  );
};
