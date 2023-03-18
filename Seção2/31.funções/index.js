function saudacao(nome){
    console.log(`Bom dia ${nome}`);
}

const variavel = saudacao('Marcio');

console.log(variavel);

/// bseparação

function soma(x,y){
    const resultado = x + y;
    return resultado;
}

console.log(soma(10,20));

//outro jeitp

//const raiz = function(n){
//    return n ** 0.5;
//};

//hero function
const raiz = (n) => {
    return n ** 0.5;
};

//simplificar ecrita função
const raiz2 = n => n ** 0.5;

console.log(raiz(9))
console.log(raiz(16))
console.log(raiz(25))
console.log(raiz2(25))