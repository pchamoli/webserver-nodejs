const hbs = require('hbs')

hbs.registerHelper('getFullYear', () => {
    return new Date().getFullYear();
})

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    if (!palabras){
        console.log('vacio');
        return 'NA'
    }
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()        
    });

    return palabras.join(' ')
})