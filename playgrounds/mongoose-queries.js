const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/Todo');

var id = '5c4cef29e67509102720be18';

Todo.find({
    _id: id
}).then((todos) => {
    console.log('These are the todos', todos)});

// Todo.findOne({
//     _id: id
// }).then((todo) => console.log("This is one todo", todo));

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log("Id not found");
//     }
//     console.log("This is the todo", todo)
// })