const Game = require('./game');


class BoardGame extends Game {
    constructor (name, player_count, genre, length) {
        super(name, player_count, genre);

        this.length = length;
    }

    readLength () {
        return this.length;
    }

    updateLength (newLength) {
        this.length = newLength;
        return this.length;
    }
}

module.exports = BoardGame;
