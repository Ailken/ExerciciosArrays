const numeros = [8, 21, 4, 1];

const menor = numeros.map(Number).reduce(function (a, b) {
    return Math.min(a, b);
})
const maior = numeros.map(Number).reduce(function(a, b) {
    return Math.max(a, b);
})
const diferenca = (maior - menor);
console.log(diferenca);