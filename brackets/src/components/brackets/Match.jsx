import React from "react";
import { RiEditBoxLine } from "react-icons/ri";

const Match = ({ match }) => {
  console.log(match);
  return (
    <div className={`match match-${match?.matchId}`}>
      <div className="team-1">
        <p>{match?.team_1 ? match.team_1 : "-"}</p>
      </div>
      <div className="team-2">
        <p>{match?.team_2 ? match.team_2 : "-"}</p>
      </div>
      <div className="score">
        {/* <p>{match.score}</p> */}
        <RiEditBoxLine size={20} />
      </div>
    </div>
  );
};

export default Match;
