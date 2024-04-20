export function logResultadoLancamento (nomePersonagem, bloco, dado, atributo) {
    console.log(`\n🎲${nomePersonagem} rolou um dado de ${bloco} e o resultado foi ${dado}.\n🆙A soma de seus atributos foi ${atributo + dado}`)
}