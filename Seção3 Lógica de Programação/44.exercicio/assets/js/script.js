
//captrar event de submit d formulario

const form = document.querySelector('.formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    // console.log('evento prevenido');
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso Inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura Inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const  msg = `Seu IMC é ${imc} (${nivelImc})`;

    setResultado(msg, true);

   // console.log(imc , nivelImc);
    // setResultado();
});

function getNivelImc(imc) {
    const nivel = [
        'Abaixo do Peso',
        'Pesos Normal',
        'Sobrepeso',
        'Obesidade grau 1',
        'Obesidade grau 2',
        'Obesidade grau 3'
    ];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];

}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criarP() {
    const p = document.createElement('p');
    return;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
  
    resultado.innerHTML = msg;
    const p = criarP();

    if(isValid){
        resultado.classList.add('paragrafo-resultado-true'); 
    }else{
        resultado.classList.add('paragrafo-resultado-false'); 
    }

   // resultado.classList.add('paragrafo-resultado');

}