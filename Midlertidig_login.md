# Midlertidig login kode - senere kommer en vejledning

_login.js_
```javascript
const db = require('../config/sql').connect();
const passwordHash = require('password-hash');
const crypto = require('crypto');

module.exports = (app) => {
    app.post('/login', (req, res) => {
        console.log(req.body.username);
        db.execute('SELECT idusers, password FROM users WHERE username = ?', [req.body.username], (selError, rows) => {
            if (passwordHash.verify(req.body.password, rows[0].password)) {
                crypto.randomBytes(256, (err, buf) => {
                    if (err) return res.send(500);
                    else {
                        const token = buf.toString('hex');
                        db.execute('INSERT INTO accesstokens SET userid = ?, token = ?', [rows[0].idusers, token], (insError) => {
                            if (insError) return res.send(500);
                            else return res.send({ "AccessToken": token });
                        });
                    }
                });
            } else {
                res.send(401);
            }
        });
    });
};
```
_security.js_
```javascript
const db = require('../config/sql').connect();

module.exports = {
    'isAuthenticated': (req, res, next) => {
        if (req.header('Authorization') && req.header('userID')) {
            db.execute('SELECT idaccesstokens, created FROM accesstokens WHERE userid = ? AND token = ? ORDER BY created DESC LIMIT 1', [req.header('userID'), req.header('Authorization')], (error, rows) => {
                if (error) return res.send(500);
                else if (rows.length === 0) return res.send(401);
                else if (rows.length === 1) {
                    if ((new Date - rows[0].created) > (1000 * 60 * 60)) {
                        db.execute('DELETE FROM accesstokens WHERE idaccesstokens = ?', [rows[0].idaccesstokens], (error) => {
                            return res.send(401);
                        });
                    } else {
                        return next();
                    }
                }
                else return res.send(401);
            });
        } else {
            res.send(401);
        }
    }
};
```
