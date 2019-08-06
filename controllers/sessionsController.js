const User = require('../models/user');
const jwt = require("jsonwebtoken");

exports.authenticate = (req, res) => {
  User.findOne({
      email: req.body.email
    })
    .then(user => {
      user.authenticate(req.body.password, (err, isMatch) => {
        if (err) throw new Error(err);

        if (isMatch) {
          req.session.userId = user.id;

          const token = jwt.sign({payload: req.body.email}, "bobthebuilder", {expiresIn: "1h"})
          res.cookie('token', token, {httpOnly: true}).status(201).send({ success: "Authenticated successfully"});
        } else {
          res.json({error: "Your credentials do not match"});
        }
      });
    })
    .catch(err => {
      res.status(404).json(err);
    });
};


exports.logout = (req, res) => {
 if(!res.isAuthenticated()) res.status(401).send({error: "Could not authenticate request"})

 req.session.userId = null
 res.clearCookie('token').status({success: "You are now logged out"});
};