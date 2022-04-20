// controllers/skills.js ??
const Skills = require('../models/skills');

module.exports = {
    index
};

function index(req, res) {
    res.render('skills/index', {
        skills: Skills.getAll()
    });
}