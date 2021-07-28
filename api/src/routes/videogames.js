require('dotenv').config();
const { API_KEY } = process.env;
const { Router } = require('express');
const router = Router();
const axios = require('axios').default;
const { Videogame, Genre } = require('../db');
const genres = require('../routes/genres.js')

const URL = 'https://api.rawg.io/api/games'
 
   router.get('/', async (req, res) => {
    let videogamesDb = await Videogame.findAll({
        include: Genre
    });
    //Parseamos el objeto recibido de findAll porque es una referencia circular (?)
    videogamesDb = JSON.stringify(videogamesDb);
    videogamesDb = JSON.parse(videogamesDb);
    //Aca dejamos el arreglo de generos plano con solo los nombres de cada genero
    videogamesDb = videogamesDb.reduce((acc, el) => acc.concat({
        //se junta todo lo que esta en la base de datos de videogames con los generos
        // y los concatena
        ...el,
        genres: el.genres.map(g => g.name)// hace el recorrido y extrae el nombre de los generos
    }), [])

    if (req.query.name) {// se requiere el query para obtenere el nombre del videojuego
        try {
            let name = req.query.name;
            let response = await axios.get(`${URL}?search=${name}&key=${API_KEY}`);
            if (!response.data.count) return res.status(404).send(`No se encontro ningun videojuego con el nombre "${req.query.name}"`);
            // response.data.count dice que si no hay ningun videojuego va a mandar el 400
            // la funcion count se usa para contar todos los parametros iguales dentro de la data
            response.data.results = response.data.results.reduce((acc, el) => acc.concat({
                // esta es la parte de la base de datos
                ...el,
                genres: el.genres.map(g => g.name)
            }), [])
            const filteredGamesDb = videogamesDb.filter(g => g.name.toLowerCase().includes(req.query.name.toLowerCase()));
            //va a pasar todo a minusculas, desde lo que viene por la base de datos y lo que viene por el query
            const results = [...filteredGamesDb, ...response.data.results.splice(0, 15)];
            //el resultado va a ser un array con los juegos de la base de datos y de la api y se van a cortar en 15
            return res.json(results)//responde con un jason los resultados
        } catch (err) {//manda el error
            return console.log(err)
        }
    } else {
        try {// se hacen las paginaciones para que traiga los videojuegos de la api y de la base de datos
            let pages = 0;
            let results = [...videogamesDb];// nos trae todos los datos del estado anterior
            let response = await axios.get(`${URL}?key=${API_KEY}`);
            //axios trae los videojuegos de la api
            while (pages < 4) {// mientras las paginas  sean mayor a cuatro se va a ir sumaando una a una
                pages++;
                response.data.results = response.data.results.reduce((acc, el) => acc.concat({
                    // se va a responder con los resultados de la data y se va a concatenar
                    ...el,
                    genres: el.genres.map(g => g.name)
                }), [])
                results = [...results, ...response.data.results]//results mete en un array el results 
                //del estado anterior y la data
                response = await axios.get(response.data.next)// se responde con la promesa del que sigue
            }
            return res.json(results)
        } catch (err) {
            console.log(err)
            return res.sendStatus(500)
        }
    }
})


module.exports = router;