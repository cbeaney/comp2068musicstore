// Our router module
const router = require('express').Router();

// Our controller
const MusicstoresController = require('../controllers/musicstoresController');

// Our routes
//router.get(`/new`, MusicstoresController.new);
router.get(`/`, MusicstoresController.index);
router.get(`/:id`, MusicstoresController.show);
router.get(`/:id/edit`, MusicstoresController.edit);
router.post(`/`, MusicstoresController.create);
router.post(`/update`, MusicstoresController.update);
router.post(`/destroy`, MusicstoresController.destroy);

// We have to export our changes
module.exports = router;