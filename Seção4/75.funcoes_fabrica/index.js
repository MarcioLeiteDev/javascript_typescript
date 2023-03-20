// Factory function (função de fabrica)

function criaPessoa( nome, sobrenome , a , p){
    return{
        nome, 
        sobrenome,
        // Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ')
            console.log(valor)
        },

        fala  (assunto){
            return `${this.nome} esta ${assunto}`
        },

        altura: a,
        peso: p,
        // getter
        get imc(){
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }   
    };
}

const p1 = criaPessoa('Marcio' , 'Disbiriflix' , 1.65, 60)
console.log(p1.imc)
const p2 = criaPessoa('Gabriel' , 'Leite' , 1.20 , 30)
console.log(p2.imc)
console.log(p1.fala('Falando sobre JavaScript'))
console.log(p2.fala('Falando sobre PHP'))

console.log(p1.nome , p2.nome)
 p1.nomeCompleto = 'Gabriel Barbosa Leite Pessoa' 
console.log(p1.nomeCompleto)

console.log(p1.fala('falando Sobre nada'))