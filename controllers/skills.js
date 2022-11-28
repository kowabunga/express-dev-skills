const { getAll, getOne, addSkill } = require('../models/skill.js');

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
  console.log(req.body);

  addSkill({ skill, rating, about, id: Math.floor(Math.random() * 392493) });

  res.redirect('/skills');
}

module.exports = {
  index,
  show,
  new: newSkill,
  create,
};
