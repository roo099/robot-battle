const { sequelize, Competition, Round, Team
} = require('./models');

const competitionsData = [
    {
        "id": "c-1",
        "name": "race",
        "displayName": "Race",
        "icon": "fa-car-side",
        "rounds": [
            {
                "id": "c-1_r-1",
                "roundNumber": 1,
                "CompetitionId": "c-1",
                "teams": [
                    {
                        "id": "c-1_r-1_t-01",
                        "teamName": "1",
                        "roomColor": "green",
                        "RoundId": "c-1_r-1"
                    },
                    {
                        "id": "c-1_r-1_t-02",
                        "teamName": "1",
                        "roomColor": "orange",
                        "RoundId": "c-1_r-1"
                    },
                    {
                        "id": "c-1_r-1_t-03",
                        "teamName": "1",
                        "roomColor": "purple",
                        "RoundId": "c-1_r-1"
                    },
                    {
                        "id": "c-1_r-1_t-04",
                        "teamName": "2",
                        "roomColor": "green",
                        "RoundId": "c-1_r-1"
                    },
                    {
                        "id": "c-1_r-1_t-05",
                        "teamName": "2",
                        "roomColor": "orange",
                        "RoundId": "c-1_r-1"
                    },
                    {
                        "id": "c-1_r-1_t-06",
                        "teamName": "2",
                        "roomColor": "purple",
                        "RoundId": "c-1_r-1"
                    },
                    {
                        "id": "c-1_r-1_t-07",
                        "teamName": "3",
                        "roomColor": "green",
                        "RoundId": "c-1_r-1"
                    },
                    {
                        "id": "c-1_r-1_t-08",
                        "teamName": "3",
                        "roomColor": "purple",
                        "RoundId": "c-1_r-1"
                    }
                ]
            },
            {
                "id": "c-1_r-2",
                "roundNumber": 2,
                "CompetitionId": "c-1",
                "teams": [
                    {
                        "id": "c-1_r-2_t-01",
                        "teamName": "-",
                        "roomColor": "default",
                        "RoundId": "c-1_r-2"
                    },
                    {
                        "id": "c-1_r-2_t-02",
                        "teamName": "-",
                        "roomColor": "default",
                        "RoundId": "c-1_r-2"
                    },
                    {
                        "id": "c-1_r-2_t-03",
                        "teamName": "-",
                        "roomColor": "default",
                        "RoundId": "c-1_r-2"
                    },
                    {
                        "id": "c-1_r-2_t-04",
                        "teamName": "-",
                        "roomColor": "default",
                        "RoundId": "c-1_r-2"
                    }
                ]
            },
            {
                "id": "c-1_r-3",
                "roundNumber": 3,
                "CompetitionId": "c-1",
                "teams": [
                    {
                        "id": "c-1_r-3_t-01",
                        "teamName": "-",
                        "roomColor": "default",
                        "RoundId": "c-1_r-3"
                    },
                    {
                        "id": "c-1_r-3_t-02",
                        "teamName": "-",
                        "roomColor": "default",
                        "RoundId": "c-1_r-3"
                    }
                ]
            },
            {
                "id": "c-1_r-4",
                "roundNumber": 4,
                "CompetitionId": "c-1",
                "teams": [
                    {
                        "id": "c-1_r-4_t-01",
                        "teamName": "-",
                        "roomColor": "default",
                        "RoundId": "c-1_r-4"
                    }
                ]
            }
        ]
    },
    {
        "id": "c-2",
        "name": "sumo",
        "displayName": "Sumo",
        "icon": "fa-dot-circle",
        "rounds": [
            {
                "id": "c-2_r-1",
                "roundNumber": 1,
                "CompetitionId": "c-2",
                "teams": [
                    {
                        "id": "c-2_r-1_t-01",
                        "teamName": "1",
                        "roomColor": "green",
                        "RoundId": "c-2_r-1"
                    },
                    {
                        "id": "c-2_r-1_t-02",
                        "teamName": "1",
                        "roomColor": "orange",
                        "RoundId": "c-2_r-1"
                    },
                    {
                        "id": "c-2_r-1_t-03",
                        "teamName": "1",
                        "roomColor": "purple",
                        "RoundId": "c-2_r-1"
                    },
                    {
                        "id": "c-2_r-1_t-04",
                        "teamName": "2",
                        "roomColor": "green",
                        "RoundId": "c-2_r-1"
                    },
                    {
                        "id": "c-2_r-1_t-05",
                        "teamName": "2",
                        "roomColor": "orange",
                        "RoundId": "c-2_r-1"
                    },
                    {
                        "id": "c-2_r-1_t-06",
                        "teamName": "2",
                        "roomColor": "purple",
                        "RoundId": "c-2_r-1"
                    },
                    {
                        "id": "c-2_r-1_t-07",
                        "teamName": "3",
                        "roomColor": "green",
                        "RoundId": "c-2_r-1"
                    },
                    {
                        "id": "c-2_r-1_t-08",
                        "teamName": "3",
                        "roomColor": "purple",
                        "RoundId": "c-2_r-1"
                    }
                ]
            },
            {
                "id": "c-2_r-2",
                "roundNumber": 2,
                "CompetitionId": "c-2",
                "teams": [
                    {
                        "id": "c-2_r-2_t-01",
                        "teamName": "-",
                        "roomColor": "default",
                        "RoundId": "c-2_r-2"
                    },
                    {
                        "id": "c-2_r-2_t-02",
                        "teamName": "-",
                        "roomColor": "default",
                        "RoundId": "c-2_r-2"
                    },
                    {
                        "id": "c-2_r-2_t-03",
                        "teamName": "-",
                        "roomColor": "default",
                        "RoundId": "c-2_r-2"
                    },
                    {
                        "id": "c-2_r-2_t-04",
                        "teamName": "-",
                        "roomColor": "default",
                        "RoundId": "c-2_r-2"
                    }
                ]
            },
            {
                "id": "c-2_r-3",
                "roundNumber": 3,
                "CompetitionId": "c-2",
                "teams": [
                    {
                        "id": "c-2_r-3_t-01",
                        "teamName": "-",
                        "roomColor": "default",
                        "RoundId": "c-2_r-3"
                    },
                    {
                        "id": "c-2_r-3_t-02",
                        "teamName": "-",
                        "roomColor": "default",
                        "RoundId": "c-2_r-3"
                    }
                ]
            },
            {
                "id": "c-2_r-4",
                "roundNumber": 4,
                "CompetitionId": "c-2",
                "teams": [
                    {
                        "id": "c-2_r-4_t-01",
                        "teamName": "-",
                        "roomColor": "default",
                        "RoundId": "c-2_r-4"
                    }
                ]
            }
        ]
    },
    {
        "id": "c-3",
        "name": "can",
        "displayName": "Kick the Can",
        "icon": "fa-ring",
        "rounds": [
            {
                "id": "c-3_r-1",
                "roundNumber": 1,
                "CompetitionId": "c-3",
                "teams": [
                    {
                        "id": "c-3_r-1_t-01",
                        "teamName": "1",
                        "roomColor": "green",
                        "RoundId": "c-3_r-1"
                    },
                    {
                        "id": "c-3_r-1_t-02",
                        "teamName": "1",
                        "roomColor": "orange",
                        "RoundId": "c-3_r-1"
                    },
                    {
                        "id": "c-3_r-1_t-03",
                        "teamName": "1",
                        "roomColor": "purple",
                        "RoundId": "c-3_r-1"
                    },
                    {
                        "id": "c-3_r-1_t-04",
                        "teamName": "2",
                        "roomColor": "green",
                        "RoundId": "c-3_r-1"
                    },
                    {
                        "id": "c-3_r-1_t-05",
                        "teamName": "2",
                        "roomColor": "orange",
                        "RoundId": "c-3_r-1"
                    },
                    {
                        "id": "c-3_r-1_t-06",
                        "teamName": "2",
                        "roomColor": "purple",
                        "RoundId": "c-3_r-1"
                    },
                    {
                        "id": "c-3_r-1_t-07",
                        "teamName": "3",
                        "roomColor": "green",
                        "RoundId": "c-3_r-1"
                    },
                    {
                        "id": "c-3_r-1_t-08",
                        "teamName": "3",
                        "roomColor": "purple",
                        "RoundId": "c-3_r-1"
                    }
                ]
            },
            {
                "id": "c-3_r-2",
                "roundNumber": 2,
                "CompetitionId": "c-3",
                "teams": [
                    {
                        "id": "c-3_r-2_t-01",
                        "teamName": "-",
                        "roomColor": "default",
                        "RoundId": "c-3_r-2"
                    },
                    {
                        "id": "c-3_r-2_t-02",
                        "teamName": "-",
                        "roomColor": "default",
                        "RoundId": "c-3_r-2"
                    },
                    {
                        "id": "c-3_r-2_t-03",
                        "teamName": "-",
                        "roomColor": "default",
                        "RoundId": "c-3_r-2"
                    },
                    {
                        "id": "c-3_r-2_t-04",
                        "teamName": "-",
                        "roomColor": "default",
                        "RoundId": "c-3_r-2"
                    }
                ]
            },
            {
                "id": "c-3_r-3",
                "roundNumber": 3,
                "CompetitionId": "c-3",
                "teams": [
                    {
                        "id": "c-3_r-3_t-01",
                        "teamName": "-",
                        "roomColor": "default",
                        "RoundId": "c-3_r-3"
                    },
                    {
                        "id": "c-3_r-3_t-02",
                        "teamName": "-",
                        "roomColor": "default",
                        "RoundId": "c-3_r-3"
                    }
                ]
            },
            {
                "id": "c-3_r-4",
                "roundNumber": 4,
                "CompetitionId": "c-3",
                "teams": [
                    {
                        "id": "c-3_r-4_t-01",
                        "teamName": "-",
                        "roomColor": "default",
                        "RoundId": "c-3_r-4"
                    }
                ]
            }
        ]
    }
]

