require('dotenv').config();
const { API_KEY } = process.env;
const { Router } = require('express');
const router = Router();
const axios = require('axios').default;
const { Videogame, Genre } = require('../db');



 
  // GET a /genres
router.get('/', async (req, res) => {
    const genresDb = await Genre.findAll();
    if (genresDb.length) return res.send(`Ya existen generos en la Base de Datos, longitud: ${genresDb.length}`)

    const response = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
    const genres = response.data.results;
    genres.map(async g => {
        await Genre.findOrCreate({
            where: {
                name: g.name
            }
        })
    })
    res.json(genres)
})

module.exports = router;