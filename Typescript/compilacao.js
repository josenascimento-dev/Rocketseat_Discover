//typescript
function showTicket(user /* : string | null*/, ticket/*: number*/){
    console.log(`Olá ${user ?? "Usuário Padrão"}. seu número de bilhete é ${ticket}`)
}


showTicket("Rodrigo Gonçalves", 123);

//JS
function showTicket(user, ticket) {
    console.log(`Olá ${user !== null && user !== void 0 ? user : "Usuário Padrão"}. seu número de bilhete é ${ticket}`);
}
showTicket("Rodrigo Gonçalves", 123);
