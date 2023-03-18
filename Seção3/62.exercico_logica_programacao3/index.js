/*
escrever uma função que recebe um numero
retornar o seguinte
numero é divisivel por 3 = Fizz
numero é divisivel por 5 = Buzz
numero divisivel 3 e 5 = FizzBuzz
numero não e divisivel por 3 e 5 = retorna propro numero
checar se o numero é um numero
use função com numeros de 0 a 100
*/

function fizzBuzz(n) {

    if(n % 3 === 0 && n % 5 === 0)  return 'FizzBuzz';

    if (n % 3 === 0)  return 'Fizz';

    if (n % 5 === 0)  return 'Buzz';

    return n;

}

for(let i = 0; i <= 100; i++){
    console.log(fizzBuzz(i));
}

//console.log(fizzBuzz(10))
