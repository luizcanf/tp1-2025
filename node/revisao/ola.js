
function ola(nome) {
if (typeof nome === 'undefined' || nome === '') {
nome = 'mundo';
}
//alert(`Olá, ${nome}!`);
//document.getElementById('nomezim').value = `Olá, ${nome}!`;
//let valor = document.getElementById('nomezim').value;
document.getElementById('resultado').innerHTML = `Olá, ${nome}!`;
}