const {Sequelize, DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

// [ ] Genero con las siguientes propiedades:
// ID
// Nombre

module.exports = (sequelize) => {
  // defino el modelo
    sequelize.define('genre', {

      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    name: {
      type: DataTypes.STRING,
    },
  }, { timestamps: false });
    };