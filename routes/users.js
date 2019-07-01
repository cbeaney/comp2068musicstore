const router = require('express').Router();

const UserController = require('../controllers/usersController');

//routes
router.get(`/new`, UserController.new);
router.post(`/`, UserController.create);

module.exports = router;