const BG = require('./BowlingGame');
var scores = [];
var bg = undefined;

beforeEach(() => {
  bg = new BG();
  bg.createPlayerFrame();
  bg.initializePlayerFrame();
})

afterEach(() => {
  bg.game();
  scores = [];
  bg = undefined;
})

test('adds score', () => {
  scores = [[1, 4, 0, 0], [4, 5, 0, 0], [6, 4, 0, 0], [5, 5, 0, 0], [10, 0, 0, 0], [0, 1, 0, 0], [7, 3, 0, 0], [6, 4, 0, 0], [10, 0, 0, 0], [2, 8, 6, 0]];
  expect(bg.addScores(scores)).toStrictEqual(scores);
});

test('adds random score', () => {
  scores = bg.addRandomScores();
  expect(bg.addScores(scores)).toStrictEqual(scores);
});
