const skills = [
    {id: 125223, skills: 'Kite Runner', done: false},
    {id: 127904, skills: 'The Book Theif', done: false},
    {id: 139608, skills: 'Slaughterhouse Five', done: false}
];

module.exports = {
    getAll,
    getOne,
    create
};

function getOne(id) {
    id = parseInt(id);
    return skills.find(skills => skills.id === id);
}

function getAll() {
    return skills;
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
}