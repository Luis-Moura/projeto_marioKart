export async function vencedorRodada(totalHabilidade1, totalHabilidade2, personagem1, personagem2) {
    if (totalHabilidade1 > totalHabilidade2) {
        console.log(`\n🟢 ${personagem1.nome} ganhou a rodada e marcou um ponto`)
        personagem1.pontos ++
    }
    else if (totalHabilidade2 > totalHabilidade1) {
        console.log(`\n🟢 ${personagem2.nome} ganhou a rodada e marcou um ponto`)
        personagem2.pontos ++
    }
}