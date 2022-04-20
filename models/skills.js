const skills = [
    {id: 125223, skills: 'Feed Dogs', done: true},
    {id: 127904, skills: 'Learn Express', done: false},
    {id: 139608, skills: 'Buy Milk', done: false}
];

module.exports = {
    getAll
};

function getAll() {
    return skills;
}
