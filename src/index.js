import { sortearPlayer1, sortearPlayer2 } from "./players/sorteioPlayers.js";
import { regrasReta, regrasCurva, regrasConfronto } from "./blocos/regrasBloco.js";
import { vencedor } from "./rodadas/vencedorPartida.js";
import { rolarDados } from "./dados/sorteioDado.js";
import { sortearbloco } from "./blocos/sorteioBlocos.js";

async function motorCorrida (personagem1, personagem2) {
    for (let rodada = 1; rodada <= 5; rodada++) {
        console.log('--------------------------------------------------------------------------')
        console.log(`\n🚨🏁 Rodada ${rodada}`)

        let dado1 = rolarDados()
        let dado2 = rolarDados()
        
        //sortear bloco
        let bloco = sortearbloco ()
        console.log(`🚦Bloco: ${bloco}`)

        //regras blocos
        if (bloco === 'reta') {
            regrasReta(personagem1, personagem2, dado1, dado2)
        }

        else if (bloco === 'curva') {
            regrasCurva(personagem1, personagem2, dado1, dado2)
        }
        else if (bloco === 'confronto') {
            regrasConfronto(personagem1, personagem2, dado1, dado2)
        }
    }
}

(async function main() {
    const player1 = sortearPlayer1()
    const player2 = sortearPlayer2()

    console.log(`🏁🚨 corrida entre ${player1.nome} e ${player2.nome}  começando...`)

    await motorCorrida(player1, player2)
    await vencedor(player1, player2)
})()
