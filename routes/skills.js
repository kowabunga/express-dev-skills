var express = require('express');
var router = express.Router();
const { index, show, newSkill, create } = require('../controllers/skills.js');

/* GET users listing. */
router.get('/', index);
router.get('/new', newSkill); // Yes, object destructuring doesn't let you extract something called "new". It's a downside.
router.get('/:id', show);

/* POST routes */
router.post('/', create);

module.exports = router;
