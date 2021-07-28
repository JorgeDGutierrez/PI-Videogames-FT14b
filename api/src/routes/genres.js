require('dotenv').config(); // se install la libreria dotenv para los datos sencibles
const { API_KEY } = process.env; //es el api generado en la pagina RARW
const { Router } = require('express');
const router = Router(); //se crea la constante para meterle el metodo get a la ruta
const axios = require('axios').default;// se insala axios para poder utilizar como una promesa
const {  Genre } = require('../db');// se importa la tabla de generos para que puedan buscar  en la base de datos

const URL = 'https://api.rawg.io/api/genres'

 
  // GET a /genres
router.get('/', async (req, res) => { //se usa la funcion asyn/await para que se hagan
    // las peticiones al mismo tiempo
    const genresDb = await Genre.findAll();//con la constante genresDB vamos a entrar 
    //para encontrar todo lo que hay en la base de datos
    if (genresDb.length) return res.send(`Ya existen generos en la Base de Datos, longitud: ${genresDb.length}`)
    //si hay algo en la base de datos se va a responder con un mensaje
    const response = await axios.get(`${URL}?key=${API_KEY}`);
    //se obtiene la base de datos con una promesa
    const genres = response.data.results; //constante genres va a responder con el resultado de la promesa
    genres.map(async g => { //el map va a buscar o crear los generos y los va a regresar en un array
        await Genre.findOrCreate({
            where: {
                name: g.name
            }
        })
    })
    res.json(genres) //se responde con la constante genres
})

module.exports = router;// se exporta el router para poder ultilizarlo