const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
const rotas = require('./routes')

app.use('/api',rotas)

app.listen(PORT, function(){
    console.log("Servidor iniciado!")
})