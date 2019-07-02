// Our Express app module
const express = require('express');
const app = express();

// Importing the Routes
const pageRoutes = require('./routes/pages');
const musicstoresRoutes = require('./routes/musicstores');
const userRoutes = require('./routes/users');
const sessionRoutes = require('./routes/sessions');

// Registering our pageRoutes
app.use('/', pageRoutes);
app.use('/musicstores', musicstoresRoutes);
app.use('/users', userRoutes);
app.use('/', sessionRoutes);

// Exporting the changes
module.exports = app;