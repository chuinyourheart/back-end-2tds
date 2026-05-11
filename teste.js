//1. Declare 5 variáveis para representar uma viagem (destino, nome do viajante, cidade de origem, duração em dias e meio de transporte)
//2. Organizar uma forma de imprimir esses valores com interpolação ou saída individual
//Nota: Ao fazer interpolação, inserir crase

const destino = "Japão";
const nomeViajante = "Juniu";
const cidadeOrigem = "Curitiba";
let duracao = 25;
let transporte = "Avião";

console.log(`O viajante ${nomeViajante} deseja viajar de ${cidadeOrigem} até ${destino}, de ${transporte} em um
percurso de ${duracao} horas.`);

//3. Crie duas variáveis númericas com o custo da passagem, hospedagem e alimentção
//4. Imprimir uma soma dos valores

let custoDaPassagem = 6.000;
let hospedagem = 800;
let alimentacao = 500;

let total = custoDaPassagem + hospedagem + alimentacao;

console.log("O custo total da viajem será de: R$ " + total + " reais.");
