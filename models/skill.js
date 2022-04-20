const skills = [
    {id: 125223, skills: 'Feed Dogs', done: true},
    {id: 127904, skills: 'Learn Express', done: false},
    {id: 139608, skills: 'Buy Milk', done: false}
];

module.exports = {
    getAll,
    getOne
};

function getOne(id) {
    id = parseInt(id);
    return skills.find(skills => skills.id === id);
}

function getAll() {
    return skills;
}
