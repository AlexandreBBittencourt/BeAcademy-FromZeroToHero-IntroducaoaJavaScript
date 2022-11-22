//Exemplo 1
//Também chamada de método (method)
function myFirstFunction () {
    //Código da função
    console.log("Teste de função")
}

//Executando a função

myFirstFunction ()

//Função com parâmetros
function sum (number1, number2) {
    console.log(number1 + number2)
}

sum (32, 24)//Atibuiu aos parâmentros number1 = 32 e number2 = 24

//Função com retorno
function myFirstFunctionWithReturn (num1, num2) {
    let total = num1 + num2
    return total //Vai retornar o total
}

console.log(myFirstFunctionWithReturn (20, 20))

//Restaurante
function meuPratoDeComida (comida1, comida2, comida3, comida4) {
    return `Meu prato de comida é: ${comida1}, ${comida2}, ${comida3} e ${comida4}!`
}

const prato = meuPratoDeComida ('arroz', 'feijão', 'bife', 'batatas fritas')
console.log(prato)

//Arrow Function
const myFirstArrowFunction = (numb1, numb2) => {
    let total2 = numb1 + numb2
    return total2
}
const result = myFirstArrowFunction(20, 20)
console.log(result);//Foi necessário terminar a linha com ";" para eliminar erro que estava ocorrendo ao executar a função anônima abaixo.

//Função Anônima: é uma função que é executada assim que é declarada, sendo invocada de imediato.
(function () {
    console.log('Execução imediata.')
})()

setTimeout (function () {
    console.log('Timeout de 3s.')
},3000)

//Parte 1

// let assunto
// function criarAssunto (assunto) {
//     return assunto
// }

// console.log(criarAssunto());

//Parte 2

// let assunto = 'Estudar'
// function criarAssunto (assunto) {
//     return assunto
// }
// console.log(assunto) // resposta => 'Estudar'
// console.log(criarAssunto(assunto)); // resposta => 'Estudar'

//Parte 3

// let assunto = 'Estudar'
// function criarAssunto (assunto) {
//     assunto = 'Escutar música'
//     return assunto
// }
// console.log(assunto) // resposta => 'Estudar'
// console.log(criarAssunto(assunto)); // resposta => 'Escutar música'

//Parte 4

let assunto = 'Estudar'
function criarAssunto () {
    assunto = 'Escutar música'
    return assunto
}
console.log(assunto) // resposta => 'Estudar'
console.log(criarAssunto(assunto)); // resposta => 'Escutar música'