const DataTypes = require('sequelize'); 

module.exports = (sequelize) => {
    sequelize.define('Type', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true, 
            allowNull: false,
            defaultValue: DataTypes.UUIDV1,
        },
        name: {
            type: DataTypes.STRING, 
            allowNull: false,
        }
    },
    {
        timestamps: false,
    }
    )
}