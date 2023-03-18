function relogio() {


    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    //console.log(criaHoraDosSegundos(10));

    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');

    let segundos = 0;
    let timer;

    function iniciaRelogio() {
        timer = setInterval(function (e) {
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000);
    }

    //adicionar evento de clique
    iniciar.addEventListener('click', function (event) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();
        //  alert('Clquei em Iniciar');
    });

    pausar.addEventListener('click', function (event) {
        relogio.classList.add('pausado');
        clearInterval(timer);
        //alert('Clquei em Pausar');
    });

    zerar.addEventListener('click', function (event) {

        clearInterval(timer);
        relogio.innerHTML = '00:00:00'
        segundos = 0;
        // alert('Clquei em Zerar');
    });

}

relogio();