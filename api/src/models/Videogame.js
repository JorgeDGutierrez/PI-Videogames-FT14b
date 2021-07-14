const {Sequelize, DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

// [ ] Videojuego con las siguientes propiedades:
// ID: * No puede ser un ID de un videojuego ya existente en la API rawg
// Nombre *
// Descripción *
// Fecha de lanzamiento
// Rating
// Plataformas *

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {

    idgame: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
      
    },
    released:{
      type:DataTypes.DATE
    },
    rating:{
      type:DataTypes.STRING
    },
    plataforms:{
      type:DataTypes.STRING,
      allowNull: false
       
    }
  }, { timestamps: false });
};
