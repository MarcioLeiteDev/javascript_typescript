// FILTER , MAP, REDUCE

const numeros = [5,50, 80, 1,2,3,5,8,7,11,15,22,27]

function callbackFilter(valor , indice, array ){
    return valor > 10

}

//const numerosFiltrados = numeros.filter(callbackFilter);

//const numerosFiltrados = numeros.filter(function(valor){
//    return valor > 10
//})

//const numerosFiltrados = numeros.filter((valor) => {
 //   return valor > 10
//})

const numerosFiltrados = numeros.filter(valor => valor > 10)

console.log(numerosFiltrados)

const pessoas = [
    { nome: 'Luiz' , idade: 65},
    {nome: 'Maria' , idade: 23},
    {nome: 'eduardo' , idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace' , idade: 47}
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length <= 5)  
const pessoasAcimaCinquentaAnos = pessoas.filter(obj => obj.idade >= 50)
const pessoasTerminaComA = pessoas.filter( obj => {
    return obj.nome.toLowerCase().endsWith('a')
})

console.log(pessoasComNomeGrande)
console.log(pessoasAcimaCinquentaAnos)
console.log(pessoasTerminaComA)