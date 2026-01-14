const skillHealth = require("../data/skillHealth.data");

exports.getSkillHealthSnapshot = (req, res) => {
  res.status(200).json(skillHealth);
};
