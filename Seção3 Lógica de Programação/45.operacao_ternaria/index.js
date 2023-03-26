// ? :

const pontuacaoUsuario = 800;

//(condição) ? 'VAlor para verdadeiro' : 'Valor para Falso'
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal' ;

const corUsuario = 'PINK';
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario , corPadrao);

/*
if( pontuacaoUsuario >= 1000){
    console.log('Usuário Vip!');
}else{
    console.log('Usuário Normal');
}
*/