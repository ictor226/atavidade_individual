/*Faça um programa que peça ao usuário para digitar uma palavra e exiba a 
quantidade de letras maiúsculas e minúsculas*/

var palavra = prompt("Digite uma palavra: ");
var maiusculas = 0;
var minusculas = 0;

for (var i = 0; i < palavra.length; i++) {
    if (palavra[i] === palavra[i].toUpperCase() && palavra[i] !== ' ') {
        maiusculas++;
    } else if (palavra[i] === palavra[i].toLowerCase() && palavra[i] !== ' ') {
        minusculas++;
    }
}

alert("Quantidade de letras maiúsculas: " + maiusculas);
alert("Quantidade de letras minúsculas: " + minusculas);


/*alavra[i] === palavra[i].toLowerCase():
Aqui, a condição verifica se a letra na posição i é minúscula. O método toLowerCase() converte a letra para minúscula, e se ela já for minúscula, a comparação será verdadeira.

&& palavra[i] !== ' ':
Novamente, verifica se a letra não é um espaço, garantindo que espaços não sejam contados como letras minúsculas.


*/