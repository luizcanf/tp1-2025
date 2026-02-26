const express = require('express')
app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('pagina')
})

app.post('/ola', (req, res) => {
    let nome = req.body.nomezim
    if (typeof nome === 'undefined' || nome === '') {
        nome = 'mundo';
    }
    console.log(`Mensagem recebida de ${nome}!`)
    res.render('pagina', {fala: `Olá, ${nome}!`})
})

app.listen(37532)
