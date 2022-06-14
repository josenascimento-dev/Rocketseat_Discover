const express = require('express')
// serve para editar informações
const app = express()
app.listen('3000') // sever
app.use(express.json())

let author="Jakeliny"


app.route('/').put((req,res) => {
    author = req.body
    res.send(author)
})