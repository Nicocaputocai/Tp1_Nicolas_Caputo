const router = require("../routes/home")
const db = require('../db');

const controlador = { //creo variable controlador
    index: function(req, res) { //Ruta marcas 
        res.set({'content-type':'text/plain; charset=utf-8'});
        let concesionarias = db.leerJSON();
        let marcasVacio = [];
        concesionarias.forEach(concesionaria => {
            concesionaria.autos.forEach(autos=>{
                marcasVacio.push(autos.marca)
            })
    })
    res.write('↓ Las mejores marcas encontralas acá ↓')
    res.write('\n')
    let marcasFilter = marcasVacio.filter((sinRepetir, repetido) => marcasVacio.indexOf(sinRepetir) === repetido)
    marcasFilter.forEach(marca=>{
        res.write('\n'+'🚘⮕'+marca+'\n')
    })
res.end();
},
    marca: function(req,res){
        res.set({'content-type':'text/plain; charset=utf-8'})
        let marca = req.params.marca;
        let encuentra = false;
        let concesionarias = db.leerJSON();
        // con el .toLowerCase() convierto todas el texto a minuscula 
        concesionarias.forEach(concesionaria =>{
            res.write('🏠  En  '+concesionaria.sucursal+"\n"+"\n")
            concesionaria.autos.forEach(auto =>{
                if (auto.marca.toLowerCase() == marca.toLowerCase()){
                    encuentra=true;

                    
                        res.write('Marca: '+auto.marca+'\n')
                        res.write('Modelo: '+auto.modelo+'\n')
                        res.write('Año: '+auto.anio+'\n')
                        res.write('Color: '+auto.color+'\n'+'\n')
                }
            })
        })
        res.end()
    }
}
module.exports = controlador