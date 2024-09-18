/*Escreva um programa que peça ao usuário para digitar uma data e exiba essa data 
por extenso (por exemplo, 01/01/2024 -> 1 de Janeiro de 2024) */


//esse foi o mais facil pra min pois nois ja tinha feito um bem parecido so dei umas revisada e tentei fazer
var data = prompt("Digite uma data no formato dd/mm/aaaa: ");
var partes = data.split("/");
var dia = partes[0]; 
var mes = partes[1]; 
var ano = partes[2]; 


var meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];


var nomeMes = meses[parseInt(mes) - 1];
var dataPorExtenso = dia + " de " + nomeMes + " de " + ano;

alert(dataPorExtenso);

//spli divide a string sempre que encontra o caractere 

/*                esa vai ser minha explicao para a sala no dia da apresentacao

Resumo do Código
Entrada do Usuário: O programa solicita que o usuário digite uma data no formato dd/mm/aaaa.

Divisão da Data: Utiliza split("/") para dividir a string da data em partes (dia, mês e ano), armazenando-as em um array.

Meses por Extenso: Define um array com os nomes dos meses de Janeiro a Dezembro.

Obtenção do Mês: Converte o número do mês para obter o nome correspondente usando o array.

Formatação da Data: Monta a string da data no formato "dia de mês de ano".

Exibição do Resultado: Exibe a data formatada em um alerta. */