// Our Express app module
const express = require('express');
const app = express();

// Importing the Routes
const pageRoutes = require('./routes/pages');
//const musicstoresRoutes = require('./routes/musicstores');
const usersRoutes = require('./routes/users');
const sessionsRoutes = require('./routes/sessions');

// Registering our pageRoutes
app.use('/', pageRoutes);
//app.use('/musicstores', musicstoresRoutes);
app.use('/users', usersRoutes);
app.use('/', sessionsRoutes);

// Exporting the changes
module.exports = app;