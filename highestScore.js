const data = require("./highestScore.json");

// initializing the values in case no params are passed
// first paramter is from file and second is number of returned records
const highestScore = (file = data, numOfRecords = 4) => {
  let scores = [];
  Object.entries(file).forEach(([key, value]) => {
    scores.push({ "score": parseInt(key), "id": value.id });
  });
  scores.sort((a, b) => parseInt(b.score) - parseInt(a.score));
  scores.length = numOfRecords;
  return scores;
};

module.exports = { highestScore };
