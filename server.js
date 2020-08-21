const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers')
hbs.registerPartials(__dirname + '/views/partials')

app.use( express.static(__dirname + '/public'))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    //res.render('home')
    res.render('home', {
        nombre: 'Petter'
    })

})

app.get('/about', (req, res) => {
    //res.render('home')
    res.render('about', {
        nombre: 'Petter'
    })

})


app.listen(3000, () => {
    console.log('escuchando petiiciones')
})