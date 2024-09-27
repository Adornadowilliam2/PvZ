import { useState } from "react";

import "./App.css";
import logo from "./assets/logo.png";
import sunflower from "./assets/sunflower.png";
import wallnut from "./assets/wallnut.png";
import cherrybomb from "./assets/cherrybomb.png";
import potatomine from "./assets/potatomine.png";
import peashooter from "./assets/peashooter.png";
import zombie from "./assets/zombie.png";
import muzan from "./assets/michael.png";
import giant from "./assets/giant.png";

const data = [
  {
    id: 1,
    name: "sunflower",
    image: sunflower,
  },
  {
    id: 2,
    name: "peashooter",
    image: peashooter,
  },
  {
    id: 3,
    name: "potatomine",
    image: potatomine,
  },
  {
    id: 4,
    name: "wallnut",
    image: wallnut,
  },
  {
    id: 5,
    name: "cherrybomb",
    image: cherrybomb,
  },

  {
    id: 6,
    name: "zombie",
    image: zombie,
  },
  {
    id: 7,
    name: "muzan",
    image: muzan,
  },
  {
    id: 8,
    name: "giant",
    image: giant,
  },
];

function App() {
  const [search, setSearch] = useState("");
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <nav className="bg-dark text-white p-5">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="navbar-header">
            <a className="navbar-brand">Plant Vs Zombie</a>
          </div>
        </div>
      </nav>
      <main>
        <img src={logo} alt="logo" className="logo" />
        <div className="search-container">
          <input
            type="text"
            name="input_search"
            id="input_search"
            value={search}
            onChange={handleSearch}
            placeholder="Search..."
          />
          <button>Search</button>
        </div>
      </main>

      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {filteredData.map((item) => (
          <div
            style={{
              textAlign: "center",
              border: "1px solid black",
              padding: "10px",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "200px", background: "white" }}
            />
            <h1>{item.name}</h1>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
