import { useState } from "react";

import "./App.css";
import logo from "./assets/logo.jpg";
import sunflower from "./assets/sunflower.jpeg";
import wallnut from "./assets/wallnut.jpeg";
import cherrybomb from "./assets/cherrybomb.jpeg";
import potatomine from "./assets/potatomine.jpeg";
import peashooter from "./assets/peashooter.jpeg";
import zombie from "./assets/zombie.jpeg";
import muzan from "./assets/michael.jpeg";
import giant from "./assets/giant.jpeg";
function App() {
  return (
    <>
      <h1>Plant Vs Zombie</h1>
      <hr />
      <img src={logo} alt="logo" className="logo" />

      <fieldset>
        <h2>Plants</h2>
        <div className="card">
          <img src={sunflower} alt="sunflower" />
          <h1>Sunflower</h1>
        </div>
        <div className="card">
          <img src={peashooter} alt="peashooter" />
          <h2>Pea Shooter</h2>
        </div>
        <div className="card">
          <img src={potatomine} alt="potatomine" />
          <h2>Potato Mine</h2>
        </div>
        <div className="card">
          <img src={wallnut} alt="wallnut" />
          <h2>Wallnut</h2>
        </div>
        <div className="card">
          <img src={cherrybomb} alt="cherry bomb" />
          <h2>Cherry Bomb</h2>
        </div>
      </fieldset>
      <fieldset>
        <h2>Zombies</h2>
        <div className="card">
          <img src={zombie} alt="zombie" />
          <h1>Zombie</h1>
        </div>
        <div className="card">
          <img src={muzan} alt="muzan" />
          <h2>Muzan</h2>
        </div>
        <div className="card">
          <img src={giant} alt="giant" />
          <h2>Giant</h2>
        </div>
      </fieldset>
    </>
  );
}

export default App;
