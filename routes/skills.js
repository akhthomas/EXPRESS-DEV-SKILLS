var express = require('express');
var router = express.Router();

/* GET users listing. */
// All actual paths start with "/skills"

 // Require the controller that exports Skills CRUD functions
var skillsCtrl = require('../controllers/skills');

 // All actual paths begin with "/skills"

// GET skills
router.get('/', skillsCtrl.index);
// GET /skills/:id
router.get('/:id', skillsCtrl.show);

module.exports = router;

