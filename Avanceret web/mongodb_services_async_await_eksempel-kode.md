# Eksemple fra undervisningen


### Routes
```javascript
const service = require('../services/students.js');

module.exports = (app) => {

      // hent alle
      app.get('/students', async (req, res, next) => {
            try {
                  allStudents = await service.getAll();
                  res.render('students-list', {
                        "title": "All Students",
                        "data": allStudents
                  });
            } catch (err) {
                  console.log(err);
                  res.send(err);
            }
      });

      //    app.get('/students', (req, res, next) => {

      //       service.getAll()
      //          .then(result => {
      //             res.render('students-list', {
      //                "title": "All Students",
      //                "data": result
      //             });
      //          })
      //          .catch(err => {
      //             console.log(err);
      //             res.send(err);
      //          });
      //    });

}
```

### Services
```javascript
const mongodb = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'students';
const studentCollection = 'student'


function getAll() {
      return new Promise((resolve, reject) => {
            let MongoClient = mongodb.MongoClient;
            MongoClient.connect(url, (err, client) => {
                  if (err) {
                        console.log(err);
                        reject(err);
                  } else {
                        let dbo = client.db(dbName);
                        // find alle studenter sorter efter navn
                        dbo.collection(studentCollection)
                              .find()
                              .sort({
                                    name: 1
                              })
                              .toArray((err, result) => {
                                    client.close();
                                    if (err) {
                                          console.log(err);
                                          reject(err);
                                    } else {
                                          console.log(result);
                                          resolve(result);
                                    }
                              });
                  }
            });
      });
}


module.exports = {
      getAll,
      // getOne,
      // createOne,
      // updateOne,
      // deleteOne
}
```
