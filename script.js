//Exibir no terminal
console.log("Hello World");
//exibir no navegador
document.write("Olá navegador! OI");
//um alerta
/*
Comentário de Bloco
alert("Alerta de Confirmação!");

parseFloat é um método que analisa um
argumento string e retorna um número de ponto flutuante
*/

//Capturar o nome do Aluno
var nome = window.prompt("Informe o Nome:");

//Guardar a primeira nota
var nota1 = window.prompt("Digite a Nota 1:");

//Converte a nota1 de texto para decimal
nota1  = parseFloat(nota1); 

//Guardar a segunda nota
var nota2 = window.prompt("Digite a Nota 2:");
//Converte a nota2 de texto para decimal
nota2 = parseFloat(nota2);

//calculo a média das duas notas
var media = (nota1 + nota2)/2;

//Gero a mensagem de exibição do nome e da média do aluno
window.alert("A média das notas é:" + media);
windows.alert(mensagem);