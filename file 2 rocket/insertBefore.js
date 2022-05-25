//Adicionando elementos
const div = document.createElement('div');
div.innerText= "Ola devs!!"
//insertBefore
//const body = document.querySelector('body')
//const script = body.querySelector('script')
//body.insertBefore(div, script)

//simular um inserafter já que não existe
const body = document.querySelector('body')
const header = body.querySelector('header')
body.insertBefore(div, header.nextElementSibling)