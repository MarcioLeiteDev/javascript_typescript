function criaCalculadora(){
    return {
      
        display: document.querySelector('.display'),
       
        
       
        inicia(){
            this.cliqueBotoes()
        },

        cliqueBotoes(){
            document.addEventListener('click' , function(e){
                const el = e.target
             
                console.log(e.target)

                if(el.classList.contains('btn btn-num')){
                   
                    this.btnParaDisplay(el.innerText)
                }
              
                
            });
            
        },

        btnParaDisplay(valor) {
            
            this.display.value += valor;
          
    
        }

    }; 

}

const calculadora = criaCalculadora()
calculadora.inicia()