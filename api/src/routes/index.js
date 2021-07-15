const {express, Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogames = require('./videogames.js');
const genres = require('./genres.js')
const videogame = require('./videogame.js');
//const videogameid = require('./videogame-id.js')


const router = Router();
//router.use(express.json());

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogames', videogames);
router.use('/videogame',videogame);
router.use('/genres', genres);

//router.use('/videogame/:videogameid',videogameid)





module.exports = router;
