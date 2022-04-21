var express = require('express');
const skills = require('../controllers/skills');
var router = express.Router();

/* GET users listing. */
// All actual paths start with "/skills"

 // Require the controller that exports Skills CRUD functions
var skillsCtrl = require('../controllers/skills');

 // All actual paths begin with "/skills"

// GET skills
router.get('/', skillsCtrl.index);
// new route added
router.get('/new', skillsCtrl.new);
// GET /skills/:id
router.get('/:id', skillsCtrl.show);
// POST route
router.post('/', skillsCtrl.create);
// POST delete route
router.delete('/:id', skillsCtrl.delete);

module.exports = router;

