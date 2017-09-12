<div style='text-align:right; width:100%'>Frank Goldmann September 2017</div>

# Database Modules
Vi har i de første moduler arbejdet med grundlæggende `modules` både med `exports` og `module.exports` og efterfølgende med `Database`, `CRUD` og masser af `SQL`, bl.a. som filtre i diverse udtræk.

Vi skal i det følgende samle vores `database-connection` og `CRUD´s` i `modules`, så de bliver selvstændige, uafhængige, tilgængelige og genbrugelige `functions` i applikationen.

### DB-Connection
Vi starter med at oprette et module til database-connection i en sigende mappe i applikationen.

* Vi opretter en mappe kaldet **config** i roden af applikationen
* Herefter en **js**-fil i mappen **config** kaldet **sql** med reference til **npm-modulet mysql2** samt **module.exports** af funktionen **connect**
```javascript
const mysql = require('mysql2');

module.exports = {
    'connect': function() {
        return mysql.createConnection({
            'host': 'localhost',
            'user': 'root',
            'password': '',
            'database': 'birgers_bolcher'
        });
    }
};
```
### CRUD Services
Hvis vi betragter et database-udtræk på lige fod med den **services** I kender fra Dynamisk Web (osteAPI'en), så er det nærliggende, at oprette et `module` med `module.exports` til vores CRUD's i en services.
* Opret en mappe kaldet **services** i roden af applikationen
* Opret herefter en **js**-fil i mappen **services** kaldet et _sigende navn_ - her kaldet **bolche**, som eksempel på de øvelser vi lige har været igennem.
* Opret reference til henholdsvis `mysql2` og til `sql` i **sql.js** filen
```javascript
const mysql = require('mysql2');
const db = require('../config/sql').connect();
```
* Efterfølgende oprettes et `module.exports` med en function kaldet **getAll** - eller hvad der nu er sigende for funktionen.
For at gøre kaldet _Asynkront_ kaldes den med et callback - enten _med fejl og **uden** data_, eller _uden fejl og **med** data_
```javascript
module.exports = {
	getAll: function (callback) {
		db.query("SELECT * FROM bolche", function (err, result) {
			if (err)
				callback(err, null);
			else
				callback(null, result);
		});
	}
}
```
Nu kan modulet anvendes hvor der er behov. Det kan være fra et route eller blot fra en test.js fil<br>
Først "test.js"
```javascript
const bolche = require('./services/bolche');

bolche.getAll(function (err, result) {
    if (err)
        console.log("fejlbesked...");
    else
        console.log(result);
})
```
Og i et route
```javascript
const bolche = require('../services/bolche');

module.exports = function (server) {
	server.get('/bolche', function(req, res){
		bolche.getAll(function (err, data) {
			if (err)
				res.send("fejlbesked...");
			else
				res.send(data);
		});
	});
}
```
>### Vi skal i undervisningen oprette forskellige modules med CRUD
