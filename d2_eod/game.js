
class Game {
    constructor (name, player_count = 1, genre) {
        this.name = name;
        this.player_count = player_count;
        this.genre = genre;
    }

    getName () {
        return this.name;
    }

    getPlayerCount () {
        return this.player_count;
    }

    updatePlayerCount (new_count) {
        this.player_count = new_count;
        return this.player_count;
    }

    getGenre () {
        return this.genre;
    }

    updateGenre (newGenre) {
        this.genre = newGenre;
        return this.genre;
    }

    static gameByGenre (list, genre) {
        console.log(`All games from the ${genre} genre:`);

        list.forEach(game => {
            if (game.getGenre() === genre) {
                console.log(game.getName());
            }
        })
    }

    static gameByName (list, searchName) {
        for (let i = 0; i < list.length; i++) {
            let currGame = list[i];
            if (currGame.name === searchName) {
                return this.readGame(currGame);
            }
        }
    }

    static gameList (list) {
        console.log('Games we carry:');
        list.forEach(game => {
            console.log(game.name);
        })
    }

    static readGame (game) {
        return `${game.name} is a(n) ${game.genre} game and is for up to ${game.player_count} player(s)!`
    }
}

module.exports = Game;
