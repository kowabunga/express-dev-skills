var express = require('express');
var router = express.Router();
const skillController = require('../controllers/skills.js');

/* GET users listing. */
router.get('/', skillController.index);
router.get('/new', skillController.new);
router.get('/:id', skillController.show);

/* POST routes */
router.post('/', skillController.create);

module.exports = router;
