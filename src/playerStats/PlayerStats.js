import React from "react";
import "../styles/playerStats.css";

const PlayerStats = () => {
  return (
    <div id="playerStats">
      <h1>Erskine Duenas</h1>
      <div id="playerStats__lines">
        <span id="playerStats__lines__thick"></span>
        <span id="playerStats__lines__thin"></span>
      </div>
      <div>
        <h2>Fullstack Developer</h2>
        <h5>{`Specializes in Back-end`}</h5>
      </div>
    </div>
  );
};

export default PlayerStats;
