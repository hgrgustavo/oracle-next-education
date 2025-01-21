alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 9;
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt("Digite um número entre 1 e 10;");

    if (numeroSecreto == chute) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`); // Template Strings
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}
