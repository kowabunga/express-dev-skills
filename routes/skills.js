var express = require('express');
var router = express.Router();
const skillController = require('../controllers/skills.js');

/* GET users listing. */
router.get('/', skillController.index);
router.get('/new', skillController.new);
router.get('/:id', skillController.show);
router.get('/:id/edit', skillController.edit);

/* POST routes */
router.post('/', skillController.create);

/* PUT routes */
router.put('/:id', skillController.edit);

/* DELETE routes */
router.delete('/:id', skillController.delete);

module.exports = router;
