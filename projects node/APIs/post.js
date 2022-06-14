const express = require('express')

const app = express()
app.listen('3000') // sever
//middleware- ponte para as requisições
app.use(express.json())


app.route("/").post((req,res) => res.send(req.body))
//navegador não consegue fazer o .post