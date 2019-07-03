const Musicstore = require('../models/musicstore')

exports.new = (req, res) => {
    req.isAuthenticated();

    res.render('musicstores/new', {
        title: `New Song Entry`
      });
};


exports.index = (req, res) => {
 req.isAuthenticated();

  Musicstore.find()
    .then(musicstores => {
      res.render('musicstores/index', {
        musicstores: musicstores,
        title: 'Songs'
      });
    })
    .catch(err => {
      console.error(`ERROR: ${err}`);
      res.redirect('/');
    });
}


exports.show = (req, res) => {
    req.isAuthenticated();

    Musicstore.findOne({
      id: req.params.id
    })
    .then(musicstore => {
      res.render('musicstores/show', {
        musicstore: musicstore,
        title: musicstore.title
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/musicstores');
    });
};

exports.create = (req, res) => {
  req.isAuthenticated();

  Musicstore.create(req.body.musicstore)
    .then(() => {
      req.flash("success", "Your new song entry has been create successfully.");
      res.redirect("/musicstores");
    })
    .catch(err => {
      req.flash("error", `ERROR: ${err}`);
      res.render("musicstores/new", {
        musicstore: req.body.musicstore,
        title: "New Song"
      });
    });
};


exports.edit = (req, res) => {
    req.isAuthenticated();

    Musicstore.findOne({
      _id: req.params.id
    })
      .then(musicstore => {
        res.render('musicstores/edit', {
          title: `Edit ${musicstore.title}`,
          musicstore: musicstore
        });
      })
      .catch(err => {
        req.flash('error', `ERROR: ${err}`);
        res.redirect('/musicstores');
      });
};

exports.update = (req, res) => {
  req.isAuthenticated();

  Musicstore.updateOne({
    _id: req.body.id
  }, req.body.musicstore, {
    runValidators: true
  })
  .then(() => {
    req.flash('success', 'Your song was updated!')
    res.redirect('/musicstores');
  })
  .catch(err => {
    req.flash('error', `ERROR: ${err}`);
    res.render('musicstores/edit', {
      musicstore: req.body.musicstore,
      title: `Edit ${req.body.musicstore.title}`
    });
  });
};

exports.destroy = (req, res) => {
  req.isAuthenticated();

  Musicstore.deleteOne({
    _id: req.body.id
  })
  .then(() => {
    req.flash('success', 'Your song was deleted successfully.');
    res.redirect("/musicstores");
  })
  .catch(err => {
    req.flash('error', `ERROR: ${err}`);
    res.redirect('/musicstores');
  });
};