const User = require('../models/user');

exports.create = (req, res) => {
  User.create(req.body.user)
  .then(() => res.status(200).send({success: "User registered successfully"}))
  .catch(err => res.status(404).send(err));
};