module.exports = (sequelize) => {
    const { DataTypes } = require('sequelize');

    const Round = sequelize.define('Round', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        roundNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    return Round;
};
