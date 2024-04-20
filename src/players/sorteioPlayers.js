import { player1, player2, player3, player4, player5, player6 } from "./objPlayers.js";

export function sortearPlayer1 () {
    let random = Math.floor(Math.random() * 6) + 1
    let player
    switch (random) {
        case 1:
            player = player1
            break;
    
        case 2:
            player = player2
            break

        case 3:
            player = player3
            break

        case 4:
            player = player4
            break

        case 5:
            player = player5
            break

        case 6:
            player = player6
            break
    }

    return player
}

export function sortearPlayer2 () {
    let random = Math.floor(Math.random() * 6) + 1
    let player

    switch (random) {
        case 1:
            player = player1
            break;
    
        case 2:
            player = player2
            break

        case 3:
            player = player3
            break

        case 4:
            player = player4
            break

        case 5:
            player = player5
            break

        case 6:
            player = player6
            break
    }

    return player
}