const competitionsData2 = [
    {
        "id": "c-1",
        "name": "race",
        "displayName": "Race",
        "icon": "fa-car-side",
        "rounds": [
            {
                "id": "c-1_r-1",
                "roundNumber": 1,
                "CompetitionId": "c-1",
                "teams": [
                    {
                        "id": "c-1_r-1_t-01",
                        "teamName": "1",
                        "roomColor": "green",
                        "RoundId": "c-1_r-1"
                    },
                    {
                        "id": "c-1_r-1_t-02",
                        "teamName": "1",
                        "roomColor": "orange",
                        "RoundId": "c-1_r-1"
                    },
                    {
                        "id": "c-1_r-1_t-03",
                        "teamName": "1",
                        "roomColor": "purple",
                        "RoundId": "c-1_r-1"
                    },
                    {
                        "id": "c-1_r-1_t-04",
                        "teamName": "2",
                        "roomColor": "green",
                        "RoundId": "c-1_r-1"
                    },
                    {
                        "id": "c-1_r-1_t-05",
                        "teamName": "2",
                        "roomColor": "orange",
                        "RoundId": "c-1_r-1"
                    },
                    {
                        "id": "c-1_r-1_t-06",
                        "teamName": "2",
                        "roomColor": "purple",
                        "RoundId": "c-1_r-1"
                    },
                    {
                        "id": "c-1_r-1_t-07",
                        "teamName": "3",
                        "roomColor": "green",
                        "RoundId": "c-1_r-1"
                    },
                    {
                        "id": "c-1_r-1_t-08",
                        "teamName": "3",
                        "roomColor": "purple",
                        "RoundId": "c-1_r-1"
                    },
                    {
                        "id": "c-1_r-1_t-09",
                        "teamName": "4",
                        "roomColor": "green",
                        "RoundId": "c-1_r-1"
                    },
                    {
                        "id": "c-1_r-1_t-010",
                        "teamName": "4",
                        "roomColor": "orange",
                        "RoundId": "c-1_r-1"
                    }
                ]
            },
            {
                "id": "c-1_r-2",
                "roundNumber": 2,
                "CompetitionId": "c-1",
                "teams": [
                    {
                        "id": "c-1_r-2_t-01",
                        "teamName": "-",
                        "roomColor": "default",
                        "RoundId": "c-1_r-2"
                    },
                    {
                        "id": "c-1_r-2_t-02",
                        "teamName": "-",
                        "roomColor": "default",
                        "RoundId": "c-1_r-2"
                    },
                    {
                        "id": "c-1_r-2_t-03",
                        "teamName": "-",
                        "roomColor": "default",
                        "RoundId": "c-1_r-2"
                    },
                    {
                        "id": "c-1_r-2_t-04",
                        "teamName": "-",
                        "roomColor": "default",
                        "RoundId": "c-1_r-2"
                    },
                    {
                        "id": "c-1_r-2_t-05",
                        "teamName": "-",
                        "roomColor": "default",
                        "RoundId": "c-1_r-2"
                    }
                ]
            },
            {
                "id": "c-1_r-3",
                "roundNumber": 3,
                "CompetitionId": "c-1",
                "teams": [
                    {
                        "id": "c-1_r-3_t-01",
                        "teamName": "-",
                        "roomColor": "default",
                        "RoundId": "c-1_r-3"
                    },
                    {
                        "id": "c-1_r-3_t-02",
                        "teamName": "-",
                        "roomColor": "default",
                        "RoundId": "c-1_r-3"
                    },
                    {
                        "id": "c-1_r-3_t-03",
                        "teamName": "-",
                        "roomColor": "default",
                        "RoundId": "c-1_r-3"
                    }
                ]
            },
            {
                "id": "c-1_r-4",
                "roundNumber": 4,
                "CompetitionId": "c-1",
                "teams": [
                    {
                        "id": "c-1_r-4_t-01",
                        "teamName": "-",
                        "roomColor": "default",
                        "RoundId": "c-1_r-4"
                    }
                ]
            }
        ]
    },
    {
        "id": "c-2",
        "name": "sumo",
        "displayName": "Sumo",
        "icon": "fa-dot-circle",
        "rounds": [
            {
                "id": "c-2_r-1",
                "roundNumber": 1,
                "CompetitionId": "c-2",
                "teams": [
                    {
                        "id": "c-2_r-1_t-01",
                        "teamName": "1",
                        "roomColor": "green",
                        "RoundId": "c-2_r-1"
                    },
                    {
                        "id": "c-2_r-1_t-02",
                        "teamName": "1",
                        "roomColor": "orange",
                        "RoundId": "c-2_r-1"
                    },
                    {
                        "id": "c-2_r-1_t-03",
                        "teamName": "1",
                        "roomColor": "purple",
                        "RoundId": "c-2_r-1"
                    },
                    {
                        "id": "c-2_r-1_t-04",
                        "teamName": "2",
                        "roomColor": "green",
                        "RoundId": "c-2_r-1"
                    },
                    {
                        "id": "c-2_r-1_t-05",
                        "teamName": "2",
                        "roomColor": "orange",
                        "RoundId": "c-2_r-1"
                    },
                    {
                        "id": "c-2_r-1_t-06",
                        "teamName": "2",
                        "roomColor": "purple",
                        "RoundId": "c-2_r-1"
                    },
                    {
                        "id": "c-2_r-1_t-07",
                        "teamName": "3",
                        "roomColor": "green",
                        "RoundId": "c-2_r-1"
                    },
                    {
                        "id": "c-2_r-1_t-08",
                        "teamName": "3",
                        "roomColor": "purple",
                        "RoundId": "c-2_r-1"
                    }
                ]
            },
            {
                "id": "c-2_r-2",
                "roundNumber": 2,
                "CompetitionId": "c-2",
                "teams": [
                    {
                        "id": "c-2_r-2_t-01",
                        "teamName": "-",
                        "roomColor": "default",
                        "RoundId": "c-2_r-2"
                    },
                    {
                        "id": "c-2_r-2_t-02",
                        "teamName": "-",
                        "roomColor": "default",
                        "RoundId": "c-2_r-2"
                    },
                    {
                        "id": "c-2_r-2_t-03",
                        "teamName": "-",
                        "roomColor": "default",
                        "RoundId": "c-2_r-2"
                    },
                    {
                        "id": "c-2_r-2_t-04",
                        "teamName": "-",
                        "roomColor": "default",
                        "RoundId": "c-2_r-2"
                    }
                ]
            },
            {
                "id": "c-2_r-3",
                "roundNumber": 3,
                "CompetitionId": "c-2",
                "teams": [
                    {
                        "id": "c-2_r-3_t-01",
                        "teamName": "-",
                        "roomColor": "default",
                        "RoundId": "c-2_r-3"
                    },
                    {
                        "id": "c-2_r-3_t-02",
                        "teamName": "-",
                        "roomColor": "default",
                        "RoundId": "c-2_r-3"
                    }
                ]
            },
            {
                "id": "c-2_r-4",
                "roundNumber": 4,
                "CompetitionId": "c-2",
                "teams": [
                    {
                        "id": "c-2_r-4_t-01",
                        "teamName": "-",
                        "roomColor": "default",
                        "RoundId": "c-2_r-4"
                    }
                ]
            }
        ]
    },
    {
        "id": "c-3",
        "name": "can",
        "displayName": "Kick the Can",
        "icon": "fa-ring",
        "rounds": [
            {
                "id": "c-3_r-1",
                "roundNumber": 1,
                "CompetitionId": "c-3",
                "teams": [
                    {
                        "id": "c-3_r-1_t-01",
                        "teamName": "1",
                        "roomColor": "green",
                        "RoundId": "c-3_r-1"
                    },
                    {
                        "id": "c-3_r-1_t-02",
                        "teamName": "1",
                        "roomColor": "orange",
                        "RoundId": "c-3_r-1"
                    },
                    {
                        "id": "c-3_r-1_t-03",
                        "teamName": "1",
                        "roomColor": "purple",
                        "RoundId": "c-3_r-1"
                    },
                    {
                        "id": "c-3_r-1_t-04",
                        "teamName": "2",
                        "roomColor": "green",
                        "RoundId": "c-3_r-1"
                    },
                    {
                        "id": "c-3_r-1_t-05",
                        "teamName": "2",
                        "roomColor": "orange",
                        "RoundId": "c-3_r-1"
                    },
                    {
                        "id": "c-3_r-1_t-06",
                        "teamName": "2",
                        "roomColor": "purple",
                        "RoundId": "c-3_r-1"
                    },
                    {
                        "id": "c-3_r-1_t-07",
                        "teamName": "3",
                        "roomColor": "green",
                        "RoundId": "c-3_r-1"
                    },
                    {
                        "id": "c-3_r-1_t-08",
                        "teamName": "3",
                        "roomColor": "purple",
                        "RoundId": "c-3_r-1"
                    }
                ]
            },
            {
                "id": "c-3_r-2",
                "roundNumber": 2,
                "CompetitionId": "c-3",
                "teams": [
                    {
                        "id": "c-3_r-2_t-01",
                        "teamName": "-",
                        "roomColor": "default",
                        "RoundId": "c-3_r-2"
                    },
                    {
                        "id": "c-3_r-2_t-02",
                        "teamName": "-",
                        "roomColor": "default",
                        "RoundId": "c-3_r-2"
                    },
                    {
                        "id": "c-3_r-2_t-03",
                        "teamName": "-",
                        "roomColor": "default",
                        "RoundId": "c-3_r-2"
                    },
                    {
                        "id": "c-3_r-2_t-04",
                        "teamName": "-",
                        "roomColor": "default",
                        "RoundId": "c-3_r-2"
                    }
                ]
            },
            {
                "id": "c-3_r-3",
                "roundNumber": 3,
                "CompetitionId": "c-3",
                "teams": [
                    {
                        "id": "c-3_r-3_t-01",
                        "teamName": "-",
                        "roomColor": "default",
                        "RoundId": "c-3_r-3"
                    },
                    {
                        "id": "c-3_r-3_t-02",
                        "teamName": "-",
                        "roomColor": "default",
                        "RoundId": "c-3_r-3"
                    }
                ]
            },
            {
                "id": "c-3_r-4",
                "roundNumber": 4,
                "CompetitionId": "c-3",
                "teams": [
                    {
                        "id": "c-3_r-4_t-01",
                        "teamName": "-",
                        "roomColor": "default",
                        "RoundId": "c-3_r-4"
                    }
                ]
            }
        ]
    }
]

const populateDatabase = async () => {
    await sequelize.sync({ force: true });

    for (const competition of competitionsData) {
        await Competition.create(competition);
        for (const round of competition.rounds) {
            await Round.create(round);
            for (const team of round.teams) {
                await Team.create(team);
            }
        }
    }

    console.log('Database populated successfully');
};

populateDatabase().catch(console.error);