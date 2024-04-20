export function sortearbloco () {
    let random = Math.random()
    let resultado

    if (random < 0.33) {
        resultado = 'reta'
    }
    else if (random < 0.66) {
        resultado = 'curva'
    }
    else{
        resultado = 'confronto'
    }

    return resultado
}