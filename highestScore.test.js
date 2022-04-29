const data = require('./highestScore.json');
const { expect } = require("@jest/globals");
const {highestScore}  = require('./highestScore');

describe('Highest Scores', () => {
  it('should return the highest number first', () => {
    const result = highestScore(data, 3);

    expect(result[0]).toStrictEqual({
      score: 13214012,
      id: "085a11e1b82b441184f4a193a3c9a13c",
    });

  })
})