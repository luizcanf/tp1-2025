const port = 8000;
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Olá, Mundo!')
})

app.listen(port)
console.log(`Servidor funcionando na porta: ${port}`);