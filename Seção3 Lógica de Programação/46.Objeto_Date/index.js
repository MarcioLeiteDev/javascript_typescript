const tresHoras = 60 * 60 * 3 * 1000;

const umDia = 60 * 60 * 24 * 1000 * 3650;

 const data = new Date();
// const data = new Date('2019-04-20 20:20:59.100')

console.log(data.toString());

console.log('Dia', data.getDate());
console.log('Mês' , data.getMonth() + 1);
console.log('Ano', data.getFullYear());
console.log('Hora' , data.getHours());
console.log('Minutos', data.getMinutes());
console.log('Segundos' , data.getSeconds());
console.log('Milisegundos' , data.getMilliseconds());
console.log('Dia Semana' , data.getDay());

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
   // console.log(data);
}

const dataBrasil = formataData(data);
console.log(dataBrasil);