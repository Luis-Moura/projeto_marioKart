import { logResultadoLancamento } from "../mensagens/logLançamentoDados.js";
import { vencedorRodada } from "../rodadas/vencedorRodada.js";
import { perdedorRodada } from "../rodadas/perdedorRodada.js";

export async function regrasReta (personagem1, personagem2, dado1, dado2) {

    let totalHabilidade1 = personagem1.velocidade + dado1
    let totalHabilidade2 = personagem2.velocidade + dado2

    logResultadoLancamento(
        personagem1.nome,
        'velocidade',
        dado1,
        personagem1.velocidade,
    )

    logResultadoLancamento(
        personagem2.nome,
        'velocidade',
        dado2,
        personagem2.velocidade,
    )

    vencedorRodada(totalHabilidade1,totalHabilidade2,personagem1,personagem2)
}

export async function regrasCurva (personagem1, personagem2, dado1, dado2) {
    let totalHabilidade1 = dado1 + personagem1.manobrabilidade
    let totalHabilidade2 = dado2 + personagem2.manobrabilidade

    logResultadoLancamento(
        personagem1.nome,
        'manobrabilidade',
        dado1,
        personagem1.manobrabilidade,
    )

    logResultadoLancamento(
        personagem2.nome,
        'manobrabilidade',
        dado2,
        personagem2.manobrabilidade,
    )

    vencedorRodada(totalHabilidade1,totalHabilidade2,personagem1,personagem2)
}

export async function regrasConfronto (personagem1, personagem2, dado1, dado2) {
    let totalHabilidade1 = dado1 + personagem1.poder
    let totalHabilidade2 = dado2 + personagem2.poder

    logResultadoLancamento(
        personagem1.nome,
        'poder',
        dado1,
        personagem1.poder,
    )

    logResultadoLancamento(
        personagem2.nome,
        'poder',
        dado2,
        personagem2.poder,
    )

    perdedorRodada(totalHabilidade1,totalHabilidade2,personagem1,personagem2)
}