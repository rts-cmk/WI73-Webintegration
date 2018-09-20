# Pagination
Her er lidt kode til service-function og route

## Service function
```javascript
    getPage: function (limit, offset) {
        return new Promise((resolve, reject) => {
            var sql = `
            select 
            produkt.id,
            produkt.navn,
            produkt.pris
            from produkt 
            ORDER BY produkt.id
            LIMIT ?
            OFFSET ? 
            `;
            db.query(sql,[limit, offset], function (err, result) {
                if (err) reject('fejl');
                resolve(result);
            })
        })
    },
```

## Route med angivelse af limit og offset
`http://localhost:3333/page/limit-4/offset-0`
```javascript
    app.get('/page/limit-:limit/offset-:offset', async (req, res) => {
        try{
            console.log("start", req.params.limit, req.params.offset);
            let produkter = await produkt.getPage(parseInt(req.params.limit),parseInt(req.params.offset));
            console.log(produkter);
            res.send(produkter)
        } catch(err){

        }
    })
```

## Andet eksempel med route - 
`http://localhost:3333/page/1` 
```javascript
    app.get('/page/:num', async (req, res) => {
        let page = parseInt(req.params.num);
        let limit = 4;
        let offset = (page * limit - limit);
        try {
            let produkter = await produkt.getPage(limit, offset);
            console.log(produkter);
            res.send(produkter)
        } catch (err) {

        }
    })
    ```

Kig nu på url'en og tilpas den som I mener den skal se ud

Opgaven er herefter at rendere en side med de info som skal bruges til at generere links (1 2 3 4)
