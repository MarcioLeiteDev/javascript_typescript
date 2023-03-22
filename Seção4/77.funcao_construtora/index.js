// função construtora retorna objetos
// função fabrica fabrica objetos
// Construtora (new) Pessoa convensão começa  comn letra maiuscula

function Pessoa(nome, sobrenome){

    const ID = 12345
    const metodoInterno = function(){
        console.log(`o ID do barato é ${ID}`)
    }
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = function() {

        console.log( this.nome + ': sou um metodo maluco Sacou :)')

    }
}

const p1 = new Pessoa('Marcio' , 'Leite')

const p2 = new Pessoa('Gabriel' , 'Leite')

console.log(p1)
console.log(p1.nome)

console.log(p2)
console.log(p2.nome)

p2.metodo()





