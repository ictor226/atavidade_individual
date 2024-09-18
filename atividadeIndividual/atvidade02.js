/*Crie uma função que receba um array de números e retorne um novo array 
contendo apenas os números pares.*/
//pesquisei no yt, por nao saber etambem pedi para o chat gpt explicar cada acao


function filtrarPares(numeros) {
    var pares = [];
    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]);
        }
    }
    return pares;
}

var arrayDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var numerosPares = filtrarPares(arrayDeNumeros);
console.log(numerosPares);

/*Função filtrarPares: Recebe um array de números como argumento.
Array pares: Cria um novo array para armazenar os números pares encontrados.
Loop for: Percorre cada elemento do array de entrada.
Verificação de par: Usa uma condição (% 2 === 0) para identificar números pares.
Adicionar ao array pares: Números que atendem à condição são adicionados ao array pares.
Retorno: A função retorna o array pares com todos os números pares.
Exemplo de uso: Um array de números de 1 a 10 é fornecido à função, e os números pares resultantes são exibidos no console. */
