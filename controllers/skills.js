const Skills = require('../models/skill.js');

function index(req, res, next) {
  const allSkills = Skills.getAll();
  res.render('skills/index', { skills: allSkills });
}

function show(req, res, next) {
  const { id } = req.params;
  const singleSkill = Skills.getOne(id);
  res.render('skills/show', { skill: singleSkill });
}

function newSkill(req, res, next) {
  res.render('skills/new');
}

function create(req, res, next) {
  const { skill, rating, about } = req.body;
  console.log(req.body);

  Skills.addSkill({
    skill,
    rating,
    about,
    id: Math.floor(Math.random() * 392493),
  });

  res.redirect('/skills');
}

function deleteSkill(req, res, next) {
  Skills.deleteOne(req.params.id);
  res.redirect('/skills');
}

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
};
