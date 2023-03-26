const data = new Date();
console.log(data);
setResultado(diaSemana());



function setResultado(msg) {
    const resultado = document.querySelector('h1');
    resultado.innerHTML = msg;
}

function diaSemana() {

    const data = new Date();

    const now = new Date;

    let diaSemanaText;
    let mesText;

    diasemana = data.getDay();
    mes = data.getMonth() + 1;
    ano = data.getYear();
    hora = data.getHours();
    minuto = data.getMinutes();

    switch (diasemana) {
        case 0:
            diaSemanaText = 'Domingo';
            break;
        case 1:
            diaSemanaText = 'Segunda';
        case 2:
            diaSemanaText = 'Terça';
            break;
        case 3:
            diaSemanaText = 'Quarta';
            break;
        case 4:
            diaSemanaText = 'Quinta';
            break;
        case 5:
            diaSemanaText = 'Sexta';
            break;
        case 6:
            diaSemanaText = 'Sabado';
            break;

    }

    switch (mes) {
        case 1:
            mesText = 'Janeiro';
            break;
        case 2:
            mesText = 'Fevereiro';
            break;
        case 3:
            mesText = 'Março';
            break;
        case 4:
            mesText = 'Abril';
            break;
        case 5:
            mesText = 'Maio';
            break;
        case 6:
            mesText = 'Junho';
            break;
        case 7:
            mesText = 'Julho';
            break;
        case 8:
            mesText = 'Agosto';
            break;
        case 9:
            mesText = 'Setembro';
            break;
        case 10:
            mesText = 'Outobro';
            break;
        case 11:
            mesText = 'Novembro';
            break;
        case 12:
            mesText = 'Dezembro';
            break;

    }


    return `${diaSemanaText}, ${now.getDate()} de ${mesText} de ${now.getFullYear()}`;







}
console.log(diasemana,  mes , ano);