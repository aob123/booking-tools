import { useState, useEffect } from "react";
import { makePairs } from "./helpers/MakePairs";
import "./App.css";
import PairsList from "./components/PairsList";
import AddNames from "./components/AddNames";

function App() {
  const [users, setUsers] = useState([]);
  const [pairsList, setPairsList] = useState([]);
  let pairs = makePairs(users, 2);

  // let users = [

  // ];

  // console.log("USERS", users);

  return (
    <>
      <h1>Booking tools</h1>
      <div className="makePairs">
        <h2>Make pairs</h2>
        <AddNames setUsers={setUsers} />
        <PairsList pairsList={pairs} />
      </div>
    </>
  );
}

export default App;
