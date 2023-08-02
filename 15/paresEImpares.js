const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

for (let i = 0; i < original.length; i++) {
    const numero = original[i];
    if (numero % 2 === 0) {
        pares.push(numero);
    } else {
        impares.push(numero)
    }
}

console.log(pares);
console.log(impares);