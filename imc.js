// Calculador de IMC

let nome = "juniu" ;
let peso = 66; 
let altura = 1.77;

//Função que calcula e retorna o IMC
function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura)
};

let resultado = calcularIMC(peso, altura)
console.log(`IMC de ${nome}: ${resultado}`);

