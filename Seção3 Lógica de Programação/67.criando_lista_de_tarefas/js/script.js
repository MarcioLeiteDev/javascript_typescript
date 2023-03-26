const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');


function criaLi(){
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
})

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li){
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'apagar';
    li.appendChild(botaoApagar);
    botaoApagar.setAttribute('class' , 'apagar');
}

function criaTarefa(textoInput){
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();

    criaBotaoApagar(li);
    salvarTarefas();

    //console.log(textoInput);

}

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas){

        let tarefaTexto = tarefa.innerText;

        tarefaTexto = tarefaTexto.replace('apagar' , ' ').trim();

        listaDeTarefas.push(tarefaTexto);
        console.log(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
    console.log(tarefasJSON);
    //console.log(liTarefas);
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
   // console.log();
}

adicionaTarefasSalvas();

btnTarefa.addEventListener('click', function(e){
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
   // console.log(inputTarefa.value);
});


document.addEventListener('click' , function(e){
    const el = e.target;
    if( el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefas();
    }
    console.log(el);
})

