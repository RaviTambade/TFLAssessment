const flowers = require("../data/flowers.data");

exports.getAllFlowers = (req, res) => {
  res.status(200).json(flowers);
};
