const nome = ['Marcio Leite' , 'Disbiriflix' , 'Mano Brow'];


for (let i in nome){
    console.log(nome[i]);
}

console.log('##################');

for(let i = 0; i < nome.length ; i++){
    console.log(nome[i]);
}

console.log('##################');

for(let valor of nome){
    console.log(valor);
}

console.log('##################');

nome.forEach(function(valor, indice, array){
    console.log(valor, indice , array);
})

console.log('##################');

const pessoa = {
    nome: 'Marcio',
    sobrenome: 'Leite'
};

for (let chave in pessoa){
    console.log(chave, pessoa[chave])
}