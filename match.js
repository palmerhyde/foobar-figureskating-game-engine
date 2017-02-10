var skaters = require('./test/data/skaters.json');
var moves = require('./test/data/moves.json');

var x = play(skaters[0], skaters[1], moves[0]);
console.log(x);

function play(player1, player2, move) {
    // TODO: Validate params

    // TODO: Calculate potential player buffs.

    // TODO: Validate gender

    var result;

    if (player1[move.player1Attribute] > player2[move.player2Attribute]) {
        result = "player1";
    }
    else if (player2[move.player2Attribute] > player1[move.player1Attribute]) {
        result = "player2";
    }
    else {
        result = "draw";
    }

    return result;
}

exports.Play = play;