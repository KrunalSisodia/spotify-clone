import React from "react";
import "../assets/css/Login.css";
import { loginUrl } from "../assets/js/Spotify";

function Login() {
  return (
    <div className="login">
      <h1>Login page</h1>
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png"
        alt="Spotify logo"
      />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
