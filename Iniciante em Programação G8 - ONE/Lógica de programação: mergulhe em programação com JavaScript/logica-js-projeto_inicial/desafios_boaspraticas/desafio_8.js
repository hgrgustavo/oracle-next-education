let numero = parseInt(prompt("Insira um valor"));
let espectro;

if (numero == 0) {
    espectro = "Zero";
}

if (numero > 0) {
    espectro = "Positivo";
} 

if (numero < 0) {
    espectro = "Negativo";
}

console.log(espectro);