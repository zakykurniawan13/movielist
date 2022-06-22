import "./genre.scss";

import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Layout } from "../../layout/Layout";
import axios from "axios";

export const Genre = (props) => {
  const { handleLogout } = props

  let navigate = useNavigate();
  //untuk mengambil data yang di lempar dari navigasi
  const { state } = useLocation();
  const { id, name } = state;
  //

  const [moviesByGenre, setMoviesByGenre] = useState([]);
  const [recent, setRecent] = useState([]);
  const [genres, setGenres] = useState([]);
  const [genreId, setGenreId] = useState(id);
  const [genreName, setGenreName] = useState(name);

  const headers = {
    "Content-Type": "appplication.json",
  };

  const getMovieByGenre = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=f4cf4882bb4a1025d54e7abd91962ecc&with_genres=${genreId}`,
        { headers }
      );
      if (response.status === 200) {
        console.log(response);
        setMoviesByGenre(response.data.results);
      }
    } catch (error) {
      console.log(error, "error");
    }
  };

  const getRecent = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=f4cf4882bb4a1025d54e7abd91962ecc&language=en-US&page=1",
        { headers }
      );
      if (response.status === 200) {
        setRecent(response.data.results);
      }
    } catch (error) {
      console.log(error, "error");
    }
  };

  const getGenre = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=f4cf4882bb4a1025d54e7abd91962ecc&language=en-US",
        { headers }
      );
      if (response.status === 200) {
        setGenres(response.data.genres);
      }
    } catch (error) {
      console.log(error, "error");
    }
  };

  const goDetail = (id) => {
    navigate(`/detail`, {
      state: {
        id,
      },
    });
  };

  const handleGenreId = (id, name) => {
    setGenreId(id);
    setGenreName(name);
  };

  useEffect(() => {
    getRecent();
    getGenre();
  }, []);

  //useEffect dengan array terisi untuk menjadi parameter trigger ketika value di array berubah
  useEffect(() => {
    getMovieByGenre();
  }, [genreId]);

  return (
    <Layout handleLogout={handleLogout}>
      <div className="main-container">
        <div className="main-left">
          <div className="main-home-trending">
            <div className="main-home-trending-header">
              <div className="main-home-trending-title">{genreName}</div>
              <div className="main-home-trending-subtitle">See all</div>
            </div>
            <div className="movie-list-trending">
              {moviesByGenre.map((item) => (
                <div className="card-movie" onClick={() => goDetail(item.id)}>
                  <img
                    className="card-movie-foto"
                    src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                  />
                  <div className="card-content">
                    <div className="card-content-left">
                      <div className="card-content-left-title">
                        {item.title}
                      </div>
                      <div
                        className="card-content-left-subtitle"
                        style={{
                          color: "#878787",
                          fontSize: "12px",
                        }}
                      >
                        {item.release_date}
                      </div>
                    </div>
                    <div className="card-content-right">
                      <div
                        className="card-content-action"
                        style={{
                          backgroundColor: "rgba(158,7,33,0.68)",
                          borderRadius: "20px",
                        }}
                      >
                        Watch Now
                      </div>
                      <div
                        className="card-content-action"
                        style={{
                          backgroundColor: "#F6C600",
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        ImDb {item.vote_average}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="main-right">
          <div className="main-genre">
            <div className="content-label">Genre</div>
            <div className="list-genre">
              {genres.map((item) => (
                <div
                  className="genre-item"
                  style={{
                    backgroundColor:
                      item.id === genreId
                        ? "rgba(158,7,33,0.68)"
                        : "rgba(135,135,135,0.68)",
                  }}
                  onClick={() => handleGenreId(item.id, item.name)}
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>
          <div className="main-recent">
            <div className="content-label"> Recent</div>
            {recent.map((item) => (
              <div className="card-movie" onClick={() => goDetail(item.id)}>
                <img
                  className="card-movie-foto"
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                />
                <div className="card-content">
                  <div className="card-content-left">
                    <div className="card-content-left-title">{item.title}</div>
                    <div
                      className="card-content-left-subtitle"
                      style={{
                        color: "#878787",
                        fontSize: "12px",
                      }}
                    >
                      {item.release_date}
                    </div>
                  </div>
                  <div className="card-content-right">
                    <div
                      className="card-content-action"
                      style={{
                        backgroundColor: "rgba(158,7,33,0.68)",
                        borderRadius: "20px",
                      }}
                    >
                      Watch Now
                    </div>
                    <div
                      className="card-content-action"
                      style={{
                        backgroundColor: "#F6C600",
                        color: "black",
                        fontWeight: "bold",
                      }}
                    >
                      ImDb {item.vote_average}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
