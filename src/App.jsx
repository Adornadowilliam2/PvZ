import { useEffect, useState } from "react";

import "./App.css";
import logo from "./assets/logo.png";
import { data } from "./index.js";

function App() {
  const [search, setSearch] = useState("");
  const allData = data.flat();
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    const filteredData = allData.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilter(filteredData);
  }, [search]);

  return (
    <>
      <nav className="bg-dark text-white p-2 position-fixed w-100 z-2">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="navbar-header">
            <a
              className="navbar-brand"
              style={{ display: "flex", alignItems: "center" }}
            >
              <span className="text-animation">Plant Vs Zombie</span>
            </a>
          </div>
        </div>
      </nav>

      <main>
        <div className="logo"></div>
        <div className="search-container">
          <h1>Search</h1>
          <input
            type="text"
            name="input_search"
            id="input_search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
          />
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
        {filter.map((item) => (
          <div className="card" key={item.gameId}>
            <span
              style={{
                position: "absolute",
                top: "10px",
                left: "10px",
                zIndex: "1",
                background: "white",
                padding: "10px",
                borderRadius: "50%",
                width: "50px",
              }}
            >
              {item.gameId}
            </span>
            <img src={item.image} alt={item.name} />
            <h1>{item.name}</h1>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
