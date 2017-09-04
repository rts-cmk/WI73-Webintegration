<div style='text-align:right; width:100%'>Frank Goldmann August 2017</div>

# Database
En database er kort sagt et sted hvor man kan gemme data. I modsætning til f.eks. variable, som ikke er tilgængelige når programmet er kørt - er en database et sted hvor data kan gemmes permanent, også selvom serveren lukkes ned. Ved hjælp af et database management system (DBMS) præsenteres dataen i tabeller, og kan både læses, redigeres, oprettes og slettes. Det er det vi skal arbejde med i undervisningen og vores kommende webapplikationer. Vi skal arbejde med en mysql-database og tilgå den både med phpmyadmin (DBMS) og via nodejs (javascript). Vi skal lære et nyt sprog kaldet SQL (Structured Query Language )

### Undervisningen
> Vi skal lære en lang række begreber og anvende dem i praksis.<br>
> Der er en del tavleundervisning og selvfølgelig en del kodeundervisning som vi plejer.<br>
> I denne dokumentation lægges en række kodeeksempler, men det er ikke alle begreber der forklares skriftligt - det bliver de i undervisningen, så det er vigigt at du er deltagende og tager de nødvendige noter i undervisningen.

#### Liste over hvad vi kommer igennem

* Hvad en database/relationsdatabase er
* MySQL og phpmyadmin (DBMS)
* SQL (primært CRUD)
* Tabeller (tables/entities)
    * felter (fields) og metadata
        * datatyper
        * primærnøgler (primary keyes)
        * lånenøgler (foreign keyes)
        * auto increment
        * unique
        * indexes
* Relationer
    * 1:n, n:1 og n:m
    * update- og deleterules
* E/R-diagram
* Databasedesign vha. Objekt Orienteret Analyse og Design (OOAD) og normalisering

* Nodejs og database


--- 
### Modul 4-5 (Database begreber og i praksis)
* Hvad er en database og hvad er vores behov for en database
* Tabeller og andre datasamlinger som arrays i arrays og json
* Hvad er SQL, herunder CRUD
* Begreber som felter, rækker, entiteter, meta-data, etc. (listen ovenfor)
* XAMPP Control Panel, apache og mysql
* Oprettelse af database med en tabel og data
* Opbygning af SQL i phpmyadmin
* Præsentation SQL og ressourcer

### Modul 6 (Databasekonstruktion)
* Hvordan vi bygger en database op med simple relationer

### Modul 7 (Nodejs og mysql)
For at få adgang til mysql-databasen via nodejs har vi brug for et node_module, en forbindelse og et sted vi kan skrive vores SQL-statement.<br>
1. Installer mysql2 via npm
2. Impoter mysql2 vha. require
3. Opret et connection-object - her kaldet db med informationer om host, user, password og database

```javascript
const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'user'
})
```

Når forbindelsen er defineret og tildelt konstanten db, kan den anvendes både til at etablere forbindelse med metoden connect, og eksekvere sql'en med metoden query. Hvis der ikke opstår fejl returneres dataen til result, hvorefter den kan anvendes - her blot med console.log().
```javascript
db.connect(function (err) {
    if (err) throw error;
    db.query('select * from table', function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});
```
#### Øvelser
    1. Opret et mappe kalde config
    2. Overfør koden med createConnection til et module kaldet mysql
    3. Anvend modulet vha. require

### Modul 8-9
Oplæg
Birgers Bolcher øvelse 1-2

### Modul 10-11
Relationer

Birgers Bolcher øvelse 3-4

### Modul 12-13
SQL funktioner

Birgers Bolcher øvelse 5-6

Insert, update og delete