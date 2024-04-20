export async function vencedor(personagem1, personagem2) {
    console.log(`\n-------------RESULTADO FINAL--------------`)
    console.log(`${personagem1.nome}: ${personagem1.pontos} pontos`)
    console.log(`${personagem2.nome}: ${personagem2.pontos} pontos`)

    if (personagem1.pontos > personagem2.pontos) {
        console.log(`\n🏆${personagem1.nome} venceu a corrida!`)
    }
    else if (personagem2.pontos > personagem1.pontos) {
        console.log(`\n🏆${personagem2.nome} venceu a corrida!`)
    }
    else{
        console.log(`A corrida terminou em empate!`)
    }
}