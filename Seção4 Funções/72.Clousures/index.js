function retornaFuncao(nome){
   
    return function (){
        return nome
    }
}

const funcao = retornaFuncao('Disbiriflix')
const funcao2 = retornaFuncao('Bribru')
console.dir(funcao)
console.dir(funcao2)

console.log(funcao() , funcao2())