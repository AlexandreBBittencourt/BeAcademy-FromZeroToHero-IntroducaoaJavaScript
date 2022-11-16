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