const router = require("../routes/home");
    const db = require('../db');
    
    const controlador = { //creo variable controlador
        index: function(req, res) { //Ruta marcas 
            res.set({'content-type':'text/plain; charset=utf-8'})
            let concesionarias = db.leerJSON();
            let todosLosAutos = [] 
            res.write("↓Los autos disponibles en nuestras concesionarias son: ↓"+'\n'+'\n')
            concesionarias.forEach (concesionaria =>{
                res.write ('🏠 En ' +'"'+concesionaria.sucursal+'"' + '\n'+'\n')
                concesionaria.autos.forEach(auto =>{
                    todosLosAutos.push(auto)
                    res.write('Marca: '+auto.marca+'\n')
                    res.write('Modelo: '+auto.modelo+'\n')
                    res.write('Año: '+auto.anio+'\n')
                    res.write('Color: '+auto.color+'\n'+'\n')
                })
                })
                res.write('La cantidad de autos que tenemos dispinibles en nuestras sucursales es de ' + todosLosAutos.length)
                res.end()
            },
    
}
    module.exports = controlador