const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const { Competition, Round, Team } = require('./models');

const app = express();
const PORT = process.env.PORT || 80;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static(path.join(__dirname, 'public/browser')));

app.get('/api/competitions', async (req, res) => {
    try {
        const competitions = await Competition.findAll({
            include: {
                model: Round,
                as: 'rounds',
                include: {
                    model: Team,
                    as: 'teams',
                },
            },
        });
        res.json(competitions);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.put('/api/team/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const team = await Team.findByPk(id);

        if (!team) {
            return res.status(404).send('Team not found');
        }

        team.teamName = req.body.teamName;
        team.roomColor = req.body.roomColor;

        await team.save();

        res.json(team);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post('/api/team', async (req, res) => {
    const { id, teamName, roomColor, RoundId } = req.body;
    try {
        const newTeam = await Team.create({ id, teamName, roomColor, RoundId });
        res.status(201).json(newTeam);
    } catch (error) {
        res.status(500).json({ error: 'Error adding new team' });
    }
});

app.delete('/api/team/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deleted = await Team.destroy({ where: { id } });
        if (deleted) {
            res.json({ message: 'Team deleted successfully' });
        } else {
            res.status(404).json({ error: 'Team not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error deleting team' });
    }
});

app.put('/api/teams', async (req, res) => {

    const teamUpdates = req.body;

    try {
        await Promise.all(teamUpdates.map(update =>
            Team.update(
                { teamName: update.teamName, roomColor: update.roomColor },
                { where: { id: update.id } }
            )
        ));
        res.json({ message: 'Teams updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error updating teams' });
    }

});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/browser/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
