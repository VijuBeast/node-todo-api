// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server!!!');
    } 
    console.log('Connected to MongoDB server');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // });
    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // });
    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // Users data deleted by deleteMany method
    // db.collection('Users').deleteMany({name: 'Viju'}).then((result) => {
    //     console.log(result);
    // });

    // Users data deleted by findOneAndDelete and it will be deleted by ID method
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("5d0722dd06ca425112d58e22")
     }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });
    // db.close();
});