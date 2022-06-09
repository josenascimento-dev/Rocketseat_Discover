/**
 *Promise
 * A promessa de que algo irá acontecer
 * Poderá dar certo ou errado,
 * mas irá acontecer
 * 
 * */
let aceitar = true
console.log("pedi Uber");
const promessa = new Promise((resolve, reject) => {
    //return resolve('carro chegou')
    //return reject('pedido negado')
    if(aceitar){
        return resolve('Pedido aceito')
    }
    return reject('pedido negado')
})
console.log('aguardando');

promessa
 .then(result => console.log(result))
 .catch(erro => console.log(erro))
 .finally(() => console.log('finalizada');)