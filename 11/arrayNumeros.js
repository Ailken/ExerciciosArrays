//const original = [5, 7, 13, 17, 26, 34, 118, 245];
const original = [5, 7, 10, 13, 17, 21, 26, 34, 100, 118, 245];

const novoArray = original.filter(numero => (numero >= 10 && numero <= 20) || numero > 100);

console.log(novoArray)