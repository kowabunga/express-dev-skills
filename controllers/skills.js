const { getAll, getOne } = require('../models/skill.js');
const fs = require('fs');

function index(req, res, next) {
  const allSkills = getAll();
  res.render('skills/index', { skills: allSkills });
}

function show(req, res, next) {
  const { id } = req.params;
  const singleSkill = getOne(id);
  res.render('skills/show', { skill: singleSkill });
}

function newSkill(req, res, next) {
  res.render('skills/new');
}

function create(req, res, next) {
  const { skill, rating, about } = req.body;

  const allSkills = [...getAll(), { skill, rating, about, id: Math.floor() }];

  console.log(allSkills);

  fs.writeFile('../models/skill.js');

  res.redirect('/skills');
}

module.exports = {
  index,
  show,
  newSkill,
  create,
};
