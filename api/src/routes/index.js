const {express, Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogames = require('./videogames.js');
const genres = require('./genres.js')
const videogame = require('./videogame.js');



const router = Router();// se usa la constante router para poder utilizar el metodo use
//router.use(express.json());

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogames', videogames);    
router.use('/videogame',videogame);
router.use('/genres', genres);
/**
 * router.use('/videogames', videogames);    
router.use('/videogame',videogame);
router.use('/genres', genres);
/**
 * se se importan las rutas para mandarlas al front
 */






module.exports = router;//se exporta el router
