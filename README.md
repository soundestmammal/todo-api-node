# Create an API for a Todo List

A todo list is chosen to solidify understanding on different data manipulations. (CRUD)

* Create
* Read
* Update
* Delete

## Jan 15, 2018

- [x] Download MongoDB to local machine
- [x] Start up MongoDB server
- [x] Connect to MongoDB server
- [x] Create (insert) data from command line
- [x] Read (find) data from the command line
- [] Connect to Node Application

### How to connect to Application
Bring MongoDB into JavaScript File

Use ES6 Destructuring Take MongoClient from MongoDB object

Assign it to a constant named MongoClient

Call the connect method from the newly defined Constant "MongoClient". This accepts two arguments:
* A string where the database lives (Can be localhost, AWS, other server location).
* A callback function will fire after connect succeeds or fails.

Callback function takes two arguments
* err
* db

The Error Argument (err) lets us know if there are any errors.

```javascript
const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://<port>/<name_of_database>', (err, db) => {
if (err) {
  return console.log('Unable to connect to mongodb server');
}
console.log('Connected to MongoDB server!');
db.close();
);
```
