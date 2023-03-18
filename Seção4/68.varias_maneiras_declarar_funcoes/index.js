// Decaração de função (Function Hoisting)
falaOi();
function falaOi(){
    console.log('Oi');
}

//First_class objects (objeto de primeira classse)

//Function Expression
const souUmDado = function (){
    console.log('Sou um dado');
}

souUmDado();

const funcaoArrow = () => {
    console.log('Sou uma arrowFunction');
}
funcaoArrow();

const obj = {
    falar: function(){
        console.log('estou flando');
    }
};

obj.falar();
