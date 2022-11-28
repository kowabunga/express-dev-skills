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

  Skills.addSkill({
    skill,
    rating,
    about,
    id: Math.floor(Math.random() * 392493),
  });

  res.redirect('/skills');
}

function edit(req, res, next) {
  const { id } = req.params;
  const { skill, rating, about } = req.body;

  if (req.method === 'GET') {
    const singleSkill = Skills.getOne(id);
    console.log(singleSkill);
    res.render(`skills/edit`, { skill: singleSkill });
  }

  if (req.method === 'PUT') {
    const updatedSkill = { skill, rating, about, id: parseInt(id) };

    const newSkill = Skills.updateOne(id, updatedSkill);

    // Render the show page again, passing in the new skill

    console.log();
    res.render(`skills/show`, { skill: newSkill });
  }
}

function deleteSkill(req, res, next) {
  const { id } = req.params;
  Skills.deleteOne(id);
  res.redirect('/skills');
}

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  edit,
  delete: deleteSkill,
};
