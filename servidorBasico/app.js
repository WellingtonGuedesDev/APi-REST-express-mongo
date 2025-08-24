import http from 'http'

const PORT = 4000
const Rotas = {
    "/": "Pagina inicial",
    "/produtos": "Pagina de produtos"
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(Rotas[req.url]);
})

server.listen(PORT, () => {
    console.log("Servidor funcionando")
})