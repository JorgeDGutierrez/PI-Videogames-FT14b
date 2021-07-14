require('dotenv').config();
const { APIKEY } = process.env;
const { Router } = require('express');
const router = Router();
const axios = require('axios').default;
const { Videogame, Genre } = require('../db');


//POST a /videogame
router.post('/', async (req, res) => {
    const {name,description,released,rating,platforms,genres} = req.body;
    console.log(req.body)
    //platforms = platforms.join(', ')
    try {
        const gameCreated = await Videogame.findOrCreate({
            where: {
                name,
                description,
                released,
                rating,
                platforms
            }
        })
        await gameCreated[0].setGenres(genres);
    } catch (err) {
        console.log(err);
    }
    res.send('Created succesfully')
})

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
