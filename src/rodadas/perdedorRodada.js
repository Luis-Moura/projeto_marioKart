export async function perdedorRodada(totalHabilidade1, totalHabilidade2, personagem1, personagem2){
    if (totalHabilidade1 > totalHabilidade2 && personagem2.pontos > 0) {
        console.log(`\n🔴 ${personagem2.nome} perdeu a rodada e perdeu um ponto`)
        personagem2.pontos --
    }
    else if (totalHabilidade2 > totalHabilidade1 && personagem1.pontos > 0) {
        console.log(`\n🔴 ${personagem1.nome} perdeu a rodada e perdeu um ponto`)
        personagem1.pontos --
    }
}