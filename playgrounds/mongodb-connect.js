const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongo db server');
    }
    console.log('Connected to the MongoDB server');
    db.collection('Todos').insertOne({
        text: 'Charge apple watch',
        completed: false
    },(err, result) => {
        if (err) {
            return console.log('There was an error adding the todo', err);
        }
    console.log(JSON.stringify(result.ops, undefined, 2));
    });
    db.collection('Users').insertOne({
        name: 'Robert',
        age: 23
    }, (err, result) => {
        if (err) {
            return console.log('There was an error adding the todo', err);
        }
    console.log(JSON.stringify(result.ops, undefined, 2));
    });
    // db.collection('Todos').find().count().then( (count)=> {
    //     console.log(`Todos Count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch count', err);
    // });
    // db.collection('Users').find({name: 'Robert Checco'}).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     return console.log('Count not find a user with that name');
    // })
    db.close();
});