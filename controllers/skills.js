const { getAll, getOne } = require('../models/skill.js');

function index(req, res, next) {
  const allSkills = getAll();
  res.render('skills/index', { skills: allSkills });
}

function show(req, res, next) {
  const { id } = req.params;
  const singleSkill = getOne(id);
  res.render('skills/show', { skill: singleSkill });
}

module.exports = {
  index,
  show,
};
