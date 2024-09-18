/*Escreva um programa que peça ao usuário para digitar vários números e exiba a 
soma deles. A entrada de dados termina quando o usuário digitar 0 */


var soma = 0; 
var numero;

do {// eu aprendi que "do" seria O código dentro do "do" pede ao usuário para digitar um número e soma esse número à variável soma.
    numero = parseInt(prompt("Digite um número (digite 0 para poder finalizar o calculo):")); // isso vai solicitar para que a pessoa coloque o numero
    soma += numero; 
} while (numero !== 0); // while (numero !== 0); isso é oque faz ele terminar

alert("A soma dos números digitados é: " + soma); 