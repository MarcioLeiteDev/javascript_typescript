/* 
Luiz Otavio Miranda tem 30 anos, pesa 84Kg
tem 1.8 de altura e seu IMC é de 25.9259595925924
*/

const nome = 'Marcio'
const sobrenome = 'Leite'
const idade = 45
const peso = 64
const altura = 1.65
let imc // peso / (altura * altura)
let resultImc = peso / (altura * altura)
let anoNascimento;

anoNascimento = 2022 - idade;

console.log(nome , sobrenome ,'tem' , idade , 'pesa' , peso , 'Kg tem' , altura , 'e seu IMC é' , resultImc , 'ele nasceu no ano' , anoNascimento )