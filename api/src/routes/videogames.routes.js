require('dotenv').config();
const express = require ('express');
var router = express.Router();
const { API_KEY } = process.env;
const  { conn } = require('../db')

const fetch = require('node-fetch');
const db = require('../db.js');


  router.get('/',(req, res)=>{
    var{
        name,
    } =req.query;
    if(name){
        
        
        fetch(`https://api.rawg.io/api/games?key=${API_KEY}&search={name}`)
        
        
        .then ((data)=> data.json())
        .then ((result)=> res.send(result))
        .catch((err)=> res.status(401))
    
    
    }else {
        fetch(`https://api.rawg.io/api/games?key=${API_KEY}`)
        
        .then ((data)=> data.json())
        .then ((result)=> res.send(result))
        .catch((err)=> res.status(401))
        
    }
    
   
    
})






module.exports = router;
