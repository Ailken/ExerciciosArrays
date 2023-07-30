const original = [1, 4, 12, 21, 53, 88, 112, 26];

const par = x => x % 2 === 0;

let pares = [];

for (i = 0; i < original.length; i++) {
    if (par(original[i])) {
        pares.push(original[i]);
    }
}
console.log(pares);