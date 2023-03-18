const numero = Number(prompt('Digite um numero'));

const numeroTitulo = document.getElementById('numero-titulo');

const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Seu numero + 2 = ${numero + 2}</p>
    <p>Raiz quadrada é : ${numero ** 0.5} </p> 
    <p>Numero é inteiro : ${Number.isInteger(numero)}</p>
    <p>é NAN : ${Number.isNaN(numero)} </p>
    <p>Arredaondar para baixo : ${Math.floor(numero)} </p>
    <p>Arredaondar para cima : ${Math.ceil(numero)} </p>
    <p> Duas casas decimais : ${numero.toFixed(2)} </p>
`;

console.log(numero)