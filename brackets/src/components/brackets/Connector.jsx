import React from "react";

const Connector = ({ match }) => {
  console.log("CONNECTOR", match.matchId);

  if (match.matchId % 2 === 1) {
    return <div className={`connector-${match.matchId}`}>Connector</div>;
  }

  return <></>;
};

export default Connector;
