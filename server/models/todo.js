var mongoose = require('mongoose');

var Todo = mongoose.model('Todos', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// var newTodo = new Todo({
//     text: 'this is saturday thing to do',
//     completed: false,
//     completedAt: 3432
// });

// newTodo.save().then((doc) => {
//     console.log('Saved the todo successfully go and check robo!!', doc);
// }, (e) => {
//     console.log("unable to save the todo", e);
// });
module.exports = {Todo};