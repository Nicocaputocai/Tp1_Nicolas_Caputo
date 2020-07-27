const express = require('express'); //requerí express
const app = express(); // llamé a express
const routeHome = require('./routes/home'); //importe la ruta home
const routeSucursales = require('./routes/sucursales'); //importe la ruta home
const routerMarcas = require('./routes/marcas'); //importe la ruta home
const routeAutos = require('./routes/autos'); //importe la ruta home


app.listen(3030, console.log("Servidor funcionando en el puerto 3030")); //Levanté el servidor en el puerto 3030


app.use('/', routeHome);

app.use('/sucursales', routeSucursales);

app.use('/marcas', routerMarcas);

app.use('/autos', routeAutos)
