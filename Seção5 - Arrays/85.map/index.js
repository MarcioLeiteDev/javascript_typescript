// dobre os valores dos numeros

const numeros = [5,50, 80, 1,2,3,5,8,7,11,15,22,27]

const numerosEmDobro = numeros.map(valor => valor * 2)

console.log(numerosEmDobro)

// retorne apensas uma string com o nome das pessoas
// remova apensa a chave "nome" do objeto
// adicione uma chave id a cada objeto
const pessoas = [
    { nome: 'Luiz' , idade: 65},
    {nome: 'Maria' , idade: 23},
    {nome: 'eduardo' , idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace' , idade: 47}
];

const nomes = pessoas.map(obj => obj.nome )
const idades = pessoas.map(function(obj){
   // delete obj.nome
    return { idade: obj.idade } 
})

const comIds = pessoas.map(function(obj, indice){
    const newObject = { ...obj }
     newObject.id = indice + 1
     return newObject
})

console.log(pessoas)

