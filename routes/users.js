const router = require('express').Router();

const UserController = require('../controllers/usersController');

//routes
router.post(`/`, UserController.create);

module.exports = router;