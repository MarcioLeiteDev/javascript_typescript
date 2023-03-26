//for in -> le os indices ou chaves do objeto

const frutas = [
    'maça',
    'laranja',
    'pera',
    'uva'
];

for( let i in frutas){
    console.log(frutas[i]);
}

pessoa = {
    nome: 'Marcio',
    sobrenome: 'Leite',
    idade: 45
}

for( let a in pessoa){
    console.log(pessoa[a]);
}
/*
for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}
*/

