const express = require('express')
// serve para editar informações
const app = express()
app.listen('3000') // sever
app.use(express.json())

app.route('/').get( (req,res) => res.send(req.query.name))
app.route('/').post( (req,res) => res.send(req.body))
app.route('/:parametro').get( (req,res) => res.send(req.params.parametro))

