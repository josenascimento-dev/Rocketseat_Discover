//eventos
//funcionalidade on no HTML permite tomada de ações no java scripit

/*function print(){
    console.log('print');
}


//eventos para teclado
//onkeydown, onkeyup, onkeypress
const input = document.querySelector('input')
input.onkeyup = function () {
    console.log("rodei") 
}*/


//adicionando eventos via JS
/*const h1 = document.querySelector('h1')
h1.addEventListener("click", print)

function print() {
    console.log('print')
}*/



/*
const h1 = document.querySelector('h1')
h1.onclick = print

function print() {
    console.log('print')
} */ 
// menos recomendado pois só considera o ultimo feito.


//argument event
const input = document.querySelector('input')

input.onkeydown = function(event){
    console.log(event.key)
    //event.currentTarget
    //event.currentTarget.value
}







