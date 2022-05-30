// npm init -y é mais rápido do que npm init
//otras formas de instalar dependecias
//exemplo: npm i cfontes, o i é um atalho para install
//npm i cfontes -D : é uma dependecia somente de desenvolvimento isso significa que só vai ser usado o package em um ambiente de desenvolvimento
// o npm install permite que se instale varios
// npm update permite atualizar se houve alguma mudança
// a npm pode ser excluida, pois ela sempre volta quando você a instala novamente com os mesmos dados neceserários-- npm install
//não se mexe em package-lock.json, pois ele facilita todo mecanismo,, então é importante deixa-lo salvo
//para rodar e criar scripts é necessário ir em package.json e permitir que o script incie - npm run test
//console.log('rodando via script')

//instalar pacote de maneira global
  // *npm i opn -g : o -g instala de maneira global;
  // *npm root -g : indentifica onde foi instalado o pacote;
//Desisntalar pacotes
  // *npm uninstall opn -g
//mudar versão de pacotes
/* exemplo:
  *"moment" : "^2.29.1"
     - os três significa respectivamente : major.minor.patch
     - 1 = está resolvendo algum bulgue
     - 29 = vai haver alterações mai que o pacote não vai quebrar o que está acontecendo nele.
     - 2 = versão doprojeto
     - ^ = o npm toda vez que for atualizar vai atualizar os doi ultimos- minor e path;
     - ~ = vai atualizar só o path
     - não há sinais = vai sempre manter aquela versão.
     -"*" = vai mudar todas as versões

   * mudar de versão já conhecida
     - npm i moment@1.5.1
   * Ver versões existentes do pacote
     - npm outdated
   * atualizar versão
     - npm upgrade  
   *  mudar novamente para versão mais atual
     - npm i moment@latest
*/

// remover pacotes
/*
- npm uninstall (nome do pacote)
*/




//stdout : escrever alguma coisa de saída

/*const questions=[
    "O que aprendi hoje?",
    "O que me deixou aborrecido? e O que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje",
]

const ask = (index = 0) => {
    return process.stdout.write(" \n\n" + questions[index] + " >")
}

ask()
//on: alguma coisa que fica ouvindo os eventos e vai roda-los toda vez que receber (exemplo) dados
const answers = []
process.stdin.on('data', data => {
    answers.push(data.toString().trim())
    if(answers.length < questions.length) {
        ask(answers.length)
    } else {
        console.log(answers)
    process.exit()
    }
} )
process.on('exit', () =>{
    console.log(`
    Bacana Vitor!
    O que você aprendeu hoje foi:
    ${answers[0]}

    O que te aborreceu e você poderia melhorar foi:
    ${answers[1]}

    O que te deixou feliz hoje:
    ${answers[2]}

    Você ajudou ${answers[3]} pessoas hoje!!

    Volte amanhã para novas reflexões
    
    
`)
})*/



//setTimeout rodar uma função depois de x milissengudos
const timeOut=3000
const finished = () => console.log('done!')

setTimeout(finished, timeOut)
console.log('mostrar');