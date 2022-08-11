const BG = require("./BowlingGame");
let scores = [];
let bg = undefined;

beforeEach(() => {
  bg = new BG();
  bg.createPlayerFrame();
  bg.initializePlayerFrame();
});

afterEach(() => {
  bg.game();
  scores = [];
  bg = undefined;
});

test("Create Frame", () => {
  testFrame = new Array(10);
  for (let i = 0; i < 10; i++) {
    testFrame[i] = new Array(3);
  }
  expect(bg.createPlayerFrame()).toStrictEqual(testFrame);
});

test("Initialize Frame", () => {
  let testFrame = new Array(10);
  for (let i = 0; i < 10; i++) {
    testFrame[i] = new Array(3);
  }
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j <= 3; j++) {
      testFrame[i][j] = 0;
    }
  }
  expect(bg.initializePlayerFrame()).toStrictEqual(testFrame);
});

test("adds score", () => {
  scores = [
    [1, 4, 0, 0],
    [4, 5, 0, 0],
    [6, 4, 0, 0],
    [5, 5, 0, 0],
    [10, 0, 0, 0],
    [0, 1, 0, 0],
    [7, 3, 0, 0],
    [6, 4, 0, 0],
    [10, 0, 0, 0],
    [2, 8, 6, 0],
  ];
  expect(bg.addScores(scores)).toStrictEqual(scores);
});

test("adds random score", () => {
  scores = bg.addRandomScores();
  expect(bg.addScores(scores)).toStrictEqual(scores);
});

test("Checks if frame changes", () => {
  let testFrame = new Array(10);
  for (let i = 0; i < 10; i++) {
    testFrame[i] = new Array(3);
  }
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j <= 3; j++) {
      testFrame[i][j] = 0;
    }
  }
  expect(bg.game()).not.toStrictEqual(testFrame);
});

test("Check rules", () => {
 bg.addScores(bg.addRandomScores());
  expect(bg.rules(bg.player.frame[6],6)).not.toBe(0);
});

test("check isStrike", () => {
  let testFrame = new Array(2);
  testFrame[0] = 10;
  testFrame[1] = 0;
  expect(bg.IsStrike(testFrame)).toBe(true);
});

test("check isSpare", () => {
  let testFrame = new Array(2);
  testFrame[0] = 5;
  testFrame[1] = 5;
  expect(bg.IsSpare(testFrame)).toBe(true);
});


