const Game = require('./game');
const VideoGame = require('./videoGame');
const BoardGame = require('./boardGame');


const fourSquare = new Game('Four Square', 4, 'Childrens');

// console.log(fourSquare.getName());
// console.log(fourSquare.updatePlayerCount(5));
// console.log(fourSquare)

const godOfWar = new VideoGame('God of War', 1, 'Hack and Slash', 'ps2');

// console.log(godOfWar.getPlatform());
// console.log(godOfWar.getName());

const monopoly = new BoardGame('monopoly', 8, 'Strategy', '4 hours');
const tombRaider = new VideoGame('Tomb Raider', 1, 'Adventure', 'ps1');
const earthWormJim = new VideoGame('Earthworm Jim', 1, 'Platformer', 'Genesis');
const catan = new BoardGame('Catan', 4, 'Strategy', '2 Hours');
const bossMonster = new BoardGame('Boss Monster', 4, 'Card', '30 Minutes');
const devilMayCry = new VideoGame('Devil May Cry', 1, 'Hack and Slash', 'ps2');
const pokemon = new VideoGame('Pokemon Silver', 1, 'RPG', 'Gameboy');

const listOfGames = [
    fourSquare,
    godOfWar,
    monopoly,
    tombRaider,
    earthWormJim,
    catan,
    bossMonster,
    devilMayCry,
    pokemon
]

// console.log(monopoly.readLength());
// console.log(monopoly.updateLength('16 hours'));

// Game.gameByGenre(listOfGames, 'Hack and Slash');

// console.log(Game.readGame(pokemon));
// console.log(Game.readGame(catan));

// Game.gameList(listOfGames);

console.log(Game.gameByName(listOfGames, 'God of War'));
