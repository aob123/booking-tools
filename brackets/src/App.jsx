import { useState, useEffect } from "react";
import Match from "./components/brackets/Match";
import Connector from "./components/brackets/Connector";
import BracketGrid from "./components/BracketGrid";
import "./App.css";

function App() {
  let matches = [];
  let teams = [
    "Andy",
    "Ben",
    "Chris",
    "Dave",
    "Eric",
    "Fred",
    "George",
    "Harry",
  ];

  //Generate matches from number of teams
  const generateMatches = (arrTeams, arrMatches) => {
    for (let i = 0; i < arrTeams.length; i++) {
      if (i % 2 === 0) {
        let match = {
          matchId: i / 2 + 1,
          team_1: arrTeams[i],
          team_2: arrTeams[i + 1],
        };

        arrMatches.push(match);
      }
    }
  };

  generateMatches(teams, matches);
  console.log(matches);

  //Calculate number of total matches
  const numberOfMatches = (arrMatches) => {
    console.log(arrMatches.length);

    if (arrMatches.length <= 4) {
      return arrMatches.push(
        {
          matchId: "semiFinal-1",
          team_1: "",
          team_2: "",
        },
        {
          matchId: "semiFinal-2",
          team_1: "",
          team_2: "",
        },
        {
          matchId: "final",
          team_1: "",
          team_2: "",
        }
      );
    } else {
      arrMatches.push(
        {
          matchId: "semiFinal-1",
          team_1: "",
          team_2: "",
        },
        {
          matchId: "semiFinal-2",
          team_1: "",
          team_2: "",
        },
        {
          matchId: "final",
          team_1: "",
          team_2: "",
        }
      );
    }
  };

  numberOfMatches(matches);
  console.log("MATCHES", matches);

  //Calculate number of connectors
  let numberOfConnectors = (arr) => {
    return (arr.length - 1) / 2;
  };

  console.log(numberOfConnectors(matches));

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
          <BracketGrid matches={matches} />
        </div>
      </main>
    </>
  );
}

export default App;
