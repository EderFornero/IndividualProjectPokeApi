const DataTypes = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    id:{
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true, 
      defaultValue: DataTypes.UUIDV1,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stat_health_points: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sprits_image:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    stat_attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stat_defense: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    stat_speed: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  },
  { 
    timestamps: false
  }
  );
};
