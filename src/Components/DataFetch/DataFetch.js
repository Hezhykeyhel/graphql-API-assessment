import React from "react";
import "./DataFetch.css";
import { useEffect, useState } from "react";

const DataFetch = () => {
  const [launch, setLaunch] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTitle, setSearchTitle] = useState("");

  const LAUNCHES_QUERY = `
  {
    characters{
      results{
        id
        image
        name
        gender
        species
        status
        created
      }
      
    }
  }
  `;

  useEffect(() => {
    setLoading(true);
    fetch("https://rickandmortyapi.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: LAUNCHES_QUERY }),
    })
      .then((response) => response.json())
      .then((data) => setLaunch(data.data.characters.results))
      .catch((err) => {
        console.log("Error located at:", err);
      });
    setLoading(false);
  }, [LAUNCHES_QUERY]);

  return (
    <div className="largeContainer" id="items">
        <div className="static">
          <h2 style={{ fontWeight: "bolder", textAlign: "center" }}>
            Rick and Morty
          </h2>
          <br />
          <p style={{ textAlign: "center", opacity: "0.6", fontSize: "14px" }}>
            Filter names, status, gender, species<br/>
          <input
            type="search"
            className="searchBar"
            title="Filter any data here e.g 'Rick Sanchez'"
            placeholder="E.g: Rick Morty"
            onChange={(event) => setSearchTitle(event.target.value)}
          />
          </p>
          <br />
        </div>
      <div className="container">
        {loading ? (
          <h4>Loading data...</h4>
        ) : (
          launch.filter((spacex) => {
              if (searchTitle === "") {
                return spacex;
              } else if (
                spacex.name.toLowerCase().includes(searchTitle.toLowerCase())
              ) {
                return spacex;
              } else if (
                spacex.status.toLowerCase().includes(searchTitle.toLowerCase())
              ) {
                return spacex;
              } else if (
                spacex.gender.toLowerCase().includes(searchTitle.toLowerCase())
              ) {
                return spacex;
              } else if (
                spacex.species.toLowerCase().includes(searchTitle.toLowerCase())
              ) {
                return spacex;
              }
            })
            .map((spacex) => (
              <div className="data" key={spacex.id}>
                <div className="dateStatus">
                  {spacex.id}.&nbsp;&nbsp;
                  {spacex.created}
                </div>
                <div className="contentContainer">
                  <div>
                    <img src={spacex.image} alt="space" />
                  </div>
                  <div>
                    <div className="styled">
                      <p style={{ fontWeight: "bold" }}>Name:</p>
                      <p>{spacex.name}</p>
                    </div>
                    <div className="styled">
                      <p style={{ fontWeight: "bold" }}>Status:</p>
                      <p>{spacex.status}</p>
                    </div>
                    <div className="styled">
                      <p style={{ fontWeight: "bold" }}>Gender</p>
                      <p>{spacex.gender}</p>
                    </div>
                    <div className="styled">
                      <p style={{ fontWeight: "bold" }}>Species:</p>
                      <p>{spacex.species}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
        )}
      </div>
    </div>
  );
};

export default DataFetch;
