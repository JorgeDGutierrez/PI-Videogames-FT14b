require('dotenv').config();
const { API_KEY } = process.env;
const { Router } = require('express');
const router = Router();
const axios = require('axios').default;
const { Videogame, Genre } = require('../db');


//POST a /videogame
router.post('/', async (req, res) => {
    let { name, description, released, rating, genres, platforms } = req.body;
    let genreDt = genres.map(gen => {
        return Genre.findOrCreate({
            where:{
                name: gen
            }
        })
    });        
    
let allGenres = await Promise.all(genreDt);
console.log(allGenres)
let videogame = await Videogame.create({
            
    name,
    description,
    released,
    rating,
    platforms
    
            
    })
    allGenres.forEach(gen => videogame.setGenres(gen[0]));
res.json(videogame);
    // let { name, description, released, rating, genres, platforms } = req.body;
    // //platforms = platforms.join(', ');
    // const genreAdapted = [];
    // genres.map( gen => genreAdapted.push({name: gen}));
    // try {
    //      await Videogame.create({
            
    //             name,
    //             description,
    //             released,
    //             rating,
    //             platforms,
    //             generos:genreAdapted
            
    //     },{ 
    //         include: Genre
    //     })
    //    // await gameCreated[0].setGenres(genres);
    //    res.send('exito')
    // } catch (err) {
    //     console.log(err);
    // }
    // res.send('Created succesfully')

})

// router.post('/test', async (req, res) => {
//     const { image, name, genre, description, released, rating, platform } = req.body;
//     const genreAdapted = [];
//     genre.map( gen => genreAdapted.push({name: gen}));
//     await Videogame.create({
//         image,
//         name,
//         description,
//         released,
//         rating,
//         platform,
//         generos: genreAdapted //[{name:"algo",segundo:"otro"},{name:"algo2"},{name:"algo"}]
//     },{
//         include: 'Genre'
//     })
//     res.send('exito')
// })

router.get('/:videogameid', async (req, res) => {
    
    const { videogameid } = req.params
    
    if (videogameid.includes('-')) {
        let videogameDb = await Videogame.findByPk(videogameid,{include: Genre})
        videogameDb = JSON.stringify(videogameDb);
        videogameDb = JSON.parse(videogameDb);
        videogameDb.genres = videogameDb.genres.map(g => g.name);
        
        res.send(videogameDb)
    };

    try {
        const response = await axios.get(`https://api.rawg.io/api/games/${videogameid}?key=${API_KEY}`);
        let { name, background_image, genres, description, released: released, rating, platforms } = response.data;
        genres = genres.map(g => g.name);
        platforms = platforms.map(p => p.platform.name);
        return res.json({
            name,
            background_image,
            genres,
            description,
            released,
            rating,
            platforms
        })
    } catch (err) {
        return console.log(err)
    }
})



module.exports = router;
