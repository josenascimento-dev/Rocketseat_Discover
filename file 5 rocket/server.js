const express= require('express');
const app =express()

app.set('view engine', 'ejs')
app.get('/', function(req, res){
    const items = [
        {
            title: "D",
            message: "Desenvolver aplicações/serviços de forma fácil"
        },
        {
            title: "M",
            message: "Muito fácil de usar"
        },
        {
            title: "A",
            message: "Amorzinho"
        },
        {
            title: "I",
            message: "install ejs"
        },
        {
            title: "S",
            message: "Sintaxe simples"
        },
    ];
    res.render('pages/index', {
        qualitys: items,
    })
})
app.get('/sobre', function(req, res){
    res.render('pages/about')
})

app.listen(8080)
console.log('Servidor rodando');
// se mexer em arquivo js tem que parar o servidor e roda-lo novamente