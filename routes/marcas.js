const express = require('express'); //requerí express
const router = express.Router(); // Le pedí a express el modulo Router
const marcasController = require ("../controller/marcasController"); // importo el controlador

router.get('/', marcasController.index) //pongo la url y llamo de mi archivo home controller al objeto index
router.get('/:marca', marcasController.marca)
 

module.exports = router; //exporto este archivo 