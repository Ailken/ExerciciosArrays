const nomes = ["Ana", "Joana", "Carlos", "amanda"];

let nomeComA = [];

for (let nome of nomes) {
    if (nome[0] === "a" || nome [0] === "A")
        nomeComA.push(nome);
}
console.log(nomeComA);