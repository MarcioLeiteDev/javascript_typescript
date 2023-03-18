function mostrarHora(){
    let data = new Date();
    return data.toLocaleTimeString('pt-BR',{
        hour12:false
    });
}

function funcaoDoInterval(){
    console.log(mostrarHora());
}

//setInterval(funcaoDoInterval , 1000);

setInterval(function(){
    console.log(mostrarHora());
}, 1000);

//console.log(mostrarHora());