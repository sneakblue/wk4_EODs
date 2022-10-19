const Game = require('./game');


class VideoGame extends Game {
    constructor (name, player_count, genre, platform) {
        super(name, player_count, genre);

        this.platform = platform;
    }

    getPlatform () {
        return this.platform;
    }

    updatePlatform (newPlatform) {
        this.platform = newPlatform;
        return this.platform;
    }
}

module.exports = VideoGame;
