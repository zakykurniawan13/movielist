import "./login.scss";

import React, { useState } from "react";

import Backgroundimage from "../../assets/images/gunung.jpg";
import { useNavigate } from "react-router-dom";

export const Login = (props) => {
  const { handleLogin } = props
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="container-main">
      <img className="background-image" src={Backgroundimage} />
      <div className="main-inside">
        <div className="title1"> START FOR FREE</div>
        <div className="title2"> Create new account</div>
        <div className="title3"> Already A Member? Log In</div>
        <div className="input-container">
          <div className="text-input-container">
            <input className="text-input" type="email" placeholder="Email" onChange={handleEmail} />
          </div>
          <div className="text-input-container">
            <input className="text-input" type="password" placeholder="Password" onChange={handlePassword}/>
          </div>
          <div className="login-btn" onClick={() => handleLogin(email, password)}>login</div>
        </div>
      </div>
    </div>
  );
};
