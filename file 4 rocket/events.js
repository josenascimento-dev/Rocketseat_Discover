//setInterval irá rodar uma função N vezes
// depois de x milissegundos
const {EventEmitter} = require('events')
const ev = new EventEmitter()
//console.log(ev);
//Disparar eventos
// se ao invés do 'on' trocar para 'once' vai ser disparado o evento
//somente uma vez e sempre o primeiro
ev.on('saySomething', (message) => {
    console.log('Eu ouvir você: ', message)
})
ev.emit('saySomething', 'Vitor')
ev.emit('saySomething', 'Pedro')