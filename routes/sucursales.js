const express = require('express'); //requerí express
const router = express.Router(); // Le pedí a express el modulo Router
const sucursalesController = require ("../controller/sucursalesController"); // importo el controlador

router.get('/', sucursalesController.index) //pongo la url y llamo de mi archivo home controller al objeto index
router.get('/:sucursal', sucursalesController.sucursalesDetalle)

 
module.exports = router; //exporto este archivo