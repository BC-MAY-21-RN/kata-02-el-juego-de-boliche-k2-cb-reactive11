module.exports = class Game {
  constructor() {
    this.player = new Player();
    this.frames = 10;
  }

  createPlayerFrame() {
    this.player.frame = new Array(this.frames);
    for (let i = 0; i < this.frames; i++) {
      this.player.frame[i] = new Array(3);
    }
  }

  initializePlayerFrame() {
    for (let i = 0; i < this.frames; i++) {
      for (let j = 0; j <= 3; j++) {
        this.player.frame[i][j] = 0;
      }
    }
  }

  addScores(sentFrame) {
    for (let i = 0; i < this.frames; i++) {
      this.player.frame[i] = sentFrame[i];
    }
    return this.player.frame;
  }

  addRandomScores() {
    let scores = new Array(this.frames);
    for (let i = 0; i < this.frames; i++) {
      scores[i] = new Array(3);
    }

    for (let i = 0; i < this.frames; i++) {
      let firstShot = Math.floor(Math.random() * 10);
      scores[i][0] = firstShot;
      scores[i][1] = Math.floor(Math.random() * Math.abs(firstShot - 10));
      scores[i][2] = 0;
      scores[i][3] = 0;
      if (
        i == this.frames - 1 &&
        this.IsStrike(scores[i] || this.IsSpare(scores[i]))
      ) {
        scores[i][2] = Math.floor(Math.random() * 10);
      }
    }

    return scores;
  }

  game() {
    for (let i = 0; i < this.frames; i++) {
      this.rules(this.player.frame[i], i);
    }
    console.table(this.player.frame);
    return this.player.frames;
  }

  rules(frame, i) {
    let score = this.player.finalScore;

    score += frame[0] + frame[1];
    if (i < this.frames - 1) {
      if (this.IsStrike(frame)) {
        //STRIKE
        score += this.player.frame[i + 1][0] + this.player.frame[i + 1][1];
      } else if (this.IsSpare(frame)) {
        //SPARE
        score += this.player.frame[i + 1][0];
      }
    } else {
      score += frame[2];
    }

    this.player.finalScore = score;
    this.player.frame[i][3] = score;

    return score;
  }

  IsStrike(frame) {
    if (frame[0] == 10) return true;
    else return false;
  }
  IsSpare(frame) {
    if (frame[0] != 10 && frame[0] + frame[1] == 10) return true;
    else return false;
  }
};

class Player {
  constructor() {
    this.frame = [,];
    this.finalScore = 0;
  }
}
