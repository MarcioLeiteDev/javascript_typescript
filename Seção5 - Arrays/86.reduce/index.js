// some todos os numeros
// retorne um array com os pares (filter)
// retorn um array com dobro dos valores (map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// const total = numeros.reduce(function(acumulador, valor, indice, array){
//     acumulador += valor
//     return acumulador
// }, [] )

// const total = numeros.reduce(function(acumulador, valor, indice, array){
//     if( valor % 2 !== 0) acumulador.push(valor)
//     return acumulador
// }, [] )

const total = numeros.reduce(function (acumulador, valor, indice, array) {
    acumulador.push(valor * 2)
    return acumulador
}, [])

console.log(total)

const pessoas = [
    { nome: 'Luiz', idade: 65 },
    { nome: 'Maria', idade: 23 },
    { nome: 'eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];