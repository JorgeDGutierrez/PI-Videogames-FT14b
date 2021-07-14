const {express, Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogames = require('../routes/videogames.routes.js');


const router = Router();
//router.use(express.json());

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogames', videogames);
router.use('/videogames?name="..."',videogames)




module.exports = router;
