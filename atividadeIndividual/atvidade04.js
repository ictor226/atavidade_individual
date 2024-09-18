/*Escreva um programa que peça ao usuário para digitar um número e exiba todos 
os números primos de 1 até esse número. */
// pegui do gpt, porem antes de pegar do gpt tentei fazer sozinho so que nao consegui tentei ver videos porem literalmente so tinha de pyton :(
var numero = parseInt(prompt("Digite um número: "));
var primos = ""; // Para armazenar os números primos

for (var i = 2; i <= numero; i++) {
    var ehPrimo = true; // Supomos que i é primo

    for (var j = 2; j < i; j++) {
        if (i % j === 0) { // Se i é divisível por j
            ehPrimo = false; // Não é primo
            break; // Para de verificar
        }
    }

    if (ehPrimo) {
        primos += i + " "; // Adiciona o número primo à string
    }
}

if (primos) {
    alert("Números primos de 1 até " + numero + ": " + primos);
} else {
    alert("Não há números primos até " + numero + ".");
}


