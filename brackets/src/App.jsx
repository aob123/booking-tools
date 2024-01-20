import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav className="navBar">
        <div className="navItems">
          <h1>View</h1>
          <h1>Brackets</h1>
          <h1>Menu</h1>
        </div>
      </nav>
      <main>
        <div className="bracketView">
          <div className="bracketGrid">
            <div className="match match-1">
              <div className="team-1">
                <p>1. Sven</p>
              </div>
              <div className="team-2">
                <p>2. Dave</p>
              </div>
            </div>
            <div className="match match-2">
              <div className="team-1">
                <p>1. Pete</p>
              </div>
              <div className="team-2">
                <p>2. John</p>
              </div>
            </div>
            <div className="match match-3">
              <div className="team-1">
                <p>1. Mick</p>
              </div>
              <div className="team-2">
                <p>2.Tina</p>
              </div>
            </div>
            <div className="match match-4">
              <div className="team-1">
                <p>1. Lucy</p>
              </div>
              <div className="team-2">
                <p>2. Roger</p>
              </div>
            </div>
            <div className="match match-5">
              <div className="team-1">
                <p>1. Angela</p>
              </div>
              <div className="team-2">
                <p>2. Michael</p>
              </div>
            </div>
            <div className="match match-6">
              <div className="team-1">
                <p>1. Andy</p>
              </div>
              <div className="team-2">
                <p>2. Jenny</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
