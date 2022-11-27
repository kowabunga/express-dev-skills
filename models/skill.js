const skills = [
  {
    skill: 'JavaScript',
    rating: 8,
    about: 'JavaScript: Makes stuff work',
    id: 48654,
  },
  {
    skill: 'CSS',
    rating: 5,
    about: 'CSS: Makes stuff pretty (or extremely ugly, your choice)',
    id: 6584984,
  },
  {
    skill: 'EJS',
    rating: 5,
    about: 'Can help build a web app faster',
    id: 338476,
  },
  {
    skill: 'App Building',
    rating: 5000,
    about: "Bro, I built Twitter. What do you mean my skill ain't 5000",
    id: 8465,
  },
];

function getAll() {
  return skills;
}

function getOne(id) {
  return skills.find(skill => skill.id === parseInt(id));
}

module.exports = { getAll, getOne };
