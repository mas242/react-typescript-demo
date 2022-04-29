import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Axios from "axios";

function App() {
  const [joke, setJoke] = useState("");
  const [joke2, setJoke2] = useState("");

  //api call Axios way
  const getJoke = () => {
    Axios.get("https://api.chucknorris.io/jokes/random").then((response) => {
      // console.log(response);
      setJoke(response.data.value);
    });
  };

  //api call fetch method way
  const getJoke2 = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => {
        setJoke2(data.value);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>hi dads</p>
        <div>
          <button onClick={getJoke}>Get Joke!</button>
          <br />
          {joke}
          <br />
          <button onClick={getJoke2}>Get Joke 2!</button>
          <br />
          {joke2}
        </div>
      </header>
    </div>
  );
}

export default App;
