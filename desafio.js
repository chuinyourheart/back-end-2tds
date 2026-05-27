// 1. Declarar 5 variáveis para representar o perfil de um jogador.
// Fazer uma saída de forma interpolada. (`${}`)
// "Jogador", se ele eh básico, idade, apelido, jogo e time. 
// 2. Crie duas variáveis numérica e exibir uma multiplicação ou subtração.
// 3. Declarar pontos 1 e 2 (fases). Calcular o total, aa diferença entre fases, nível  atual e pontos faltando para o próximo nível.
// 4. A partir da declaração de níveis e pontos, exiba se o jogador é "avançado", se foi "banido" ou se pode participar de "torneios".
// 5. TODOS - De acordo com as variáveis lançadas e declarando, quais processos ou qual processo pode ser alterado para uma função.

1.
let apelido = "AngelClouds";
let idade = 17;
let ehBasico = true;
let jogo = "Roblox";
let timeAtual = "Red and Blue (murder's X sheriff's)";
let team = "Murder"

console.log(`Perfil do Jogador`);
console.log(`Apelido: ${apelido}`);
console.log(`Idade: ${idade} anos`);
console.log(`Tipo de Conta: ${ehBasico}, "Básico"`);
console.log(`Jogo Principal: ${jogo}`);
console.log(`TimeAtual: ${timeAtual}`);
console.log(`Team: ${team} Team Blue`);

2.
let danosSheriff = 45;
let danosMurder = 20;
let danosInocente = 55;

let resultado = danosSheriff - danosMurder - danosInocente;

console.log(`Danos de Sheriff: ${danosSheriff}`);
console.log(`Danos de Murder: ${danosMurder}`);
console.log(`Danos de Inocente: ${danosInocente}`);
console.log(resultado);

3.
let moedasGanhasPartida1 = 17;
let moedasGanhasPartida2 = 45;

let resultadoMoedasGanhas = moedasGanhasPartida1 + moedasGanhasPartida2; 
let diferencaFases = moedasGanhasPartida1 - moedasGanhasPartida2; 

const pontosParaOPróximoNível = 987;
let nivelAtual = 207;
let nivelFaltando = 19;

console.log(`Moedas ganhas na primeira partida: ${moedasGanhasPartida1}`);
console.log(`Moedas ganhas na segunda partida: ${moedasGanhasPartida2}`);
console.log(resultadoMoedasGanhas);

console.log(`diferenças de fases: ${moedasGanhasPartida1 - moedasGanhasPartida2}`);

console.log(`Nível atual do jogador: ${nivelAtual}`);
console.log(`Pontos para o próximo nível: ${pontosParaOPróximoNível}`);
console.log(`Nível faltando: ${nivelFaltando}%`);

4.
let ehAvancado = true;
let foiBanido = true;
let torneios = true;
let motivosDeBan = "Hack";
let motivosDeTorneios = "Banido";

console.log(`Tipo de jogador: ${ehAvancado}, "Avançado".`);
console.log(`Status de conta: "Banido", ${foiBanido}.`);
console.log(`Motivos de Ban: Ter usado ${motivosDeBan} nas partidas.`);
console.log(`Torneios do jogador: "Banido", ${torneios}.`);
console.log(`Motivos de não comparecer em torneios: ${motivosDeTorneios}.`);

5.
