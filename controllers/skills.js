// controllers/skills.js ??
const Skills = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
};

function deleteSkill(req, res) {
    Skills.deleteOne(req.params.id);
    res.redirect('/skills');
}

function newSkill(req, res) {
    res.render('skills/new');
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skills.getAll(),
        time: req.time
    });
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skills.getOne(req.params.id),
    });
}

function create(req, res){
    console.log(req.body);
    Skills.create(req.body);
    res.redirect('/skills');
}