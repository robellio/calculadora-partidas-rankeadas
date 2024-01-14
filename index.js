const quantidadeVitorias = require('prompt-sync')({ sigint: true })
const quantidadeDerrotas = require('prompt-sync')({ sigint: true })

let vitorias = quantidadeVitorias("Digite a quantidade de vitórias: ")
let derrotas = quantidadeDerrotas("Digite a quantidade de derrotas: ")

function calcularPartidas(vitorias, derrotas) {
    return vitorias - derrotas   
}

let partidasRankeadas = calcularPartidas(vitorias, derrotas)
let nivel = ['ferro', 'Bronze', 'Prata', 'Ouro', 'Diamante', 'Lendário', 'Imortal']


if (partidasRankeadas < 10) {
    console.log(`O Herói tem um saldo de ${partidasRankeadas} e está no nível de ${nivel[0]}`)
} else if (partidasRankeadas > 10 && partidasRankeadas <= 20) {
    console.log(`O Herói tem um saldo de ${partidasRankeadas} e está no nível de ${nivel[1]}`)
} else if (partidasRankeadas > 20 && partidasRankeadas <= 50) {
    console.log(`O Herói tem um saldo de ${partidasRankeadas} e está no nível de ${nivel[2]}`)
} else if (partidasRankeadas > 50 && partidasRankeadas <= 80) {
    console.log(`O Herói tem um saldo de ${partidasRankeadas} e está no nível de ${nivel[3]}`)
} else if (partidasRankeadas > 80 && partidasRankeadas <= 90) {
    console.log(`O Herói tem um saldo de ${partidasRankeadas} e está no nível de ${nivel[4]}`)
} else if (partidasRankeadas > 90 && partidasRankeadas <= 100) {
    console.log(`O Herói tem um saldo de ${partidasRankeadas} e está no nível de ${nivel[5]}`)
} else if (partidasRankeadas >= 101) {
    console.log(`O Herói tem um saldo de ${partidasRankeadas} e está no nível de ${nivel[6]}`)
}
