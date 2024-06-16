module.exports = (sequelize) => {
    const { DataTypes } = require('sequelize');

    const Team = sequelize.define('Team', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        teamName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        roomColor: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Team;
};
