import React, { useEffect, useState } from "react";
import "./assets/css/App.css";
import { getTokenFromUrl } from "./assets/js/Spotify";
import Login from "./components/Login";

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
    }
  }, []);

  return (
    <div className="App">{token ? <h1>I am logged in</h1> : <Login />}</div>
  );
}

export default App;
