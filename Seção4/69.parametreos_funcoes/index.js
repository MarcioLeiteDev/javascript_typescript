
// argumentos que sustenta todos os argumentos enviados
function funcao(a,b,c){
    let total = 0;
    for (let argumento of arguments){
        total += argumento;
    }
    console.log(total,a,b,c);
}
funcao(1,2,3,4,5,6,7,8,9,10, 320, 1200);

function func(a, b, c, d, e, f ){
    console.log(a,b,c,d,e), f
}
func(1,2,3)

function soma (a, b , c){
    
    console.log( a + b + c)
}
soma(2 , 1 , 200)


function objeto( {nome, sobrenome, idade}){
    console.log( nome, sobrenome, idade )
}
let obj = { nome: 'Marcio' , sobrenome: 'Leite' , idade: '45'}
objeto( obj )

function array([valor1 , valor2, valor3]){
    console.log( valor1, valor2, valor3)
}
let varray = [ 'Marcio' , 'Leite' , 30]
array(varray)

function conta(operador, acumulador, ...numeros){
    for(let numero of numeros){
       if(operador === '+') acumulador += numero
       if(operador === '-') acumulador -= numero
       if(operador === '*') acumulador *= numero
       if(operador === '/') acumulador /= numero

        console.log( acumulador)
        console.log(arguments)
    }
    console.log(operador, acumulador, numeros)
}
conta('/' , 1 , 20, 30, 40, 50)