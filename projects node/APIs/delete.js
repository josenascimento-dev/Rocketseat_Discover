const express = require('express')
// serve para editar informações
const app = express()
app.listen('3000') // sever
app.use(express.json())

app.route('/:identificador').delete( (req,res) => {
    author =""
    res.send(re.params.identificador)
})