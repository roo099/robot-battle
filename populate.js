const { sequelize, Competition, Round, Team } = require('./models');

const competitionsData = {
    race: [
        [
            { teamName: '1', roomColor: 'purple' },
            { teamName: '1', roomColor: 'orange' },
            { teamName: '2', roomColor: 'purple' },
            { teamName: '1', roomColor: 'green' },
            { teamName: '2', roomColor: 'orange' },
            { teamName: '2', roomColor: 'green' },
            { teamName: '3', roomColor: 'purple' },
            { teamName: '3', roomColor: 'green' },
        ],
        [
            { teamName: '-', roomColor: 'default' },
            { teamName: '-', roomColor: 'default' },
            { teamName: '-', roomColor: 'default' },
            { teamName: '-', roomColor: 'default' },
        ],
        [
            { teamName: '-', roomColor: 'default' },
            { teamName: '-', roomColor: 'default' },
        ],
        [{ teamName: '-', roomColor: 'default' }],
    ],
    sumo: [
        [
            { teamName: '1', roomColor: 'purple' },
            { teamName: '1', roomColor: 'orange' },
            { teamName: '2', roomColor: 'purple' },
            { teamName: '1', roomColor: 'green' },
            { teamName: '2', roomColor: 'orange' },
            { teamName: '2', roomColor: 'green' },
            { teamName: '3', roomColor: 'purple' },
            { teamName: '3', roomColor: 'green' },
        ],
        [
            { teamName: '-', roomColor: 'default' },
            { teamName: '-', roomColor: 'default' },
            { teamName: '-', roomColor: 'default' },
            { teamName: '-', roomColor: 'default' },
        ],
        [
            { teamName: '-', roomColor: 'default' },
            { teamName: '-', roomColor: 'default' },
        ],
        [{ teamName: '-', roomColor: 'default' }],
    ],
    can: [
        [
            { teamName: '1', roomColor: 'purple' },
            { teamName: '1', roomColor: 'orange' },
            { teamName: '2', roomColor: 'purple' },
            { teamName: '1', roomColor: 'green' },
            { teamName: '2', roomColor: 'orange' },
            { teamName: '2', roomColor: 'green' },
            { teamName: '3', roomColor: 'purple' },
            { teamName: '3', roomColor: 'green' },
        ],
        [
            { teamName: '-', roomColor: 'default' },
            { teamName: '-', roomColor: 'default' },
            { teamName: '-', roomColor: 'default' },
            { teamName: '-', roomColor: 'default' },
        ],
        [
            { teamName: '-', roomColor: 'default' },
            { teamName: '-', roomColor: 'default' },
        ],
        [{ teamName: '-', roomColor: 'default' }],
    ],
};

const populateDatabase = async () => {
    await sequelize.sync({ force: true });

    for (const [competitionName, rounds] of Object.entries(competitionsData)) {
        const competition = await Competition.create({ name: competitionName });

        for (const [roundIndex, teams] of rounds.entries()) {
            const round = await Round.create({ roundNumber: roundIndex + 1, CompetitionId: competition.id });

            for (const team of teams) {
                await Team.create({ ...team, RoundId: round.id });
            }
        }
    }

    console.log('Database populated successfully');
};

populateDatabase().catch(console.error);
