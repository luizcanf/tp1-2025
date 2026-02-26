const express = require('express')
const fs = require('fs')
app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('pagina')
})

let nomes = []
app.post('/ola', (req, res) => {
    let nome = req.body.nomezim
    if (typeof nome === 'undefined' || nome === '') {
        nome = 'mundo';
    }
    console.log(`Mensagem recebida de ${nome}!`)
    nomes.push(nome)
    fs.writeFileSync('dados/nomes.json', JSON.stringify(nomes))
    res.render('pagina', {fala: `Olá, ${nome}!`})
})

const PORT = 3000
app.listen(PORT, console.log(`Servidor rodando em http://localhost:${PORT}`))
