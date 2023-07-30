const numeros = [3, 24, 1, 8, 11, 7, 15, 55];

//const maior = Math.maior(...numeros);

const maior = numeros.map(Number).reduce(function(a, b) {
    return Math.max(a, b);
})
console.log(maior);