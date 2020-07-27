// Aca parseamos el JSON y la exportamos
const fs = require('fs')

let db = {
    leerJSON: () => {
    let concesionariaJSON = fs.readFileSync('./data/concesionarias.json', 'utf-8')
    let concesionarias = JSON.parse(concesionariaJSON)
    return concesionarias
    }
}
module.exports = db
