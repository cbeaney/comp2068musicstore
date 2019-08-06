const Musicstore = require('../models/musicstore')

exports.index = (req, res) => {
  Musicstore.find()
  .then(musicstores => res.json(musicstores))
  .catch(err => res.status(418).json(err));
}

exports.show = (req, res) => {

  Musicstore.findOne({
      _id: req.params.id
    })
    .then(musicstores => res.json(musicstores))
    .catch(err => res.status(418).json(err));
};

exports.create = async (req, res) => {
  if(!req.isAuthenticated()) return res.status(418).send({error: "Not Authenticated"});

  Musicstore.create(req.body.musicstore)
    .then(() => res.status(200).send({success: "Song created"}))
    .catch(err => res.status(418).send(err));
};


exports.edit = (req, res) => {
  if(!req.isAuthenticated()) return res.status(418).send({error: "Not Authenticated"});

  Musicstore.findOne({
      _id: req.params.id
    })
    .then(musicstores => res.send(musicstores))
    .catch(err => res.status(418).send(err));
};


exports.update = (req, res) => {
  if(!req.isAuthenticated()) return res.status(418).send({error: "Not Authenticated"});

  Musicstore.updateOne({
      _id: req.body.id
    }, req.body.musicstore, {
      runValidators: true
    })
    .then(() => res.status(200).send({success: "Song updated successfully"}))
    .catch(err => res.status(418).send(err));
};


exports.destroy = (req, res) => {
  if(!req.isAuthenticated()) return res.status(418).send({error: "Not Authenticated"});

  Musicstore.deleteOne({
      _id: req.body.id
    })
    .then(() => res.status(200).send({success: "Song deleted successfully"}))
    .catch(err => res.status(418).send(err));
};