const router = require("../routes/home");
const db = require('../db');

const homeController = { //creo variable controlador
    index: (req, res) => { //Ruta index
        res.set({'content-type':'text/plain; charset=utf-8'})
        res.write('Bienvenidos a concesionarias del Conurbano')
        res.write('\n')
        res.write('↓Visítenos en nuestras sucursales: ↓' )
        res.write('\n')
        res.write('\n')
        res.write('\n')
        let concesionarias = db.leerJSON()
            concesionarias.forEach(concesionaria => {

                res.write("☑ "+concesionaria.sucursal +"\n"+"\n");
        });
    res.end();
    } 
}
module.exports = homeController

