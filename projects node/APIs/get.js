const express = require('express')

const app = express()
app.listen('3000') // sever


app.route('/').get((req,res) => res.send('Hello'))
app.route('/sobre').get((req,res) => res.send('Hello sobre'))