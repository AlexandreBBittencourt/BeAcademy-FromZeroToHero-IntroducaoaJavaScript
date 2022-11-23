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

//Hoisting
digaMinhaIdade ()
function digaMinhaIdade () {
    return console.log(30)
}

//Callback Function => chamar uma função dentro de outra

function minhaFuncao (callback) {
    console.log('Início da minha função.')
    callback(15, 15)
    console.log('Final da minha função.')
}
minhaFuncao ((num3, num4) => {
    return console.log(num3 + num4)
})

//Função Construtora
//Para declarar uma função construtora é necessário que a primeira letra de seu nome seja maiúscula, ou o JavaScript não a entenderá como construtora.

function Sum () {
    this.num5, //Para declarar variáveis em uma função construtora usa-se "this"
    this.num6,
    this.calc = function (num5, num6) {
        return total3 = num5 + num6
    }
}

const math = new Sum () //Instanciando
console.log(math.calc(32, 32))

const math2 = new Sum ()
console.log(math2.calc(50, 20))

const math3 = new Sum ()
const num7 = math3.num7 = 36
const num8 = math3.num8 = 64
console.log(math3.calc(num7, num8))

const math4 = new Sum ()
const number3 = math4.num7 = 30
const number4 = math4.num8 = 10
console.log(math4.calc(number3, number4))

const math5 = new Sum ().calc (45, 45)
console.log(math5)

//Função Construtora parametrizada

function Sum2 (num11, num12) {
    this.num9 = num11,
    this.num10 = num12,
    this.calc2 = function (num9, num10) {
        return total4 = num9 + num10
    }
}

const math6 = new Sum2 ()
console.log(math6.calc2(70, 85))

//Função nativa do JavaScript
const data = new Date ();
console.log(data)

const data2 = new Date ().getDay();//Dia da semana 1~7 = segunda~domingo
console.log(data2)

const data3 = new Date ().getDate();//Dia do mês
console.log(data3)