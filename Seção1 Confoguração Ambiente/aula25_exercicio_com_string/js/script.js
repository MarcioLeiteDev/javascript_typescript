const nome = prompt('Digite seu nome');

//const idade = prompt('Digite sua idade');

console.log(nome );

document.body.innerHTML += `O seu nome é <strong>${nome} </strong> <br />`;

document.body.innerHTML += `O seu nome tem <strong>${nome.length} </strong> letras <br />`;

document.body.innerHTML += `A segunda letra do seu nome e <strong>${nome[1]}</strong> outra forma <strong>${nome.charAt(1)}</strong> <br />`;

document.body.innerHTML += `Qual o primeiro indice da letra A do seu nome:<strong> ${nome.search('a')} ou ${nome.indexOf('a')} </strong> <br />`;

document.body.innerHTML += `Qual o ultimo indice da letra a do seu nome: <strong>${nome.lastIndexOf('a')} </strong> <br />`;

document.body.innerHTML += `As ultimas 3 letras do seu nome são: <strong> ${nome.slice(-3)} </strong> <br />`;

document.body.innerHTML += `As palavras do seu nome são: <strong> ${nome.split(' ')} </strong> <br />`;

document.body.innerHTML += `Seu nome com letra maiuscula <strong> ${nome.toUpperCase()} </strong> <br />`;

document.body.innerHTML += `Seu nome com letra minuscula <strong> ${nome.toLowerCase()} </strong> <br />`;





