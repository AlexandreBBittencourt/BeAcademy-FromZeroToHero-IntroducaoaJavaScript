//Declarar
var nome = "Luan"
console.log(nome)
nome = 32
console.log(nome)
nome = "Monteiro"
console.log(nome)

/*Supostamente no caso abaixo aconteceria o que é chamado de "Hoisting", que seria transformar a variável local "nome2" em
uma variável global, o que também só ocorreria com variáveis do topo "var". Assim esperava-se que a primeira chamada do "console.log" retornasse o valor "Luan", que foi declarado na sequência do código. Porém o hoisting não ocorreu.*/

//Teste de declarações de variáveis
console.log('Primeiro teste da variável "nome2":', nome2)
{//Início do escopo (bloco de código)
    var nome2 = "Luan"//Variável local declarada dentro do escopo
}//fim do escopo
console.log('Segundo teste da variável "nome2":', nome2)

//Teste de declaração de variável local
let nome3 = "Cássio"
console.log('Primeiro teste da variável "nome3":', nome3)
{
    let nome3 = "Andrade"//Declaração local
    console.log('Segundo teste da variável "nome3":', nome3)
}
console.log('Terceiro teste da variável "nome3":', nome3)