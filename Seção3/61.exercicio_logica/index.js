/*
escrever uma função chamada ePaisagem que recebe dois argumentos
largura e latura sw imagem 
retorne true se paisagem for paisamge
*/

function ePaisagem(largura, altura){
    return largura > altura ? true : false;
}

console.log(ePaisagem(1920,1080));