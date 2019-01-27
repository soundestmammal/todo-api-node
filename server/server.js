var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/Todo');
var {User} = require('./models/User');

var app = express();

app.use(bodyParser.json());

// app.get('/', (req, res) => {
//     res.send('Hey!');
//     console.log("YOu hit the root endpoint");
// });

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    Todo.save().then((doc)=> {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find({}).then((Todos) =>{
        res.send({Todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findById(id).then((Todo) => {
        if(!Todo) {
            return res.status(404).send();
        }
        res.send({Todo});
        console.log("This was effective!");
    }).catch( (e) => res.status(400).send());
});

app.listen(3000, () => {
    console.log("Started on Port 3000");
});

module.exports = {app};