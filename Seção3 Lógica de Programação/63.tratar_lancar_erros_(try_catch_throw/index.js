try{
    console.log(naoexite);
}catch(e){
    console.log('Nao existe não existe');
    //console.log(e)
}

function soma(x,y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw('x e y recisam ser numeros');
    }
    return x + y;
}

console.log(soma(10,20));
console.log('######################');


try{
console.log('abri um arquivo');
console.log('manipulei arquivo');
console.log('fechei arquivo');
}catch(e){
    console.log('tratando o erro');
//execut quando gera erro
}finally{
    console.log('fechar todos os arquivos e conexões, pq sempre su executado');
    //semre
}
