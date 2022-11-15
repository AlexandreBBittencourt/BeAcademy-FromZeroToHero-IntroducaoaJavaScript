//Aula Tipos de Dados
//Declarar
var nome = "Luan"
console.log(nome)
nome = 32
console.log(nome)
nome = "Monteiro"
console.log(nome)

//Aula Variáveis - Parte I
/*Supostamente no caso abaixo aconteceria o que é chamado de "Hoisting", que seria transformar a variável local "nome2" em
uma variável global, o que também só ocorreria com variáveis do tipo "var". Assim esperava-se que a primeira chamada do "console.log" retornasse o valor "Luan", que foi declarado na sequência do código. Porém o hoisting não ocorreu.*/

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

//Aula Variáveis - Parte II
//Objetos
const human = {
    nome: "Luan Monteiro",
    age: 30,
    weight: 90,
    isAthlete: true,
    walk: function walking() {
        console.log('Ando bastante!')
    }
}//Variável do tipo Objeto
console.log(human)//Impressão de todos os valores do objeto
console.log({human})//Impressão de objeto
console.log(human.nome)//Impressão de parâmetros do objeto
console.log(human.age)
console.log(human.weight)
console.log(human.isAthlete)
console.log(human.walk())
//Concatenação
//Faz-se a concatenação de strings com o uso do conector "+"
console.log("O humano " + human.nome + " tem a idade " + human.age)
//Ingerpolação: a interpolação tema guinte sintaxe (entre crases)
console.log(`O humano ${human.nome} tem a idade ${human.age} anos.`)
//Concatenação e interpolação tem idéias semelhantes tendo como difereça basicamente a sintaxe.

//Array (vetor)
const animals = [
    "Elefante", //Posição 0
    "Gato", //Posição 1
    "Leão", //Posição 2
    "Cachorro", //Posição 3
    {//Posição 4
        nome: "Aegon",
        age: 4,
        weight: 28,
        type: "Cachorro",
        racial: "Samoyeda"
    }
]
console.log(animals)
console.log(animals.length)//Imprimir o tamanho do vetor
console.log(animals[4])//Imprimir posição selecionada