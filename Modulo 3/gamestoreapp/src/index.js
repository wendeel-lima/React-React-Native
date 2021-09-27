import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Video, Mapa, Games } from "./App";

export default function Home() {
  return <h1>Meus Games</h1>;
}

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <Games />
    <Video />
    <Mapa />
  </React.StrictMode>,
  document.getElementById("root")
);
