// Obtain access to mongoose
var mongoose = require('mongoose');

// We will be using promises rather than callback
mongoose.Promise = global.Promise;
// point to the location of our database. Mongoose can't read minds!
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};