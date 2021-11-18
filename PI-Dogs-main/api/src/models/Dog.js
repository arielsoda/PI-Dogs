const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
/* const { v4: uuidv4 } = require('uuid'); */
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    height:{
      type: DataTypes.STRING,
      allowNull: false
    },  
    weight:{
      type: DataTypes.STRING,
      allowNull: false
    },
    life_span:{
      type: DataTypes.STRING,
    },
    image:{
      type: DataTypes.STRING,
    },
    createdInDB:{
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    timestamps: false
  });

}; 
