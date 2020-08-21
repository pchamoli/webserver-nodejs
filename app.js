const http = require('http')

http.createServer((req, res) => {

    let salida = {
        nombre: 'petter',
        edad: 40,
        url: req.url
    }
    res.write(JSON.stringify(salida))
    res.end()
})
.listen(8080);

console.log('escuchando')