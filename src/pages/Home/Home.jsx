import "./Home.scss";

import { Layout } from "../../layout/Layout";
import React from "react";
import armydeadmovie from "../../assets/images/armydead.jpg";
import brightmovie from "../../assets/images/bright.jpg";
import extraction2movie from "../../assets/images/extraction2.jpg";
import extractionmovie from "../../assets/images/extraction.jpg";
import foto1 from "../../assets/images/foto1.png";
import rednoticemovie from "../../assets/images/red notice.jpg";
import spidermanmovie from "../../assets/images/spiderman.jpg";

export const Home = () => {
  return (
    <Layout>
      <div className="main-container"> 
        <div className="main-left">
          <div className="main-home">
            <img className="main-home-foto" src={foto1} />
            <div className="main-home-foto-title"> Watch Your Favourites Movie</div>
          </div>
          <div className="main-home-trending">
            <div className="main-home-trending-header">
              <div className="main-home-trending-title">Trending Movie</div>
              <div className="main-home-trending-subtitle">See all</div>
            </div>
            <div className="movie-list-trending">
              <div className="card-movie">
                <img className="card-movie-foto" src={brightmovie} />
                <div className="card-content">
                  <div className="card-content-left">
                    <div className="card-content-left-title"> Bright</div>
                    <div className="card-content-left-subtitle" style={{
                      color: "#878787",
                      fontSize: "12px",
                    }}>2021</div>
                  </div>
                  <div className="card-content-right">
                    <div className="card-content-action" style={{
                      backgroundColor: "rgba(158,7,33,0.68)",
                      borderRadius: "20px",
                    }}>Watch Now</div>
                    <div className="card-content-action" style={{
                      backgroundColor: "#F6C600",
                      color: "black",
                      fontWeight: "bold",
                    }}>ImDb 7.9</div>
                  </div>
                </div>
              </div>
              
              <div className="card-movie">
                <img className="card-movie-foto" src={spidermanmovie} />
                <div className="card-content">
                  <div className="card-content-left">
                    <div className="card-content-left-title"> Spiderman Far From Home</div>
                    <div className="card-content-left-subtitle" style={{
                      color: "#878787",
                      fontSize: "12px",
                    }}>2021</div>
                  </div>
                  <div className="card-content-right">
                    <div className="card-content-action" style={{
                      backgroundColor: "rgba(158,7,33,0.68)",
                      borderRadius: "20px",
                    }}>Watch Now</div>
                    <div className="card-content-action" style={{
                      backgroundColor: "#F6C600",
                      color: "black",
                      fontWeight: "bold",
                    }}>ImDb 7.9</div>
                  </div>
                </div>
              </div>

              <div className="card-movie">
                <img className="card-movie-foto" src={extractionmovie} />
                <div className="card-content">
                  <div className="card-content-left">
                    <div className="card-content-left-title"> Extraction</div>
                    <div className="card-content-left-subtitle" style={{
                      color: "#878787",
                      fontSize: "12px",
                    }}>2015</div>
                  </div>
                  <div className="card-content-right">
                    <div className="card-content-action" style={{
                      backgroundColor: "rgba(158,7,33,0.68)",
                      borderRadius: "20px",
                    }}>Watch Now</div>
                    <div className="card-content-action" style={{
                      backgroundColor: "#F6C600",
                      color: "black",
                      fontWeight: "bold",
                    }}>ImDb 7.9</div>
                  </div>
                </div>
              </div>

              <div className="card-movie">
                <img className="card-movie-foto" src={extraction2movie} />
                <div className="card-content">
                  <div className="card-content-left">
                    <div className="card-content-left-title"> Extraction</div>
                    <div className="card-content-left-subtitle" style={{
                      color: "#878787",
                      fontSize: "12px",
                    }}>2020</div>
                  </div>
                  <div className="card-content-right">
                    <div className="card-content-action" style={{
                      backgroundColor: "rgba(158,7,33,0.68)",
                      borderRadius: "20px",
                    }}>Watch Now</div>
                    <div className="card-content-action" style={{
                      backgroundColor: "#F6C600",
                      color: "black",
                      fontWeight: "bold",
                    }}>ImDb 7.9</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="main-right">
          <div className="main-genre">
          <div className="content-label">Genre</div>
          <div className="list-genre">
            <div className="genre-item" style={{
              backgroundColor: "rgba(158,7,33,0.68)",
            }

            }>Action
            </div>
            <div className="genre-item">Adventure</div>
            <div className="genre-item">Comedy</div>
            <div className="genre-item">Drama</div>
            <div className="genre-item">Horor</div>
            <div className="genre-item">Romance</div>
          </div>
          </div>
          <div className="main-recent">
            <div className="content-label"> Recent</div>
            <div className="card-movie">
                <img className="card-movie-foto" src={rednoticemovie} />
                <div className="card-content">
                  <div className="card-content-left">
                    <div className="card-content-left-title"> Red Notive</div>
                    <div className="card-content-left-subtitle" style={{
                      color: "#878787",
                      fontSize: "12px",
                    }}>2021</div>
                  </div>
                  <div className="card-content-right">
                    <div className="card-content-action" style={{
                      backgroundColor: "rgba(158,7,33,0.68)",
                      borderRadius: "20px",
                    }}>Watch Now</div>
                    <div className="card-content-action" style={{
                      backgroundColor: "#F6C600",
                      color: "black",
                      fontWeight: "bold",
                    }}>ImDb 7.9</div>
                  </div>
                </div>
              </div>
              <div className="card-movie">
                <img className="card-movie-foto" src={armydeadmovie} />
                <div className="card-content">
                  <div className="card-content-left">
                    <div className="card-content-left-title"> Army of The Dead</div>
                    <div className="card-content-left-subtitle" style={{
                      color: "#878787",
                      fontSize: "12px",
                    }}>2021</div>
                  </div>
                  <div className="card-content-right">
                    <div className="card-content-action" style={{
                      backgroundColor: "rgba(158,7,33,0.68)",
                      borderRadius: "20px",
                    }}>Watch Now</div>
                    <div className="card-content-action" style={{
                      backgroundColor: "#F6C600",
                      color: "black",
                      fontWeight: "bold",
                    }}>ImDb 7.9</div>
                  </div>
                </div>
              </div>
            
          </div>
        </div>
      </div>
    </Layout>
  );
};
