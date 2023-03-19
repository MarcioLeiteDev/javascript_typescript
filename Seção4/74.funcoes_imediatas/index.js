// IIFE - Immediately invoked function expression


(function(idade , peso , altura){
    sobrenome = 'Disbiriflix'
    
    function criaNome(nome){
        return nome + ' ' + sobrenome
    }

    function falaNome(){
        console.log(criaNome('Marcio'))
    }

    falaNome()
    console.log(idade,peso,altura)


})('45' , 65 , 1.65);

