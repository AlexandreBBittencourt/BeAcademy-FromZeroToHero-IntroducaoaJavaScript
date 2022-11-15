//Comentário em linha
/*Comentário em bloco*/

//Teste de regras de sintaxe
console.log('Aspas Simples')
console.log("Aspas Duplas")
console.log('É possível "combinar" Aspas Simples com as Duplas.')
console.log("E 'vice-versa'.")
//console.log("Porém não se pode "duplicar" qualquer uma")
console.log(`Porém o Template Literal habilita muitas novas possibilidades.`)

//Teste de dados Tipo Number
console.log(12)//Integer
console.log(24.5)//Float
console.log(24/5*2)//Cálculo
console.log(Math.round(24/5*2))//Função arredondar para cima
console.log(10 > 20)//Boolean

//Teste Objetos
console.log({
    marca: 'FIAT',
    largura: '550cm',
    peso: 1,
    velocidade: (90 * 200)*2,
    andar: function () {console.log("Sua velocidade é de 200")},
    arCondicionado: true
})

//Teste de vetores
console.log(["0 - Bolacha", "1 - Coca-Cola", "2 - Verduras", "3 - Água"])