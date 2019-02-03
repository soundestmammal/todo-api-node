var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/Todo');
var {User} = require('./models/User');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// app.get('/', (req, res) => {
//     res.send('Hey!');
//     console.log("YOu hit the root endpoint");
// });

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc)=> {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) =>{
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findById(id).then((todo) => {
        if(!todo) {
            return res.status(404).send();
        }
        res.send({todo});
        console.log("This was effective!");
    }).catch( (e) => res.status(400).send());
});

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.send(todo);
    }).catch((e) => res.status(400).send());
})

app.post('/login', (req, res) => {
    var User = new User({
        email: 'rob@che.com',
        password: 'this490382hf',

    })
})

 

app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});

module.exports = {app};