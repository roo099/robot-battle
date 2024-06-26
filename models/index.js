const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite',
});

const Competition = require('./competition')(sequelize);
const Round = require('./round')(sequelize);
const Team = require('./team')(sequelize);

// Define associations
Competition.hasMany(Round, { as: 'rounds' });
Round.belongsTo(Competition);
Round.hasMany(Team, { as: 'teams' });
Team.belongsTo(Round);

sequelize.sync();

module.exports = {
    sequelize,
    Competition,
    Round,
    Team,
};
