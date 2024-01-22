import React, { useState, useEffect } from "react";
import Match from "./brackets/Match";
import Connector from "./brackets/Connector";
import BracketColumn from "./BracketColumn";

const BracketGrid = ({ matches }) => {
  return (
    <>
      <div className="bracketGrid">
        {matches.map((match) => {
          return (
            <>
              <Match match={match} />
              <Connector match={match} />
            </>
          );
        })}
        <div className="semiFinal">
          <BracketColumn />
        </div>
        <div className="final">
          <BracketColumn />
        </div>
      </div>
    </>
  );
};

export default BracketGrid;
