const router = require("../routes/home")
const db = require('../db');

const sucursalesController = { //creo variable controlador
    index: (req, res) => { //Ruta index
        res.set({'content-type':'text/plain; charset=utf-8'})
        res.write('↓Visitanos🏠 o llamanos☎↓')
        res.write('\n')
        res.write('\n')
        res.write('\n')
        let concesionarias = db.leerJSON()
            concesionarias.forEach(concesionaria => {

                res.write("☑ "+ concesionaria.sucursal +"\n");
                res.write('🏠 dirección: '+ concesionaria.direccion +"\n");
                res.write('☎ teléfono: ' + concesionaria.telefono + "\n"+"\n")
        });
    res.end();
    },
    sucursalesDetalle: (req,res) =>{
        res.set({'content-type':'text/plain; charset=utf-8'})
        let suc = req.params.sucursal;
        let concesionarias = db.leerJSON();
        // con el .toLowerCase() convierto todas el texto a minuscula 
        concesionarias.forEach (concesionaria =>{
            if (concesionaria.sucursal.toLowerCase() == suc.toLowerCase()){
            res.write('Esta es nuestra sucursal de '+concesionaria.sucursal +"\n")
            res.write('🏠 Encontranos en '+concesionaria.direccion +"\n")
            res.write('☎ O llamanos al '+concesionaria.telefono +"\n"+"\n")
            res.write("↓Los autos disponibles en esta concesionaria son: ↓"+'\n'+'\n')
            concesionaria.autos.forEach(auto =>{

                res.write('Marca: '+auto.marca+'\n')
                res.write('Modelo: '+auto.modelo+'\n')
                res.write('Año: '+auto.anio+'\n')
                res.write('Color: '+auto.color+'\n'+'\n')
            })
            res.end('La cantidad de autos que tenemos en nuestra sucursal es de ' + concesionaria.autos.length)
            }
        })
        res.end('Todavía no tenemos sucursal en esa localidad, esperamos pronto estar cerca suyo')
    }
}
 
module.exports = sucursalesController
