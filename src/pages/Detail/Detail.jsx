import "./Detail.scss";

import React, { useEffect, useState } from "react";

import { Layout } from "../../layout/Layout";
import axios from "axios";
import { useLocation } from "react-router-dom";

export const Detail = (props) => {
  const { handleLogout } = props
  //untuk mengambil data yang di lempar dari navigasi
  const { state } = useLocation();
  const { id } = state;
  //

  const [detailMovie, setDetailMovie] = useState([]);
  const [credit, setCredit] = useState([]);

  const getDetailMovie = async () => {
    try {
      const headers = {
        "Content-Type": "application/json",
      };
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=f4cf4882bb4a1025d54e7abd91962ecc&language=en-US`,
        { headers }
      );
      if (response.status === 200) {
        console.log(response.data);
        setDetailMovie(response.data);
      }
    } catch (error) {
      console.log(error, "error");
    }
  };

  const getCredit = async () => {
    try {
      const headers = {
        "Content-Type": "application/json",
      };
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=f4cf4882bb4a1025d54e7abd91962ecc&language=en-US`,
        { headers }
      );
      if (response.status === 200){
        console.log(response.data);
        setCredit(response.data);
      }
    } catch (error) {
      console.log(error, "error");
    }
  };

  const handleRating = (rating) => {
    let newRating = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating - 1) {
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

  useEffect(() => {
    getDetailMovie();
    getCredit();
  }, []);
  return (
    <Layout handleLogout={handleLogout}>
      <div className="main-detail-container">
        <img className="main-detail-extraction" src={`https://image.tmdb.org/t/p/w500${detailMovie.backdrop_path}`} />
        <div className="main-detail">
          <div className="main-detail-title1">{detailMovie.title}</div>
          <div className="main-detail-rating">
            {handleRating(detailMovie.vote_average / 2)}
            <div
              className="main-detail-rating-title"
              style={{
                color: "white",
              }}
            >
              {detailMovie.vote_average / 2}
            </div>
            <div
              className="main-detail-rating-title"
              style={{
                marginLeft: "0px",
              }}
            >
              /5
            </div>
            
            {/* jika data detailMovie.genres belum ada maka tidak maping data genres */}
            {detailMovie.genres && detailMovie.genres.map((item) => (
              <div className="main-detail-rating-title">{item.name}</div>
            ))}

            <div className="main-detail-rating-title">
              {detailMovie.runtime} min
            </div>
            <div className="main-detail-rating-title">
              {" "}
              {detailMovie.release_date}
            </div>
            {detailMovie.adult === true && (
              <div
                className="main-detail-rating-title"
                style={{
                  border: "solid 1px rgba(135, 135, 135, 0.68)",
                  padding: "1px 5px",
                }}
              >
                18+
              </div>
            )}
          </div>
          <div className="main-detail-title2">{}</div>
          <div className="main-detail-title3">
            <div className="main-detail-title3-1">PLAY MOVIE</div>
            <div className="main-detail-title3-2">WATCH LATER</div>
          </div>
          <div className="credit">
            <div className="credit-cast">
              <div className="main-detail-title4-1">CAST</div>
              <div className="cast-list">
                {credit.cast && credit.cast.map((item) => (
                  <div className="cast">
                    {/* tanda `` untuk menggabungkan string dengan variabel */}
                  <img className="cast-img" src={`https://image.tmdb.org/t/p/w500${item.profile_path}`} />
                  <div className="cast-name">{item.name}</div>
                </div>
                ))}
              </div>
            </div>

            <div className="credit-director">
              <div className="main-detail-title4-1">DIRECTED BY</div>
              {/* cara mapping data credit.crew */}
              {detailMovie.production_companies && detailMovie.production_companies.map((item) => (
                <div className="directed">{item.name}</div>
              ))}
              
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
