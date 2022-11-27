var express = require('express');
var router = express.Router();
const { index, show } = require('../controllers/skills.js');

/* GET users listing. */
router.get('/', index);
router.get('/:id', show);

module.exports = router;
