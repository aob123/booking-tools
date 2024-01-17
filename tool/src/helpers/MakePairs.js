export const makePairs = (arr, size) => {
  //If less than set size, return arr
  if (arr.length <= size) {
    console.log("DONE");
    return [arr];
  }

  //Randomize
  const shuffler = (arr) => {
    return arr.sort(() => Math.random() - 0.5);
  };
  const shuffledArr = shuffler(arr);

  //Make list of pairs (objects)
  let pairsList = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      let pair = {
        id: i / 2 + 1,
        nameOne: shuffledArr[i],
        nameTwo: shuffledArr[i + 1],
      };
      //   pair.id = i / 2 + 1;
      pairsList.push(pair);
    }
  }

  console.log("PAIRS LIST", pairsList);

  return pairsList;
};
