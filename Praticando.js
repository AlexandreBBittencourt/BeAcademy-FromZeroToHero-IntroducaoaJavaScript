//Aula Praticando
//1. Declare uma variável do tipo person
let person

//2. Que tipo de dado é a variável acima? Undefined
//O comando console.log(typeof person) mostra o tipo da variável

/*3. Declare uma variável e atribua os seguintes valores para cada um dos dados:
    *name: String
    *age: Number (Integer)
    *weight: Number (Float)
    *isAdmin: Boolean
    *isAMan: Boolean*/

person = {//Tipo: Objeto
    name: "Erling",
    age: 33,
    weight: 89.3,
    isAdmin: false,
    isAMan: true
}

/*4. A variável person abaixo é de que tipo de dados?
  Objeto
  4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.
  4.2 Mostre no console a seguinte mensagem:
    O humano <name> tem o peso <weight> kg.*/

let human = {
    name: "Lucas Prates",
    age: 27,
    weight: 79.3,
    isAdmin: false,
    isAMan: true
}
console.log(`O humano ${human.name} tem o peso ${human.weight}kg.`)

/*5. Declare uma variável do tipo Array, de nome humans e atribua a ela nenhum valor, ou seja, somente o Array vazio.*/

let humans = []

/*6. Reatribua valor para a variável acima, colocando dentro dela o objeto human da questão 4 (não copiar e colocar o objeto, mas usar o objeto criado e inserí-lo no Array.)*/

humans = [human]
console.log(humans)

/*7. Coloque no console o valor da posição zero do Array acima*/

console.log(humans[0])

//8. Crie um novo objeto human e coloque na posição 1 do Array humans

let newHuman = {
    name: "Cristiane Moreira",
    age: 32,
    weight: 57.1,
    isAdmin: true,
    isAMan: false
}
humans = [human, newHuman]

/*9. Sem rodar o código, responda os resultados da saída abaixo:

a)*/ 
console.log(a)//Obs.: O hoisting refere-se à declaração, por isso retorna undefined ao invés de erro.
var a = 1

// Resposta? Undefined

// b) 
let b
console.log(b)
{
    let b = 2
    console.log(b)
}
console.log(b)

/*Resposta? Undefined - 2 - undefined

c)*/
//console.log(c)
{
    let c = 3
    console.log(c)
}
//console.log(c)

/*Resposta? Undefined(erro de sintaxe, variável não declarada) - 3 - Undefined

d)*/
const d = 10
{
    console.log(d)
    const d = 20
    console.log(d)
}

/*Resposta? erro de sintaxe, pois constante não pode ter valor alterado ao longo do código.*/