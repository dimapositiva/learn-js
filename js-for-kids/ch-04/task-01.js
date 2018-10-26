class Players {
  constructor(players = []) {
    this.players = players;
  }

  //add new player
  setPlayer(name) {
    this.players.push({
      name: name,
      score: 0
    });
    return console.log(`New player ${name} was added successful!`);
  }

  //set score
  setScore(name, value) {
    let i = this.players.findIndex(x => x.name === name);
    if (i < 0 || i > (this.players.length - 1)) {
      console.log('Error! Such player not exist. Please, check player name or add new player.')
    } else {
      this.players[i].score = value;
      return console.log(`Now ${this.players[i].name} have ${this.players[i].score} points.`);
    }
  }

  //get all players info
  getPlayersInfo() {
    let players = this.players;
    for (let i = 0; i < players.length; i++) {
      console.log(`Name: ${players[i].name}, score: ${players[i].score}`);
    }
  }
}

let players = new Players();
