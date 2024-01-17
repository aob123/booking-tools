import React from "react";

const PairsList = ({ pairsList }) => {
  console.log("LIST", pairsList);

  return (
    <>
      <h3>Pairs:</h3>
      {pairsList.map((pair, key) => {
        return (
          <div key={pair.id || 0}>
            {pair.id} : {pair.nameOne} {pair.nameTwo}
          </div>
        );
      })}
    </>
  );
};

export default PairsList;
