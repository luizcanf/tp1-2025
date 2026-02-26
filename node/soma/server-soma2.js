const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

app.get('/', (request, resposta) => {
    n1=""
    n2=""
    resposta.render('soma', {n1, n2})
})

app.post('/operacao', (req, res) => {
console.log("n1="+req.body.n1)
console.log("n2="+req.body.n2)
console.log("NOME="+req.body.nome)
n1 = parseFloat(req.body.n1)
n2 = parseFloat(req.body.n2)
result = parseFloat(req.body.n1)+parseFloat(req.body.n2)
if (isNaN(result)) {
result = "Valores inválidos."
} else {
 result = req.body.nome + ", sua conta deu: " + result
}

res.render('soma', {x: result, n1, n2})
})


app.listen(8080, () => {
    console.log("Server rodando em http://localhost:8080");
})