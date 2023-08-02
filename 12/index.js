let filaDeDentro = ["Jose", "Maria", "Joao"];
let filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];
//1. Verificar quantas pessoas podem ser transferidas para a filaDeDentro
//2. transferencia de pessoas da filaDeFora para a filaDeDentro até que o limite seja alcançado;
//3. imprimir a fila de dentro e a de fora atualizadas

const limiteFilaDentro = 6;

const espacosDisponiveis = limiteFilaDentro - filaDeFora.length;

filaDeDentro = filaDeDentro.concat(filaDeFora.slice(0, espacosDisponiveis));
filaDeFora = filaDeFora.slice(espacosDisponiveis);

console.log(filaDeDentro);

console.log(filaDeFora);