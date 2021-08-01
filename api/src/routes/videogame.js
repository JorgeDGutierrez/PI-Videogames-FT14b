require('dotenv').config();
const { API_KEY } = process.env;
const { Router } = require('express');
const router = Router();
const axios = require('axios').default;
const { Videogame, Genre } = require('../db');

const URL = 'https://api.rawg.io/api/games'

//POST a /videogame
router.post('/', async (req, res) => {//con POST se crean los videojuegos
    let { name, description, released, rating, genres, platforms,status} = req.body;
    //se requiere el body para poder recibir los datos del formarulario
    let genreDt = genres.map(gen => {
        //con map se hace el recorrido de los datos existentes y vamos a 
        //regresar el genero si lo encuentra o lo crea
        return Genre.findOrCreate({
            where:{
                name: gen
            }
        })
    });  
          
    
let allGenres = await Promise.all(genreDt);
//allGenres son varias promesas que recibe como parametro la base de datos
console.log(allGenres)
//con console.log(allGenres) vamos a ver todo lo que nos esta mandando
let videogame = await Videogame.create({//se crea y se manda a la base de datos
            
    name,
    description,
    released,
    rating,
    platforms,
    status:'created'
    })
    allGenres.forEach(gen => videogame.setGenres(gen[0]));
    //se hace el recorrido de los generos y los muestra 
    if(videogame){//si hay videogame lo muestra con el json
        res.json(videogame);
    } else {//de lo contrario arroja un status 400
        res.status(400).json('game not created')

    }

})



router.get('/:videogameid', async (req, res) => {
    //esta ruta se creo para poder utilizar los detalles de cada videojuego
    const { videogameid } = req.params// se requiere params para poder buscar por id
    
    if (videogameid.includes('-')) {//se utiliza el includes porque el id contiene guiones
        let videogameDb = await Videogame.findByPk(videogameid,{include: Genre})
        //se busca en la base de datos el videojuego y se incluye el  la tabla degenero  
        
        videogameDb = JSON.stringify(videogameDb);//convierte un objeto o valor 
                                                //de JavaScript en una cadena de texto JSON
        videogameDb = JSON.parse(videogameDb);//transforma la cadena de JSON para que se pueda 
                                            //utilizar
        videogameDb.genres = videogameDb.genres.map(g => g.name);
        //se hace el recorrido para entrar a genres y ver lo que hay
        res.send(videogameDb)
    };

    try {//se utililiza el try/catch 
        /**
         * con try se intenta hacer esto
         */
        const response = await axios.get(`${URL}/${videogameid}?key=${API_KEY}`);
        //se utiliza la promesa para poder obtener los datos de la api
        let { name, background_image, genres, description, released: released, rating, platforms } = response.data;// estas son las propiedades que se necesitan de la api
        genres = genres.map(g => g.name);
        platforms = platforms.map(p => p.platform.name);
        /**
         * generos y platforms se recorren con el map parque en la api vienen como un array
         */
        return res.json({//se responde con json obteniendo todas las propiedades que necesito
            name,
            background_image,
            genres,
            description,
            released,
            rating,
            platforms
        })
    } catch (err) {// si no, se manda el error
        return console.log(err)
    }
})

    
module.exports = router;//se exporta el router
