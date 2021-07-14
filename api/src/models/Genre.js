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
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
    
      name: {
        type: DataTypes.STRING,
        allowNull: false
    }
  });
    };