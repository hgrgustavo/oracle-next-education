let idade = parseInt(prompt("Qual a sua idade?"));
let maioridade = idade > 17 ? true : false;
let mensagem = idade == true ? "maior" : "menor";

console.log(`Você é ${mensagem}`);
