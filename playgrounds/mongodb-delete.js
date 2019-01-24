const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongo db server');
    }
    console.log('Connected to the MongoDB server');

    // deleteMany
    db.collection('Todos').deleteMany({text: "Eat lunch"}).then((result) => {
        console.log(result);
    });
    // deleteOne
    db.collection('Todos').deleteOne({text: 'Go to Flux'}).then((result) => {
        console.log(result);
    })
    // findOneAndDelete
    db.collection('Todos').findOneAndDelete({text: 'Eat lunch'}).then((result)=> {
        console.log(result);
    })


});