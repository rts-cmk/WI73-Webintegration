# Express application generator

https://expressjs.com/en/starter/generator.html

Indstaller express-generator globalt (én gang)

`npm install express-generator -g`

Applikationen sættes op med express efterfulgt af navnet på den mappe projektet skal ligge i og hvilken view engine.

`express myApp --view=ejs`

Hvis der ikke skal genereres en mappe skrives blot `express --view=ejs`

Gå ind i mappen med `cd myApp`

indstaller node-modules med `npm install`

Start serveren med `npm start`

# async and await

(primær kilde: https://medium.com/@Abazhenov/using-async-await-in-express-with-node-8-b8af872c0016 )

Sørg for at node er opdateret med nyeste version (i skrivende stund 8.11.1 LTS)

https://nodejs.org/en/

**_Eksemplerne herunder bygger opsætning med express-generator_**

Opsætning af route med reference til en ekstern service (function)

```javascript
var express = require('express');
var router = express.Router();

router.get('/', async function (req, res) {
  try {
    const users = await getAll();
    res.render('test', {
      users: users
    });
  } catch (e) {
    console.log(e);
  }

});

module.exports = router;
```

Funktionen

```javascript
function getAll() {
  return new Promise((resolve, reject) => {
    var sql = `SELECT * FROM users`;
    db.query(sql, function (err, result) {
      if (err) reject(err)
      resolve(result);
    });

  })
}
```

Funktionerne bør ligge i egne moduler

```javascript
exports.getAll = function () {
    return new Promise((resolve, reject) => {
        var sql = `SELECT * FROM users`;
        db.query(sql, function (err, result) {
            if (err) reject(err)

            resolve(result);
        });
    })
}
```

Eller flere funktioner i samme modul

```javascript
module.exports = {

    getAll: function () {

        return new Promise((resolve, reject) => {
            var sql = `SELECT * FROM users`;
            db.query(sql, function (err, result) {
                if (err) reject(err)

                resolve(result);
            });

        })

    },

    getOne: function (id) {

        return new Promise((resolve, reject) => {
            var sql = `SELECT * FROM users where id= ${id}`;
            db.query(sql, function (err, result) {
                if (err) reject(err)

                resolve(result);
            });

        })

    }
}
```

Husk dog at referere til modulerne

```javascript
var express = require('express');
var router = express.Router();
var data = require('../services/data');
var allData = require('../services/allData');

/* GET test page. */
router.get('/', async function (req, res) {
  try {
    // const users = await data.getAll();
    const users = await allData.getAll();
    const one = await allData.getOne(4);
    res.render('test', {
      users: users,
      one: one
    });
  } catch (e) {
    console.log(e);
  }

});

module.exports = router;
```
