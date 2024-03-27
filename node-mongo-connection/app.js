const express = require('express');
const mongoose = require('mongoose');
const mongodbClient = require('mongodb').MongoClient;


const app = express();

const port = 4500;
const connectionString =
  "mongodb+srv://sireesha:Siree@2000@cluster0.38gnkly.mongodb.net/";

  const connectionStringLocal = 'mongodb://127.0.0.1:27017';


// mongodbClient.connect(connectionStringLocal,(err,conn) =>{
//   if (err) throw err;
//   console.log("Connected to local mongodb");

//       app.listen(port, () => {
//         console.log(`Server is running on port ${port}`);
//       });
// });




mongoose.connect(
    connectionString,
    {
        useNewUrlParser : true,
        useUnifiedTopology : true
    }
).then(response =>{
    console.log(`Connected to mongoDB`);


}).catch(err =>{
    console.log(err);
});

