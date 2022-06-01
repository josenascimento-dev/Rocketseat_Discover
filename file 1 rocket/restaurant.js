/*
Sistema de gastos familiar

crie um objeto que possuirá 2 propriedades, ambas do tipo array:
  *receitas:[]
  *despesas:[]

  Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo

*/
let restaurant= {
    receitas:[225.50, 3365.50, 45.65],
    despesas:[600, 765, 4569.35]}
    
    
function sum(array){
    let total= 0
    for(let value of array){
        total += value
    }
    return total
}
function calculateBalance(receitas, despesas){
   const calculateIncomes = sum(restaurant.receitas)
   const calculateExpenses = sum(restaurant.despesas)
   const total= calculateIncomes - calculateExpenses
   const itsOk= total >= 0
   let balanceText= 'negativo'
  
   if(itsOk){
       balanceText='Positivo'

   } 
   console.log(`Seu saldo é ${balanceText}: ${total}`)
}

calculateBalance()


