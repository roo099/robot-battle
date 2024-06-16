module.exports = (sequelize) => {
    const { DataTypes } = require('sequelize');

    const Competition = sequelize.define('Competition', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        displayName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        icon: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Competition;
};
