import React from "react";
import PortfolioBuilder from "./components/PortfolioBuilder";
import "./App.css";

function App() {
  return (
    <div>
      <header className="navbar">
        <h1>Portfolio Builder</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Education</a>
          <a href="#">Contact</a>
        </nav>
      </header>
      <PortfolioBuilder />
    </div>
  );
}

export default App;
