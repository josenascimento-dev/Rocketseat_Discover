//function hoisting
//uma função criada como a de baixo ela sofre o hoisting, ou seja, como se a função fosse escrita primeiro e depois o sayMyName()

/*sayMyName()
function sayMyName(){
  console.log('Vitor');
}*/

//quando se põe o const/let/var e se faz uma função anonima isso não vai ocorrer, por exemplo
sayMyName()
const sayMyName = function(){
  console.log('Vitor')
}