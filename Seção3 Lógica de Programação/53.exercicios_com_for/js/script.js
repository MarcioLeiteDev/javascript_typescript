
const elementos = [
    {tag:'p' , texto:'Frase 1'},
    {tag:'div', texto:'Frase 2'},
    {tag:'section', texto:'Frase 3'},
    {tag:'footer', texto:'Frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++){
    let { tag , texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada);
    console.log(tag,texto)
   // console.log(elementos[i].tag, elementos[i].texto);
}
container.appendChild(div);
//console.log(elementos);

