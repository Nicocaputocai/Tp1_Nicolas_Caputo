const express = require('express'); //requerí express
const router = express.Router(); // Le pedí a express el modulo Router
const autosController = require ("../controller/autosController"); // importo el controlador

router.get('/', autosController.index) //pongo la url y llamo de mi archivo home controller al objeto index

 
module.exports = router; //exporto este archivo